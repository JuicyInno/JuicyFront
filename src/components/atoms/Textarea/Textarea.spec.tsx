import React from 'react';
import { render, screen } from '@testing-library/react';
import Textarea from './Textarea';

describe('Test <Textarea/> component', () => {
  it('should have maxLength indicator', () => {
    render(<Textarea defaultValue='value'/>);
  });
});
