import React from 'react';
import {render, screen, fireEvent, waitFor} from '@testing-library/react';
import {byText} from "testing-library-selector";

import CommentTile  from './CommentTile';
import userEvent from "@testing-library/user-event";

const maxLength = 355;
const initialFiles = [
    {
        base64: '',
        fileName: 'screenshot1.jpg',
    },
    {
        base64: '',
        fileName: 'screenshot2.jpg',
    }
];

describe('Test <CommentTile/> component', () => {
    it('should render CommentTile component', () => {
        render(<CommentTile />)
    });

    it('should be wrapper', () => {
        const { container } = render(<CommentTile />);
        expect(container.getElementsByClassName('rf-comment-tile__wrapper')).toHaveLength(1);
    });

    it('should be tile', () => {
        const { container } = render(<CommentTile />);
        expect(container.getElementsByClassName('rf-comment-tile')).toHaveLength(1);
    });

    it('should be title', () => {
        const { container } = render(<CommentTile />);
        expect(container.getElementsByClassName('rf-comment-tile__title')).toHaveLength(1);
    });

    it('should be button', () => {
        const { container } = render(<CommentTile />);
        expect(container.getElementsByClassName('rf-textarea__field')).toHaveLength(1);
    });

    it('should be textarea', () => {
        const { container } = render(<CommentTile />);
        expect(container.getElementsByClassName('rf-comment-tile-button')).toHaveLength(1);
    });

    it('should be initial comment text', () => {
        render(<CommentTile comment={'comment'}/>);
        expect(byText("comment").get()).toBeInTheDocument();
    });

    it('should be changed maxLength by text', () => {
        render(<CommentTile maxLength={maxLength} />);
        expect(byText(/355/).get()).toBeInTheDocument();
    });

    it('should be default maxLength by text', () => {
        render(<CommentTile />);
        expect(byText(/255/).get()).toBeInTheDocument();
    });

    it('should be initialFiles in chips', () => {
        render(<CommentTile initialFiles={initialFiles}/>);
        expect(byText("screenshot1.jpg").get()).toBeInTheDocument();
        expect(byText("screenshot2.jpg").get()).toBeInTheDocument();
    });

    it('should be change textarea and call onDebounce', () => {
        const onDebounce = jest.fn();
        render(<CommentTile onDebounce={onDebounce}/>);
        const textarea = screen.getByPlaceholderText('Оставить комментарий');
        fireEvent.change(textarea, { target: { value: 'Hello World!' } });
        expect(textarea).toHaveValue('Hello World!');
        expect(onDebounce).toHaveBeenCalledTimes(1);
    });

    it('should be upload file',async () => {
        let file = new File(['(⌐□_□)'], 'sweetfile.png', { type: 'image/png' });
        render(<CommentTile />);
        userEvent.upload(screen.getByPlaceholderText('Прикрепить файл'),file)

        await waitFor(() =>{
            expect(byText('sweetfile.png').get()).toBeTruthy()
        })
    })

});
