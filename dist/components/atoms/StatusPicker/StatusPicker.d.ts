import { FC, InputHTMLAttributes } from 'react';
import './StatusPicker.scss';
export interface IPickerProps extends InputHTMLAttributes<HTMLLabelElement> {
    /** Получить значение оценки*/
    getRate?: (value: number, arr: string[][], pos: number) => number | void;
    /** Схема компонентов*/
    pickedValues: Array<Array<string>>;
    /** Позиция комонента*/
    position: number;
}
declare const StatusPicker: FC<IPickerProps>;
export default StatusPicker;
