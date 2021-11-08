import React from 'react';

import { classnames } from '../../../utils/classnames';
import Avatar, { IAvatarProps } from '../../atoms/Avatar';
import Badge from '../../atoms/Badge';

import './AvatarStatus.scss';

export interface IAvatarStatusProps extends IAvatarProps {
  className?: string;
  badgeCount?: number;
}

// TODO: заменить badge на Status
export const AvatarStatus: React.FC<IAvatarStatusProps> = ({ className, badgeCount, size, ...props }: IAvatarStatusProps) => {
  return <div className={classnames('rf-avatar-status', `rf-avatar-status--${size}`, className)}>
    <Badge position='bottomRight' variant='green' className='rf-avatar-status__badge'><Avatar size={size} {...props} /></Badge>
  </div>;
};

export default AvatarStatus;
