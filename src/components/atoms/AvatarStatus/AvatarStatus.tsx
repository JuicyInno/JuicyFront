import React, { FC } from 'react';
import { Size, Variant } from '../../../types';
import AvatarBorder from '../../../assets/icons/AvatarBorder';
import Avatar from '../Avatar';

import './AvatarStatus.scss';
import Badge from '../Badge';
import Check from '../../../assets/icons/Check';
import Redo from '../../../assets/icons/Redo';
import Cross from '../../../assets/icons/Cross';

export interface IAvatarProps {
    /** Ссылка на фото */
    photo?: string;
    /** Фамилия и Имя */
    fullName?: string;
    variant?: Variant;
    hasBadge?: boolean;
    size?: Size;
}

const AvatarStatus: FC<IAvatarProps> = ({ photo, fullName, variant = 'none', size = 'l', hasBadge }) => {

  const borderStyle = `rf-avatar-status__border-size_${size} rf-avatar-status__border-color_${variant}`;
  // по дизайну бадж с галочкой всегда зелёный
  const badgeColor = `rf-avatar-status__badge-color_${variant === 'default' || variant === 'blue' ? 'green' : variant}`;

  const getBadgeContent = () => {
    let icon;
    switch (variant) {
    case 'yellow': icon = <Redo className='rf-avatar-status__icon-style' />;
      break;
    case 'red': icon = <Cross className='rf-avatar-status__icon-style' />;
      break;
    default: icon = <Check className='rf-avatar-status__icon-style' />;
    }

    return <div className={`rf-avatar-status__badge rf-avatar-status__badge-border-size_${size} ${badgeColor}`}>
      {icon}
    </div>;
  };

  return <Badge position='bottomRight' badgeContent={getBadgeContent()} display={variant !== 'none' && !!hasBadge} >
    <div className='rf-avatar-status__avatar-wrapper'>
      <Avatar
        fullName={fullName}
        size={size}
        photo={photo}
      />
      <div className='rf-avatar-status__border-wrapper'>
        <AvatarBorder className={borderStyle} />
      </div>
    </div>
  </Badge>;
};

export default AvatarStatus;
