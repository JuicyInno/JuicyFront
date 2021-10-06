import { render, screen } from '@testing-library/react';
import React from 'react';
import Avatar from './Avatar';

describe('Test <Avatar/> component', () => {
  it('should render Avatar with KM inside', () => {
    render(<Avatar fullName='K M'/> );
    expect(screen.getByText('KM')).toBeInTheDocument();
  });
  
  it('should be xs', () => {
    const { container } = render(<Avatar size='xs'/> );
    expect(container.getElementsByClassName('rf--xs')).toHaveLength(1);
  });
  
  it('should be s', () => {
    const { container } = render(<Avatar size='s'/> );
    expect(container.getElementsByClassName('rf--s')).toHaveLength(1);
  });
  
  it('should be m', () => {
    const { container } = render(<Avatar size='m'/> );
    expect(container.getElementsByClassName('rf--m')).toHaveLength(1);
  });
  
  it('should be l', () => {
    const { container } = render(<Avatar size='l'/> );
    expect(container.getElementsByClassName('rf--l')).toHaveLength(1);
  });
  
  it('should be xl', () => {
    const { container } = render(<Avatar size='xl'/> );
    expect(container.getElementsByClassName('rf--xl')).toHaveLength(1);
  });
});
