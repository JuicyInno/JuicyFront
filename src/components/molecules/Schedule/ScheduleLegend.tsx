import React, { FC } from 'react';
import './ScheduleLegend.scss';

import { classnames } from '../../../utils/classnames';

export interface IScheduleLegendProps {
  /** Класс для корневого элемента. */
  className?: string;
}

const ScheduleLegend: FC<IScheduleLegendProps> = ({ children, className }) => {
  return (
    <div className={classnames(className, 'rf-schedule-legend')}>
      {children}
    </div>
  );
};

export default ScheduleLegend;
