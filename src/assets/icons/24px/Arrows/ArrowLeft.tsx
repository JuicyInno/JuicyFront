import React from 'react';
import { IIconProps } from '../../../../types';
import { iconSize } from '../../../../utils/helpers';
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
        d='M9.93375 6.31324C10.3132 6.71455 10.2954 7.34747 9.89411 7.72689L6.51327 10.9233H20C20.5523 10.9233 21 11.371 21 11.9233C21 12.4756 20.5523 12.9233 20 12.9233H6.51327L9.89411 16.1198C10.2954 16.4992 10.3132 17.1321 9.93375 17.5334C9.55432 17.9347 8.92141 17.9525 8.52009 17.573L3.31299 12.65C3.1132 12.4611 3 12.1983 3 11.9233C3 11.6484 3.1132 11.3856 3.31299 11.1967L8.52009 6.2736C8.92141 5.89417 9.55432 5.91192 9.93375 6.31324Z'
        fill='currentColor'
      />
    </svg>
  );
};
