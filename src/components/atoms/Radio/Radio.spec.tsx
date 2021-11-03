import { getByText, render } from '@testing-library/react';
import React from 'react';
import Radio from './Radio';

describe('Test <Radio/> component', () => {
  it('should be rendered with text "Label" and value "1"', () => {
    const { container } = render(<Radio value='1' label='Label' />);
    const item = container.getElementsByClassName('rf-radio__input').item(0);
    expect(item && item.getAttribute('value')).toBe('1');
    expect(getByText(container, 'Label')).toBeInTheDocument();
  });

  it('should be rendered without icon', () => {
    const { container } = render(<Radio value='1' label='Label' icon={false} />);

    expect(container.getElementsByClassName('rf-radio__circle')).toHaveLength(0);
  });

  it('should be disabled', () => {
    const { container } = render(<Radio value='1' label='Label' disabled />);

    expect(container.getElementsByClassName('disabled')).toHaveLength(1);
  });

  it('should be rendered fullWidth', () => {
    const { container } = render(<Radio value='1' label='Label' fullWidth />);

    expect(container.getElementsByClassName('rf-radio--fullwidth')).toHaveLength(1);
  });
});
