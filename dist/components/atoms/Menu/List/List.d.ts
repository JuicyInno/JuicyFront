import React from 'react';
import './List.scss';
import { IListElement } from '../../../../types';
interface IListProps {
    /** Элементы меню */
    list: IListElement[];
    /** Цвет tooltip */
    tooltipBackground?: 'white' | 'default';
}
declare const List: React.FC<IListProps>;
export default List;
