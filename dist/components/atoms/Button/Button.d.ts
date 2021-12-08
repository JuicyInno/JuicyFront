import { FC, HTMLProps, ReactNode } from 'react';
import { Size, VariantClassic } from '../../../types';
import './Button.scss';
export declare type ButtonType = 'primary' | 'light' | 'secondary' | 'ghost' | 'danger' | 'success' | 'round' | 'round-active' | 'icon' | 'icon-round' | 'icon-round-active' | 'iconFill' | 'text' | 'white';
export interface IButtonProps extends Omit<HTMLProps<HTMLButtonElement>, 'size'> {
    /** Внешний вид */
    buttonType?: ButtonType;
    /** Тип */
    type?: 'button' | 'submit' | 'reset';
    /** Размер */
    size?: Size;
    /** Прелоудер */
    preloader?: boolean;
    /** 100% ширина */
    fullWidth?: boolean;
    /** цвет шрифта ТЕКСТОВОЙ кнопки */
    textColor?: VariantClassic;
    /** Круглая кнопка */
    round?: boolean;
    /**
     * Условие, по которому кнопка нажата
     * @deprecated
     */
    pressedCondition?: boolean;
    /** Контент для вставки в начало кнопки */
    startAdornment?: ReactNode;
    /** Контент для вставки в конец кнопки */
    endAdornment?: ReactNode;
}
declare const Button: FC<IButtonProps>;
export default Button;
