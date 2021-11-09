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
        d='M20.7071 8.70711C21.0976 8.31658 21.0976 7.68342 20.7071 7.29289C20.3166 6.90237 19.6834 6.90237 19.2929 7.29289L11 15.5858L6.70711 11.2929C6.31658 10.9024 5.68342 10.9024 5.29289 11.2929C4.90237 11.6834 4.90237 12.3166 5.29289 12.7071L10.2929 17.7071C10.6834 18.0976 11.3166 18.0976 11.7071 17.7071L20.7071 8.70711Z'
        fill='currentColor'
      />
    </svg>
  );
};
