import React, { FC } from 'react';
import {
  Birthday, BusinessTrip,
  Decline, In, RemoteWork, Online, Load, Disease, Boss, Icon, Vacation, Out, Decree
} from './icons';
import { IconType, StatusIconSize } from './icons/types';

import './Status.scss';

export interface IStatus {
    type: IconType;
    size: StatusIconSize
}

const getIcon = (type: IconType, size: StatusIconSize): JSX.Element => {
  const iconTypes = {
    online: <Online size={size} />,
    icon: <Icon size={size} />,
    decline: <Decline size={size} />,
    load: <Load size={size} />,
    in: <In size={size} />,
    out: <Out size={size} />,
    vacation: <Vacation size={size} />,
    birthday: <Birthday size={size} />,
    disease: <Disease size={size} />,
    businessTrip: <BusinessTrip size={size} />,
    remoteWork: <RemoteWork size={size} />,
    boss: <Boss size={size} />,
    decree: <Decree size={size} />
  };

  return iconTypes[type];
};

const Status: FC<IStatus> = ({ type = 'online', size = 'xs' }) => {
  return (
    <div>
      <div className='rf-status'>
        <div className={`rf-status__wrapper rf-status__wrapper--size-${size}`}>
          {getIcon(type, size)}
        </div>
      </div>
    </div>
  );
};

export default Status;
