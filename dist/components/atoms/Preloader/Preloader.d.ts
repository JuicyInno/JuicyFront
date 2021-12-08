import React from 'react';
import './Preloader.scss';
export interface IPreloaderProps {
    className?: string;
    size?: 's' | 'm' | 'l' | 'xl';
    variant?: 'default' | 'white' | 'inherit';
}
declare const Preloader: React.FC<IPreloaderProps>;
export default Preloader;
