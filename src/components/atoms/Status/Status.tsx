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
    background: 'defaultColorBackground',
    symbol: 'defaultColorSymbol',
    icon: <CircleConfirm />
  },
  '1': {
    background: 'errorColorBackground',
    symbol: 'errorColorSymbol',
    icon: <Cross />
  },
  '2': {
    background: 'warningColorBackground',
    symbol: 'warningColorSymbol',
    icon: <Redo />
  },
  '3': {
    background: 'successColorBackground',
    symbol: 'successColorSymbol',
    icon: <CircleConfirm />
  },
  '4': {
    background: 'noneColorBackground',
    symbol: 'noneColorSymbol',
    icon: <CircleConfirm />
  },
};

const Status: FC<IProps> = ({ statusText, criticality }) => {
  return <div className='status__wrapper'>
    <div className={`status__icon-wrapper ${statusColors[criticality].background || statusColors['4'].background}`}>
      <div className={`status__icon ${statusColors[criticality].symbol || statusColors['4'].symbol}`}>
        {statusColors[criticality].icon}
      </div>
    </div>
    <p className={`status__text ${statusColors[criticality].symbol}`}>{statusText}</p>
  </div>;
};

export default Status;
