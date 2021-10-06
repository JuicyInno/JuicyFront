import React, { ReactNode } from 'react';
import './Tile.scss';

export interface ITileProps {
  children: ReactNode | ReactNode[];
  className?: string;
  type?: 'default' | 'stretch';
  hideBackground?:boolean
}

const Tile: React.FC<ITileProps> = ({ children, className = '', type = 'default', hideBackground = false }: ITileProps) => {
  const stretchClass = type === 'stretch' ? 'rf-tile--stretch' : '';
  const backgroundClass = !hideBackground ? 'rf-tile__background' : '';
  return <div className={`rf-tile ${backgroundClass} ${stretchClass} ${className}`}>{children}</div>;
};

export default Tile;
