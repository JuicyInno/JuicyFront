import React from 'react';
import './Preloader.scss';
import { classnames } from '../../../utils/classnames';

export interface IPreloaderProps {
  className?: string;
  size?: 's' | 'm' | 'l' | 'xl';
  variant?: 'default' | 'white' | 'inherit';
}

const Preloader: React.FC<IPreloaderProps> = ({ className = '', size = 'm', variant = 'default' }: IPreloaderProps) => (
  <div className={classnames('preloader', `preloader--${size}`, `preloader--${variant}`, className)}>
    <svg className='preloader__circle' viewBox='0 0 50 50'>
      <circle className='preloader__path' cx='25' cy='25' r='20' fill='none' strokeWidth='5'></circle>
    </svg>
  </div>

);

export default Preloader;
