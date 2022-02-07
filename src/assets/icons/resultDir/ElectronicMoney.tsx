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
      viewBox='0 0 41 40' fill='none' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' clipRule='evenodd' d='M13 10.5001C11.3431 10.5001 10 11.8432 10 13.5001V26.0001C10 27.6569 11.3431 29.0001 13 29.0001H28C29.6569 29.0001 31 27.6569 31 26.0001V18.0001C31 16.3432 29.6569 15.0001 28 15.0001H13.5C12.9477 15.0001 12.5 14.5523 12.5 14.0001C12.5 13.4478 12.9477 13.0001 13.5 13.0001H26.75C27.4404 13.0001 28 12.4404 28 11.7501C28 11.0597 27.4404 10.5001 26.75 10.5001H13ZM27 23.5001C27.8284 23.5001 28.5 22.8285 28.5 22.0001C28.5 21.1716 27.8284 20.5001 27 20.5001C26.1716 20.5001 25.5 21.1716 25.5 22.0001C25.5 22.8285 26.1716 23.5001 27 23.5001Z'
        fill='currentColor'
      /></svg> );
};
