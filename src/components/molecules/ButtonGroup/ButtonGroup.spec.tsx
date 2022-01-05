import React from 'react';

import { render, waitFor, fireEvent, screen } from '@testing-library/react';
import ButtonGroup from './ButtonGroup';
import { buttonGroupMock } from './mock';
import { BrowserRouter } from 'react-router-dom';

describe('Test <ButtonGroup/> component', () => {
  it('should render ButtonGroup component', async () => {
    render(
      <BrowserRouter>
        <ButtonGroup list={buttonGroupMock} />
      </BrowserRouter>
    );

    /** Проверка что меню закрыто */
    expect(screen.queryByTestId('rf-dropdown')).not.toBeInTheDocument();
    fireEvent.click(screen.getByTestId('button-group__more'));

    /** Открыто меню после клика */
    await waitFor(() => {
      expect(screen.getByTestId('rf-dropdown')).toBeInTheDocument();
    });

    fireEvent.click(screen.getByText('Подбор'));

    /** Меню не закрылось после клика на список */
    await waitFor(() => {
      expect(screen.queryByTestId('rf-dropdown')).toBeInTheDocument();
    });
  });

  it('should have 2 visible buttons', () => {
    const { container } = render(
      <BrowserRouter>
        <ButtonGroup list={buttonGroupMock} />
      </BrowserRouter>
    );
    expect(container.getElementsByClassName('button-group__item')).toHaveLength(2);
  });

  it('should have 3 visible buttons', () => {
    const { container } = render(
      <BrowserRouter>
        <ButtonGroup list={buttonGroupMock} max={3} />
      </BrowserRouter>
    );

    expect(container.getElementsByClassName('button-group__item')).toHaveLength(3);
  });

  it('should have 0 visible buttons', () => {
    const { container } = render(
      <BrowserRouter>
        <ButtonGroup list={buttonGroupMock} max={0} />
      </BrowserRouter>
    );
    expect(container.getElementsByClassName('button-group__item')).toHaveLength(0);
  });

  it('should have 3 visible buttons if max <= list.length', () => {
    const { container } = render(
      <BrowserRouter>
        <ButtonGroup list={buttonGroupMock} max={10} />
      </BrowserRouter>
    );
    expect(container.getElementsByClassName('button-group__item')).toHaveLength(3);
  });

  it('should close menu after click menu item', async () => {
    render(
      <BrowserRouter>
        <ButtonGroup list={buttonGroupMock} closeAfterClick />
      </BrowserRouter>
    );

    /** Проверка что меню закрыто */
    expect(screen.queryByTestId('rf-dropdown')).not.toBeInTheDocument();
    fireEvent.click(screen.getByTestId('button-group__more'));

    /** Открыто меню после клика */
    await waitFor(() => {
      expect(screen.getByTestId('rf-dropdown')).toBeInTheDocument();
    });

    fireEvent.click(screen.getByText('Подбор'));

    /** Закрытие меню после клика меню из списка */
    await waitFor(() => {
      expect(screen.queryByTestId('rf-dropdown')).not.toBeInTheDocument();
    });
  });
});
