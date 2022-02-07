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
      viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' clipRule='evenodd' d='M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12ZM12 6.375C8.8934 6.375 6.375 8.8934 6.375 12C6.375 15.1066 8.8934 17.625 12 17.625C15.1066 17.625 17.625 15.1066 17.625 12C17.625 8.8934 15.1066 6.375 12 6.375Z' fill='#E2E5E9'/><path fillRule='evenodd' clipRule='evenodd' d='M10.3125 4.6875C10.3125 3.75552 11.068 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 11.068 3.75552 10.3125 4.6875 10.3125C5.61948 10.3125 6.375 11.068 6.375 12C6.375 15.1066 8.8934 17.625 12 17.625C15.1066 17.625 17.625 15.1066 17.625 12C17.625 8.8934 15.1066 6.375 12 6.375C11.068 6.375 10.3125 5.61948 10.3125 4.6875Z' fill='#0D69F2'/></svg> );
};
