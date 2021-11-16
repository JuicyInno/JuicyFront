import React, { FC } from 'react';
import './StatusWithText.scss';
import Release from '../../../assets/icons/24px/Status/Release';
import Error from '../../../assets/icons/24px/Status/Error';
import Return from '../../../assets/icons/24px/Status/Return';
import ReleaseSecondary from '../../../assets/icons/24px/Status/ReleaseSecondary';

export interface IStatusWithTextProps {
    /** Текст статуса */
    statusText: string;
    /** Критичность (0 - None (no color) / 1 - Error (red) / 2 - Warning (yellow) / 3 - Success (green))*/
    criticality: string;
}

const statusColors: any = {
  '0': {
    symbol: 'rf-status-with-text__default',
    icon: <ReleaseSecondary />
  },
  '1': {
    symbol: 'rf-status-with-text__error',
    icon: <Error />
  },
  '2': {
    symbol: 'rf-status-with-text__warning',
    icon: <Return />
  },
  '3': {
    symbol: 'rf-status-with-text__success',
    icon: <Release />
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
