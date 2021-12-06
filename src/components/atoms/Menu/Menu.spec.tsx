import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { _listMenu } from './mock';
import Button from '../Button';
import Menu from './Menu';

describe('Test <Menu /> component', () => {
  it('should be render with list', async () => {
    const { container } = render(
      <BrowserRouter>
        <Menu list={_listMenu}>
          <Button buttonType='secondary' className='menu-content-children'>
            Меню
          </Button>
        </Menu>
      </BrowserRouter>
    );

    fireEvent.click(container.getElementsByClassName('menu-content-children')[0]);

    expect(container.getElementsByClassName('menu-content-children')).toHaveLength(1);
    expect(container.getElementsByClassName('rf-menu')).toHaveLength(1);

    await waitFor(() => {
      expect(screen.getByTestId('rf-list')).toBeInTheDocument();
    });
  });

  it('should be render with content', async () => {
    const { container } = render(
      <BrowserRouter>
        <Menu content={<>content</>}>
          <Button buttonType='secondary' className='menu-content-children'>
            Меню
          </Button>
        </Menu>
      </BrowserRouter>
    );

    fireEvent.click(container.getElementsByClassName('menu-content-children')[0]);

    await waitFor(() => {
      expect(screen.getByText('content')).toBeInTheDocument();
    });
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
});
