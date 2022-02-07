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
      viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M5 5C3.89543 5 3 5.89543 3 7V8L21 8V7C21 5.89543 20.1046 5 19 5H5Z'
        fill='currentColor'
      /><path d='M21 10L3 10V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V10Z'
        fill='currentColor'
      /></svg> );
};
