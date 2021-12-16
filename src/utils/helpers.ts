import { MonoTypeOperatorFunction } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  IFileData, IFormattedDate, Size
} from '../types';
import { pdfFile } from '../components/molecules/PDFViewer/pdf';

const months = [
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
];
const monthsShort = [
  'янв',
  'фев',
  'мар',
  'апр',
  'май',
  'июнь',
  'июль',
  'авг',
  'сент',
  'окт',
  'нояб',
  'дек'
];
const week = [
  'воскресенье',
  'понедельник',
  'вторник',
  'среда',
  'четверг',
  'пятница',
  'суббота'
];

/**
 * Функция для добавления окончаний к месяцам
 * @param value - имя месяца
 *
 */
export const getMonthName = (value: string) => {
  if (value) {
    const arr: string[] = value.split('');
    let result;

    if (months.indexOf(value) !== -1) {
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

/** Добавить нули */
export const addLeadingZeros = (number: number, length = 2) => {
  return ('0'.repeat(length) + number).slice(-length);
};

/**
 * Функция для форматирования даты
 *  @param date - дата, которую нужно преобразовать
 *
 */
export const formatDate = (date: string | number | undefined): IFormattedDate => {
  if (!date) {
    date = Date.now();
  }

  const tempDate = new Date(date);
  const month = addLeadingZeros(tempDate.getMonth() + 1);
  const monthLong = getMonthName(months[tempDate.getMonth()]);
  const monthName = months[tempDate.getMonth()];
  const monthShort = monthsShort[tempDate.getMonth()];

  const dayOfMonth = addLeadingZeros(tempDate.getDate());
  const dayOfWeek = week[tempDate.getDay()];
  const tempHour = tempDate.getHours();
  const hour = addLeadingZeros(tempHour);
  const tempMinutes = tempDate.getMinutes();
  const minutes = addLeadingZeros(tempMinutes);
  const year = tempDate.getFullYear();

  return {
    month,
    monthLong,
    monthShort,
    monthName,
    dayOfMonth,
    dayOfWeek,
    hour,
    minutes,
    year,
    date: `${dayOfMonth}.${month}.${year}`,
    time: `${hour}:${minutes}`
  };
};

/** Преобразовать dd.mm.yyy в Date */
export const stringToDate = (s: string): Date => {
  const d = new Date();

  if (!s) {
    return d;
  }

  const formatToday = formatDate(d.getTime()).date.split('.');

  let [dd, mm, yyyy] = s.slice(0, 10).split('.');
  dd = dd.includes('_') ? formatToday[0] : dd;
  mm = mm.includes('_') ? formatToday[1] : mm;
  yyyy = yyyy.includes('_') ? formatToday[2] : yyyy;
  return new Date(+yyyy, +mm - 1, +dd);
};

/**
 * Функция обрезки текста
 * @param text - строка, которую нужно сократить
 * @param n - количество видимых символов
 * @param symbol - символ, который нужно поставить в конце строки
 */
export const getShortString = (text: string, n = 50, symbol = '...') => {
  return n > text.length ? text : `${text.slice(0, n)}${symbol}`;
};

/** Заменить подстроку по индексу */
export const replaceAt = (str: string, index: number, replacement: string): string => {
  return str.substr(0, index) + replacement + str.substr(index + replacement.length);
};

/** Общий класс для цветового оформления */
export const variantClass: Record<string, string> = {
  base: 'rf--base',
  accent: 'rf--accent',
  complement: 'rf--complement',
  info: 'rf--info',
  success: 'rf--success',
  danger: 'rf--danger',
  warning: 'rf--warning'
};

export const sizeClass: Record<Size, string> = {
  'xxs': 'rf--xxs',
  'xs': 'rf--xs',
  's': 'rf--s',
  'm': 'rf--m',
  'l': 'rf--l',
  'xl': 'rf--xl',
  'xxl': 'rf--xxl',
  'xxxl': 'rf--xxxl',
  'xxxxl': 'rf--xxxxl'
};

export const iconSize: Record<Size, string> = {
  'xxs': '16',
  'xs': '24',
  's': '32',
  'm': '40',
  'l': '48',
  'xl': '56',
  'xxl': '64',
  'xxxl': '72',
  'xxxxl': '80'
};

function oDataServ(data:any) {
  (data.results ) && (data = data.results);

  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      (key === '__metadata') && delete data[key];

      if (Array.isArray(data[key])) {
        data[key].forEach((item: any) => {
          oDataServ(item);
        });
      } else if (typeof data[key] === 'object') {
        data[key] = oDataServ(data[key]);
      }
    }
  }

  return data;
}

export const oDataTransform = <T>():MonoTypeOperatorFunction<T> => map((data: any) => {
  delete data['@odata.context'];
  delete data['@odata.metadataEtag'];
  return data.d ? oDataServ(data.d) as T : data as T;
});

/** Функция для добавления пробелов в число */
export const numberWithSpaces = (x: number, n = 3, s = ' '): string => {
  const parts = x.toString().split('.');
  const regex = new RegExp(`\\B(?=(\\d{${n}})+(?!\\d))`, 'g');
  parts[0] = parts[0].replace(regex, s);
  return parts.join('.');
};

export const UTCToLocal = (date: Date | number): Date => {
  const offset = -new Date().getTimezoneOffset();
  const withOffset = new Date(date).getTime() + offset * 60000;
  return new Date(withOffset);
};

export const LocalToUTC = (date: Date | number): Date => {
  const offset = -new Date().getTimezoneOffset();
  const withOffset = new Date(date).getTime() - offset * 60000;
  return new Date(withOffset);
};

/** Выделить текст из HTML */
export const extractTextFromHTML = (element: string): string => {
  let result = '';
  let skip = false;

  for (let i = 0; i < element.length; i++) {
    if (element[i] === '<') {
      skip = true;
    }

    if (element[i] === '>') {
      skip = false;
      continue;
    }

    if (skip) {
      continue;
    }

    result += element[i];
  }

  return result;
};

/** Debounce */
export function debounce(fn: (...args: any) => any, ms: number) {
  let timeout: any;
  return function(...args: any) {
    // @ts-ignore
    const fnCall = () => fn.apply(this, args);
    clearTimeout(timeout);
    timeout = setTimeout(fnCall, ms);
  };
}

export const initialFiles: IFileData[] = [
  {
    file: {
      lastModified: 1633960085077,
      name: 'screenshot1.jpg',
      webkitRelativePath: '',
    } as File,
    base64: '',
  },
  {
    file: {
      lastModified: 1633960085077,
      name: 'pdfFile.pdf',
      webkitRelativePath: '',
    } as File,
    base64: pdfFile,
  },
  {
    file: {
      lastModified: 1633960085077,
      name: 'quston.png',
      webkitRelativePath: '',
    } as File,
    base64: '',
    id: '00505683-c29f-1eec-93d2-5fcd53023f78'
  },
  {
    file: {
      lastModified: 1633960085077,
      name: 'word_file.docx',
      webkitRelativePath: '',
    } as File,
    base64: '',
    id: '00505683-c29f-1eec-9390-0b884bf2ff6f'
  }
];

/** Сегодня приведенное к 00:00:00 */
export const today = (utc?: boolean): number => {
  const date = new Date();
  date.setHours(0);
  date.setMinutes(0);
  date.setSeconds(0);
  date.setMilliseconds(0);
  return utc ? UTCToLocal(date).getTime() : date.getTime();
};
