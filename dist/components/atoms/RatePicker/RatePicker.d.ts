import { FC, InputHTMLAttributes } from 'react';
import './RatePicker.scss';
export interface IPickerProps extends InputHTMLAttributes<HTMLLabelElement> {
    /** Величина диапазона*/
    sizePicker?: number;
    /** Заданное значение выбранного диапазона*/
    defaultPickedValue?: number;
    /** Включить диапазон*/
    isActive?: boolean;
    /** Текст контента диапазона*/
    textContent?: string;
    /** Нижнее подчеркивание*/
    isUnderline?: boolean;
    /** Реверсировать поярдок диапазона*/
    isReverse?: boolean;
    /** Получить значение оценки*/
    getRate?: (value: string) => number | void;
}
declare const RatePicker: FC<IPickerProps>;
export default RatePicker;
