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
      viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' clipRule='evenodd' d='M5 10C5 13.0704 7.13336 15.5369 8 16.4121V18C8 19.654 9.3484 21 11 21H13C14.6526 21 16 19.654 16 18V16.4559C16.8279 15.6217 19 13.1233 19 10C19 7.293 16.9927 3 12 3V3.01587L11.984 3C6.984 3 5 7.293 5 10ZM10.5 10C9.94772 10 9.5 10.4477 9.5 11C9.5 11.5523 9.94772 12 10.5 12H11V16H13V12H13.5C14.0523 12 14.5 11.5523 14.5 11C14.5 10.4477 14.0523 10 13.5 10H10.5Z'
        fill='currentColor'
      /></svg> );
};
