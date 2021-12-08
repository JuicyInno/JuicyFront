import React, { ReactNode } from 'react';
import './Chip.scss';
export interface ITagProps {
    /** Текст */
    children: ReactNode | ReactNode[];
    /** Функция вызываемая при изменении значения */
    onClick?: () => void;
    /** Функция вызываемая при нажатии на крестик */
    onRemove?: () => void;
    /** залочен или нет */
    disabled?: boolean;
    /** размер */
    size?: 's' | 'm';
    /** Вариант отображения */
    type?: 'primary' | 'secondary' | 'outline';
    /** Иконка */
    icon?: ReactNode;
    /** Позиция отображения иконки */
    iconPosition?: 'right' | 'left';
    /** Максимальная длина строки */
    maxLength?: number;
    /**
     * Цвет tooltip
     * @default 'default'
     */
    tooltipBackground?: 'default' | 'white';
}
declare const Chip: React.FC<ITagProps>;
export default Chip;
