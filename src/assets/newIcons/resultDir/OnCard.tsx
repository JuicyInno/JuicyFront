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
      viewBox='0 0 41 40' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M12 12C10.6193 12 9.5 13.1193 9.5 14.5V15.25C9.5 15.6642 9.83579 16 10.25 16H31.75C32.1642 16 32.5 15.6642 32.5 15.25V14.5C32.5 13.1193 31.3807 12 30 12H12Z' fill='#8A96A8'/><path d='M32.5 18.75C32.5 18.3358 32.1642 18 31.75 18H10.25C9.83579 18 9.5 18.3358 9.5 18.75V25.5C9.5 26.8807 10.6193 28 12 28H30C31.3807 28 32.5 26.8807 32.5 25.5V18.75Z' fill='#8A96A8'/></svg> );
};
