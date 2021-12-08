import React, { ReactNode } from 'react';
import './Menu.scss';
import { IListElement, IMenuContext, DropdownPosition } from '../../../types';
export interface IListProps {
    /** Кнопка открытия меню */
    children: ReactNode;
    /** Элементы меню */
    list?: IListElement[];
    /** Компонент вместо списка */
    content?: ReactNode;
    /** Класс */
    className?: string;
    /** Положение выпадающего меню */
    position?: DropdownPosition;
}
/** Контекст для передачи функций работы с меню. */
export declare const MenuContext: React.Context<IMenuContext>;
declare const Menu: React.FC<IListProps>;
export default Menu;
