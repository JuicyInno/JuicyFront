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
      viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' clipRule='evenodd' d='M10 4C10 2.89543 10.8954 2 12 2H16C17.1046 2 18 2.89543 18 4V20C18 21.1046 17.1046 22 16 22H14C13.4477 22 13 21.5523 13 21C13 20.4477 13.4477 20 14 20H16V4L12 4V11C12 11.5523 11.5523 12 11 12C10.4477 12 10 11.5523 10 11V4ZM8 13C8.55228 13 9 13.4477 9 14V16H11C11.5523 16 12 16.4477 12 17C12 17.5523 11.5523 18 11 18H9V20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20V18H5C4.44772 18 4 17.5523 4 17C4 16.4477 4.44772 16 5 16H7V14C7 13.4477 7.44772 13 8 13Z'
        fill='currentColor'
      /></svg> );
};
