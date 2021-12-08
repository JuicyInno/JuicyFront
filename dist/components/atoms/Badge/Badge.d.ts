import React, { ReactNode } from 'react';
import './Badge.scss';
import { BadgeVariant } from '../../../types';
export interface IBadgeProps {
    /** Контент внутри бейджа*/
    children?: ReactNode;
    /** Содержимое бейджа*/
    badgeContent?: ReactNode;
    /** Имя класса*/
    className?: string;
    /**
     *  Цвет бейджа
     * @default 'info'
     */
    variant?: BadgeVariant;
    /**
     *  Максимальное значение символов отображаемое в бэйдж
     * @default 99
    */
    max?: number;
    /**
     * Показать бейдж
     * @default true
    */
    display?: boolean;
    /**
     * Расположить сбоку на одном уровне
     * @default false
    */
    placeNear?: boolean;
    /**
     * Размер badge
     * @default 's'
    */
    size?: 's' | 'm';
}
declare const Badge: React.FC<IBadgeProps>;
export default Badge;
