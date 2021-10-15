import React, { FC } from 'react';
import { VariantClassic } from '../../../types';
import AvatarBorder from '../../../assets/icons/AvatarBorder';
import Avatar from '../Avatar';

import './AvatarStatus.scss';
import Badge from '../Badge';
import Check from '../../../assets/icons/Check';
import Redo from '../../../assets/icons/Redo';
import Cross from '../../../assets/icons/Cross';
import AvatarPlainBorder from '../../../assets/icons/AvatarPlainBorder';

export interface IAvatarProps {
    /** Ссылка на фото */
    photo?: string;
    /** Фамилия и Имя */
    fullName?: string;
    variant?: VariantClassic;
    hasBadge?: boolean;
}

const AvatarStatus: FC<IAvatarProps> = ({ photo, fullName, variant = 'none', hasBadge }) => {

  const borderStyle = `rf-avatar-status__border rf-avatar-status__border-color_${variant}`;
  const plainBorderStyle = `rf-avatar-status__plain-border rf-avatar-status__border-color_${variant}`;
  const badgeColor = `rf-avatar-status__badge-color_${variant}`;

  const getBadgeContent = () => {
    let icon;
    switch (variant) {
    case 'yellow': icon = <Redo className='rf-avatar-status__icon-style' />;
      break;
    case 'red': icon = <Cross className='rf-avatar-status__icon-style' />;
      break;
    default: icon = <Check className='rf-avatar-status__icon-style' />;
    }

    return <div className={`rf-avatar-status__badge ${badgeColor}`}>
      {icon}
    </div>;
  };

  return <Badge position='bottomRight' badgeContent={getBadgeContent()} display={variant !== 'none' && !!hasBadge} >
    <div className='rf-avatar-status__avatar-wrapper'>
      <Avatar
        fullName={fullName}
        size='l'
        photo={photo}
      />
      { (variant !== 'none' && hasBadge) ?
        <div className='rf-avatar-status__border-wrapper'>
          <AvatarBorder className={borderStyle}/>
        </div> :
        <div className='rf-avatar-status__plain-border-wrapper'>
          <AvatarPlainBorder className={plainBorderStyle} />
        </div>
      }
    </div>
  </Badge>;
};

export default AvatarStatus;
