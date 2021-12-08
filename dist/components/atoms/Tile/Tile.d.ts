import React, { ReactNode } from 'react';
import './Tile.scss';
export interface ITileProps {
    /** Дочерние элементы */
    children: ReactNode | ReactNode[];
    /** Класс */
    className?: string;
    /**
     * Тип
     * @default default
     * */
    type?: 'default' | 'stretch';
    /** Скрыть фон */
    hideBackground?: boolean;
    /**
     * Внутренние отступы
     * @default 20px
     */
    padding?: number | string;
    /** Скругление улов
     * @default 20px
     */
    borderRadius?: number | string;
    /** Типы теней/бордер
     * @default default
     */
    variant?: 'default' | 'clickable-default' | 'non-clickable' | 'clickable-hover' | 'border';
}
declare const Tile: React.FC<ITileProps>;
export default Tile;
