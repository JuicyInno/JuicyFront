import { render } from '@testing-library/react';
import React from 'react';

import Shimmer from './Shimmer';

describe('Test <Shimmer /> component', () => {
  it('should be rendered', () => {
    const { container } = render(<Shimmer />);

    expect(container.getElementsByClassName('rf-shimmer--title')).toHaveLength(1);
    expect(container.getElementsByClassName('rf-shimmer--light')).toHaveLength(1);
  });

  it('should be pass theme', () => {
    const { container, rerender } = render(<Shimmer />);

    expect(container.getElementsByClassName('rf-shimmer--light')).toHaveLength(1);

    rerender(<Shimmer theme='dark' />);
    expect(container.getElementsByClassName('rf-shimmer--dark')).toHaveLength(1);
  });

  it('should be pass variant', () => {
    const { container, rerender } = render(<Shimmer />);

    expect(container.getElementsByClassName('rf-shimmer--title')).toHaveLength(1);

    rerender(<Shimmer variant='text' />);
    expect(container.getElementsByClassName('rf-shimmer--text')).toHaveLength(1);

    rerender(<Shimmer variant='image' />);
    expect(container.getElementsByClassName('rf-shimmer--image')).toHaveLength(1);

    rerender(<Shimmer variant='avatar' />);
    expect(container.getElementsByClassName('rf-shimmer--avatar')).toHaveLength(1);

    rerender(<Shimmer variant='avatar-title' />);
    expect(container.getElementsByClassName('rf-shimmer--avatar-title')).toHaveLength(1);
  });

  it('should be pass width and height', () => {
    const { container } = render(<Shimmer height="200px" width="100px" />);

    expect(container.getElementsByClassName('rf-shimmer').item(0)).toHaveStyle({ width: '100px', height: '200px' });
  });

  it('should be pass style', () => {
    const { container } = render(<Shimmer style={{ marginBottom: '20px' }} />);

    expect(container.getElementsByClassName('rf-shimmer').item(0)).toHaveStyle({ marginBottom: '20px' });
  });
});
