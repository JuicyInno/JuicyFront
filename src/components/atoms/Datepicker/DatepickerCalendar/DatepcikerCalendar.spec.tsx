import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import DatepickerCalendar from './DatepickerCalendar';

describe('Test <DatepickerCalendar /> component', () => {
  it('should be call setInputValue', () => {
    const setInputValue = jest.fn();
    const { container } = render(
      <DatepickerCalendar value='20.12.21' toggleCalendar={jest.fn} separator='-' setInputValue={setInputValue} />
    );

    const firstElement = container.getElementsByClassName('rf-datepicker__calendar-date').item(0);

    if (!firstElement) {
      fail('Нет элемента');
    }

    fireEvent.click(firstElement);

    expect(setInputValue).toBeCalledTimes(1);
  });

  it('should be call toggleCalendar', () => {
    const toggleCalendar = jest.fn();
    const { container } = render(
      <DatepickerCalendar value='20.12.21' separator='-' setInputValue={jest.fn} toggleCalendar={toggleCalendar} />
    );

    const firstElement = container.getElementsByClassName('rf-datepicker__calendar-date').item(0);

    if (!firstElement) {
      fail('Нет элемента');
    }

    fireEvent.click(firstElement);

    expect(toggleCalendar).toBeCalledTimes(1);
  });
});
