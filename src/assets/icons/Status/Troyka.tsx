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
        d='M4.57019 7.16077L4 6.84444C4 6.84444 5.6 4 10.4007 4C20 4 20 15.3778 20 15.3778V19C20 19.5523 19.5523 20 19 20H10.634C10.064 20 9.60923 19.5242 9.63507 18.9547L9.92636 12.5333L7.81047 13.346C7.41428 13.4982 7.1573 13.8839 7.16943 14.3081L7.1706 14.3492C7.1867 14.9125 6.73449 15.3778 6.17101 15.3778H5C4.44772 15.3778 4 14.9301 4 14.3778V14.0479C4 13.9865 4.00566 13.9252 4.01689 13.8648L5.06817 8.21825C5.14691 7.79534 4.94636 7.36946 4.57019 7.16077Z'
        fill='currentColor'
      />
    </svg>
  );
};
