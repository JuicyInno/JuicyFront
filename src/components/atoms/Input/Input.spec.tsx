import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import Input from './Input';

describe('Test <Input/> component', () => {
  it('should have clear button', () => {
    const onClear = jest.fn();
    render(<Input onClear={onClear} defaultValue='Test' />);

    expect(screen.getByLabelText('Сбросить')).toBeInTheDocument();

    fireEvent.click(screen.getByLabelText('Сбросить'));
    expect(onClear).toHaveBeenCalled();
  });

  it('should render adornments', () => {
    render(<Input defaultValue='Test' startAdornment={<div>start</div>} endAdornment={<div>end</div>}/>);
    expect(screen.queryByText('start')).toBeInTheDocument();
    expect(screen.queryByText('end')).toBeInTheDocument();
  })
});
