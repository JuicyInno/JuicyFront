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
      viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' clipRule='evenodd' d='M9.93375 6.31299C10.3132 6.71431 10.2954 7.34722 9.89411 7.72665L6.51327 10.9231H20C20.5523 10.9231 21 11.3708 21 11.9231C21 12.4754 20.5523 12.9231 20 12.9231H6.51327L9.89411 16.1195C10.2954 16.4989 10.3132 17.1319 9.93375 17.5332C9.55432 17.9345 8.92141 17.9522 8.52009 17.5728L3.31299 12.6497C3.1132 12.4608 3 12.198 3 11.9231C3 11.6481 3.1132 11.3853 3.31299 11.1964L8.52009 6.27336C8.92141 5.89393 9.55432 5.91168 9.93375 6.31299Z' fill='#8A96A8'/></svg> );
};
