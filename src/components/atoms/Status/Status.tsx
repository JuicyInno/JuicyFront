import React, { FC } from 'react';
import {
  Online,
  Icon,
  Decline,
  Load,
  In,
  Out,
  Vacation,
  Birthday,
  Disease,
  BusinessTrip,
  RemoteWork,
  Boss,
  Decree,
  WithdrawStaff
} from './icons';
import { IconType, StatusIconSize } from './icons/types';

import './Status.scss';
import Edit from './icons/Edit';

export interface IStatus {
  /** Тип иконки
   @default online
   */
  type?: IconType;
  /**
   Размер статуса
   @default m
   */
  size?: StatusIconSize
}

const iconTypes = {
  online: Online,
  icon: Icon,
  decline: Decline,
  load: Load,
  in: In,
  out: Out,
  withdrawStaff: WithdrawStaff,
  vacation: Vacation,
  birthday: Birthday,
  disease: Disease,
  businessTrip: BusinessTrip,
  remoteWork: RemoteWork,
  boss: Boss,
  decree: Decree,
  edit: Edit
};


// FIXME: Elements must have sufficient color contrast
const Status: FC<IStatus> = ({ type = 'online', size = 'm' }) => {
  const TargetIconTag = iconTypes[type];
  return (
    <div className='rf-status'>
      <div className={`rf-status__wrapper rf-status__wrapper--size-${size} rf-status__wrapper--type-${type}`}>
        <TargetIconTag size={size}/>
      </div>
    </div>
  );
};

export default Status;
