import React, { FC } from 'react';
import Avatar, { IAvatarProps } from '../../atoms/Avatar/Avatar';
import Status, { IStatus } from '../../atoms/Status/Status';
import { VariantClassic } from '../../../types';
import { sizeClass } from '../../../utils/helpers';
import { statusSize } from './helper';

import './AvatarStatus.scss';
import { StatusIconSize } from '../../atoms/Status/icons/types';

export interface IAvatarStatus extends IAvatarProps, IStatus {
    /** Цвет статуса (обводки) */
    variant?: VariantClassic;
}

const AvatarStatus: FC<IAvatarStatus> = ({
  variant,
  size = 'm',
  type,
  ...props
}) => {
  return (
    <div className={`rf-avatar-status ${sizeClass[size]}`}>
      <Avatar {...props} size={size} />
      {variant && <div className={`rf-avatar-status__border ${sizeClass[size]} ${variant}`}/>}
      {type && (size !== 'xxs' && size !== 'xs') && variant !== 'default' && (
        <div className='rf-avatar-status__sticker'>
          <Status statusSize={statusSize[size] as StatusIconSize} type={type} />
        </div>
      )}
    </div>
  );
};

export default AvatarStatus;
