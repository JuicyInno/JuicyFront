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
            <Button
              className='rf-schedule__button'
              buttonType='ghost'
              size='s'
              round
              onClick={onPrevClick}
              aria-label='Назад'
              startAdornment={
                <svg
                  className='rf-schedule__chevron'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M14.6783 4.7652C15.0841 5.13981 15.1094 5.77246 14.7348 6.17829L9.36091 12L14.7348 17.8217C15.1094 18.2275 15.0841 18.8602 14.6783 19.2348C14.2725 19.6094 13.6398 19.5841 13.2652 19.1783L7.2652 12.6783C6.9116 12.2952 6.9116 11.7048 7.2652 11.3217L13.2652 4.82172C13.6398 4.4159 14.2725 4.3906 14.6783 4.7652Z'
                    fill='currentColor'
                  />
                </svg>
              }
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
              startAdornment={
                <svg
                  className='rf-schedule__chevron'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M8.32172 4.7652C7.9159 5.13981 7.89059 5.77246 8.2652 6.17829L13.6391 12L8.2652 17.8217C7.89059 18.2275 7.9159 18.8602 8.32172 19.2348C8.72754 19.6094 9.3602 19.5841 9.7348 19.1783L15.7348 12.6783C16.0884 12.2952 16.0884 11.7048 15.7348 11.3217L9.7348 4.82172C9.3602 4.4159 8.72754 4.3906 8.32172 4.7652Z'
                    fill='currentColor'
                  />
                </svg>
              }
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
