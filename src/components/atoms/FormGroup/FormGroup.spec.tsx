import React from 'react';
import { getByText, render, screen } from '@testing-library/react';
import FormGroup from './FormGroup';

describe('Test <FormGroup/> component', () => {
  it('should have label "Label"', () => {
    render(<FormGroup label="Label">Content</FormGroup>);
    expect(screen.getByText('Label')).toBeInTheDocument();
  });
  
  it('should have "*" when required', () => {
    const { container } = render(<FormGroup label="Label" required>Content</FormGroup>);
    expect(container.getElementsByClassName('rf-form-group__required')).toHaveLength(1);
  });
  
  it('should have error message "Error"', () => {
    render(<FormGroup label="Label" errorMessage="Error">Content</FormGroup>);
    expect(screen.getByText('Error')).toBeInTheDocument();
  });
})
;
