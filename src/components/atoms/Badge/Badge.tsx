import React, { ReactNode, useRef } from 'react';
import './Badge.scss';
import { BadgeVariant } from '../../../types';

export interface IBadgeProps {
  /** Контент внутри бейджа*/
  children?: ReactNode;
  /** Содержимое бейджа*/
  badgeContent?: ReactNode;
  /** Имя класса*/
  className?: string;
  /**
   *  Цвет бейджа
   * @default 'info'
   */
  variant?: BadgeVariant;
  /**
   *  Максимальное значение символов отображаемое в бэйдж
   * @default 99
  */
  max?: number;
  /**
   * Показать бейдж
   * @default true
  */
  display?: boolean;
  /**
   * Расположить сбоку на одном уровне
   * @default false
  */
  placeNear?: boolean;
  /**
   * Размер badge
   * @default 'm'
  */
  size?: 's' | 'm';
}

const Badge: React.FC<IBadgeProps> = ({
  badgeContent,
  children,
  className = '',
  variant = 'info',
  max = 99,
  display = true,
  placeNear = false,
  size = 'm'
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
