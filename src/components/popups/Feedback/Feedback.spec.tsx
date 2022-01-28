import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { Feedback } from './Feedback';
import { BrowserRouter } from 'react-router-dom';

const mockPostFeedback = (res: any) => new Promise<any>((res) => res(res));

describe('Test <Feedback /> component', () => {
  it('should be render', () => {
    render(<BrowserRouter><Feedback postFeedback={mockPostFeedback} description="description" /></BrowserRouter>);

    expect(screen.getByText('Обратная связь')).toBeInTheDocument();
    expect(screen.getByText('description')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Оставьте комментарий по сервису')).toBeInTheDocument();
  });

  it('should be pass title and description', () => {
    render(<BrowserRouter><Feedback postFeedback={mockPostFeedback} title="title" description="description 2" /></BrowserRouter>);

    expect(screen.getByText('title')).toBeInTheDocument();
    expect(screen.getByText('description 2')).toBeInTheDocument();
  });

  it('should be pass textareaPlaceholder', () => {
    render(<BrowserRouter><Feedback postFeedback={mockPostFeedback} textareaPlaceholder="textareaPlaceholder" /></BrowserRouter>);

    expect(screen.getByPlaceholderText('textareaPlaceholder')).toBeInTheDocument();
  });
});
