import {
  DateFormat,
  DateLocale, IDatepickerActivePeriod,
  IFormattedDate
} from '../components/atoms/Datepicker/DatepickerCalendar/datepicker.types';

import { today } from './helpers';

export const months: Record<DateLocale, string[]> = {
  ru: [
    'январь',
    'февраль',
    'март',
    'апрель',
    'май',
    'июнь',
    'июль',
    'август',
    'сентябрь',
    'октябрь',
    'ноябрь',
    'декабрь'
  ],
  en: [
    'january',
    'february',
    'march',
    'april',
    'may',
    'june',
    'july',
    'august',
    'september',
    'october',
    'november',
    'december'
  ]
};
export const addLeadingZeros = (number: number, length = 2) => {
  return ('0'.repeat(length) + number).slice(-length);
};

export const getMonthName = (value: string) => {
  if (value) {
    const arr: string[] = value.split('');
    let result;

    if (months.en.indexOf(value) !== -1) {
      arr.splice(arr.length - 1, 1, 'я');
      result = arr.join('');
      return result;
    }

    arr.push('а');
    result = arr.join('');
    return result;
  }

  return '';
};
export const weekDays: Record<DateLocale, string[]> = {
  ru: [
    'пн',
    'вт',
    'ср',
    'чт',
    'пт',
    'сб',
    'вс'
  ],
  en: [
    'mon',
    'tue',
    'wed',
    'thu',
    'fri',
    'sat',
    'sun'
  ]
};
export const formatDate = (date: string | number | undefined, format: DateFormat): IFormattedDate => {
  if (!date) {
    date = today();
  }

  const tempDate = new Date(date);
  const month = addLeadingZeros(tempDate.getMonth() + 1);
  const monthLong = getMonthName(months.en[tempDate.getMonth()]);
  const monthName = months.en[tempDate.getMonth()];

  const dayOfMonth = addLeadingZeros(tempDate.getDate());
  const dayOfWeek = weekDays.en[tempDate.getDay()];
  const tempHour = tempDate.getHours();
  const hour = addLeadingZeros(tempHour);
  const tempMinutes = tempDate.getMinutes();
  const minutes = addLeadingZeros(tempMinutes);
  const year = tempDate.getFullYear();

  const separator = format[2];
  const order = format.split(separator);

  let dateString = '';

  if (order[0] === 'dd') {
    dateString = `${dayOfMonth}${separator}${month}${separator}${year}`;
  } else {
    dateString = `${month}${separator}${dayOfMonth}${separator}${year}`;
  }

  return {
    month,
    monthLong,
    monthShort: '',
    monthName,
    dayOfMonth,
    dayOfWeek,
    hour,
    minutes,
    year,
    date: dateString,
    time: `${hour}:${minutes}`
  };
};

export const stringToDate = (s: string, format: DateFormat, isUTC = false): Date => {
  const d = new Date();

  if (!s) {
    return d;
  }

  const separator = format[2];
  const formatToday = formatDate(d.getTime(), format).date.split(separator);

  const order = format.split(separator);
  let dd, mm, yyyy;
  const dayFirst = order[0] === 'dd';

  if (dayFirst) {
    [dd, mm, yyyy] = s.slice(0, 10).split(separator);
  } else {
    [mm, dd, yyyy] = s.slice(0, 10).split(separator);
  }

  dd = dd.includes('_') ? formatToday[dayFirst ? 0 : 1] : dd;
  mm = mm.includes('_') ? formatToday[dayFirst ? 1 : 0] : mm;
  yyyy = yyyy.includes('_') ? formatToday[2] : yyyy;
  return !isUTC ? new Date(+yyyy, +mm - 1, +dd) : new Date(Date.UTC(+yyyy, +mm - 1, +dd));
};

export const replaceAt = (str: string, index: number, replacement: string): string => {
  return str.substr(0, index) + replacement + str.substr(index + replacement.length);
};
export const parseToFormat = (format: DateFormat, defaultValue?: Date | string | number): {
    date: Date,
    string: string
} => {
  const separator = format[2];
  let inputValue = '';

  if (typeof defaultValue === 'string' && defaultValue.length > 0) {
    let newInputValue = defaultValue;

    if (newInputValue[2] !== separator) {
      newInputValue = replaceAt(newInputValue, 2, separator);
    }

    if (newInputValue[5] !== separator) {
      newInputValue = replaceAt(newInputValue, 5, separator);
    }

    inputValue = newInputValue;
  }

  if (typeof defaultValue === 'number') {
    inputValue = formatDate(defaultValue, format).date;
  }

  if (defaultValue instanceof Date) {
    inputValue = formatDate(defaultValue.getTime(), format).date;
  }

  const order = format.split(separator);
  let dd, mm, yyyy;

  if (order[0] === 'dd') {
    [dd, mm, yyyy] = inputValue.split(separator);
  } else {
    [mm, dd, yyyy] = inputValue.split(separator);
  }

  const date = new Date(+yyyy, +mm - 1, +dd);

  return {
    date,
    string: inputValue
  };
};
export const isCurrentDay = (d1: Date, d2?: Date): boolean => {
  const d = d2 || new Date();

  return d1.getDate() === d.getDate() &&
      d1.getMonth() === d.getMonth() &&
      d1.getFullYear() === d.getFullYear();
};

export const isCurrentMonth = (d1: Date, d2?: Date): boolean => {
  const d = d2 || new Date();
  return d1.getMonth() === d.getMonth() && d1.getFullYear() === d.getFullYear();
};

