import React, { ReactNode, RefObject } from 'react';
import './Dropdown.scss';
import { DropdownPosition } from '../../../types';
export interface ICoordinates {
    top: string;
    right: string;
    bottom: string;
    left: string;
}
export interface IDropdownProps {
    /** Контент */
    children: ReactNode | ReactNode[];
    /** Флаг отображения */
    show: boolean;
    /** Ссылка на кнопку, которая открывает элемент */
    toggleRef: RefObject<HTMLElement>;
    /** Функция закрытия дропдауна */
    onClose: () => void;
    /** Положение выпадающего меню */
    position?: DropdownPosition;
    /** Стили */
    style?: React.CSSProperties;
}
declare const Dropdown: React.FC<IDropdownProps>;
export default Dropdown;
