import React, { FC } from 'react';
import CircleConfirm from '../../../assets/icons/Check';
import Cross from '../../../assets/icons/Cross';
import Redo from '../../../assets/icons/Redo';
import './Status.scss';

interface IProps {
    statusText: string;
    /** Критичность (0 - None (no color) / 1 - Error (red) / 2 - Warning (yellow) / 3 - Success (green))*/
    criticality: string;
}

const statusColors: any = {
  '0': {
    background: 'rf-status__defaultColorBackground',
    symbol: 'rf-status__defaultColorSymbol',
    icon: <CircleConfirm className='rf-status__icon' />
  },
  '1': {
    background: 'rf-status__errorColorBackground',
    symbol: 'rf-status__errorColorSymbol',
    icon: <Cross className='rf-status__icon' />
  },
  '2': {
    background: 'rf-status__warningColorBackground',
    symbol: 'rf-status__warningColorSymbol',
    icon: <Redo className='rf-status__icon' />
  },
  '3': {
    background: 'rf-status__successColorBackground',
    symbol: 'rf-status__successColorSymbol',
    icon: <CircleConfirm className='rf-status__icon' />
  },
  '4': {
    background: 'rf-status__noneColorBackground',
    symbol: 'rf-status__noneColorSymbol',
    icon: <CircleConfirm className='rf-status__icon' />
  },
};

const Status: FC<IProps> = ({ statusText = 'Статус неопределён', criticality = '4' }) => {
  return (
    <div className='rf-status__wrapper'>
      <div
        className={`rf-status__icon-wrapper ${statusColors[criticality].background || statusColors['4'].background}`}
        data-testid='status-background'
      >
        <div
          className={`${statusColors[criticality].symbol || statusColors['4'].symbol}`}
          data-testid='status-symbol'
        >
          {statusColors[criticality].icon}
        </div>
      </div>
      <p className={`rf-status__text ${statusColors[criticality].symbol}`}>{statusText}</p>
    </div>
  );
};

export default Status;
