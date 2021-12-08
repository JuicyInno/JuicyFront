import { MonoTypeOperatorFunction } from 'rxjs';
import { IFileData, IFormattedDate, Size } from '../types';
/**
 * Функция для добавления окончаний к месяцам
 * @param value - имя месяца
 *
 */
export declare const getMonthName: (value: string) => string;
/** Добавить нули */
export declare const addLeadingZeros: (number: number, length?: number) => string;
/**
 * Функция для форматирования даты
 *  @param date - дата, которую нужно преобразовать
 *
 */
export declare const formatDate: (date: string | number | undefined) => IFormattedDate;
/** Преобразовать dd.mm.yyy в Date */
export declare const stringToDate: (s: string) => Date;
/**
 * Функция обрезки текста
 * @param text - строка, которую нужно сократить
 * @param n - количество видимых символов
 * @param symbol - символ, который нужно поставить в конце строки
 */
export declare const getShortString: (text: string, n?: number, symbol?: string) => string;
/** Заменить подстроку по индексу */
export declare const replaceAt: (str: string, index: number, replacement: string) => string;
/** Общий класс для цветового оформления */
export declare const variantClass: Record<string, string>;
export declare const sizeClass: Record<Size, string>;
export declare const iconSize: Record<Size, string>;
export declare const oDataTransform: <T>() => MonoTypeOperatorFunction<T>;
/** Функция для добавления пробелов в число */
export declare const numberWithSpaces: (x: number, n?: number, s?: string) => string;
export declare const UTCToLocal: (date: Date | number) => Date;
export declare const LocalToUTC: (date: Date | number) => Date;
/** Выделить текст из HTML */
export declare const extractTextFromHTML: (element: string) => string;
/** Debounce */
export declare function debounce(fn: (...args: any) => any, ms: number): (...args: any) => void;
export declare const initialFiles: IFileData[];
/** Сегодня приведенное к 00:00:00 */
export declare const today: () => number;
