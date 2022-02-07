import React from 'react';
import { IIconProps } from '../../../types';
import { iconSize } from '../../../utils/helpers';
/* eslint-disable max-len */

export default ({ size = 'xs', ...props }: IIconProps) => {
  return (
    <svg
      {...props}
      width={iconSize[size]}
      height={iconSize[size]}
      viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M10.5 12C9.67157 12 9 12.6716 9 13.5V14.5C9 15.3284 9.67157 16 10.5 16H19.3427C20.3927 15.1504 21.6376 14.5322 23 14.223V13.5C23 12.6716 22.3284 12 21.5 12H10.5Z'
        fill='currentColor'
      /><path d='M10.5 18H17.5155C16.7332 19.1688 16.2173 20.5311 16.0549 22H10.5C9.67157 22 9 21.3284 9 20.5V19.5C9 18.6716 9.67157 18 10.5 18Z'
        fill='currentColor'
      /><path d='M10.5 24H16.0549C16.2173 25.4689 16.7332 26.8312 17.5155 28H10.5C9.67157 28 9 27.3284 9 26.5V25.5C9 24.6716 9.67157 24 10.5 24Z'
        fill='currentColor'
      /><path d='M18.0709 24C18.2937 25.5576 19.0292 26.9497 20.101 28C21.3636 29.2372 23.0927 30 25 30C28.866 30 32 26.866 32 23C32 19.134 28.866 16 25 16C23.0927 16 21.3636 16.7628 20.101 18C19.0292 19.0503 18.2937 20.4424 18.0709 22C18.0242 22.3266 18 22.6605 18 23C18 23.3395 18.0242 23.6734 18.0709 24Z'
        fill='currentColor'
      /></svg> );
};
