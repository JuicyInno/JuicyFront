import React from 'react';
import { render, screen } from '@testing-library/react';

import CalendarPage, { ICalendarPageMark } from './CalendarPage';

describe('Test <CalendarPage/> component', () => {
  
  it('should render calendar', () => {
    render(<CalendarPage year={2021} month={8} />);
    expect(screen.getAllByText('30')).toHaveLength(2);
    expect(screen.getAllByText('1')).toHaveLength(2);
    expect(screen.getAllByText('30')[0]).toHaveClass('rf-calendar-page__cell_disabled');
    expect(screen.getAllByText('1')[1]).toHaveClass('rf-calendar-page__cell_disabled');
  });

  it('should render marks', () => {
    const marks: ICalendarPageMark[] = [
      {
        from: new Date(2021, 7, 30),
        to: new Date(2021, 8, 3),
        variant: 'default'
      },
      {
        from: new Date(2021, 8, 4),
        to: new Date(2021, 8, 6),
        variant: 'yellow'
      },
      {
        from: new Date(2021, 8, 8),
        to: new Date(2021, 8, 10),
        variant: 'red'
      },
      {
        from: new Date(2021, 8, 25),
        to: new Date(2021, 9, 2),
        variant: 'magenta'
      }
    ];

    render(<CalendarPage year={2021} month={8} marks={marks}/>);

    expect(screen.getAllByText('30')[0]).toHaveClass('rf-calendar-page__cell_default');
    expect(screen.getAllByText('2')[0]).toHaveClass('rf-calendar-page__cell_default-intermediate');
    expect(screen.getAllByText('3')[0]).toHaveClass('rf-calendar-page__cell_default');

    expect(screen.getAllByText('4')[0]).toHaveClass('rf-calendar-page__cell_yellow');
    expect(screen.getAllByText('5')[0]).toHaveClass('rf-calendar-page__cell_yellow-intermediate');
    expect(screen.getAllByText('6')[0]).toHaveClass('rf-calendar-page__cell_yellow');

    expect(screen.getAllByText('8')[0]).toHaveClass('rf-calendar-page__cell_red');
    expect(screen.getAllByText('9')[0]).toHaveClass('rf-calendar-page__cell_red-intermediate');
    expect(screen.getAllByText('10')[0]).toHaveClass('rf-calendar-page__cell_red');

    expect(screen.getAllByText('25')[0]).toHaveClass('rf-calendar-page__cell_magenta');
    expect(screen.getAllByText('26')[0]).toHaveClass('rf-calendar-page__cell_magenta-intermediate');
    expect(screen.getAllByText('2')[1]).toHaveClass('rf-calendar-page__cell_magenta');
  });
});
