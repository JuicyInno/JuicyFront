import React from 'react';

import Preloader from './Preloader';
import { render } from '@testing-library/react';

describe('Test <Preloader /> component', () => {
  it('should render Preloader component', () => {
    const { container } = render(<Preloader />);

    expect(container.getElementsByClassName('preloader--m')).toHaveLength(1);
    expect(container.getElementsByClassName('preloader--default')).toHaveLength(1);
  });

  it('should be s size', () => {
    const { container } = render(<Preloader size='s' />);

    expect(container.getElementsByClassName('preloader--s')).toHaveLength(1);
  });

  it('should be m size', () => {
    const { container } = render(<Preloader size='m' />);

    expect(container.getElementsByClassName('preloader--m')).toHaveLength(1);
  });

  it('should be l size', () => {
    const { container } = render(<Preloader size='l' />);

    expect(container.getElementsByClassName('preloader--l')).toHaveLength(1);
  });

  it('should be xl size', () => {
    const { container } = render(<Preloader size='xl' />);

    expect(container.getElementsByClassName('preloader--xl')).toHaveLength(1);
  });

  it('should be white variant', () => {
    const { container } = render(<Preloader variant='white' />);

    expect(container.getElementsByClassName('preloader--white')).toHaveLength(1);
  });

  it('should be inherit variant', () => {
    const { container } = render(<Preloader variant='inherit' />);

    expect(container.getElementsByClassName('preloader--inherit')).toHaveLength(1);
  });

  it('should pass className', () => {
    const { container } = render(<Preloader className='test-class-name' />);

    expect(container.getElementsByClassName('test-class-name')).toHaveLength(1);
  });
});
