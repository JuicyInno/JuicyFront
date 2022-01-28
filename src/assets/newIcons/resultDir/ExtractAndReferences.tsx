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
      viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' clipRule='evenodd' d='M14.5 10C13.1193 10 12 11.1193 12 12.5V28.5C12 29.8807 13.1193 31 14.5 31H26.5C27.8807 31 29 29.8807 29 28.5V12.5C29 11.1193 27.8807 10 26.5 10H14.5ZM15 14C15 13.4477 15.4477 13 16 13H25C25.5523 13 26 13.4477 26 14C26 14.5523 25.5523 15 25 15H16C15.4477 15 15 14.5523 15 14ZM15 18.0001C15 17.4478 15.4477 17.0001 16 17.0001H22.75C23.3023 17.0001 23.75 17.4478 23.75 18.0001C23.75 18.5524 23.3023 19.0001 22.75 19.0001H16C15.4477 19.0001 15 18.5524 15 18.0001ZM24.6875 28.125C25.5504 28.125 26.25 27.4254 26.25 26.5625C26.25 25.6996 25.5504 25 24.6875 25C23.8246 25 23.125 25.6996 23.125 26.5625C23.125 27.4254 23.8246 28.125 24.6875 28.125Z' fill='#8A96A8'/></svg> );
};
