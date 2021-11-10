import React, { FC } from 'react';
import './ScheduleLegend.scss';

const ScheduleLegend: FC = ({ children }) => {
  return (
    <div className='rf-schedule-legend'>
      {children}
    </div>
  );
};

export default ScheduleLegend;
