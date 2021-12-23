import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { byText } from 'testing-library-selector';
import userEvent from '@testing-library/user-event';

import CommentTile from './CommentTile';
import { initialFiles } from '../../../utils/helpers';

describe('Test <CommentTile/> component', () => {
  it('should render CommentTile component', () => {
    const { container } = render(<CommentTile />);

    expect(container.getElementsByClassName('rf-comment-tile__wrapper')).toHaveLength(1);
    expect(container.getElementsByClassName('rf-comment-tile')).toHaveLength(1);
    expect(container.getElementsByClassName('rf-comment-tile__title')).toHaveLength(1);
    expect(container.getElementsByClassName('rf-textarea__field')).toHaveLength(1);
    expect(container.getElementsByClassName('rf-comment-tile-button')).toHaveLength(1);
    expect(byText(/255/).get()).toBeInTheDocument();
  });

  it('should not be button', () => {
    const { container } = render(<CommentTile showFieldForFiles={false} />);
    expect(container.getElementsByClassName('rf-comment-tile-button')).toHaveLength(0);
  });

  it('should be initial comment text', () => {
    const value = 'comment';
    render(<CommentTile comment={value} />);
    expect(screen.getByRole('textbox')).toHaveValue(value);
  });

  it('should be changed title', () => {
    render(<CommentTile title={'title'} />);
    expect(byText(/title/).get()).toBeInTheDocument();
  });

  it('should be changed maxLength by text', () => {
    const maxLength = 355;
    render(<CommentTile maxLength={maxLength} />);
    expect(byText(/355/).get()).toBeInTheDocument();
  });

  it('should be initialFiles in chips', () => {
    render(<CommentTile initialFiles={initialFiles} />);
    expect(byText('screenshot1.jpg').get()).toBeInTheDocument();
    expect(byText('pdfFile.pdf').get()).toBeInTheDocument();
    expect(byText('quston.png').get()).toBeInTheDocument();
    expect(byText('word_file.docx').get()).toBeInTheDocument();
  });

  it('should be change textarea and call onDebounce', () => {
    const onDebounce = jest.fn();
    render(<CommentTile onDebounce={onDebounce} />);

    const textarea = screen.getByRole('textbox');
    const value = 'Hello World!';

    fireEvent.change(textarea, { target: { value } });

    expect(textarea).toHaveValue(value);
    expect(onDebounce).toBeCalled();
  });

  it('should be upload file', async () => {
    let file = new File(['(⌐□_□)'], 'sweetfile.png', { type: 'image/png' });
    render(<CommentTile />);
    userEvent.upload(screen.getByPlaceholderText('Прикрепить файл'), file);

    await waitFor(() => {
      expect(byText('sweetfile.png').get()).toBeTruthy();
    });
  });
});
