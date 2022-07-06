import React from 'react';
import { IStatusIconProps } from './types';
import { statusIconSize } from './helpers';
/* eslint-disable max-len */

export default (props: IStatusIconProps) => {
  const size = props.size ? statusIconSize[props.size] : '20';
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path fillRule='evenodd' clipRule='evenodd' d='M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM9.41986 11.989C9.25787 12.1467 9.04073 12.2349 8.81467 12.2349H7.81364C7.33443 12.2349 6.94595 11.8464 6.94595 11.3672V10.3662C6.94595 10.1401 7.03419 9.92299 7.19188 9.76099L11.8494 4.97634C12.1642 4.67597 12.5841 4.51073 13.0193 4.51593C13.4544 4.52113 13.8702 4.69636 14.1778 5.00417C14.4853 5.31197 14.6603 5.72791 14.6652 6.16304C14.6701 6.59816 14.5045 7.01792 14.2039 7.33256L9.41986 11.989ZM4.44702 14.5733C4.44702 14.2667 4.69565 14.018 5.00234 14.018H14.9981C15.3048 14.018 15.5534 14.2667 15.5534 14.5733C15.5534 14.88 15.3048 15.1287 14.9981 15.1287H5.00234C4.69565 15.1287 4.44702 14.88 4.44702 14.5733Z' fill='#0062FF'/>
    </svg>
  );
};