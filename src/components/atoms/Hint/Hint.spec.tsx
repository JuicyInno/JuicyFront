import React from 'react';
import { render } from '@testing-library/react';
import Hint from './Hint';

describe('Test <Hint/> component', () => {
  
  it('should render Hint component', () => {
    render(<Hint> Button </Hint>);
  });
  
  it('should be default', () => {
    const { container } = render(<Hint variant="default"> Button </Hint>);
    expect(container.getElementsByClassName('rf-hint__default')).toHaveLength(1);
  });
  
  it('should be default blue', () => {
    const { container } = render(<Hint variant="blue"> Button </Hint>);
    expect(container.getElementsByClassName('rf-hint__blue')).toHaveLength(1);
  });
  
  it('should be success', () => {
    const { container } = render(<Hint variant="green"> Button </Hint>);
    expect(container.getElementsByClassName('rf-hint__green')).toHaveLength(1);
  });
  
  it('should be warn', () => {
    const { container } = render(<Hint variant="yellow"> Button </Hint>);
    expect(container.getElementsByClassName('rf-hint__yellow')).toHaveLength(1);
  });
  
  it('should be danger', () => {
    const { container } = render(<Hint variant="red"> Button </Hint>);
    expect(container.getElementsByClassName('rf-hint__red')).toHaveLength(1);
  });
  
  it('should be without icon', () => {
    const { container } = render(<Hint variant="red"> Button </Hint>);
    expect(container.getElementsByClassName('rf-hint__icon')).toHaveLength(0);
  });
  
  it('should be with icon', () => {
    const { container } = render(<Hint variant="red" icon="info"> Button </Hint>);
    expect(container.getElementsByClassName('rf-hint__icon')).toHaveLength(1);
  });
  
  it('should have title === Test', () => {
    const { container } = render(<Hint title="Test"> Button </Hint>);
    expect(container.getElementsByClassName('rf-hint__title-text')[0]).toHaveTextContent('Test');
  });
  
  it('should have body === Test', () => {
    const { container } = render(<Hint> Test </Hint>);
    expect(container.getElementsByClassName('rf-hint__body')[0]).toHaveTextContent('Test');
  });
  
  it('should have button === Test', () => {
    const { container } = render(<Hint button="Test"> Button </Hint>);
    expect(container.getElementsByClassName('rf-hint__button')[0]).toHaveTextContent('Test');
  });
  
  it('should have maxWidth === 645px', () => {
    const { container } = render(<Hint maxWidth="645px"> Button </Hint>);
    expect(container.getElementsByClassName('rf-hint__wrapper')[0]).toHaveStyle(`maxWidth: 645px`);
  });
});
