import { DateFormat, DateLocale, IDatepickerActivePeriod, IFormattedDate } from './datepicker.types';
export declare const weekDays: Record<DateLocale, string[]>;
export declare const months: Record<DateLocale, string[]>;
export declare const getDaysForMonth: (d?: Date | undefined) => IDatepickerActivePeriod;
export declare const isCurrentDay: (d1: Date, d2?: Date | undefined) => boolean;
export declare const isCurrentMonth: (d1: Date, d2?: Date | undefined) => boolean;
export declare const compareMonths: (d1: Date, d2?: Date | undefined) => number;
export declare const parseToFormat: (format: DateFormat, defaultValue?: string | number | Date | undefined) => {
    date: Date;
    string: string;
};
export declare const getWeekDay: (n: number, locale: DateLocale) => string;
export declare const getMonthName: (value: string) => string;
export declare const addLeadingZeros: (number: number, length?: number) => string;
export declare const formatDate: (date: string | number | undefined, format: DateFormat) => IFormattedDate;
export declare const stringToDate: (s: string, format: DateFormat, isUTC?: boolean) => Date;
export declare const replaceAt: (str: string, index: number, replacement: string) => string;
declare type GM = (string | RegExp)[];
/** Mask */
export declare const generateMask: (inputValue: string, format: DateFormat, range: boolean, showDayOfWeek: boolean, dayOfWeek: string[]) => GM;
export {};
