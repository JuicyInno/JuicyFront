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
      viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' clipRule='evenodd' d='M6 3C4.34315 3 3 4.34315 3 6V11H21V6C21 4.34315 19.6569 3 18 3H6ZM12.2359 8.47176C12.9184 8.47176 13.4718 7.91844 13.4718 7.23588C13.4718 6.55332 12.9184 6 12.2359 6C11.5533 6 11 6.55332 11 7.23588C11 7.91844 11.5533 8.47176 12.2359 8.47176Z'
        fill='currentColor'
      /><path fillRule='evenodd' clipRule='evenodd' d='M21 13H3V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V13ZM13.4718 17.2359C13.4718 17.9184 12.9184 18.4718 12.2359 18.4718C11.5533 18.4718 11 17.9184 11 17.2359C11 16.5533 11.5533 16 12.2359 16C12.9184 16 13.4718 16.5533 13.4718 17.2359Z'
        fill='currentColor'
      /></svg> );
};
