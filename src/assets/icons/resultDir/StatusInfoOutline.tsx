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
      viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' clipRule='evenodd' d='M5.5 12C5.5 15.866 8.63401 19 12.5 19C16.366 19 19.5 15.866 19.5 12C19.5 8.13401 16.366 5 12.5 5C8.63401 5 5.5 8.13401 5.5 12ZM3.5 12C3.5 16.9706 7.52944 21 12.5 21C17.4706 21 21.5 16.9706 21.5 12C21.5 7.02944 17.4706 3 12.5 3C7.52944 3 3.5 7.02944 3.5 12Z'
        fill='currentColor'
      /><path d='M12.5044 8.99834C12.2342 9.01458 11.9695 8.91094 11.7698 8.71075C11.5909 8.52261 11.493 8.26012 11.5004 7.98835C11.4944 7.72413 11.5895 7.46922 11.7626 7.28535C11.965 7.08523 12.2324 6.98318 12.5044 7.00232C12.775 6.98299 13.0413 7.08514 13.242 7.28535C13.59 7.68867 13.5854 8.32154 13.2316 8.71874C13.032 8.91292 12.7708 9.01333 12.5044 8.99834Z'
        fill='currentColor'
      /><path fillRule='evenodd' clipRule='evenodd' d='M12.5 17C13.0523 17 13.5 16.5523 13.5 16L13.5 11C13.5 10.4477 13.0523 10 12.5 10C11.9477 10 11.5 10.4477 11.5 11L11.5 16C11.5 16.5523 11.9477 17 12.5 17Z'
        fill='currentColor'
      /></svg> );
};
