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
        d='M12.5 17C13.0523 17 13.5 17.4477 13.5 18C13.5 18.5523 13.0523 19 12.5 19C11.9477 19 11.5 18.5523 11.5 18C11.5 17.4477 11.9477 17 12.5 17Z'
        fill='currentColor'
      />
      <path
        d='M13.5 14C13.5 14.5523 13.0523 15 12.5 15C11.9477 15 11.5 14.5523 11.5 14V6C11.5 5.44771 11.9477 5 12.5 5C13.0523 5 13.5 5.44771 13.5 6V14Z'
        fill='currentColor'
      />
    </svg>
  );
};
