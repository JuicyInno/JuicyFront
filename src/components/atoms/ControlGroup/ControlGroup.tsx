import React, { FC } from 'react';
import './ControlGroup.scss';

export interface IControlGroupProps {
  /** Дополнительный класс */
  className?: string;
  /** Направление контента */
  direction?: 'vertical' | 'horizontal';
  /** Добавляет левый отступ для вложенной группы */
  inset?: boolean;
}

const ControlGroup: FC<IControlGroupProps> = ({
  className, direction = 'vertical', inset, children
}) => {
  return (
    <div className={`rf-control-group rf-control-group--${direction} ${inset ? 'rf-control-group--inset' : ''} ${className || ''}`}>
      {children}
    </div>
  );
};

export default ControlGroup;
