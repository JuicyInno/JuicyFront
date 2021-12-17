import React from 'react';
import {fireEvent, render, screen} from "@testing-library/react";
import ButtonPages from "./ButtonPages";

describe('Test <ButtonPages/> component', () => {
  it('should render ButtonPages', () => {
    const { container } = render(<ButtonPages max={8} onChange={jest.fn}> ButtonPages </ButtonPages>);
    expect(container.getElementsByClassName('rf-button-pages')).toHaveLength(1);
  });

  it('should render ButtonPages with max value inside', () => {
    const max = 8;
    render(<ButtonPages  max={max} onChange={jest.fn}/>);
    expect(screen.getByText(`1 / ${max}`)).toBeInTheDocument();
  });

  it('should be call onChange', () => {
    const onChange = jest.fn();
    const { container } = render(<ButtonPages max={8} onChange={onChange}> ButtonPages </ButtonPages>);
    const notDisabledArrow = container.getElementsByClassName('rf-button-pages__button')[1];
    fireEvent.click(notDisabledArrow);
    expect(onChange).toHaveBeenCalled();
  });

  it('should be disabled', () => {
    const { container } = render(<ButtonPages max={1} onChange={jest.fn()}> ButtonPages </ButtonPages>);
    const arrows = container.getElementsByClassName('rf-button-pages__button');
    expect(arrows[0]).toHaveAttribute('disabled');
    expect(arrows[1]).toHaveAttribute('disabled');
  });
});

