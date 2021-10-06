import React from 'react';
import './Preloader.scss';
import { Size } from '../../../types';

export interface IPreloaderProps {
  className?: string;
  size?: Size;
  variant?: 'default' | 'white' | 'inherit';
}

const Preloader: React.FC<IPreloaderProps> = ({ className = '', size = 'm', variant = 'default' }: IPreloaderProps) => {
  return (
    <div className={`preloader preloader--${size} preloader--${variant} ${className}`}>
      <div className='preloader__circle' />
    </div>
  );
};

export default Preloader;
