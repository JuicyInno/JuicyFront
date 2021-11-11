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
        fillRule='evenodd'
        clipRule='evenodd'
        d='M5.79289 5.29289C6.18342 4.90237 6.81658 4.90237 7.20711 5.29289L19.2071 17.2929C19.5976 17.6834 19.5976 18.3166 19.2071 18.7071C18.8166 19.0976 18.1834 19.0976 17.7929 18.7071L5.79289 6.70711C5.40237 6.31658 5.40237 5.68342 5.79289 5.29289Z'
        fill='currentColor'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M19.2071 5.29289C19.5976 5.68342 19.5976 6.31658 19.2071 6.70711L7.20711 18.7071C6.81658 19.0976 6.18342 19.0976 5.79289 18.7071C5.40237 18.3166 5.40237 17.6834 5.79289 17.2929L17.7929 5.29289C18.1834 4.90237 18.8166 4.90237 19.2071 5.29289Z'
        fill='currentColor'
      />
    </svg>
  );
};