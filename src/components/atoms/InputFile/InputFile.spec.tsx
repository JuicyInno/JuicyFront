import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import {byText} from "testing-library-selector";
import userEvent from "@testing-library/user-event";

import InputFile  from './InputFile';
import { initialFiles } from '../../../utils/helpers';

describe('Test <InputFile/> component', () => {
    it('should render InputFile component', () => {
        render(<InputFile setFile={() => {}} />)
    });

    it('should be wrapper', () => {
        const { container } = render(<InputFile setFile={() => {}} />);
        expect(container.getElementsByClassName('rf-file-input__wrapper')).toHaveLength(1);
    });

    it('should be button', () => {
        const { container } = render(<InputFile setFile={() => {}} />);
        expect(container.getElementsByClassName('rf-button')).toHaveLength(1);
    });

    it('should be hidden input field', () => {
        const { container } = render(<InputFile setFile={() => {}} />);
        expect(container.getElementsByClassName('rf-input__file-hidden')).toHaveLength(1);
    });

    it('should be chips', () => {
        const { container } = render(<InputFile files={initialFiles} setFile={() => {}} />);
        expect(container.getElementsByClassName('rf-file-input__chip-wrapper')).toHaveLength(1);
    });

    it('should not be chips', () => {
        const { container } = render(<InputFile showChips={false} setFile={() => {}} />);
        expect(container.getElementsByClassName('rf-file-input__chip-wrapper')).toHaveLength(0);
    });

    it('should be initialFiles in chips', () => {
        render(<InputFile files={initialFiles} setFile={() => {}} />);
        expect(byText("screenshot1.jpg").get()).toBeInTheDocument();
        expect(byText("pdfFile.pdf").get()).toBeInTheDocument();
        expect(byText("quston.png").get()).toBeInTheDocument();
        expect(byText("word_file.docx").get()).toBeInTheDocument();
    });

    it('should pass className', () => {
        const { container } = render(<InputFile className='rf-file-input__test' setFile={() => {}} />);

        expect(container.getElementsByClassName('rf-file-input__test')).toHaveLength(1);
    });

    it('should be placeholder', () => {
        render(<InputFile placeholder={'Прикрепить файл'} setFile={() => {}} />);
        expect(byText("Прикрепить файл").get()).toBeInTheDocument();
    });

    it('should be upload file with attr accept',async () => {
        let file = new File(['(⌐□_□)'], 'sweetfile.png', { type: 'image/png' });
        render(<InputFile accept={'image/png'} placeholder={'Прикрепить файл'} setFile={() => {}}/>);
        userEvent.upload(screen.getByPlaceholderText('Прикрепить файл'),file)

        await waitFor(() =>{
            expect(byText('sweetfile.png').get()).toBeTruthy()
        })
    })


    it('should be multiple upload files',async () => {
        let file = new File(['(⌐□_□)'], 'sweetfile.png', { type: 'image/png' });
        let secondFile = new File(['(⌐□_□)'], 'sweetfile2.png', { type: 'image/png' });
        render(<InputFile multiple placeholder={'Прикрепить файл'} setFile={() => {}}/>);
        userEvent.upload(screen.getByPlaceholderText('Прикрепить файл'),file)
        userEvent.upload(screen.getByPlaceholderText('Прикрепить файл'),secondFile)

        await waitFor(() =>{
            expect(byText('sweetfile.png').get()).toBeTruthy()
        }).then(() => {
                expect(byText('sweetfile2.png').get()).toBeTruthy()
            }
        )
    })

    it('should be call setFile', async() => {
        const setFile = jest.fn();
        let file = new File(['(⌐□_□)'], 'sweetfile.png', { type: 'image/png' });
        render(<InputFile setFile={setFile} placeholder={'Прикрепить файл'} />);
        userEvent.upload(screen.getByPlaceholderText('Прикрепить файл'),file)
        await waitFor(() =>{
            expect(setFile).toHaveBeenCalledTimes(1);
        })
    });

    it('should not be call onError', async() => {
        const onError = jest.fn();
        let file = new File(['(⌐□_□)'], 'sweetfile.png', { type: 'image/png' });
        render(<InputFile accept={'image/png'} setFile={() => {}} onError={onError} placeholder={'Прикрепить файл'} />);
        userEvent.upload(screen.getByPlaceholderText('Прикрепить файл'),file)
        await waitFor(() =>{
            expect(onError).toHaveBeenCalledTimes(0);
        })
    });
});
