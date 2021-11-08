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
      viewBox={`0 0 ${size} ${size}`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M8.5 16.4121C7.63336 15.5369 5.5 13.0704 5.5 10C5.5 7.293 7.484 3 12.484 3C12.4894 3.00531 12.4947 3.0106 12.5 3.01587V3C17.4927 3 19.5 7.293 19.5 10C19.5 13.1233 17.3279 15.6217 16.5 16.4559V18C16.5 19.654 15.1526 21 13.5 21H11.5C9.8484 21 8.5 19.654 8.5 18V16.4121Z'
        fill='currentColor'
      />
      <path
        d='M11 11H14'
        stroke='white'
        stroke-width='2'
        stroke-linecap='round'
      />
      <path
        d='M12.5 12L12.5 15'
        stroke='white'
        stroke-width='2'
        stroke-linecap='square'
      />
    </svg>
  );
};
