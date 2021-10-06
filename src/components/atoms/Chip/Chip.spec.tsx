import React from 'react';
import { render } from '@testing-library/react';
import Chip from './Chip';

describe('Test <Chip/> component', () => {
  
  it('should be primary', () => {
    const { container } = render(<Chip type='primary'> Button </Chip>);
    expect(container.getElementsByClassName('rf-chip--primary')).toHaveLength(1);
  });
  
  it('should be secondary', () => {
    const { container } = render(<Chip type='secondary'> Button </Chip>);
    expect(container.getElementsByClassName('rf-chip--secondary')).toHaveLength(1);
  });
  
  it('should be outline', () => {
    const { container } = render(<Chip type='outline'> Button </Chip>);
    expect(container.getElementsByClassName('rf-chip--outline')).toHaveLength(1);
  });
  
  it('should have close button', () => {
    const { container } = render(<Chip onRemove={jest.fn}> Button </Chip>);
    expect(container.getElementsByClassName('rf-chip__remove')).toHaveLength(1);
  });
});
