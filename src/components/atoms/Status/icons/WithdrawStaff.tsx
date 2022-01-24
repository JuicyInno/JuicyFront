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
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM9.27342 6.8275C9.57069 6.54645 9.58383 6.07762 9.30278 5.78035C9.02172 5.48308 8.55289 5.46993 8.25562 5.75099L4.39851 9.39771C4.25052 9.53763 4.16667 9.73231 4.16667 9.93597C4.16667 10.1396 4.25052 10.3343 4.39851 10.4742L8.25562 14.1209C8.55289 14.402 9.02172 14.3889 9.30278 14.0916C9.58383 13.7943 9.57069 13.3255 9.27342 13.0444L6.76909 10.6767H15.0926C15.5017 10.6767 15.8333 10.3451 15.8333 9.93597C15.8333 9.52687 15.5017 9.19523 15.0926 9.19523H6.76909L9.27342 6.8275Z'
        fill='currentColor'
      />
    </svg>
  );
};
