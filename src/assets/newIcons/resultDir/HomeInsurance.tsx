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
      viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' clipRule='evenodd' d='M9.5 19.2857V26C9.5 27.6568 10.8431 29 12.5 29H27.5C29.1569 29 30.5 27.6568 30.5 26V19.2857C30.5 18.4646 30.1635 17.6795 29.569 17.1133L22.069 9.97041C20.9103 8.86696 19.0897 8.86696 17.931 9.97041L10.431 17.1133C9.83649 17.6795 9.5 18.4646 9.5 19.2857ZM19.7173 19.2172L19.0308 18.5307C18.691 18.1909 18.2301 18 17.7496 18C15.8124 18 14.8422 20.3421 16.212 21.7119L19.4344 24.9343C19.7468 25.2467 20.2534 25.2467 20.5658 24.9343L23.7882 21.7119C25.158 20.3421 24.1878 18 22.2507 18C21.7701 18 21.3092 18.1909 20.9694 18.5307L20.2829 19.2172C20.1267 19.3734 19.8735 19.3734 19.7173 19.2172Z' fill='#8A96A8'/></svg> );
};
