import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import Textarea from './Textarea';

const placeholder = 'Оставьте комментарий';
const debounce = 300;

describe('Test <Textarea/> component', () => {

  it('should render Textarea component', () => {
    render(<Textarea />)
  });

  it('should be default classNames', () => {
    const { container } = render(<Textarea />);
    expect(container.getElementsByClassName('rf-textarea__wrapper')).toHaveLength(1);
    expect(container.getElementsByClassName('rf-textarea__field')).toHaveLength(1);
    expect(container.getElementsByClassName('rf-textarea__wrapper')).toHaveLength(1);
  });

  it('should pass className', () => {
    const { container } = render(<Textarea className={'testClass'}/>);
    expect(container.getElementsByClassName('testClass')).toHaveLength(1);
  });

  it('should have placeholder text', () => {
    render(<Textarea placeholder={placeholder} />);
    expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument();
  });

  it('should have autoSize settings', () => {
    const { container } = render(<Textarea autoResize />);
    expect(container.getElementsByClassName('rf-textarea__wrapper--auto-resize')).toHaveLength(1);
  });

  it('shouldn\'t have autoSize settings', () => {
    const { container } = render(<Textarea />);
    expect(container.getElementsByClassName('rf-textarea--scroll')).toHaveLength(2);
  });

  it('should have invalid status', () => {
    const { container } = render(<Textarea invalid />);
    expect(container.getElementsByClassName('rf-textarea__wrapper--invalid')).toHaveLength(1);
  });

  it('should have disabled status', () => {
    const { container } = render(<Textarea disabled />);
    expect(container.getElementsByClassName('rf-textarea__wrapper--disabled')).toHaveLength(1);
  });


  it('should be change textarea', () => {
    render(<Textarea placeholder={placeholder} />);
    const textarea = screen.getByPlaceholderText(placeholder);
    fireEvent.change(textarea, { target: { value: 'Hello World!' } });
    expect(textarea).toHaveValue('Hello World!');
  });

  it('should be call onFocus', () => {
    const onFocus = jest.fn();
    render(<Textarea onFocus={onFocus} placeholder={placeholder} />);
    const textarea = screen.getByPlaceholderText(placeholder);
    fireEvent.focus(textarea);
    expect(onFocus).toHaveBeenCalledTimes(1);
  });

  it('should be call onBlur', () => {
    const onBlur = jest.fn();
    render(<Textarea onBlur={onBlur} placeholder={placeholder} />);
    const textarea = screen.getByPlaceholderText(placeholder);
    fireEvent.blur(textarea);
    expect(onBlur).toHaveBeenCalledTimes(1);
  });

  it('should be call onClear', () => {
    const onClear = jest.fn();
    render(<Textarea onClear={onClear} value={'Hello'} />);
    fireEvent.click(screen.getByLabelText('Сбросить'));
    expect(onClear).toHaveBeenCalledTimes(1);
  });

  it('should be call onDebounce', () => {
    const onDebounce = jest.fn();
    render(<Textarea onDebounce={onDebounce} debounce={debounce} placeholder={placeholder} />);
    const textarea = screen.getByPlaceholderText(placeholder);
    fireEvent.change(textarea, { target: { value: 'Hello World!' } });
    setTimeout(()=> {
      expect(onDebounce).toHaveBeenCalledTimes(1);

    }, debounce);
  });
});
