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

    /** При клике на кнопку открываем */
    fireEvent.click(container.getElementsByClassName('menu-content-children')[0]);

    expect(container.getElementsByClassName('menu-content-children')).toHaveLength(1);
    expect(container.getElementsByClassName('rf-menu')).toHaveLength(1);

    await waitFor(() => {
      expect(screen.getByTestId('rf-list')).toBeInTheDocument();
    });

    /** При клике на кнопку скрываем меню (т.к. было меню было открыто) */
    fireEvent.click(container.getElementsByClassName('menu-content-children')[0]);

    await waitFor(() => {
      expect(screen.queryByTestId('rf-list')).not.toBeInTheDocument();
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

  it('should be toggleTaget = false', async () => {
    const { container } = render(
      <BrowserRouter>
        <Menu content={<>content</>} className='menu-class-name' toggleTagret={false}>
          <Button buttonType='secondary' className='menu-content-children'>
            Меню
          </Button>
        </Menu>
      </BrowserRouter>
    );

    /** При клике на кнопку открываем меню */
    fireEvent.click(container.getElementsByClassName('menu-content-children')[0]);

    await waitFor(() => {
      expect(screen.getByText('content')).toBeInTheDocument();
    });

    /** При клике на кнопку открываем меню (даже если было открыто) */
    fireEvent.click(container.getElementsByClassName('menu-content-children')[0]);

    await waitFor(() => {
      expect(screen.queryByText('content')).toBeInTheDocument();
    });
  });

  it('should be disabled', async () => {
    const { container } = render(
      <BrowserRouter>
        <Menu content={<>content</>} className='menu-class-name' disabled>
          <Button buttonType='secondary' className='menu-content-children'>
            Меню
          </Button>
        </Menu>
      </BrowserRouter>
    );

    fireEvent.click(container.getElementsByClassName('menu-content-children')[0]);

    await waitFor(() => {
      expect(screen.queryByTestId('content')).not.toBeInTheDocument();
    });
  });
});
