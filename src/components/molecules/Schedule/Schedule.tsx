import React, {
  useState, useMemo, FC
} from 'react';
import './Schedule.scss';

import Button from '../../atoms/Button';
import CalendarPage, { ICalendarPageMark } from '../../atoms/CalendarPage';


export interface IScheduleProps {
  /** Отображаемый по умолчанию год. */
  defaultYear: number;
  /** Отображаемый по умолчанию месяц. Отсчет начинается с нулю. */
  defaultMonth: number;
  /** Отметки на календаре. */
  marks?: ICalendarPageMark[];
}

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
            <Button buttonType='ghost' size='s' round onClick={onPrevClick} aria-label='Назад' startAdornment={
              <svg
                className='rf-schedule__chevron'
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M12.2318 3.971C12.57 4.28317 12.5911 4.81039 12.2789 5.14857L7.80068 10L12.2789 14.8514C12.5911 15.1896 12.57 15.7168 12.2318 16.029C11.8936 16.3412 11.3664 16.3201 11.0543 15.9819L6.05425 10.5652C5.75959 10.246 5.75959 9.75399 6.05425 9.43477L11.0543 4.0181C11.3664 3.67992 11.8936 3.65883 12.2318 3.971Z'
                  fill='currentColor'
                />
              </svg>
            } />
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
            <Button buttonType='ghost' size='s' round onClick={onNextClick} aria-label='Вперед' startAdornment={
              <svg
                className='rf-schedule__chevron'
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M6.93468 3.971C6.5965 4.28317 6.57541 4.81039 6.88758 5.14857L11.3658 10L6.88758 14.8514C6.57541 15.1896 6.5965 15.7168 6.93468 16.029C7.27287 16.3412 7.80008 16.3201 8.11225 15.9819L13.1123 10.5652C13.4069 10.246 13.4069 9.75399 13.1123 9.43477L8.11225 4.0181C7.80008 3.67992 7.27287 3.65883 6.93468 3.971Z'
                  fill='currentColor'
                />
              </svg>
            } />
          </div>
          <CalendarPage year={nextYear} month={nextMonth} marks={marks} />
        </div>
      </div>
      {children}
    </div>
  );
};

export default Schedule;
