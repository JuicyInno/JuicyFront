import React, { ReactNode } from 'react';
import './Datepicker.scss';
import { DateFormat, IDateVariants } from './DatepickerCalendar/datepicker.types';
import { DropdownPosition } from '../../../types';
export interface IDatepickerProps {
    /** Имя поля */
    name?: string;
    /** Текст Placeholder */
    placeholder?: string;
    /** Значение по умолчанию */
    defaultValue?: Date | string | number;
    /** Скрыть поле */
    disabled?: boolean;
    /** Только для просмотра */
    readOnly?: boolean;
    /** Минимальное значения даты */
    min?: Date | string | number;
    /** Максимальное значения даты */
    max?: Date | string | number;
    /** Функция измекнения значения даты */
    onChange?: (value: IDateVariants, name?: string) => void;
    /** Диапазон */
    range?: boolean;
    /** Показывать день недели в инпуте */
    showDayOfWeek?: boolean;
    /** Локализация */
    locale?: 'ru' | 'en';
    /** Кнопка Сегодня */
    showTodayButton?: boolean;
    /** Положение выпадающего меню */
    position?: DropdownPosition;
    /** Формат даты */
    format?: DateFormat;
    /** Ограничения на дни недели 0 - 6 */
    disableWeekDays?: number[];
    /** Кастомная кнопка */
    children?: ReactNode | ReactNode[];
    /** Переводит инпут в невалидный статус */
    invalid?: boolean;
    /**
     * Добавляет инпуту белый фон
     * @default true
     */
    filled?: boolean;
    /** Цвет tooltip */
    tooltipBackground?: 'default' | 'white';
}
declare const Datepicker: React.FC<IDatepickerProps>;
export default Datepicker;
