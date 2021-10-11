import React from 'react';
import { render, screen } from '@testing-library/react';
import ButtonGroup from './ButtonGroup';
import { buttonGroupMock } from './mock';
import Avatar from '../Avatar';
import { BrowserRouter } from 'react-router-dom';

describe('Test <ButtonGroup/> component', () => {
  it('should render ButtonGroup component', () => {
    render(<BrowserRouter><ButtonGroup list={buttonGroupMock}/></BrowserRouter>)
  });
  
  it('should have 2 visible buttons', () => {
    const { container } = render(
      <BrowserRouter>
        <ButtonGroup list={buttonGroupMock}/>
      </BrowserRouter>
    );
    expect(container.getElementsByClassName('button-group__item')).toHaveLength(2);
  });
  
  it('should have 3 visible buttons', () => {
    const { container } = render(
      <BrowserRouter>
        <ButtonGroup list={buttonGroupMock} max={3}/>
      </BrowserRouter>
    );
    expect(container.getElementsByClassName('button-group__item')).toHaveLength(3);
  });
})
