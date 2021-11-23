import React, {
  ReactNode, useLayoutEffect, useRef
} from 'react';
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
  /** Расположить сбоку на одном уровне*/
  size?: 'M' | 'S';
}

type Coordinates = { top: number; right: number };

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


  useLayoutEffect(() => {
    if (badgeContent || placeNear) {
      return;
    }

    const child = wrapper.current?.firstElementChild;

    if (child) {
      const w = child.clientWidth;

      const kX = Math.cos(Math.PI / 3);
      const kY = Math.sin(Math.PI / 3);
      const badgeR = 4;

      const coordinates: Record<string, Coordinates> = {
        bottomRight: {
          top: w / 2 * (kY + 1) - badgeR,
          right: w / 2 * (1 - kX) - badgeR
        },
        bottomLeft: {
          top: w / 2 * (kY + 1) - badgeR,
          right: w / 2 * (kX + 1) + badgeR
        },
        topLeft: {
          top: w / 2 * (1 - kY) + badgeR,
          right: w / 2 * (kX + 1) + badgeR
        },
        topRight: {
          top: w / 2 * (1 - kY) + badgeR,
          right: w / 2 * (1 - kX) - badgeR
        }
      };

    }
  }, [children, badgeContent]);
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
