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
        d='M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10ZM13.4806 7.29881C13.879 6.9004 14.525 6.9004 14.9234 7.29881C15.3218 7.69722 15.3218 8.34318 14.9234 8.74159L9.9234 13.7416C9.52498 14.14 8.87903 14.14 8.48061 13.7416L5.75334 11.0143C5.35493 10.6159 5.35493 9.96995 5.75334 9.57154C6.15175 9.17312 6.79771 9.17312 7.19612 9.57154L9.202 11.5774L13.4806 7.29881Z'
        fill='#2ABB5B'
      />
    </svg>
  );
};
