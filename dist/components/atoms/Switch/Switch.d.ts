import { FC, ReactNode } from 'react';
import './Switch.scss';
export interface ISwitchProps {
    /** Функция вызываемая при изменении значения*/
    onChange?: (f: boolean) => void;
    /** Основной текст*/
    label?: ReactNode;
    /** Второстепенный текст*/
    helperText?: ReactNode;
    /** Значение по умолчанию*/
    value?: boolean;
    /** залочен или нет*/
    disabled?: boolean;
    /** размер*/
    size?: 's' | 'm';
}
declare const Switch: FC<ISwitchProps>;
export default Switch;
