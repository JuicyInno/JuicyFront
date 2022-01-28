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
      viewBox='0 0 41 40' fill='none' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' clipRule='evenodd' d='M13 10.5C11.3431 10.5 10 11.8431 10 13.5V26C10 27.6569 11.3431 29 13 29H28C29.6569 29 31 27.6569 31 26V18C31 16.3431 29.6569 15 28 15H13.5C12.9477 15 12.5 14.5523 12.5 14C12.5 13.4477 12.9477 13 13.5 13H26.75C27.4404 13 28 12.4404 28 11.75C28 11.0596 27.4404 10.5 26.75 10.5H13ZM27 23.5C27.8284 23.5 28.5 22.8284 28.5 22C28.5 21.1716 27.8284 20.5 27 20.5C26.1716 20.5 25.5 21.1716 25.5 22C25.5 22.8284 26.1716 23.5 27 23.5Z' fill='#8A96A8'/></svg> );
};
