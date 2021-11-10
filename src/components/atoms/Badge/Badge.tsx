import React, {
  ReactNode, useLayoutEffect, useRef, useState
} from 'react';
import './Badge.scss';
import { Variant } from '../../../types';

export interface IBadgeProps {
  children?: ReactNode;
  badgeContent?: number;
  className?: string;
  variant?: Variant;
  max?: number;
  size?: 's' | 'm',
  position?: 'topRight' | 'topLeft' | 'bottomLeft' | 'bottomRight' | 'text';
  display?: boolean;
  /** Расположить сбоку на одном уровне*/
  placeNear?: boolean;
}

type Coordinates = { top: number; right: number };

const Badge: React.FC<IBadgeProps> = ({
  badgeContent,
  children,
  className = '',
  variant = 'blue',
  max = 99,
  size = 's',
  position = 'topRight',
  display = true,
  placeNear = false
}: IBadgeProps) => {
  const wrapper = useRef<HTMLDivElement>(null);

  const classNameSize = size === 's' ? 'rf-badge--s' : 'rf-badge--m';
  const isDot = badgeContent ? '' : 'rf-badge--dot';
  const [coordinates, setCoordinates] = useState<Coordinates>({
    top: 0,
    right: 0
  });

  const BargeSize = size === 's' ? 16 : 20;

  useLayoutEffect(() => {
    if (badgeContent || placeNear) {
      return;
    }

    const child = wrapper.current?.firstElementChild;

    if (child) {
      const w = child.clientWidth;
      const h = child.clientHeight;

      const kX = Math.cos(Math.PI / 3);
      const kY = Math.sin(Math.PI / 3);

      const coordinates: Record<string, Coordinates> = {
        bottomRight: {
          top: w / 2 * (kY + 1) - BargeSize,
          right: w / 2 * (1 - kX) - BargeSize
        },
        bottomLeft: {
          top: w / 2 * (kY + 1) - BargeSize,
          right: w / 2 * (kX + 1) + BargeSize
        },
        topLeft: {
          top: w / 2 * (1 - kY) + BargeSize,
          right: w / 2 * (kX + 1) + BargeSize
        },
        topRight: {
          top: BargeSize / 4,
          right: BargeSize / 4
        }
      };

      setCoordinates(coordinates[position]);
    }
  }, [children, badgeContent]);
  // -------------------------------------------------------------------------------------------------------------------

  const textClass = typeof children === 'string' || position === 'text' ? 'rf-badge--text' : '';
  const placeNearClass = placeNear ? 'rf-badge--near' : '';

  return (
    <div className={`rf-badge__wrapper ${className} ${placeNearClass}`} ref={wrapper}>
      {children}
      {display &&
        <div className={`rf-badge rf-badge--${variant} ${isDot} ${classNameSize} ${textClass}`} style={coordinates}>
          {badgeContent ? !isNaN(+badgeContent) && +badgeContent > max ? `${max}+` : badgeContent : null}
        </div>
      }
    </div>
  );
};

export default Badge;
