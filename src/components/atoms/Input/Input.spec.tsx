import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Input from './Input';
import { ArrowsChevronDown } from '../../../indexIcon';

describe('Test <Input/> component', () => {
  it('should work as uncontrolled component', () => {
    render(<Input defaultValue='Hello' />);

    const input = screen.getByRole('textbox');
    userEvent.type(input, ' World');

    expect(input).toHaveDisplayValue('Hello World');
  });

  it('should work as controlled component', () => {
    const onChange = jest.fn();
    render(<Input value='Hello' onChange={onChange} />);

    const input = screen.getByRole('textbox');
    userEvent.type(input, ' World');

    expect(input).toHaveDisplayValue('Hello');
    expect(onChange).toHaveBeenCalledTimes(' World'.length);
  });

  it('should be render', () => {
    const { container } = render(<Input />);

    expect(container.getElementsByClassName('rf-input')).toHaveLength(1);
    expect(container.getElementsByClassName('rf-input__field')).toHaveLength(1);
    expect(container.getElementsByClassName('rf-input__action')).toHaveLength(0);
    expect(container.getElementsByClassName('rf-input__adornment')).toHaveLength(0);
    expect(screen.getByRole('textbox')).toHaveValue('');
  });

  it('should be pass icon', () => {
    const { container } = render(<Input icon={<ArrowsChevronDown />} />);

    expect(container.getElementsByClassName('rf-input__action')).toHaveLength(1);
  });

  it('should be pass startAdornment', () => {
    const { container } = render(<Input startAdornment={<ArrowsChevronDown />} />);

    expect(container.getElementsByClassName('rf-input__adornment--start')).toHaveLength(1);
  });

  it('should be pass endAdornment', () => {
    const { container } = render(<Input endAdornment={<ArrowsChevronDown />} />);

    expect(container.getElementsByClassName('rf-input__adornment--end')).toHaveLength(1);
  });

  it('should be disabled', () => {
    const { container } = render(<Input disabled />);

    expect(screen.getByRole('textbox')).toBeDisabled();
    expect(container.getElementsByClassName('rf-input--disabled')).toHaveLength(1);
  });

  it('should be readOnly', () => {
    const { container } = render(<Input readOnly />);

    expect(container.getElementsByClassName('rf-input--readonly')).toHaveLength(1);
  });

  it('should be pass variant', () => {
    const { container, rerender } = render(<Input />);

    expect(container.getElementsByClassName('rf-input--inline')).toHaveLength(0);

    rerender(<Input variant='inline' />);

    expect(container.getElementsByClassName('rf-input--inline')).toHaveLength(1);
  });

  it('should be pass filled', () => {
    const { container, rerender } = render(<Input />);

    expect(container.getElementsByClassName('rf-input--filled')).toHaveLength(1);

    rerender(<Input filled={false} />);

    expect(container.getElementsByClassName('rf-input--filled')).toHaveLength(0);
  });

  it('should be invalid', () => {
    const { container, rerender } = render(<Input />);

    expect(container.getElementsByClassName('rf-input--invalid')).toHaveLength(0);

    rerender(<Input invalid />);

    expect(container.getElementsByClassName('rf-input--invalid')).toHaveLength(1);
  });

  it('should be call onFocus', () => {
    const onFocus = jest.fn();
    const { container } = render(<Input onFocus={onFocus} />);

    expect(container.getElementsByClassName('rf-input--focused')).toHaveLength(0);
    fireEvent.focus(screen.getByRole('textbox'));
    expect(onFocus).toHaveBeenCalled();
    expect(container.getElementsByClassName('rf-input--focused')).toHaveLength(1);
  });

  it('should be call onBlur', () => {
    const onBlur = jest.fn();
    render(<Input onBlur={onBlur} />);

    fireEvent.blur(screen.getByRole('textbox'));
    expect(onBlur).toHaveBeenCalled();
  });

  it('should have clear button', () => {
    const onClear = jest.fn();
    render(<Input onClear={onClear} defaultValue='Test' />);

    expect(screen.getByLabelText('Сбросить')).toBeInTheDocument();

    fireEvent.click(screen.getByLabelText('Сбросить'));
    expect(onClear).toHaveBeenCalled();
  });

  it('should be call onDebounce', async () => {
    const onDebounce = jest.fn();
    render(<Input onDebounce={onDebounce} />);

    userEvent.type(screen.getByRole('textbox'), 'test');

    await waitFor(() => {
      expect(onDebounce).toHaveBeenCalled();
    });
  });

  it('should use pattern for input', () => {
    render(<Input pattern="^[\da-zA-Zа-яА-Я]*$" />);

    const input = screen.getByRole('textbox');
    
    userEvent.type(input, '123q_QйЙ!@#t');
    expect(input).toHaveDisplayValue('123qQйЙt');
  });
});
