import React from 'react';
import {fireEvent, getByText, getNodeText, render, screen, waitFor} from '@testing-library/react';
import History from "./History";
import {attachments, pathsHistory, pathsUZADO} from "./mock";
import {byText} from "testing-library-selector";

describe('Test <History/> component', () => {
  it('should render History', () => {
    render(<History history={pathsHistory} />);
    expect(screen.getByText('Смотреть всё')).toBeInTheDocument();
  })

  it('should render History with attachments', () => {
    render(<History history={pathsHistory} attachments={attachments} />);
    expect(screen.getByText('Приложенные файлы')).toBeInTheDocument();
  })

  it('should render History with UZADO variant', () => {
    render(<History history={pathsUZADO} isUZADO />);
    fireEvent.click(byText('Смотреть всё').get());
    expect(screen.getByText('Заместитель руководителя департамента')).toBeInTheDocument();
  })

  // it('should render History with info hint', () => {
  //   const {container} = render(<History history={pathsHistory} attachments={attachments} />);
  //   fireEvent.click(byText('Смотреть всё').get());
  //   expect(container.querySelectorAll('.rf-history__history-element')).toHaveLength(5);
  //   expect(container.getElementsByClassName('rf-history__icon-wrapper')).toHaveLength(1);
  // })

  // it('should not render History with info hint when UZADO mode', () => {
  //   const {container} = render(<History history={pathsUZADO} isUZADO />);
  //   fireEvent.click(byText('Смотреть всё').get());
  //   expect(container.querySelectorAll('.rf-history__history-element')).toHaveLength(6);
  //   expect(container.getElementsByClassName('rf-history__icon-wrapper')).toHaveLength(0);
  // })
})
