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
        d='M10.6709 14.5871L10.3896 18.5426C10.792 18.5426 10.9662 18.3698 11.1752 18.1622L13.0616 16.3594L16.9704 19.2219C17.6873 19.6215 18.1923 19.4111 18.3857 18.5624L20.9514 6.53999L20.9521 6.53928C21.1795 5.47956 20.5689 5.06516 19.8705 5.32513L4.78925 11.0991C3.75999 11.4986 3.77557 12.0724 4.61428 12.3323L8.46994 13.5316L17.4259 7.92768C17.8473 7.64859 18.2306 7.80301 17.9154 8.08211L10.6709 14.5871Z'
        fill='currentColor'
      />
    </svg>
  );
};
