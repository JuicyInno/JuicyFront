import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Confirm from './Confirm';

describe('Test <Confirm /> component', () => {
  it('should render Confirm with TextAccept inside', () => {
    render(<Confirm textAccept='TextAccept' onAction={() => {}} />);
    expect(screen.getByText('TextAccept')).toBeInTheDocument();
  });

  it('should have text TEST', () => {
    const { container } = render(<Confirm textAccept='TextAccept' onAction={() => {}} text='TEST' />);
    const textBlock = container.querySelector('.confirm-popup__text');

    if (!textBlock) {
      fail('Нет тектсового поля');
    }

    expect(textBlock.textContent).toBe('TEST');
  });

  it('should have comment field', () => {
    render(<Confirm textAccept='TextAccept' onAction={() => {}} showComment comment='TEST_COMMENT' />);
    expect(screen.queryByText('TEST_COMMENT')).toBeInTheDocument();
  });

  it('should have preloader in a button', () => {
    const { container } = render(<Confirm textAccept='TextAccept' onAction={() => {}} preloader={true} />);
    const preloader = container.querySelector('.preloader');

    if (!preloader) {
      fail('Нет прелоудера');
    }

    expect(preloader).toBeInTheDocument();
  });

  it('should have russian language', () => {
    const { debug } = render(<Confirm textAccept='TextAccept' onAction={() => {}} showComment comment='TEST_COMMENT' lang='ru' />);

    expect(screen.queryByText('Отменить')).toBeInTheDocument();
    expect(screen.queryByText('Комментарий')).toBeInTheDocument();
    expect(screen.queryByText('Подтвердите действие')).toBeInTheDocument();
  });

  it('should have english language', () => {
    render(<Confirm textAccept='TextAccept' onAction={() => {}} showComment comment='TEST_COMMENT' lang='en' />);
    expect(screen.queryByText('Cancel')).toBeInTheDocument();
    expect(screen.queryByText('Comment')).toBeInTheDocument();
    expect(screen.queryByText('Confirm action')).toBeInTheDocument();
  });

  it('should be call onClose', () => {
    const onClose = jest.fn();

    render(<Confirm textAccept='TextAccept' onClose={onClose} onAction={jest.fn} showComment />);

    const cancelBtn = screen.getByText('Отменить');
    fireEvent.click(cancelBtn);

    expect(onClose).toBeCalled();
  });

  it('should be call onAccept', () => {
    const onAccept = jest.fn();

    render(<Confirm textAccept='TextAccept' comment='comment' onClose={jest.fn} onAction={onAccept} showComment />);

    const cancelBtn = screen.getByText('TextAccept');
    fireEvent.click(cancelBtn);

    expect(onAccept).toBeCalled();
  });

  it('should be call onBack', () => {
    const onBack = jest.fn();

    render(<Confirm textAccept='TextAccept' comment='comment' onClose={jest.fn} onAction={jest.fn} onBack={onBack} />);

    const backBtn = screen.getByText('Назад');
    fireEvent.click(backBtn);

    expect(onBack).toBeCalled();
  });
});
