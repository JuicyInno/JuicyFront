<<<<<<< HEAD
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


=======
import React from 'react';
import { render, screen } from '@testing-library/react';
import Toast from './Toast';

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
});

describe('Test <Toast /> component', () => {
  it('should render Toast component', () => {
    const { rerender } = render(
      <Toast isVisible setVisibility={jest.fn}>
        <p>Текст уведомления</p>
      </Toast>
    );

    expect(screen.getByTestId('rf-toast')).toBeInTheDocument();
    expect(screen.getByText('Текст уведомления')).toBeInTheDocument();

    rerender(
      <Toast isVisible setVisibility={jest.fn}>
        <div>message</div>
      </Toast>
    );

    expect(screen.getByText('message')).toBeInTheDocument();
  });

  it('should isVisible', () => {
    const { rerender } = render(
      <Toast isVisible={false} setVisibility={jest.fn}>
        <p>Текст уведомления</p>
      </Toast>
    );

    expect(screen.queryByTestId('rf-toast')).not.toBeInTheDocument();

    rerender(
      <Toast isVisible={true} setVisibility={jest.fn}>
        <p>Текст уведомления</p>
      </Toast>
    );

    expect(screen.getByTestId('rf-toast')).toBeInTheDocument();
  });

  it('should be call setVisibility after 2sec', () => {
    const setVisibility = jest.fn();

    render(
      <Toast isVisible setVisibility={setVisibility}>
        <p>Текст уведомления</p>
      </Toast>
    );

    jest.advanceTimersByTime(2000);
    expect(setVisibility).toBeCalled();
  });
});
>>>>>>> 2d6821b0c9b59d0eb9a0c34ab1b09501ac8294f1
