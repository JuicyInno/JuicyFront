import React, { ReactNode, useRef } from 'react';
import './Badge.scss';
import { BadgeVariant } from '../../../types';

export interface IBadgeProps {
  children: ReactNode;
  badgeContent?: ReactNode;
  className?: string;
  variant?: BadgeVariant;
  max?: number;
  display?: boolean;
  /** Расположить сбоку на одном уровне*/
  placeNear?: boolean;
  /** Размер badge*/
  size?: 'M' | 'S';
}


const Badge: React.FC<IBadgeProps> = ({
  badgeContent,
  children,
  className = '',
  variant = 'info',
  max = 99,
  display = true,
  placeNear = false,
  size = 'M'
}: IBadgeProps) => {
  const wrapper = useRef<HTMLDivElement>(null);

  const isDot = badgeContent ? '' : `rf-badge--dot--${size}`;


  // -------------------------------------------------------------------------------------------------------------------

  const textClass = typeof children === 'string' ? 'rf-badge--text' : '';
  const placeNearClass = placeNear ? 'rf-badge--near' : '';

  return (
    <div className={`rf-badge__wrapper ${className} ${placeNearClass}`} ref={wrapper}>
      {children}
      {display &&
        <div className={`rf-badge badge-size--${size} rf-badge--${variant} ${isDot} ${textClass}`} >
          {badgeContent ? !isNaN(+badgeContent) && +badgeContent > max ? `${max}+` : badgeContent : null}
        </div>
      }
    </div>
  );
};

export default Badge;
