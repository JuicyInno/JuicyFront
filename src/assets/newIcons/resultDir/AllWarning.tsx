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
      viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M12 17C12.5523 17 13 17.4477 13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17Z' fill='#8A96A8'/><path d='M13 14C13 14.5523 12.5523 15 12 15C11.4477 15 11 14.5523 11 14V6C11 5.44771 11.4477 5 12 5C12.5523 5 13 5.44771 13 6V14Z' fill='#8A96A8'/></svg> );
};
