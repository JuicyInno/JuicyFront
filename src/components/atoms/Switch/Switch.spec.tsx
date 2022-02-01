import React from 'react';
import {fireEvent, getByText, render, screen} from "@testing-library/react";
import Radio from "../Radio";
import Switch from "./Switch";

describe('Test <Switch/> component', () => {

    it('should be rendered with text "Text" and addText "Add text"', () => {
      const { container } = render( <Switch label='Text' helperText='Add text' />);
      expect(getByText(container,'Text')).toBeTruthy();
      expect(getByText(container,'Add text')).toBeTruthy();
      expect(container.getElementsByClassName('rf-switch--m')).toHaveLength(1);
  });

  it('should be switched', () => {
    const onClick = jest.fn();
    const { container } = render( <Switch label='Text'  onChange={onClick} helperText='Add text' />);
    expect(container.getElementsByClassName('off')).toHaveLength(1);
    expect(container.getElementsByClassName('on')).toHaveLength(0);
    fireEvent.click(container.getElementsByClassName('rf-switch')[0]);
    expect(onClick).toHaveBeenCalled();
    expect(container.getElementsByClassName('off')).toHaveLength(0);
    expect(container.getElementsByClassName('on')).toHaveLength(1);
  })


  it('should be disabled', () => {
    const onClick = jest.fn();
    const { container } = render( <Switch label='Text' disabled={true} onChange={onClick} helperText='Add text' />);
    expect(container.getElementsByClassName('off')).toHaveLength(1);
    expect(container.getElementsByClassName('on')).toHaveLength(0);
    fireEvent.click(container.getElementsByClassName('rf-switch')[0]);
    expect(onClick).not.toHaveBeenCalled();
    expect(container.getElementsByClassName('off')).toHaveLength(1);
    expect(container.getElementsByClassName('on')).toHaveLength(0);
  })

  it('should be small', () => {
    const { container } = render( <Switch label='Text' size={'s'} helperText='Add text' />);
    expect(container.getElementsByClassName('rf-switch--s')).toHaveLength(1);
  })

  it('should be reverse', () => {
    const { container } = render(<Switch label='Text' reverse />);
    expect(container.getElementsByClassName('rf-switch--reverse')).toHaveLength(1);
  });

  it('should be between', () => {
    const { container } = render(<Switch label='Text' between />);
    expect(container.getElementsByClassName('rf-switch--between')).toHaveLength(1);
  });
});
