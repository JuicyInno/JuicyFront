import React, { ReactNode } from 'react';
import './Tag.scss';
import { Variant } from '../../../types';
export interface ITagProps {
    /** Цвет тега. */
    variant?: 'grey' | Variant;
    /** Иконка в начале тега. */
    icon?: ReactNode;
    /** Коллбек клика по тегу. */
    onClick?: () => void;
    /** Коллбек клика по кнопке удаления. */
    onRemove?: () => void;
    /** Дизейбл клика по тегу и кнопке удаления. */
    disabled?: boolean;
    /** Максимальная длина строки */
    maxLength?: number;
}
declare const Tag: React.FC<ITagProps>;
export default Tag;
