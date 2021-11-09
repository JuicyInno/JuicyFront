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
        d='M12.5 7C13.0523 7 13.5 6.55228 13.5 6C13.5 5.44772 13.0523 5 12.5 5C11.9477 5 11.5 5.44772 11.5 6C11.5 6.55228 11.9477 7 12.5 7Z'
        fill='currentColor'
      />
      <path
        d='M13.5 10C13.5 9.44772 13.0523 9 12.5 9C11.9477 9 11.5 9.44772 11.5 10V18C11.5 18.5523 11.9477 19 12.5 19C13.0523 19 13.5 18.5523 13.5 18V10Z'
        fill='currentColor'
      />
    </svg>
  );
};
