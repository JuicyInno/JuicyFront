import { FC, InputHTMLAttributes, ReactNode } from 'react';
import './Radio.scss';
import { Variant } from '../../../types';
export interface IRadioProps extends InputHTMLAttributes<HTMLInputElement> {
    /** Лейбл */
    label: ReactNode;
    /** Значение */
    value: string;
    /** Отображение иконки */
    icon?: boolean;
    /**
     * Вариант
     * @deprecated
     */
    variant?: Variant;
    /**
     * 100% ширины
     * @default true
     */
    fullWidth?: boolean;
}
declare const Radio: FC<IRadioProps>;
export default Radio;
