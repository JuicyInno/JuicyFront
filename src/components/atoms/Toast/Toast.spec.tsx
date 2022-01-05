import React, { useState } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import Toast from "../../atoms/Toast/Toast";
import Button from '../Button';

describe('Toast default render', () => {
  it('should be render ', () => {
    render(
      <>
        <Toast
          duration={10000}
          isVisible={true}
          setVisibility={() => { }} >
          <p>Text notification</p>
        </Toast>
      </>
    )
    expect(document.getElementsByClassName('visible').length).toBe(1)
  });
  it('shouldnt be render ', () => {
    render(
      <>
        <Toast
          duration={10000}
          isVisible={false}
          setVisibility={() => { }} >
          <p>Text notification</p>
        </Toast>
      </>
    )
    expect(document.getElementsByClassName('not-visible').length).toBe(1)
  });
  it('should be unmounted from 2 sec ', () => {
    const sleep = 2000
    render(
      <>
        <Toast
          duration={sleep}
          isVisible={true}
          setVisibility={() => { }} >
          <p>Text notification</p>
        </Toast>
      </>
    )
    expect(document.getElementsByClassName('visible').length).toBe(1)
    setTimeout(() => {
      expect(document.getElementsByClassName('not-visible').length).toBe(0)
    }, sleep)
  })

  it('should call click button ', () => {
    const onVisible = jest.fn()
    onVisible.mockReturnValue(true);
    render(
      <>
        <Toast
          isVisible={false}
          setVisibility={onVisible} >
          <p>Text notification</p>
        </Toast>
        <Button data-testid='test-button' onClick={onVisible}>Click</Button>
      </>
    )
    fireEvent.click(screen.getByTestId('test-button'));
    expect(onVisible).toBeCalled();
    expect(onVisible()).toBe(true)
  });

  it('should be render with children nodes ', () => {
    const children = <p data-testid='test-children'>Text notification</p>
    render(
      <>
        <Toast
          isVisible={true}
          setVisibility={() => { }} >
          {children}
        </Toast>
      </>
    )
    expect(screen.getByTestId('test-children')).toBeInTheDocument()
  });
})


