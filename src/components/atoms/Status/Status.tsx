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
  Boss, Decree
} from './icons';
import { IconType, StatusIconSize } from './icons/types';

import './Status.scss';

export interface IStatus {
  /** Тип иконки
   @default online
   */
    type?: IconType;
  /**
   Размер статуса
   @default m
   */
  statusSize?: StatusIconSize
}

const iconTypes = {
  online: Online,
  icon: Icon,
  decline: Decline,
  load: Load,
  in: In,
  out: Out,
  vacation: Vacation,
  birthday: Birthday,
  disease: Disease,
  businessTrip: BusinessTrip,
  remoteWork: RemoteWork,
  boss: Boss,
  decree: Decree
};

const Status: FC<IStatus> = ({ type = 'online', statusSize = 'm' }) => {
  const TargetIconTag = iconTypes[type];
  return (
    <div className='rf-status'>
      <div className={`rf-status__wrapper rf-status__wrapper--size-${statusSize}`}>
        <TargetIconTag size={statusSize}/>
      </div>
    </div>
  );
};

export default Status;
