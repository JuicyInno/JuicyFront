import React from 'react';

import { render } from '@testing-library/react';
import ButtonGroup from './ButtonGroup';
import { buttonGroupMock } from './mock';
import { BrowserRouter } from 'react-router-dom';

describe('Test <ButtonGroup/> component', () => {
  it('should render ButtonGroup component', () => {
    render(
      <BrowserRouter>
        <ButtonGroup list={buttonGroupMock} />
      </BrowserRouter>
    );
  });

  it('should have 2 visible buttons', () => {
    const { container } = render(
      <BrowserRouter>
        <ButtonGroup list={buttonGroupMock} />
      </BrowserRouter>
    );
    expect(container.getElementsByClassName('button-group__item')).toHaveLength(2);
  });

  it('should have 3 visible buttons', () => {
    const { container } = render(
      <BrowserRouter>
        <ButtonGroup list={buttonGroupMock} max={3} />
      </BrowserRouter>
    );

    expect(container.getElementsByClassName('button-group__item')).toHaveLength(3);
  });

  it('should have 0 visible buttons', () => {
    const { container } = render(
      <BrowserRouter>
        <ButtonGroup list={buttonGroupMock} max={0} />
      </BrowserRouter>
    );
    expect(container.getElementsByClassName('button-group__item')).toHaveLength(0);
  });

  it('should have 3 visible buttons if max <= list.length', () => {
    const { container } = render(
      <BrowserRouter>
        <ButtonGroup list={buttonGroupMock} max={10} />
      </BrowserRouter>
    );
    expect(container.getElementsByClassName('button-group__item')).toHaveLength(3);
  });
});
