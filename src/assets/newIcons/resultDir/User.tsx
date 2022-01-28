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
      viewBox='0 0 41 40' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M20.4997 6.25C17.3932 6.25 14.8747 8.76839 14.8747 11.875C14.8747 14.9816 17.3932 17.5 20.4998 17.5C23.6064 17.5 26.1247 14.9816 26.1247 11.875C26.1247 8.76839 23.6063 6.25 20.4997 6.25Z' fill='#8A96A8'/><path d='M30.6156 29.4971C30.9646 29.0774 31.1248 28.5304 31.0468 27.9902C30.372 23.3201 25.8123 20 20.4999 20C15.1916 20 10.6546 23.3396 9.9579 27.9834C9.87625 28.5276 10.0369 29.0796 10.3885 29.5029C12.6161 32.1842 16.4466 34 20.5001 34C24.542 34 28.4013 32.1602 30.6156 29.4971Z' fill='#8A96A8'/></svg> );
};
