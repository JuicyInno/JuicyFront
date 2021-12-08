import React from 'react';
import './InputPhone.scss';
import { IInputProps } from '../Input';
export interface IInputPhoneCountry {
    /** Компонент для иконки флага страны */
    flag: React.ComponentType<{
        className?: string;
    }>;
    /** Название страны */
    text: string;
    /** Код страны */
    code: number;
}
export interface IInputPhoneProps extends IInputProps {
    defaultValue?: string;
    /** Список стран для выбора */
    countries?: IInputPhoneCountry[];
    /** Выбранная страна по умолчанию */
    defaultCountry?: IInputPhoneCountry;
}
declare const InputPhone: React.FC<IInputPhoneProps>;
export default InputPhone;
