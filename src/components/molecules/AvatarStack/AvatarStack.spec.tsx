import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import AvatarStack from './AvatarStack';
import { usersMocks } from '../../popups/FindUsers/users.mocks';

describe('Test <AvatarStack /> component', () => {
  it('should render with 3 visible avatars', () => {
    const { container } = render(<AvatarStack list={usersMocks.slice(0, 3)} />);
    expect(container.getElementsByClassName('rf-avatar-stack__item')).toHaveLength(3);
  });
  
  it('should render with 3 visible avatars and 1 hidden avatar', async () => {
    const { container } = render(<AvatarStack list={usersMocks.slice(0, 4)} />);
    expect(container.getElementsByClassName('rf-avatar-stack__item')).toHaveLength(4);
  });
  
  it('should render with XXL size', () => {
    const { container } = render(<AvatarStack list={usersMocks.slice(0, 3)} size='xxl' />);
    expect(container.getElementsByClassName('rf--xxl')).toHaveLength(3);
  });
  
  it('should render with 5 visible avatars', () => {
    const { container } = render(<AvatarStack list={usersMocks.slice(0, 5)} maxVisible={5} />);
    expect(container.getElementsByClassName('rf-avatar-stack__item')).toHaveLength(5);
  });
  
  it('should be call onClick', async () => {
    const onClick = jest.fn();

    const { container } = render(<AvatarStack list={usersMocks} onClick={onClick} />);
    const item = container.getElementsByClassName('rf-avatar-stack__item').item(0);

    if (!item) {
      fail('Нет элемента')
    }

    fireEvent.click(item);
    expect(onClick).toBeCalled();
  });
  
  it('should have clickable class', () => {
    const { container } = render(<AvatarStack list={usersMocks} onClick={jest.fn()} maxVisible={4} />);
    expect(container.getElementsByClassName('rf-avatar-stack--clickable')).toHaveLength(5);
  });
});
