import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Modal from './Modal';

describe('Test <Modal /> component', () => {
  it('should render <Modal /> with content "Modal"', () => {
    render(<Modal>Modal</Modal>);
    expect(screen.getByTestId('rf-modal')).toHaveClass('rf-modal--modal');
    expect(screen.getByText(/Modal/i)).toBeInTheDocument();
  });

  it('should be variant', () => {
    const { rerender } = render(<Modal variant='drawer'>Modal</Modal>);

    expect(screen.getByTestId('rf-modal')).toHaveClass('rf-modal--drawer');

    rerender(<Modal variant='modal'>Modal</Modal>);

    expect(screen.getByTestId('rf-modal')).toHaveClass('rf-modal--modal');
  });

  it('should be size', () => {
    const { rerender } = render(<Modal size='s'>Modal</Modal>);

    expect(screen.getByTestId('rf-modal')).toHaveClass('rf-modal--s');
    rerender(<Modal size='m'>Modal</Modal>);
    expect(screen.getByTestId('rf-modal')).toHaveClass('rf-modal--m');
    rerender(<Modal size='l'>Modal</Modal>);
    expect(screen.getByTestId('rf-modal')).toHaveClass('rf-modal--l');
    rerender(<Modal size='xl'>Modal</Modal>);
    expect(screen.getByTestId('rf-modal')).toHaveClass('rf-modal--xl');
  });

  it('should be showLine', () => {
    const { rerender } = render(<Modal footer='footer'>Modal</Modal>);

    expect(screen.getByTestId('rf-modal')).toHaveClass('rf-modal__footer--line');

    rerender(
      <Modal footer='footer' showLine={false}>
        Modal
      </Modal>
    );

    expect(screen.getByTestId('rf-modal')).not.toHaveClass('rf-modal__footer--line');
  });

  it('calls onClose prop when clicked', () => {
    const handleClick = jest.fn();

    render(<Modal onClose={handleClick}>Modal</Modal>);
    fireEvent.click(screen.getByRole('button'));

    expect(handleClick).toBeCalled();
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
