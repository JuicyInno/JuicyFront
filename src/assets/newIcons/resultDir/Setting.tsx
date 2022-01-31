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
      viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' clipRule='evenodd' d='M21.9997 9.15473C20.7621 8.4402 19.2373 8.4402 17.9997 9.15473L11.6074 12.8453C10.3698 13.5599 9.60742 14.8804 9.60742 16.3094V23.6906C9.60742 25.1197 10.3698 26.4402 11.6074 27.1547L17.9997 30.8453C19.2373 31.5599 20.7621 31.5599 21.9997 30.8453L28.392 27.1547C29.6296 26.4402 30.392 25.1197 30.392 23.6906V16.3094C30.392 14.8804 29.6296 13.5599 28.392 12.8453L21.9997 9.15473ZM19.9997 24.5C22.485 24.5 24.4997 22.4853 24.4997 20C24.4997 17.5148 22.485 15.5 19.9997 15.5C17.5144 15.5 15.4997 17.5148 15.4997 20C15.4997 22.4853 17.5144 24.5 19.9997 24.5Z' fill='#8A96A8'/></svg> );
};
