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
      viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M12 7C12.5523 7 13 6.55228 13 6C13 5.44772 12.5523 5 12 5C11.4477 5 11 5.44772 11 6C11 6.55228 11.4477 7 12 7Z'
        fill='currentColor'
      /><path d='M13 10C13 9.44772 12.5523 9 12 9C11.4477 9 11 9.44772 11 10V18C11 18.5523 11.4477 19 12 19C12.5523 19 13 18.5523 13 18V10Z'
        fill='currentColor'
      /></svg> );
};
