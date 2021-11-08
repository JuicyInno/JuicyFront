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
        d='M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM10.8999 7.81854C10.8999 7.31144 11.311 6.90035 11.8181 6.90035C12.3252 6.90035 12.7363 7.31144 12.7363 7.81854V11.9547L15.6883 14.485C16.0734 14.8151 16.1179 15.3947 15.7879 15.7797C15.4579 16.1647 14.8783 16.2093 14.4933 15.8793L11.2205 13.0741C11.017 12.8997 10.8999 12.645 10.8999 12.377V7.81854Z'
        fill='currentColor'
      />
    </svg>
  );
};
