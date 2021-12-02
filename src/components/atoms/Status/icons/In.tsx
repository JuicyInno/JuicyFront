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
        d='M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM10.7266 6.8275C10.4293 6.54645 10.4162 6.07762 10.6972 5.78035C10.9783 5.48308 11.4471 5.46993 11.7444 5.75099L15.6015 9.39771C15.7495 9.53763 15.8333 9.73231 15.8333 9.93597C15.8333 10.1396 15.7495 10.3343 15.6015 10.4742L11.7444 14.1209C11.4471 14.402 10.9783 14.3889 10.6972 14.0916C10.4162 13.7943 10.4293 13.3255 10.7266 13.0444L13.2309 10.6767H4.90741C4.49831 10.6767 4.16667 10.3451 4.16667 9.93597C4.16667 9.52687 4.49831 9.19523 4.90741 9.19523H13.2309L10.7266 6.8275Z'
        fill='#2ABB5B'
      />
    </svg>
  );
};
