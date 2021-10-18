import React, { useMemo, FC } from 'react';
import './CalendarPage.scss';

import { classnames } from '../../../utils/classnames';
import { Variant } from '../../../types';

export interface ICalendarPageMark {
  /** Дата начала выделения. */
  from: Date;
  /** Дата конца выделения. */
  to?: Date;
  /** Цвет выделения. */
  variant: Variant;
}

export interface ICalendarPageProps {
  /** Год календаря. */
  year: number;
  /** Месяц календаря. Отсчет начинается с нулю. */
  month: number;
  /** Отметки на календаре. */
  marks?: ICalendarPageMark[];
}

const CalendarPage: FC<ICalendarPageProps> = ({ year, month, marks = [] }) => {
  const content = useMemo(() => {

    const prevYear = new Date(year, month - 1, 1).getFullYear();
    const prevMonth = new Date(year, month - 1, 1).getMonth();

    const nextYear = new Date(year, month + 1, 1).getFullYear();
    const nextMonth = new Date(year, month + 1, 1).getMonth();

    let startWeekday = new Date(year, month, 1).getDay();
    let endWeekday = new Date(year, month + 1, 0).getDay();

    if (startWeekday === 0) {
      startWeekday = 7;
    }

    if (endWeekday === 0) {
      endWeekday = 7;
    }

    const days = Array.from({ length: new Date(year, month + 1, 0).getDate() }, (_, i) => i + 1);

    const startDate = new Date(year, month, -(startWeekday - 1)).getDate();
    const prevDays = Array.from({ length: new Date(year, month, 0).getDate() - startDate }, (_, i) => i + startDate + 1);

    const nextDays = Array.from({ length: 7 - endWeekday }, (_, i) => i + 1);

    const marksMap: Record<number, Record<number, Record<number, string>>> = {};

    for (const mark of marks) {
      const fromYear = mark.from.getFullYear();
      const fromMonth = mark.from.getMonth();

      if (!marksMap[fromYear]) {
        marksMap[fromYear] = {};
      }

      if (!marksMap[fromYear][fromMonth]) {
        marksMap[fromYear][fromMonth] = {};
      }

      marksMap[fromYear][fromMonth][mark.from.getDate()] = mark.variant;

      if (mark.to) {

        const toYear = mark.to.getFullYear();
        const toMonth = mark.to.getMonth();

        if (!marksMap[toYear]) {
          marksMap[toYear] = {};
        }

        if (!marksMap[toYear][toMonth]) {
          marksMap[toYear][toMonth] = {};
        }

        marksMap[toYear][toMonth][mark.to.getDate()] = mark.variant;

        const i = new Date(mark.from);
        i.setDate(i.getDate() + 1);

        for (i; i < mark.to; i.setDate(i.getDate() + 1)) {
          const year = i.getFullYear();
          const month = i.getMonth();

          if (!marksMap[year]) {
            marksMap[year] = {};
          }

          if (!marksMap[year][month]) {
            marksMap[year][month] = {};
          }

          marksMap[year][month][i.getDate()] = `${mark.variant}-intermediate`;
        }
      }
    }

    return (
      <>
        {prevDays.map(i => (
          <div
            key={`${month - 1}-${i}`}
            className={classnames(
              'rf-calendar-page__cell rf-calendar-page__cell_disabled',
              marksMap[prevYear]?.[prevMonth]?.[i] && `rf-calendar-page__cell_${marksMap[prevYear][prevMonth][i]}`
            )}
          >
            {i}
          </div>
        ))}
        {days.map(i => (
          <div
            key={`${month}-${i}`}
            className={classnames(
              'rf-calendar-page__cell',
              marksMap[year]?.[month]?.[i] && `rf-calendar-page__cell_${marksMap[year][month][i]}`
            )}
          >
            {i}
          </div>
        ))}
        {nextDays.map(i => (
          <div
            key={`${month + 1}-${i}`}
            className={classnames(
              'rf-calendar-page__cell rf-calendar-page__cell_disabled',
              marksMap[nextYear]?.[nextMonth]?.[i] && `rf-calendar-page__cell_${marksMap[nextYear][nextMonth][i]}`
            )}
          >
            {i}
          </div>
        ))}
      </>
    );
  }, [year, month, marks]);

  return (
    <div className='rf-calendar-page'>
      <div className='rf-calendar-page__content'>
        <div className='rf-calendar-page__cell rf-calendar-page__cell_weekday'>Пн</div>
        <div className='rf-calendar-page__cell rf-calendar-page__cell_weekday'>Вт</div>
        <div className='rf-calendar-page__cell rf-calendar-page__cell_weekday'>Ср</div>
        <div className='rf-calendar-page__cell rf-calendar-page__cell_weekday'>Чт</div>
        <div className='rf-calendar-page__cell rf-calendar-page__cell_weekday'>Пт</div>
        <div className='rf-calendar-page__cell rf-calendar-page__cell_weekday'>Сб</div>
        <div className='rf-calendar-page__cell rf-calendar-page__cell_weekday'>Вс</div>
        {content}
      </div>
    </div>
  );
};

export default CalendarPage;
