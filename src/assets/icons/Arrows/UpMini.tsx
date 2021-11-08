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
        d='M11.1919 10.375C11.5511 9.875 12.4489 9.875 12.8081 10.375L16.8736 14.875C17.2327 15.375 16.7838 16 16.0655 16H7.93445C7.21618 16 6.76726 15.375 7.1264 14.875L11.1919 10.375Z'
        fill='currentColor'
      />
    </svg>
  );
};
