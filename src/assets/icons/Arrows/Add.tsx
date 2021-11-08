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
        d='M4.5 12C4.5 11.4477 4.94772 11 5.5 11H19.5C20.0523 11 20.5 11.4477 20.5 12C20.5 12.5523 20.0523 13 19.5 13H5.5C4.94772 13 4.5 12.5523 4.5 12Z'
        fill='currentColor'
      />
      <path
        d='M12.5 20C11.9477 20 11.5 19.5523 11.5 19V5C11.5 4.44771 11.9477 4 12.5 4C13.0523 4 13.5 4.44771 13.5 5V19C13.5 19.5523 13.0523 20 12.5 20Z'
        fill='currentColor'
      />
    </svg>
  );
};
