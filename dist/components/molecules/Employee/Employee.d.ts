import React from 'react';
import './Employee.scss';
import { IUser, TooltipPosition } from '../../../types/projects.types';
export interface IEmployeeProps {
    /** Пользователь */
    user: IUser;
    /** Позиция тултипа подсказки */
    position?: TooltipPosition;
    /** Портал для тултипа */
    portal?: boolean;
    /** Заголовок карточки */
    title?: string;
    /** Коллбек клика по кнопке. */
    onClick?: () => void;
    /** Показывать кнопку */
    showActionButton?: boolean;
    /** Показывать тень */
    showBoxShadow?: boolean;
    /** Цвет tooltip */
    tooltipBackground?: 'white' | 'default';
}
declare const Employee: React.FC<IEmployeeProps>;
export default Employee;
