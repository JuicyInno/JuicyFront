import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import InputPhone, { IInputPhoneCountry } from './InputPhone';
import FlagGB from '../../../assets/icons/FlagGB';
import FlagRU from '../../../assets/icons/FlagRU';


const COUNTRIES: IInputPhoneCountry[] = [
  {
    flag: FlagRU,
    text: 'Россия',
    code: 7
  },
  {
    flag: FlagGB,
    text: 'Великобритания',
    code: 44
  }
];

describe('Test <InputPhone/> component', () => {
  it('should format value and copy value in the hidden input', () => {
    render(<InputPhone name="phone" />);

    fireEvent.change(screen.getByTestId('input-display'), { target: { value: '+79999999999' } });
    expect(screen.getByTestId('input-display')).toHaveValue('+7 (999) 999 - 99 - 99');
    expect(screen.getByTestId('input')).toHaveValue('+79999999999');
  });

  it('should render countries menu', () => {
    render(<InputPhone name="phone" countries={COUNTRIES} />);

    fireEvent.click(screen.getByLabelText('Выбрать страну'));

    expect(screen.queryByText('Россия')).toBeInTheDocument();
    expect(screen.queryByText('Великобритания')).toBeInTheDocument();

  })

  it('should render with disabled', () => {
    const { container } = render(<InputPhone name="phone" disabled />);
    expect(container.getElementsByClassName('rf-input--disabled ')).toHaveLength(1);
  })

  it('should change country', () => {
    render(<InputPhone name="phone" countries={COUNTRIES} />);
    const inputDisplay = screen.getByTestId('input-display');

    fireEvent.change(inputDisplay, { target: { value: '+79999999999' } });
    fireEvent.click(screen.getByLabelText('Выбрать страну'));

    fireEvent.click(screen.getByText('Великобритания'));

    expect(inputDisplay).toHaveValue('+44 (999) 999 - 99 - 99');

    fireEvent.change(inputDisplay, { target: { value: '+449999999999' } });
    expect(inputDisplay).toHaveValue('+44 (999) 999 - 99 - 99');
  });
});
