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
        d='M11.1919 14.625C11.5511 15.125 12.4489 15.125 12.8081 14.625L16.8736 10.125C17.2327 9.625 16.7838 9 16.0655 9H7.93445C7.21618 9 6.76726 9.625 7.1264 10.125L11.1919 14.625Z'
        fill='currentColor'
      />
    </svg>
  );
};
