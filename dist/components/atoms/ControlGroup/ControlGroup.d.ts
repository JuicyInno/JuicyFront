import { FC } from 'react';
import './ControlGroup.scss';
export interface IControlGroupProps {
    /** Дополнительный класс */
    className?: string;
    /** Направление контента */
    direction?: 'vertical' | 'horizontal';
    /** Добавляет левый отступ для вложенной группы */
    inset?: boolean;
}
declare const ControlGroup: FC<IControlGroupProps>;
export default ControlGroup;
