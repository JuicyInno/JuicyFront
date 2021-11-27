import { render, screen } from '@testing-library/react';
import React from 'react';
import Avatar from './Avatar';

import User from '../../../assets/icons/24px/Account/User';

describe('Test <Avatar/> component', () => {
  it('should render Avatar with KM inside', () => {
    render(<Avatar fullName='K M' />);
    expect(screen.getByText('KM')).toBeInTheDocument();
  });

  it('should render Avatar with K inside on size XXS', () => {
    render(<Avatar fullName='K M' size='xxs' />);
    expect(screen.getByText('K')).toBeInTheDocument();
  });

  it('should render Avatar with K inside on size XS', () => {
    render(<Avatar fullName='K M' size='xs' />);
    expect(screen.getByText('K')).toBeInTheDocument();
  });

  it('should be xxs', () => {
    const { container } = render(<Avatar size='xxs' />);
    expect(container.getElementsByClassName('rf--xxs')).toHaveLength(1);
  });

  it('should be xs', () => {
    const { container } = render(<Avatar size='xs' />);
    expect(container.getElementsByClassName('rf--xs')).toHaveLength(1);
  });

  it('should be s', () => {
    const { container } = render(<Avatar size='s' />);
    expect(container.getElementsByClassName('rf--s')).toHaveLength(1);
  });

  it('should be m', () => {
    const { container } = render(<Avatar size='m' />);
    expect(container.getElementsByClassName('rf--m')).toHaveLength(1);
  });

  it('should be l', () => {
    const { container } = render(<Avatar size='l' />);
    expect(container.getElementsByClassName('rf--l')).toHaveLength(1);
  });

  it('should be xl', () => {
    const { container } = render(<Avatar size='xl' />);
    expect(container.getElementsByClassName('rf--xl')).toHaveLength(1);
  });

  it('should be xxl', () => {
    const { container } = render(<Avatar size='xxl' />);
    expect(container.getElementsByClassName('rf--xxl')).toHaveLength(1);
  });

  it('should be xxxl', () => {
    const { container } = render(<Avatar size='xxxl' />);
    expect(container.getElementsByClassName('rf--xxxl')).toHaveLength(1);
  });

  it('should be xxxxl', () => {
    const { container } = render(<Avatar size='xxxxl' />);
    expect(container.getElementsByClassName('rf--xxxxl')).toHaveLength(1);
  });

  it('should be default', () => {
    const { container } = render(<Avatar backgroundColor='default' />);
    expect(container.getElementsByClassName('rf-avatar__background_default')).toHaveLength(1);
  });

  it('should be white', () => {
    const { container } = render(<Avatar backgroundColor='white' />);
    expect(container.getElementsByClassName('rf-avatar__background_white')).toHaveLength(1);
  });

  it('should be grey', () => {
    const { container } = render(<Avatar backgroundColor='grey' />);
    expect(container.getElementsByClassName('rf-avatar__background_grey')).toHaveLength(1);
  });

  it('should be black', () => {
    const { container } = render(<Avatar backgroundColor='black' />);
    expect(container.getElementsByClassName('rf-avatar__background_black')).toHaveLength(1);
  });

  it('should be with icon', () => {
    const { container } = render(<Avatar icon={User} />);
    expect(container.getElementsByClassName('rf-avatar__icon-wrapper')).toHaveLength(1);
  });
});
