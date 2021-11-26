import React, { ReactNode } from 'react';
import './Tile.scss';
import { classnames } from '../../../utils/classnames';

export interface ITileProps {
  /** Дочерние элементы */
  children: ReactNode | ReactNode[];
  /** Класс */
  className?: string;
  /**
   * Тип
   * @default default
   * */
  type?: 'default' | 'stretch';
  /** Скрыть фон */
  hideBackground?: boolean;
  /**
   * Внутренние отступы
   * @default 20px
   */
  padding?: number | string;
  /** Скругление улов
  * @default 20px
  */
  borderRadius?: number | string;
  /** Типы теней/бордер
   * @default default
  */
  variant?: 'default' | 'clicable-default' | 'non-clicable' | 'clicable-hover' | 'border';
}

const Tile: React.FC<ITileProps> = ({
  children,
  className = '',
  type = 'default',
  hideBackground = false,
  padding = '20px',
  borderRadius = '20px',
  variant = 'default'
}: ITileProps) => (
  <div
    style={{
      padding,
      borderRadius
    }}
    className={classnames(
      'rf-tile',
      className,
      !hideBackground && 'rf-tile__background',
      type === 'stretch' && 'rf-tile--stretch',
      `rf-tile--${variant}`
    )}
  >
    {children}
  </div>
);

export default Tile;
