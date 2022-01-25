import React from 'react';

import { render, fireEvent, screen } from '@testing-library/react';
import InputNumber from './InputNumber';

describe('Test <InputNumber /> component', () => {
  it('should pass defaultValue = 99', () => {
    render(<InputNumber aria-label='input-number' defaultValue='99' />);
    const input = screen.getByLabelText('input-number');

    expect(input).toHaveValue('99');
  });

  it('should not allow letters to be inputted', () => {
    render(<InputNumber aria-label='input-number' />);
    const input = screen.getByLabelText('input-number');

    fireEvent.change(input, { target: { value: 'string' } });
    expect(input).toHaveValue('');

    fireEvent.change(input, { target: { value: 'string123string' } });
    expect(input).toHaveValue('');
  });

  it('should allow number to be inputted', () => {
    render(<InputNumber aria-label='input-number' />);
    const input = screen.getByLabelText('input-number');

    fireEvent.change(input, { target: { value: '123' } });
    expect(input).toHaveValue('123');

    fireEvent.change(input, { target: { value: 432 } });
    expect(input).toHaveValue('432');
  });

  it('should allow groupBy 4 value', () => {
    render(<InputNumber aria-label='input-number' groupBy={4} />);
    const input = screen.getByLabelText('input-number');

    fireEvent.change(input, { target: { value: '1000000' } });
    expect(input).toHaveValue('100 0000');

    fireEvent.change(input, { target: { value: '100000000000' } });
    expect(input).toHaveValue('1000 0000 0000');
  });

  it('should allow float points 1', () => {
    render(<InputNumber aria-label='input-number' floatPoints={1} />);
    const input = screen.getByLabelText('input-number');

    fireEvent.change(input, { target: { value: '1000000.55' } });
    expect(input).toHaveValue('1 000 000.5');

    fireEvent.change(input, { target: { value: '0.99999' } });
    expect(input).toHaveValue('0.9');
  });

  it('should allow max value 100', () => {
    render(<InputNumber aria-label='input-number' max={100} />);
    const input = screen.getByLabelText('input-number');

    fireEvent.change(input, { target: { value: '999999' } });
    expect(input).toHaveValue('100');

    fireEvent.change(input, { target: { value: '22' } });
    expect(input).toHaveValue('22');
  });

  it('should allow separator by :', () => {
    render(<InputNumber aria-label='input-number' separator=':' />);
    const input = screen.getByLabelText('input-number');

    fireEvent.change(input, { target: { value: '999999' } });
    expect(input).toHaveValue('999:999');
  });

  it('should call onInputChange', () => {
    const onInputChange = jest.fn();
    render(<InputNumber aria-label='input-number' onInputChange={onInputChange} />);
    const input = screen.getByLabelText('input-number');

    expect(onInputChange).toHaveBeenCalledTimes(0);
    fireEvent.change(input, { target: { value: '111' } });

    expect(onInputChange).toHaveBeenCalledTimes(1);
  });
});
