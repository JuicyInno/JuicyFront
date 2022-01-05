import React from 'react';
import { fireEvent, render, screen, waitFor, act } from '@testing-library/react';
import Notifications from './Notifications';
import { sendNotification } from '.';

beforeAll(() => {
  jest.useFakeTimers();
});

afterAll(() => {
  jest.useRealTimers();
});

describe('Test <Notifications /> component', () => {
  it('should render Notification', async () => {
    act(() => {
      render(<Notifications />);
    });

    expect(screen.queryByTestId('rf-notifications')).not.toBeInTheDocument();

    /** Добавление нотийикации */
    act(() => {
      sendNotification({ message: 'Данные сохранены.' });
    });

    expect(await screen.getByTestId('rf-notifications')).toBeInTheDocument();
    expect(await screen.getByText('Данные сохранены.')).toBeInTheDocument();

    /** Удаление нотийикации */
    act(() => {
      jest.advanceTimersByTime(8000);
    });

    expect(await screen.queryByTestId('rf-notifications')).not.toBeInTheDocument();
  });

  it('should be render list of notifications', async () => {
    act(() => {
      render(<Notifications />);
    });

    /** Добавление нотийикации */
    act(() => {
      sendNotification({ message: 'Данные сохранены.', id: 1 });
      sendNotification({ message: 'Другая нотификация', id: 2 });
      sendNotification({ message: 'Другая нотификация 2', id: 3 });
    });

    expect(await screen.getByTestId('rf-notifications')).toBeInTheDocument();
    expect(await screen.getByText('Данные сохранены.')).toBeInTheDocument();
    expect(await screen.getByText('Другая нотификация')).toBeInTheDocument();
    expect(await screen.getByText('Другая нотификация 2')).toBeInTheDocument();

    /** Удаление нотийикации */
    act(() => {
      jest.advanceTimersByTime(8000);
    });

    expect(await screen.queryByTestId('rf-notifications')).not.toBeInTheDocument();
  });

  it('should sendNotification with delay 1000ms', async () => {
    act(() => {
      render(<Notifications />);
    });

    /** Добавление нотийикации */
    act(() => {
      sendNotification({ message: 'Данные сохранены.', id: 1 }, 1000);
    });

    expect(await screen.getByTestId('rf-notifications')).toBeInTheDocument();
    expect(await screen.getByText('Данные сохранены.')).toBeInTheDocument();

    /** Удаление нотийикации */
    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(await screen.queryByTestId('rf-notifications')).not.toBeInTheDocument();
  });
});
