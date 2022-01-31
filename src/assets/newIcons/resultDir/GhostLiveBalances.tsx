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
      viewBox='0 0 41 40' fill='none' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' clipRule='evenodd' d='M31.5 20C31.5 26.0751 26.5751 31 20.5 31C14.4249 31 9.5 26.0751 9.5 20C9.5 13.9249 14.4249 9 20.5 9C26.5751 9 31.5 13.9249 31.5 20ZM20.5 14C21.0523 14 21.5 14.4477 21.5 15V19H25.5C26.0523 19 26.5 19.4477 26.5 20C26.5 20.5523 26.0523 21 25.5 21H21.5V25C21.5 25.5523 21.0523 26 20.5 26C19.9477 26 19.5 25.5523 19.5 25V21H15.5C14.9477 21 14.5 20.5523 14.5 20C14.5 19.4477 14.9477 19 15.5 19H19.5V15C19.5 14.4477 19.9477 14 20.5 14Z' fill='#8A96A8'/></svg> );
};
