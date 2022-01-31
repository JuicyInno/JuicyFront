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
      viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M19.29 15.71L14.71 20.29C14.32 20.68 13.68 20.68 13.29 20.29C12.9 19.9 12.9 19.26 13.29 18.87L16.17 16H6C5.45 16 5 15.55 5 15V5C5 4.45 5.45 4 6 4C6.55 4 7 4.45 7 5V14H16.17L13.29 11.13C12.9 10.74 12.9 10.1 13.29 9.71C13.68 9.32 14.32 9.32 14.71 9.71L19.29 14.29C19.68 14.68 19.68 15.32 19.29 15.71Z' fill='#8A96A8'/></svg> );
};
