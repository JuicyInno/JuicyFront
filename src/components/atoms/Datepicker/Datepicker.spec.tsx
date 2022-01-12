import React from 'react';
import Datepicker from './Datepicker';
import { fireEvent, render, screen } from '@testing-library/react';
import {
  formatDate
} from '../../../utils/helpersDatePicker';

describe('Test <Datepicker/> component', () => {
  it('should be render', () => {
    render(<Datepicker />);

    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('placeholder', 'Выберите дату');
    expect(input).toHaveValue('');
  });

  it('should be pass defaultValue', () => {
    const value = new Date().getTime();
    const { rerender } = render(<Datepicker defaultValue={value} />);

    const input = screen.getByRole('textbox');
    expect(input).toHaveValue(formatDate(value, 'dd.mm.yyyy').date);

    rerender(<Datepicker defaultValue='20.12.21' />);

    // Из-за формата года yyyy, в конце подставляется __.
    // Если использовать формат YYYY тогда значение нормально определяется
    expect(input).toHaveValue('20.12.21__');
  });

  it('should be pass name', () => {
    render(<Datepicker name='datepicker' />);

    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('name', 'datepicker');
  });

  it('should be pass placeholder', () => {
    render(<Datepicker placeholder='placeholder' />);

    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('placeholder', 'placeholder');
  });

  it('should be disabled', () => {
    const { container } = render(<Datepicker disabled />);

    const input = screen.getByRole('textbox');
    expect(container.getElementsByClassName('rf-datepicker__input-wrapper--disabled')).toHaveLength(1);
    expect(input).toBeDisabled();
  });

  it('should be readOnly', () => {
    const { container } = render(<Datepicker readOnly />);

    const input = screen.getByRole('textbox');
    expect(container.getElementsByClassName('rf-datepicker__input-wrapper--readonly')).toHaveLength(1);
    expect(input).toHaveAttribute('readonly', '');
  });

  it('should be pass range', () => {
    const defaultValue = '20.12.2021 - 21.12.2021';
    const { container } = render(<Datepicker range defaultValue={defaultValue} />);

    const input = screen.getByRole('textbox');
    expect(input).toHaveValue(defaultValue);
    expect(container.getElementsByClassName('rf-datepicker__input-wrapper--range')).toHaveLength(1);
  });

  it('should be pass showDayOfWeek', () => {
    const defaultValue = new Date(2021, 11, 20).getTime();
    const nextDefaultValue = '10.11.2020';
    const { rerender } = render(<Datepicker showDayOfWeek defaultValue={defaultValue} />);

    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('20.12.2021 Пн');

    rerender(<Datepicker showDayOfWeek defaultValue={nextDefaultValue} />);
    expect(input).toHaveValue('10.11.2020 Вт');
  });

  it('should be pass locale', () => {
    render(<Datepicker locale='en' />);

    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('placeholder', 'Select date');
  });

  it('should be pass format', () => {
    const defaultValue = new Date(2021, 11, 20).getTime();
    const { rerender } = render(<Datepicker format='dd/mm/yyyy' defaultValue={defaultValue} />);

    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('20/12/2021');

    // TODO: не верно определяется value
    rerender(<Datepicker format='mm.dd.yyyy' defaultValue={defaultValue} />);
    expect(input).toHaveValue('01.22.21__');

    rerender(<Datepicker format='mm/dd/yyyy' defaultValue={defaultValue} />);
    expect(input).toHaveValue('01/22/21__');
  });

  it('should be pass format', () => {
    const defaultValue = new Date(2021, 11, 20).getTime();
    const { rerender } = render(<Datepicker format='dd/mm/yyyy' defaultValue={defaultValue} />);

    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('20/12/2021');

    // TODO: не верно определяется value
    rerender(<Datepicker format='mm.dd.yyyy' defaultValue={defaultValue} />);
    expect(input).toHaveValue('01.22.21__');

    rerender(<Datepicker format='mm/dd/yyyy' defaultValue={defaultValue} />);
    expect(input).toHaveValue('01/22/21__');
  });

  it('should be pass children', () => {
    const { container } = render(<Datepicker children={<div className='rf-datepciker__children'>children</div>} />);

    expect(container.getElementsByClassName('rf-datepciker__children')).toHaveLength(1);
    expect(screen.queryByRole('textbox')).not.toBeInTheDocument();
  });

  it('should be call onChange', () => {
    const onChange = jest.fn();
    const value = '10.11.2020';
    render(<Datepicker onChange={onChange} />);

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value } });
    expect(onChange).toBeCalled();
    expect(input).toHaveValue(value);
  });

  it('should be call onChange if range', () => {
    const onChange = jest.fn();
    const value = '10.11.2020';
    const resultValue = '10.11.2020 - 12.12.2021';
    render(<Datepicker range onChange={onChange} />);

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value } });

    expect(onChange).toBeCalledTimes(0);
    expect(input).toHaveValue(`${value} - __.__.____`);

    fireEvent.change(input, { target: { value: resultValue } });
    expect(onChange).toBeCalledTimes(1);
    expect(input).toHaveValue(resultValue);
  });
});
