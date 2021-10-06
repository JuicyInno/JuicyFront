import React from 'react';
import { getByText, render } from '@testing-library/react';
import Checkbox from './Checkbox';

describe('Test <Checkbox/> component', () => {
  it('should be rendered with text "Label" and value "1"', () => {
    const element = <Checkbox value='1' label='Label' />;
    const { container } = render(element);
    
    const item = container.getElementsByClassName('rf-checkbox__input').item(0);
    
    if (!item) {
      fail('Нет чекбокса');
    }
    
    expect(item.getAttribute('value')).toBe('1');
    expect(getByText(container, 'Label')).toBeInTheDocument();
  })
  
  it('should be disabled', () => {
    const element = <Checkbox value='1' label='Label' disabled />;
    const { container } = render(element);
    const item = container.getElementsByClassName('rf-checkbox__input').item(0);
  
    if (!item) {
      fail('Нет чекбокса');
    }

    expect(item).toHaveAttribute('disabled')
  });
});