export const compareMonths = (d1: Date, d2?: Date): number => {
  const d = d2 || new Date();

  const m1 = d1.getMonth();
  const y1 = d1.getFullYear();

  const m2 = d.getMonth();
  const y2 = d.getFullYear();

  const date1 = new Date(y1, m1);
  const date2 = new Date(y2, m2);

  if (date1.getTime() > date2.getTime()) {
    return 1;
  } else if (date1.getTime() < date2.getTime()) {
    return -1;
  }

  return 0;
};
export const getDaysForMonth = (d?: Date): IDatepickerActivePeriod => {
  const date = d || new Date();

  const result: IDatepickerActivePeriod = {
    month: date.getMonth(),
    year: date.getFullYear(),
    days: []
  };

  const daysInCurrentMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const weekDayOfFirstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  const weekDayOfLastDay = new Date(date.getFullYear(), date.getMonth(), daysInCurrentMonth).getDay();

  if (weekDayOfFirstDay !== 1) {
    let daysFromPrevMonth = weekDayOfFirstDay - 2;

    if (daysFromPrevMonth < 0) {
      daysFromPrevMonth = 7 - Math.abs(daysFromPrevMonth);
    }

    let lastDayInPrevMonth = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

    for (let i = daysFromPrevMonth; i >= 0; i--) {
      result.days[i] = {
        period: 'prev',
        date: new Date(date.getFullYear(), date.getMonth() - 1, lastDayInPrevMonth)
      };
      lastDayInPrevMonth--;
    }
  }

  for (let i = 1; i <= daysInCurrentMonth; i++) {
    result.days.push({
      period: 'current',
      date: new Date(date.getFullYear(), date.getMonth(), i)
    });
  }

  if (weekDayOfLastDay !== 0) {
    const daysFromNextMonth = 7 - weekDayOfLastDay;

    for (let i = 1; i <= daysFromNextMonth; i++) {
      result.days.push({
        period: 'next',
        date: new Date(date.getFullYear(), date.getMonth() + 1, i)
      });
    }
  }

  return result;
};
export const getWeekDay = (n: number, locale: DateLocale): string => {
  const weekDays: Record<DateLocale, string[]> = {
    ru: [
      'Вс',
      'Пн',
      'Вт',
      'Ср',
      'Чт',
      'Пт',
      'Сб'
    ],
    en: [
      'Sun',
      'Mon',
      'Tue',
      'Wed',
      'Thu',
      'Fri',
      'Sat'
    ]
  };

  return weekDays[locale][n];
};


export const generateMask = (
  inputValue: string,
  format: DateFormat,
  range: boolean,
  showDayOfWeek: boolean,
  dayOfWeek: string[]
) => {
  let mask, fromMask, toMask;
  const separator = format[2];
  const order = format.split(separator);

  const dayFirst = order[0] === 'dd';

  const dd = [/[0-3]/, inputValue[dayFirst ? 0 : 3] === '3' ? /[0,1]/ : inputValue[dayFirst ? 0 : 3] === '0' ? /[1-9]/ : /[0-9]/];

  const mm = [/[0,1]/, inputValue[dayFirst ? 3 : 0] === '0' ? /[1-9]/ : /[0-2]/];

  const yyyy = [
    /[1,2]/,
    /\d/,
    /\d/,
    /\d/
  ];

  const ddTo = [/[0-3]/, inputValue[dayFirst ? 13 : 16] === '3' ? /[0,1]/ : inputValue[dayFirst ? 13 : 16] === '0' ? /[1-9]/ : /[0-9]/];

  const mmTo = [/[0,1]/, inputValue[dayFirst ? 16 : 13] === '0' ? /[1-9]/ : /[0-2]/, ];

  const first = dayFirst ? dd : mm;
  const second = dayFirst ? mm : dd;

  const firstTo = dayFirst ? ddTo : mmTo;
  const secondTo = dayFirst ? mmTo : ddTo;

  if (range) {
    const defaultFromMask = [
      ...first,
      separator,
      ...second,
      separator,
      ...yyyy
    ];

    const defaultToMask = [
      ...firstTo,
      separator,
      ...secondTo,
      separator,
      ...yyyy
    ];

    fromMask = defaultFromMask;
    toMask = defaultToMask;

    if (showDayOfWeek) {

      if (dayOfWeek[0]) {
        fromMask.push(' ');

        for (let i = 0; i < dayOfWeek[0].length; i++) {
          fromMask.push(dayOfWeek[0][i]);
        }

      } else {
        fromMask = defaultFromMask;
      }

      if (dayOfWeek[1]) {
        toMask.push(' ');

        for (let i = 0; i < dayOfWeek[1].length; i++) {
          toMask.push(dayOfWeek[1][i]);
        }
      } else {
        toMask = defaultToMask;
      }
    }

    mask = [
      ...fromMask,
      ' ',
      '-',
      ' ',
      ...toMask,
    ];

  } else {
    const defaultMask = [
      ...first,
      separator,
      ...second,
      separator,
      ...yyyy
    ];

    mask = defaultMask;

    if (showDayOfWeek) {
      if (dayOfWeek[0]) {
        mask.push(' ');

        for (let i = 0; i < dayOfWeek[0].length; i++) {
          mask.push(dayOfWeek[0][i]);
        }
      } else {
        mask = defaultMask;
      }
    }
  }

  return mask;
};
