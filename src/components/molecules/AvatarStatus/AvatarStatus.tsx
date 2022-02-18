import React, { FC } from 'react';
import Avatar, { IAvatarProps } from '../../atoms/Avatar/Avatar';
import Status, { IStatus } from '../../atoms/Status/Status';
import { StatusIconSize } from '../../atoms/Status/icons/types';
import { VariantClassic } from '../../../types';
import { sizeClass } from '../../../utils/helpers';
import { statusSize } from './helper';

import './AvatarStatus.scss';

export interface IAvatarStatus extends IAvatarProps, Omit<IStatus, 'size'> {
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
    <div className={`rf-avatar-status ${sizeClass[size]}`} title={props.fullName}>
      <Avatar {...props} size={size} />
      {variant && <div className={`rf-avatar-status__border ${sizeClass[size]} ${variant}`}/>}
      {type && (size !== 'xxxs' && size !== 'xxs' && size !== 'xs') && variant !== 'default' && (
        <div className={size === 's' ? 'rf-avatar-status__sticker--size-s' : 'rf-avatar-status__sticker'}>
          <Status size={statusSize[size] as StatusIconSize} type={type} />
        </div>
      )}
    </div>
  );
};

export default AvatarStatus;
