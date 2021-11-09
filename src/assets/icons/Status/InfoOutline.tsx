import React from 'react';
import { IIconProps } from '../../../types';
import { iconSize } from '../../../utils/helpers';
/* eslint-disable max-len */

export default (props: IIconProps) => {
  const size = props.size ? iconSize[props.size] : '24';
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12ZM3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12Z'
        fill='currentColor'
      />
      <path
        d='M12.0044 8.99834C11.7342 9.01458 11.4695 8.91094 11.2698 8.71075C11.0909 8.52261 10.993 8.26012 11.0004 7.98835C10.9944 7.72413 11.0895 7.46922 11.2626 7.28535C11.465 7.08523 11.7324 6.98318 12.0044 7.00232C12.2751 6.98299 12.5413 7.08514 12.742 7.28535C13.09 7.68867 13.0854 8.32154 12.7316 8.71874C12.532 8.91292 12.2708 9.01333 12.0044 8.99834Z'
        fill='currentColor'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12 17C12.5523 17 13 16.5523 13 16L13 11C13 10.4477 12.5523 10 12 10C11.4477 10 11 10.4477 11 11L11 16C11 16.5523 11.4477 17 12 17Z'
        fill='currentColor'
      />
    </svg>
  );
};
