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
        d='M11.8201 3C9.80501 3 8.17145 4.63355 8.17145 6.64864C8.17145 8.66373 9.80503 10.2973 11.8201 10.2973C13.8352 10.2973 15.4688 8.66372 15.4688 6.64864C15.4688 4.63355 13.8352 3 11.8201 3ZM18.1877 18.3022C18.555 17.8984 18.7189 17.3456 18.6111 16.8105C18.0318 13.9354 15.1546 11.9189 11.8202 11.9189C8.48984 11.9189 5.62754 13.9455 5.03455 16.8039C4.92277 17.3427 5.08706 17.9007 5.45708 18.308C6.92412 19.923 9.30608 21 11.8203 21C14.3277 21 16.7267 19.9085 18.1877 18.3022Z'
        fill='currentColor'
      />
    </svg>
  );
};
