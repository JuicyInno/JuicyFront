import React, { ReactNode } from 'react';
import './Tile.scss';

export interface ITileProps {
  children: ReactNode | ReactNode[];
  className?: string;
  type?: 'default' | 'stretch';
  hideBackground?:boolean;
  /** Заменить тень карточки на бордер */
  outlined?: boolean;
}

const Tile: React.FC<ITileProps> = ({ children, className = '', type = 'default', hideBackground = false, outlined }: ITileProps) => {
  const stretchClass = type === 'stretch' ? 'rf-tile--stretch' : '';
  const backgroundClass = !hideBackground ? 'rf-tile__background' : '';
  const outlinedClass = outlined ? 'rf-tile--outlined' : '';
  return <div className={`rf-tile ${backgroundClass} ${stretchClass} ${outlinedClass} ${className}`}>{children}</div>;
};

export default Tile;
