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
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM11.0499 16.7495C11.0499 17.2879 11.4864 17.7244 12.0248 17.7244C12.5632 17.7244 12.9997 17.2879 12.9997 16.7495L12.9997 11.2901C12.9997 10.7517 12.5632 10.3152 12.0248 10.3152C11.4864 10.3152 11.0499 10.7517 11.0499 11.2901V16.7495ZM12.0245 7.00005C11.4861 7.00005 11.0496 7.43653 11.0496 7.97495C11.0496 8.51337 11.4861 8.94985 12.0245 8.94985C12.563 8.94985 12.9994 8.51337 12.9994 7.97495C12.9994 7.43653 12.563 7.00005 12.0245 7.00005Z'
        fill='#0D69F2'/>
    </svg>
  );
};
