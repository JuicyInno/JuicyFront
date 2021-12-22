import React from 'react';
import FatalError from './FatalError'
import { getByTestId, render, screen } from '@testing-library/react';

describe('FatalError default text render', () => {

  it('should be render error screen with default Error text', () => {
    const { container } = render(<FatalError />)
    expect(container.getElementsByClassName('fatal-error__label')[0].innerHTML).toBe('Ошибка');
    expect(container.getElementsByClassName('fatal-error__message')[0].innerHTML).toBe('Что-то пошло не так. Пожалуйста, обновите страницу. ')
  })

  it('should be render error screen with default Error text', () => {
    const { container } = render(<FatalError title='Ошибка 500' description='Сервер не смог выполнить запрос из-за непредвиденной ошибки' />)
    expect(container.getElementsByClassName('fatal-error__label')[0].innerHTML).toBe('Ошибка 500');
    expect(container.getElementsByClassName('fatal-error__message')[0].innerHTML).toBe('Сервер не смог выполнить запрос из-за непредвиденной ошибки ')
  })
})
