import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import AvatarStack from './AvatarStack';
import { usersMocks } from '../../popups/FindUsers/users.mocks';
import { act } from 'react-dom/test-utils';
import { IUser } from '../../../types/projects.types';
import Select from '../../atoms/Select';

describe('Test <AvatarStack/> component', () => {
  it('should render with 3 visible avatars', () => {
    const { container } = render(<AvatarStack list={usersMocks.slice(0, 3)} />);
    expect(container.getElementsByClassName('avatar-stack__item')).toHaveLength(3);
  });
  
  it('should render with 3 visible avatars and 1 hidden avatar', async () => {
    const { container } = render(<AvatarStack list={usersMocks.slice(0, 4)} />);
    expect(container.getElementsByClassName('avatar-stack__item')).toHaveLength(4);
    expect(screen.queryByTestId('avatar-stack__menu')).not.toBeInTheDocument();
  
    fireEvent.click(screen.getByTestId('avatar-stack__toggle'));
    
    await waitFor(() => {
      expect(screen.queryByTestId('avatar-stack__menu')).toBeInTheDocument();
    });
  });
  
  it('should render with XXL size', () => {
    const { container } = render(<AvatarStack list={usersMocks.slice(0, 3)} size='xxl' />);
    expect(container.getElementsByClassName('rf--xxl')).toHaveLength(3);
  });
  
  it('should render with 5 visible avatars', () => {
    const { container } = render(<AvatarStack list={usersMocks.slice(0, 5)} maxVisible={5} />);
    expect(container.getElementsByClassName('avatar-stack__item')).toHaveLength(5);
  });
  
  it('should save user to variable on click', async () => {
    const mocks = usersMocks;
    
    let currentUser: IUser | null = null;
    const onClick = (user: IUser) => {
      currentUser = user;
    }
    
    const { container } = render(<AvatarStack list={mocks} onClick={onClick} />);
    const nodeList = container.getElementsByClassName('avatar-stack__item');
    
    if (!nodeList || nodeList.length === 0) {
      fail();
    }
    
    const firstUser = nodeList[0];
  
    expect(currentUser).toBe(null);
    fireEvent.click(firstUser);
  
    await waitFor(() => {
      if (!currentUser) {
        fail();
      }
      expect(currentUser.id).toBe(mocks[0].id);
    });
  });
  
  it('should have dropdown width of 600px', async () => {
    render(<AvatarStack list={usersMocks} dropdownMaxWidth={600} />);
  
    fireEvent.click(screen.getByTestId('avatar-stack__toggle'));
    
    await waitFor(() => {
      const dropdown = screen.getByTestId('rf-dropdown');
      const styleAttribute = dropdown.getAttribute('style');
      const hasProperWidth = styleAttribute ? styleAttribute.includes('max-width: 600px') : false;
      expect(hasProperWidth).toBeTruthy();
    });
  });
});
