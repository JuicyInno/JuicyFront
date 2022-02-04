import { render, screen } from '@testing-library/react';
import React from 'react';
import AvatarStatus from './AvatarStatus';
import {AllUser} from '../../../indexNewIcon';

describe('Test <AvatarStatus /> component', () => {
  it('should render AvatarStatus', () => {
    const { container } = render(<AvatarStatus />);
    expect(container.getElementsByClassName('rf-avatar-status')).toHaveLength(1);
  });

  it('should render AvatarStatus in green', () => {
    const { container } = render(<AvatarStatus variant='green' />);
    expect(container.getElementsByClassName('green')).toHaveLength(1);
  });

  it('should render AvatarStatus in blue', () => {
    const { container } = render(<AvatarStatus variant='blue' />);
    expect(container.getElementsByClassName('blue')).toHaveLength(1);
  });

  it('should render AvatarStatus in grey', () => {
    const { container } = render(<AvatarStatus variant='default' />);
    expect(container.getElementsByClassName('default')).toHaveLength(1);
  });

  it('should render AvatarStatus in yellow', () => {
    const { container } = render(<AvatarStatus variant='yellow' />);
    expect(container.getElementsByClassName('yellow')).toHaveLength(1);
  });

  it('should render AvatarStatus in red', () => {
    const { container } = render(<AvatarStatus variant='red' />);
    expect(container.getElementsByClassName('red')).toHaveLength(1);
  });

  it('should render AvatarStatus has small sticker placed certain way', () => {
    const { container } = render(<AvatarStatus type='online' size='s' />);
    expect(container.getElementsByClassName('rf-avatar-status__border')).toHaveLength(0);
    expect(container.getElementsByClassName('rf-avatar-status__sticker--size-s')).toHaveLength(1);
  });

  it('should render AvatarStatus with no sticker in xxs', () => {
    const { container } = render(<AvatarStatus type='online' size='xxs' />);
    expect(container.getElementsByClassName('rf-avatar-status__border')).toHaveLength(0);
    expect(container.getElementsByClassName('rf-avatar-status__sticker')).toHaveLength(0);
    expect(container.getElementsByClassName('rf-avatar-status__sticker--size-s')).toHaveLength(0);
  });

  it('should render AvatarStatus with no sticker in xs', () => {
    const { container } = render(<AvatarStatus type='online' size='xs' />);
    expect(container.getElementsByClassName('rf-avatar-status__border')).toHaveLength(0);
    expect(container.getElementsByClassName('rf-avatar-status__sticker')).toHaveLength(0);
    expect(container.getElementsByClassName('rf-avatar-status__sticker--size-s')).toHaveLength(0);
  });

  it('should render AvatarStatus with no sticker in type default', () => {
    const { container } = render(<AvatarStatus variant='default' />);
    expect(container.getElementsByClassName('rf-avatar-status__border')).toHaveLength(1);
    expect(container.getElementsByClassName('default')).toHaveLength(1);
    expect(container.getElementsByClassName('rf-avatar-status__sticker')).toHaveLength(0);
  });

  it('should render AvatarStatus with initials', () => {
    const { container } = render(<AvatarStatus variant='green' fullName='John Dee' />);
    expect(screen.getByText('JD')).toBeInTheDocument();
  });

  it('should render AvatarStatus with icon (when no initials and photo)', () => {
    const { container } = render(<AvatarStatus variant='green' icon={AllUser} />);
    expect(container.getElementsByClassName('rf-avatar__icon-wrapper')).toHaveLength(1);
  });

  it('should render AvatarStatus in size xxs', () => {
    const { container } = render(<AvatarStatus size='xxs' type='online' />);
    expect(container.getElementsByClassName('rf-avatar-status rf--xxs')).toHaveLength(1);
  });
});
