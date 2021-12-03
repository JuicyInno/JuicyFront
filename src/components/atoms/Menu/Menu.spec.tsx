import React from 'react';
import { render, screen, getByTestId } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { _listMenu } from './mock';
import Button from '../Button';
import Menu from './Menu';

describe('Test <Menu /> component', () => {
  it('should be render with list', () => {
    const { container } = render(
      <BrowserRouter>
        <Menu list={_listMenu}>
          <Button buttonType='secondary' className='menu-content-children'>
            Меню
          </Button>
        </Menu>
      </BrowserRouter>
    );

    expect(container.getElementsByClassName('menu-content-children')).toHaveLength(1);
    expect(container.getElementsByClassName('rf-menu')).toHaveLength(1);
    expect(screen.getByTestId('rf-list')).toBeInTheDocument();
    expect(screen.getByTestId('rf-dropdown-content')).toHaveStyle('max-width: 320px');
  });

  it('should be render with content', () => {
    render(
      <BrowserRouter>
        <Menu content={<>content</>}>
          <Button buttonType='secondary' className='menu-content-children'>
            Меню
          </Button>
        </Menu>
      </BrowserRouter>
    );

    expect(screen.getByText('content')).toBeInTheDocument();
  });

  it('should be pass className', () => {
    const { container } = render(
      <BrowserRouter>
        <Menu list={_listMenu} className='menu-class-name'>
          <Button buttonType='secondary' className='menu-content-children'>
            Меню
          </Button>
        </Menu>
      </BrowserRouter>
    );

    expect(container.getElementsByClassName('menu-class-name')).toHaveLength(1);
  });

  it('should have width of 500px', () => {
    render(
      <BrowserRouter>
        <Menu content={<>content</>} maxWidth='500px' className='menu-class-name'>
          <Button buttonType='secondary' className='menu-content-children'>
            Меню
          </Button>
        </Menu>
      </BrowserRouter>
    );

    expect(screen.getByTestId('rf-dropdown-content')).toHaveStyle('max-width: 500px');
  });
});
