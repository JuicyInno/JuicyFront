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
      viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' clipRule='evenodd' d='M7 4C7.55228 4 8 4.44772 8 5V7H10C10.5523 7 11 7.44771 11 8C11 8.55228 10.5523 9 10 9H8V11C8 11.5523 7.55228 12 7 12C6.44772 12 6 11.5523 6 11V9H4C3.44772 9 3 8.55228 3 8C3 7.44771 3.44772 7 4 7H6V5C6 4.44772 6.44772 4 7 4ZM12 11C12 10.4477 12.4477 10 13 10H20C21.1046 10 22 10.8954 22 12L22 16C22 17.1046 21.1046 18 20 18L4 18C2.89543 18 2 17.1046 2 16V14C2 13.4477 2.44772 13 3 13C3.55228 13 4 13.4477 4 14V16L20 16L20 12H13C12.4477 12 12 11.5523 12 11Z' fill='#8A96A8'/></svg> );
};
