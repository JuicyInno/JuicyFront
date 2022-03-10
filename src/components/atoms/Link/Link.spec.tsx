import React from 'react';
import { render, screen } from '@testing-library/react';
import { Link} from './Link';

describe('Test <Link/> component', () => {
  it('should render component', () => {
    render(<Link>link</Link>);
    expect(screen.getByText('link')).toBeInTheDocument();
  });

  it('should render adornments', () => {
    render(<Link startAdornment='start' endAdornment='end'>link</Link>);
    expect(screen.getByText('start')).toBeInTheDocument();
    expect(screen.getByText('end')).toBeInTheDocument();
  });

  it('should have correct size', () => {
    const { rerender } = render(<Link>link</Link>);
    expect(screen.getByTestId('rf-link')).toHaveClass('rf-link--md');
    rerender(<Link size='sm'>link</Link>);
    expect(screen.getByTestId('rf-link')).toHaveClass('rf-link--sm');
  });

  it('should have correct color', () => {
    const { rerender } = render(<Link>link</Link>);
    expect(screen.getByTestId('rf-link')).toHaveClass('rf-link--primary');
    rerender(<Link color='secondary'>link</Link>);
    expect(screen.getByTestId('rf-link')).toHaveClass('rf-link--secondary');
  });

  it('should be link', () => {
    render(<Link href='#'>link</Link>);
    expect(screen.getByTestId('rf-link').tagName).toBe('A');
  });

  it('should be button', () => {
    render(<Link component='button' disabled>link</Link>);
    expect(screen.getByTestId('rf-link').tagName).toBe('BUTTON');
  });
});
