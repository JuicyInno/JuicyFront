import { getByText, screen, render, fireEvent, waitFor } from '@testing-library/react';
import React from 'react';
import Select from './Select';

describe('Test <Select/> component', () => {
  it('should be render', async () => {
    const { container } = render(
      <Select placeholder='Выберите значение' options={[{ value: 'v', label: 'label' }]} values={[]} onChange={jest.fn} />
    );

    expect(container.getElementsByClassName('rf-select__button')).toHaveLength(1);
    expect(container.getElementsByClassName('rf-select__wrapper--disabled')).toHaveLength(0);
    expect(screen.queryByTestId('rf-dropdown')).not.toBeInTheDocument();

    fireEvent.click(screen.getByTestId('rf-select'));

    await waitFor(() => {
      expect(screen.getByTestId('rf-dropdown')).toBeInTheDocument();
    });
  });

  it('should be disabled', async () => {
    const { container } = render(
      <Select placeholder='Выберите значение' options={[{ value: 'v', label: 'label' }]} values={[]} onChange={jest.fn} disabled />
    );

    expect(container.getElementsByClassName('rf-select__wrapper--disabled')).toHaveLength(1);
    expect(screen.queryByTestId('rf-dropdown')).not.toBeInTheDocument();

    fireEvent.click(screen.getByTestId('rf-select'));

    await waitFor(() => {
      expect(screen.queryByTestId('rf-dropdown')).not.toBeInTheDocument();
    });
  });
});
