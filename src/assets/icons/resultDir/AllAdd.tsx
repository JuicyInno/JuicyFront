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
      viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z'
        fill='currentColor'
      /><path d='M12 20C11.4477 20 11 19.5523 11 19V5C11 4.44771 11.4477 4 12 4C12.5523 4 13 4.44771 13 5V19C13 19.5523 12.5523 20 12 20Z'
        fill='currentColor'
      /></svg> );
};
