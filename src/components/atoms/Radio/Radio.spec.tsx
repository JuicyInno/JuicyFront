import { getByText, render } from '@testing-library/react';
import React from 'react';
import Radio from './Radio';

describe('Test <Radio/> component', () => {
  it('should be rendered with text "Label" and value "1"', () => {
    const element = <Radio value='1' label='Label' />;
    const { container } = render(element);
  
    const item = container.getElementsByClassName('rf-radio__input').item(0);
  
    if (!item) {
      fail('Нет чекбокса');
    }
  
    expect(item.getAttribute('value')).toBe('1');
    expect(getByText(container, 'Label')).toBeInTheDocument();
  });
});
