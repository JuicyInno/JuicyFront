import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Modal from './Modal';

describe('Test <Modal /> component', () => {
  it('should render <Modal /> with content "Modal"', () => {
    render(<Modal>Modal</Modal>);

    expect(screen.getByText(/Modal/i)).toBeInTheDocument();
  });

  it('calls onClose prop when clicked', () => {
    const handleClick = jest.fn();

    render(<Modal onClose={handleClick}>Modal</Modal>);
    fireEvent.click(screen.getByRole('button'));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should render <Modal /> with header "Header"', () => {
    render(<Modal header='Header'>Modal</Modal>);

    expect(screen.getByText(/Header/i)).toBeInTheDocument();
  });

  it('should render <Modal /> with footer "Footer"', () => {
    render(<Modal footer='Footer'>Modal</Modal>);

    expect(screen.getByText(/Footer/i)).toBeInTheDocument();
  });

  it('should render <Modal /> with custom content', () => {
    const { container } = render(<Modal custom>Modal</Modal>);

    expect(container.getElementsByClassName('rf-modal__wrapper')).toHaveLength(0);
  });

  it('should close <Modal /> after Escape', () => {
    const handleClick = jest.fn();

    render(<Modal onClose={handleClick}>Modal</Modal>);

    fireEvent.keyUp(screen.getByRole('button'), { key: 'Escape', code: 'Escape', keyCode: 27, charCode: 27 });

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
