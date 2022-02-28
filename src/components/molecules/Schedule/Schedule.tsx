import React, {
  useState, useMemo, FC
} from 'react';
import './Schedule.scss';

import Button from '../../atoms/Button';
import CalendarPage, { ICalendarPageMark } from '../../atoms/CalendarPage';
import { ArrowsChevronLeft, ArrowsChevronRight } from '../../../indexIcon';

export interface IScheduleProps {
  /** Отображаемый по умолчанию год. */
  defaultYear: number;
  /** Отображаемый по умолчанию месяц. Отсчет начинается с нулю. */
  defaultMonth: number;
  /** Отметки на календаре. */
  marks?: ICalendarPageMark[];
}

// FIXME: Elements must have sufficient color contrast
const Schedule: FC<IScheduleProps> = ({ children, defaultYear, defaultMonth, marks = [] }) => {
  const [year, setYear] = useState(defaultYear);
  const [month, setMonth] = useState(defaultMonth);

  const { nextYear, nextMonth } = useMemo(() => {
    const date = new Date(year, month + 1, 1);
    return {
      nextYear: date.getFullYear(),
      nextMonth: date.getMonth()
    };
  }, [year, month]);

  const { monthName, nextMonthName } = useMemo(() => {
    let monthName = new Date(year, month).toLocaleString('ru', { month: 'long' });
    monthName = monthName.charAt(0).toUpperCase() + monthName.slice(1);
    let nextMonthName = new Date(nextYear, nextMonth).toLocaleString('ru', { month: 'long' });
    nextMonthName = nextMonthName.charAt(0).toUpperCase() + nextMonthName.slice(1);

    return {
      monthName,
      nextMonthName
    };
  }, [
    year,
    month,
    nextYear,
    nextMonth
  ]);

  const onPrevClick = () => {
    const date = new Date(year, month - 1, 1);
    setYear(date.getFullYear());
    setMonth(date.getMonth());
  };

  const onNextClick = () => {
    const date = new Date(year, month + 1, 1);
    setYear(date.getFullYear());
    setMonth(date.getMonth());
  };

  return (
    <div className='rf-schedule'>
      <div className='rf-schedule__calendars'>
        <div className='rf-schedule__calendar'>
          <div className='rf-schedule__heading rf-schedule__heading_start'>
            <Button
              className='rf-schedule__button'
              buttonType='ghost'
              size='s'
              round
              onClick={onPrevClick}
              aria-label='Назад'
              startAdornment={<ArrowsChevronLeft className='rf-schedule__chevron' />}
            />
            <div className='rf-schedule__date'>
              {monthName} {year}
            </div>
          </div>
          <CalendarPage year={year} month={month} marks={marks} />
        </div>
        <div className='rf-schedule__separator' />
        <div className='rf-schedule__calendar'>
          <div className='rf-schedule__heading rf-schedule__heading_end'>
            <div className='rf-schedule__date'>
              {nextMonthName} {nextYear}
            </div>
            <Button
              className='rf-schedule__button'
              buttonType='ghost'
              size='s'
              round
              onClick={onNextClick}
              aria-label='Вперед'
              startAdornment={<ArrowsChevronRight className='rf-schedule__chevron' />}
            />
          </div>
          <CalendarPage year={nextYear} month={nextMonth} marks={marks} />
        </div>
      </div>
      {children}
    </div>
  );
};

export default Schedule;
