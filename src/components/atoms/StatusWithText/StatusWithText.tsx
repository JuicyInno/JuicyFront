import React, { FC } from 'react';
import './StatusWithText.scss';
import {
  StatusError, StatusReturn, StatusRelease, StatusReleaseSecondary
} from '../../../indexIcon';

export interface IStatusWithTextProps {
    /** Текст статуса */
    statusText: string;
    /** Критичность (0 - None (blue) / 1 - Error (red) / 2 - Warning (yellow) / 3 - Success (green))*/
    criticality: string;
}

type IStatusColor = { symbol: string, icon: JSX.Element }

const statusColors: { [key: string]: IStatusColor } = {
  '0': {
    symbol: 'rf-status-with-text__title--default',
    icon: <StatusReleaseSecondary />
  },
  '1': {
    symbol: 'rf-status-with-text__title--error',
    icon: <StatusError />
  },
  '2': {
    symbol: 'rf-status-with-text__title--warning',
    icon: <StatusReturn />
  },
  '3': {
    symbol: 'rf-status-with-text__title--success',
    icon: <StatusRelease />
  }
};

const StatusWithText: FC<IStatusWithTextProps> = ({ statusText = '', criticality = '0' }) => {
  return (
    <div className='rf-status-with-text'>
      <div className='rf-status-with-text__icon-wrapper'>
        {statusColors[criticality].icon}
      </div>
      <p className={`rf-status-with-text__title ${statusColors[criticality].symbol}`}>
        {statusText}
      </p>
    </div>
  );
};

export default StatusWithText;
