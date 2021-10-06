import React from 'react';
import { render, screen } from '@testing-library/react';
import Textarea from './Textarea';

describe('Test <Textarea/> component', () => {
  it('should have maxLength indicator', () => {
    const { container } = render(<Textarea defaultValue='value' maxLength={100} />);
    expect(container.getElementsByClassName('rf-textarea__max-length')).toHaveLength(1);
    expect(screen.getByText('5 / 100')).toBeInTheDocument();
  });
});
