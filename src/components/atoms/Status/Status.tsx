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
    type: IconType;
  /**
   Размер статуса
   @default s
   */
    size: StatusIconSize
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

const Status: FC<IStatus> = ({ type = 'online', size = 's' }) => {
  const TargetIconTag = iconTypes[type];
  return (
    <div className='rf-status'>
      <div className={`rf-status__wrapper rf-status__wrapper--size-${size}`}>
        <TargetIconTag size={size}/>
      </div>
    </div>
  );
};

export default Status;
