import React from 'react';
import { render, screen } from '@testing-library/react';
import FormGroup from './FormGroup';

describe('Test <FormGroup/> component', () => {
  it('should have label "Label"', () => {
    render(<FormGroup label='Label'>Content</FormGroup>);

    expect(screen.getByText('Label')).toBeInTheDocument();
  });

  it('should have "*" when required', () => {
    const { container } = render(
      <FormGroup label='Label' required>
        Content
      </FormGroup>
    );

    expect(container.getElementsByClassName('rf-form-group__required')).toHaveLength(1);
  });

  it('should have error message "Error"', () => {
    render(
      <FormGroup label='Label' errorMessage='Decline'>
        Content
      </FormGroup>
    );

    expect(screen.getByText('Error')).toBeInTheDocument();
  });

  it('should have labelSecondary', () => {
    const { container } = render(
      <FormGroup label='label' labelSecondary='labelSecondary'>
        Content
      </FormGroup>
    );

    expect(container.getElementsByClassName('rf-form-group__label-secondary')).toHaveLength(1);
  });

  it('should pass className', () => {
    const { container } = render(<FormGroup className='class-name'>Content</FormGroup>);

    expect(container.getElementsByClassName('class-name')).toHaveLength(1);
  });

  it('should be valid errorMessage', () => {
    const { container } = render(
      <FormGroup invalid={false} errorMessage='message'>
        Content
      </FormGroup>
    );

    expect(container.getElementsByClassName('rf-form-group__message_no-invalid')).toHaveLength(1);
  });

  it('should be invalidLabelSecondary', () => {
    const { container } = render(
      <FormGroup invalidLabelSecondary labelSecondary='labelSecondary' label='label'>
        Content
      </FormGroup>
    );

    expect(container.getElementsByClassName('rf-form-group__message_no_invalidd')).toHaveLength(1);
  });
});
