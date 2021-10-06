import React, {
  Dispatch, ReactNode, RefObject, SetStateAction, useCallback, useEffect, useRef, useState
} from 'react';
import './DatepickerCalendar.scss';
import {
  compareMonths, formatDate,
  getDaysForMonth, isCurrentDay, isCurrentMonth, months, stringToDate, weekDays
} from './datepicker.utils';
import {
  DateFormat,
  IDatepickerActivePeriod, IDatepickerDay, IDatepickerPeriodType, IDatepickerStack
} from './datepicker.types';
import { ChevronLeft } from '../../../../index';

interface IDatepickerCalendarProps {
  value: string;
  setInputValue: (value: string) => void;
  showCalendar: boolean;
  toggleCalendar: Dispatch<SetStateAction<boolean>>;
  minDate?: Date;
  maxDate?: Date;
  toggleRef: RefObject<HTMLDivElement>
  range: boolean;
  showTodayButton: boolean;
  locale: 'ru' | 'en';
  position: 'left' | 'right';
  format: DateFormat;
  separator: string;
  disableWeekDays: number[];
}

const DatepickerCalendar: React.FC<IDatepickerCalendarProps> = ({
  value,
  setInputValue,
  showCalendar,
  toggleCalendar,
  minDate,
  maxDate,
  toggleRef,
  range,
  locale,
  showTodayButton,
  position,
  format,
  separator,
  disableWeekDays
}: IDatepickerCalendarProps) => {

  const contentRef = useRef<HTMLDivElement>(null);

  // -------------------------------------------------------------------------------------------------------------------

  const setCurrent = useCallback((): Date => {
    if (value && !range) {
      return stringToDate(value, format);
    }

    return new Date();
  }, [value, range]);

  const setRange = (): IDatepickerStack => {
    if (value && range) {
      const values = value.split(' - ');
      const from = values[0]?.includes('_') ? undefined : values[0];
      const to = values[1]?.includes('_') ? undefined : values[1];
      return [from ? stringToDate(from, format) : undefined, to ? stringToDate(to, format) : undefined];
    }

    return [undefined, undefined];
  };

  const [currentDate, setCurrentDate] = useState<Date>(setCurrent());
  const [rangeDates, setRangeDates] = useState<IDatepickerStack>([undefined, undefined]);

  useEffect(() => {
    if (range) {
      setRangeDates(setRange());
    } else {
      setCurrentDate(setCurrent());
    }
  }, [value, range]);

  // -------------------------------------------------------------------------------------------------------------------

  const [coordinates, setCoordinates] = useState({
    top: '-99999px',
    left: 'auto',
    right: '0px'
  });

  const rearrangePosition = () => {
    if (contentRef.current && toggleRef.current) {
      const toggleRect: DOMRect = toggleRef.current.getBoundingClientRect();
      const listRect: DOMRect = contentRef.current.getBoundingClientRect();

      let left = '0px';
      let right = '0px';
      let top: number = toggleRect.height;
      const minGap = 10;

      if (toggleRect.height + toggleRect.top + listRect.height > document.body.offsetHeight) {
        top =
          toggleRect.height -
          (toggleRect.height + toggleRect.top + listRect.height - document.body.offsetHeight) -
          minGap;
      }

      if (position === 'left') {
        if (toggleRect.left + listRect.width > document.body.offsetWidth) {
          left = `${document.body.offsetWidth - listRect.width - toggleRect.left - minGap}px`;
        }

        right = 'auto';
      } else {
        if (listRect.left < 0) {
          right = `${listRect.left - minGap}px`;
        }

        left = 'auto';
      }


      setCoordinates({
        left,
        right,
        top: `${top}px`
      });
    }
  };

  useEffect(() => {
    setTimeout(() => {
      rearrangePosition();
    });
  }, [showCalendar]);

  // -------------------------------------------------------------------------------------------------------------------

  const onDateChange = (date: Date) => {
    if (range) {
      let dates: IDatepickerStack = [...rangeDates];

      if (dates[0] !== undefined && dates[1] !== undefined) {
        dates = [undefined, undefined];
      }

      if (dates[0] === undefined) {
        dates[0] = date;
        setInputValue(formatDate(date.getTime(), format).date + ` - __${separator}__${separator}____`);
      } else {
        dates[1] = date;

        if (dates[1].getTime() < dates[0]?.getTime()) {
          dates = [dates[1], dates[0]];
        }

        const newValue = `${formatDate(dates[0]?.getTime(), format).date} - ${formatDate(dates[1]?.getTime(), format).date}`;
        setInputValue(newValue);
        toggleCalendar(false);
      }
    } else {
      setInputValue(formatDate(date.getTime(), format).date);
      setCurrentDate(date);
      toggleCalendar(false);
    }

    setPeriodType('day');
  };

  // -------------------------------------------------------------------------------------------------------------------

  const [activePeriod, setActivePeriod] = useState<IDatepickerActivePeriod>(getDaysForMonth(currentDate));

  useEffect(() => {
    if (!range) {
      setActivePeriod(getDaysForMonth(currentDate));

      if (minDate && currentDate.getTime() < minDate.getTime()) {
        setActivePeriod(getDaysForMonth(minDate));
      }

      if (maxDate && currentDate.getTime() > maxDate.getTime()) {
        setActivePeriod(getDaysForMonth(maxDate));
      }
    } else {
      if (minDate && rangeDates[0] && rangeDates[0].getTime() < minDate.getTime()) {
        setActivePeriod(getDaysForMonth(minDate));
      }

      if (maxDate && rangeDates[1] && rangeDates[1].getTime() > maxDate.getTime()) {
        setActivePeriod(getDaysForMonth(maxDate));
      }
    }
  }, [
    currentDate,
    range,
    minDate,
    maxDate
  ]);

  useEffect(() => {
    if (range) {
      if (rangeDates[1] !== undefined) {
        setActivePeriod(getDaysForMonth(rangeDates[1]));
      } else if (rangeDates[0] !== undefined) {
        setActivePeriod(getDaysForMonth(rangeDates[0]));
      } else {
        setActivePeriod(getDaysForMonth(new Date()));
      }
    }
  }, [rangeDates, range]);

  // -------------------------------------------------------------------------------------------------------------------

  const onBlur = (lastButton: boolean) => {
    if (lastButton) {
      toggleCalendar(false);
    }
  };

  // -------------------------------------------------------------------------------------------------------------------

  const onDayClick = (date: Date) => {
    onDateChange(date);
  };

  const daysJSX = activePeriod.days.map(({
    period,
    date
  }: IDatepickerDay, i: number, array: IDatepickerDay[]) => {
    const periodClass = `rf-datepicker__calendar-day--${period}`;
    const rangeDayCondition = (rangeDates[0] && isCurrentDay(date, rangeDates[0])) || (rangeDates[1] && isCurrentDay(date, rangeDates[1]));
    const activeCondition = range ? rangeDayCondition : isCurrentDay(date, currentDate);
    const currentDayClass = activeCondition ? 'rf-datepicker__calendar-date--active' : '';

    const fromDateClass = rangeDates[0] && rangeDates[0]?.getTime() === date.getTime() ? 'rf-datepicker__calendar-date--from' : '';
    const toDateClass = rangeDates[1] && rangeDates[1]?.getTime() === date.getTime() ? 'rf-datepicker__calendar-date--to' : '';
    const inRangeClass = range && rangeDates[0] && rangeDates[1] &&
    (date.getTime() >= rangeDates[0].getTime() && date.getTime() <= rangeDates[1].getTime()) ?
      'rf-datepicker__calendar-tile--range rf-datepicker__calendar-date--range' : '';

    const d = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    const disabledWeekDay = disableWeekDays.includes(d.getDay());
    const disabledMin = minDate && minDate.getTime() > d.getTime();
    const disabledMax = maxDate && maxDate.getTime() < d.getTime();
    const disabledClass = disabledWeekDay || disabledMin || disabledMax ? 'rf-datepicker__calendar-date--disabled' : '';

    return (
      <button
        key={ date.getTime() }
        type='button'
        className={ `rf-datepicker__calendar-tile rf-datepicker__calendar-date rf-datepicker__calendar-day
        ${periodClass} ${currentDayClass} ${disabledClass} ${fromDateClass} ${toDateClass} ${inRangeClass}` }
        onClick={ () => onDayClick(date) }
        onBlur={ () => onBlur(i === array.length - 1) }
      >
        { date.getDate() }
      </button>
    );
  });

  // -------------------------------------------------------------------------------------------------------------------

  const onMonthClick = (e: React.MouseEvent, monthIndex: number) => {
    e.stopPropagation();
    setActivePeriod(getDaysForMonth(new Date(activePeriod.year, monthIndex)));
    setTimeout(() => {
      setPeriodType('day');
    });
  };

  const monthsJSX = months[locale].map((m: string, i: number, array: string[]) => {
    const d = new Date(activePeriod.year, i);
    const rangeMonthCondition = (rangeDates[0] && isCurrentMonth(d, rangeDates[0])) || (rangeDates[1] && isCurrentMonth(d, rangeDates[1]));
    const activeCondition = range ? rangeMonthCondition : isCurrentMonth(d, currentDate);
    const currentMonthClass = activeCondition ? 'rf-datepicker__calendar-date--active' : '';

    const fromMonthCondition = rangeDates[0] && isCurrentMonth(d, rangeDates[0]);
    const fromMonthClass = fromMonthCondition ? 'rf-datepicker__calendar-month-wrapper--from' : '';

    const toMonthClass = rangeDates[1] && isCurrentMonth(d, rangeDates[1]) ? 'rf-datepicker__calendar-month-wrapper--to' : '';
    const inRangeCondition = range && rangeDates[0] && rangeDates[1] &&
      (compareMonths(d, rangeDates[0]) >= 0 && compareMonths(d, rangeDates[1]) <= 0);
    const inRangeClass = inRangeCondition ?
      'rf-datepicker__calendar-tile--range rf-datepicker__calendar-month-wrapper--range' : '';

    const monthMs = 1000 * 3600 * 24 * 31;
    const disabledMin = minDate && ((minDate.getTime() - monthMs) > d.getTime());
    const disabledMax = maxDate && ((maxDate.getTime()) < d.getTime());
    const disabledClass = disabledMin || disabledMax ? 'rf-datepicker__calendar-date--disabled' : '';

    return (
      <div key={ m }
        className={ `rf-datepicker__calendar-month-wrapper ${inRangeClass} ${fromMonthClass} ${toMonthClass}` }>
        <button
          type='button'
          className={ `rf-datepicker__calendar-tile rf-datepicker__calendar-date rf-datepicker__calendar-month
        ${currentMonthClass} ${disabledClass}` }
          onClick={ (e: React.MouseEvent) => onMonthClick(e, i) }
          onBlur={ () => onBlur(i === array.length - 1) }>
          { m }
        </button>
      </div>
    );
  });

  // -------------------------------------------------------------------------------------------------------------------

  const stringYear = activePeriod.year.toString();
  const [decadeStart, setDecadeStart] = useState<number>(activePeriod.year - +stringYear[stringYear.length - 1]);
  useEffect(() => {
    setDecadeStart(activePeriod.year - +stringYear[stringYear.length - 1]);
  }, [activePeriod]);
  const years = [];

  for (let i = 0; i < 10; i++) {
    years.push(decadeStart + i);
  }

  const onYearClick = (e: React.MouseEvent, year: number) => {
    e.stopPropagation();
    setActivePeriod(getDaysForMonth(new Date(year, activePeriod.month)));
    setTimeout(() => {
      setPeriodType('month');
    });
  };

  const yearsJSX = years.map((y: number, i: number, array: number[]) => {
    const rangeMonthCondition = (rangeDates[0] && y === rangeDates[0].getFullYear()) ||
      (rangeDates[1] && y === rangeDates[1]?.getFullYear());
    const activeCondition = range ? rangeMonthCondition : activePeriod.year === y;
    const currentMonthClass = activeCondition ? 'rf-datepicker__calendar-date--active' : '';

    const fromYearClass = rangeDates[0] && rangeDates[0]?.getFullYear() === y ? 'rf-datepicker__calendar-year--from' : '';
    const toYearClass = rangeDates[1] && rangeDates[1]?.getFullYear() === y ? 'rf-datepicker__calendar-year--to' : '';
    const inRangeClass = range && rangeDates[0] && rangeDates[1] &&
    (y >= rangeDates[0]?.getFullYear() && y <= rangeDates[1]?.getFullYear()) ?
      'rf-datepicker__calendar-tile--range rf-datepicker__calendar-year--range' : '';

    const disabledMin = minDate && minDate.getFullYear() > y;
    const disabledMax = maxDate && maxDate.getFullYear() < y;
    const disabledClass = disabledMin || disabledMax ? 'rf-datepicker__calendar-date--disabled' : '';

    return (
      <div key={ y }
        className={ `rf-datepicker__calendar-year-wrapper ${inRangeClass} ${fromYearClass} ${toYearClass}` }>
        <button
          type='button'
          className={ `rf-datepicker__calendar-tile rf-datepicker__calendar-date rf-datepicker__calendar-year
        ${currentMonthClass} ${disabledClass}` }
          onClick={ (e: React.MouseEvent) => onYearClick(e, y) }
          onBlur={ () => onBlur(i === array.length - 1) }>
          { y }
        </button>
      </div>
    );
  });


  // -------------------------------------------------------------------------------------------------------------------

  const onPeriodChange = (n: number) => {
    if (periodType === 'day') {
      let nextMonth = activePeriod.month + n;
      let nextYear = activePeriod.year;

      if (nextMonth > 11) {
        nextMonth = 0;
        nextYear++;
      }

      if (nextMonth < 0) {
        nextMonth = 11;
        nextYear--;
      }

      setActivePeriod(getDaysForMonth(new Date(nextYear, nextMonth)));
    }

    if (periodType === 'month') {
      setActivePeriod(getDaysForMonth(new Date(activePeriod.year + n, activePeriod.month)));
    }

    if (periodType === 'year') {
      setDecadeStart((decade: number) => decade + n * 10);
    }
  };

  // -------------------------------------------------------------------------------------------------------------------

  const [periodType, setPeriodType] = useState<IDatepickerPeriodType>('day');

  const periodTypeLabel: Record<IDatepickerPeriodType, ReactNode> = {
    day: <> { months[locale][activePeriod.month] } { activePeriod.year } </>,
    month: <> { activePeriod.year } </>,
    year: <> { decadeStart } - { decadeStart + 9 } </>
  };

  const onPeriodTypeChange = () => {
    if (periodType === 'day') {
      setPeriodType('month');
    }

    if (periodType === 'month') {
      setPeriodType('year');
    }
  };

  // -------------------------------------------------------------------------------------------------------------------

  const prevYearDisabled = !!minDate && minDate.getFullYear() > activePeriod.year - 1;
  const nextYearDisabled = !!maxDate && maxDate.getFullYear() < activePeriod.year + 1;

  const arrowsDisabled = {
    prevArrowDisabled: {
      day: prevYearDisabled && !!minDate && minDate.getMonth() > activePeriod.month - 1,
      month: prevYearDisabled,
      year: !!minDate && minDate.getFullYear() > decadeStart
    },
    nextArrowDisabled: {
      day: nextYearDisabled && !!maxDate && maxDate.getMonth() < activePeriod.month + 1,
      month: nextYearDisabled,
      year: !!maxDate && maxDate.getFullYear() < decadeStart + 10
    }
  };

  const prevArrowDisabled: boolean = arrowsDisabled.prevArrowDisabled[periodType];
  const nextArrowDisabled: boolean = arrowsDisabled.nextArrowDisabled[periodType];

  const d = new Date();
  const today = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  const disabledMin = !!minDate && minDate.getTime() > today.getTime();
  const disabledMax = !!maxDate && maxDate.getTime() < today.getTime();
  const todayDisabled: boolean = disabledMin || disabledMax;

  // -------------------------------------------------------------------------------------------------------------------

  return (
    <div className='rf-datepicker__calendar' ref={ contentRef } style={ coordinates }>
      <header className='rf-datepicker__calendar-header'>
        <div className='rf-calendar__control'>
          <button type='button' className='rf-calendar__button rf-calendar__button--arrow rf-calendar__button-prev'
            disabled={ prevArrowDisabled } onClick={ () => onPeriodChange(-1) }>
            <span className='rf-datepicker__calendar-left'>
              <ChevronLeft/>
            </span>
          </button>
          <button type='button' className='rf-calendar__button rf-calendar__label-button'
            onClick={ onPeriodTypeChange }>
            <span className='rf-datepicker__calendar-label'>
              { periodTypeLabel[periodType] }
            </span>
          </button>
          <button type='button' className='rf-calendar__button rf-calendar__button--arrow rf-calendar__button-next'
            disabled={ nextArrowDisabled } onClick={ () => onPeriodChange(1) }>
            <span className='rf-datepicker__calendar-right'>
              <ChevronLeft/>
            </span>
          </button>
        </div>
        {
          showTodayButton && (
            <button type='button' className='rf-datepicker__calendar-today' disabled={ todayDisabled }
              onClick={ () => onDateChange(new Date()) }>
              { locale === 'ru' ? 'Сегодня' : 'Today' }
            </button>
          )
        }
      </header>

      { periodType === 'day' && (
        <div className='rf-datepicker__calendar-week'>
          { weekDays[locale].map((d: string) => <div
            className='rf-datepicker__calendar-tile rf-datepicker__calendar-week-day' key={ d }>{ d }</div>) }
        </div>
      ) }

      <div className='rf-datepicker__calendar-periods'>
        { periodType === 'day' && daysJSX }
        { periodType === 'month' && monthsJSX }
        { periodType === 'year' && yearsJSX }
      </div>

    </div>
  );
};

export default DatepickerCalendar;
