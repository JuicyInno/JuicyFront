import React from 'react';
import {fireEvent, getByText, getNodeText, render, screen, waitFor} from '@testing-library/react';
import Signification from './Signification';

import {IRequestAttachment} from "../../../types/projects.types";
import {pdfFile} from "../../molecules/PDFViewer/pdf";
import {byTestId, byText} from "testing-library-selector";
import userEvent from "@testing-library/user-event";

const file:IRequestAttachment = {
  fileName: 'test',
  base64: pdfFile
};
describe('Test <Signification/> component', () => {
  let file:any;
  const originalError = console.error
  afterEach(() => (console.error = originalError))
  describe('without Errors', () => {

    let consoleOutput:any[] = []
    const mockedError = (output:any) => consoleOutput.push(output)
    beforeEach(() => (console.error = mockedError))
    beforeEach(() => {
      file = new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' });
    });
//======================================================================================================================
    it('should render <Signification /> icon -blue;check texts', () => {
      const {container} = render(<Signification title={'Text'} data={file}/>);
      expect(getByText(container, 'Просмотреть и подписать документ')).toBeTruthy();
      expect(container.getElementsByClassName('signification__title-row--onlyView')).toHaveLength(0);
    });
//======================================================================================================================
    it('should open spoiler, render document and consist buttons',  async () => {
      const {container} = render(<Signification title={'Text'} data={file}/>);
      expect(container.getElementsByClassName('buttons__wrapper')).toHaveLength(0)
      fireEvent.click(container.getElementsByClassName('expander__title-text')[0]);
      expect(container.getElementsByClassName('buttons__wrapper')).toHaveLength(1)
      expect(getByText(container, 'Подписать электронной подписью')).toBeTruthy();
      expect(getByText(container, 'Подписать электронной подписью').parentElement!.parentElement).toBeDisabled();
      expect(getByText(container, 'Подписать вручную')).toBeTruthy();
      expect(getByText(container, 'Отклонить ЭДО')).toBeTruthy();
      expect(getByText(container, 'Отклонить ЭДО').parentElement!.parentElement).toBeDisabled();
      expect(getByText(container, 'Отклонить')).toBeTruthy();
      expect(getByText(container, 'Отклонить').parentElement!.parentElement).toHaveClass('rf-button--danger');
      fireEvent.click(container.getElementsByClassName('expander__title-text')[0]);
      expect(container.getElementsByClassName('buttons__wrapper')).toHaveLength(0)
      await byTestId('error').find()
      expect(byTestId('error').get()).toBeInTheDocument()
    });
//======================================================================================================================
    it('should be without spoiler consist buttons',  () => {
      const {container} = render(<Signification title={'Text'} isSpoiler={false} data={file}/>);
      expect(container.getElementsByClassName('buttons__wrapper')).toHaveLength(1)
      expect(getByText(container, 'Подписать электронной подписью')).toBeTruthy();
      expect(getByText(container, 'Подписать электронной подписью').parentElement!.parentElement).toBeDisabled();
      expect(getByText(container, 'Подписать вручную')).toBeTruthy();
      expect(getByText(container, 'Отклонить ЭДО')).toBeTruthy();
      expect(getByText(container, 'Отклонить ЭДО').parentElement!.parentElement).toBeDisabled();
      expect(getByText(container, 'Отклонить')).toBeTruthy();
      expect(getByText(container, 'Отклонить').parentElement!.parentElement).toHaveClass('rf-button--danger');

    });
//======================================================================================================================
    it('should be 2 button and rename',   () => {
      const {container} = render(<Signification title={'Text'} buttonCustomTexts={{reject:'test'}} isSpoiler={false} hideButtons={["sign", "manual"]} data={file}/>);
      expect(container.getElementsByClassName('buttons__wrapper')).toHaveLength(1)
      expect(container.querySelectorAll('.buttons__wrapper .button__item')).toHaveLength(2)
      expect(byText('Отклонить ЭДО').query()).toBeFalsy();
      expect(byText('Отклонить').query()).toBeTruthy();
      expect(getByText(container, 'test')).toBeTruthy();
    });
//======================================================================================================================
    it('should be correct reject',()=>{
      const {container} = render(<Signification title={'Text'} isSpoiler={false} data={file}/>);
      fireEvent.click(byText('Отклонить').get());
      expect(byText('Отклонить документ').get().parentElement!.parentElement).toBeDisabled()
      jest.useFakeTimers();
      userEvent.type(screen.getByRole('textbox'), 'testik')
      jest.runAllTimers();
      jest.useRealTimers()
      expect(byText('testik').query()).toBeTruthy();
      expect(byText('Отклонить документ').get().parentElement!.parentElement).not.toBeDisabled()
      userEvent.click(byText('Отклонить документ').get())
      expect(byText('Документ будет отклонен').query()).toBeTruthy()
      expect(byText('testik').query()).toBeTruthy()
      expect(byText('Отменить').query()).toBeTruthy()
      expect(container.querySelectorAll('.info-block__wrapper--danger')).toHaveLength(1)
      userEvent.click(byText('Отменить').get())
      expect(container.querySelectorAll('.buttons__wrapper .button__item')).toHaveLength(4)
    })
//======================================================================================================================
    it('should be correct manual signification',async () => {
      const {container} = render(<Signification title={'Text'} isSpoiler={false} data={file}/>);
      fireEvent.click(byText('Подписать вручную').get());
      expect(byText('Подписать').get().parentElement!.parentElement).toBeDisabled()
      expect(screen.getByPlaceholderText('Прикрепить файл')).toBeTruthy()
      userEvent.upload(screen.getByPlaceholderText('Прикрепить файл'),file)

      await waitFor(() =>{
       expect(byText('chucknorris.png').get()).toBeTruthy()
      })
      expect(byText('Подписать').get().parentElement!.parentElement).not.toBeDisabled()
      expect(byText('Скачайте и подпишите документ. После прикрепите подписанный файл').query()).toBeTruthy()
      userEvent.click(byText('Подписать').get())
      expect(byText('Документ будет подписан ручной подписью').query()).toBeTruthy()
      expect(byText('Отменить').query()).toBeTruthy()
      expect(container.querySelectorAll('.info-block__wrapper--success')).toHaveLength(1)
      expect(byText('chucknorris.png').get()).toBeTruthy()
      userEvent.click(byText('Отменить').get())
      expect(container.querySelectorAll('.buttons__wrapper .button__item')).toHaveLength(4)

    })
  });
})
