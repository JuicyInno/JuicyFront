import React, { FC } from 'react';
import './ScheduleLegendItem.scss';

import { classnames } from '../../../utils/classnames';
import { Variant } from '../../../types';

export interface IScheduleLegendItemProps {
  /** Класс для корневого элемента. */
  className?: string;
  color: Variant;
}

const ScheduleLegendItem: FC<IScheduleLegendItemProps> = ({ children, className, color }) => {
  return (
    <div className={classnames(className, 'rf-schedule-legend-item', `rf-schedule-legend-item_${color}`)}>
      {children}
    </div>
  );
};

export default ScheduleLegendItem;
