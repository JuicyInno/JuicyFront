import React, { FC } from 'react';
import './ScheduleLegendItem.scss';

import { classnames } from '../../../utils/classnames';
import { Variant } from '../../../types';

export interface IScheduleLegendItemProps {
  /** Цвет точки. */
  variant: Variant;
}

const ScheduleLegendItem: FC<IScheduleLegendItemProps> = ({ children, variant }) => {
  return (
    <div className={classnames('rf-schedule-legend-item', `rf-schedule-legend-item_${variant}`)}>
      {children}
    </div>
  );
};

export default ScheduleLegendItem;
