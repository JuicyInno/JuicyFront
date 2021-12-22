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
