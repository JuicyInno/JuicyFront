import React, { ReactNode } from 'react';
import './Hint.scss';
import { VariantClassic } from '../../../types';
export interface IHintProps {
    /** Основное сообщение*/
    children?: ReactNode | string;
    /** Заголовок*/
    title?: ReactNode | string;
    /** Текст кнопки*/
    button?: ReactNode;
    /** Цвет сообщения */
    variant?: VariantClassic;
    /** Иконка */
    icon?: 'info';
    /** Максимальная ширина */
    maxWidth?: string;
}
declare const Hint: React.FC<IHintProps>;
export default Hint;
