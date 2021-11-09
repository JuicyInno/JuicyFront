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
        d='M7 2C6.44772 2 6 2.44772 6 3C6 3.55228 6.44772 4 7 4H10.5858L3.29289 11.2929C2.90237 11.6834 2.90237 12.3166 3.29289 12.7071C3.68342 13.0976 4.31658 13.0976 4.70711 12.7071L12 5.41421V9C12 9.55228 12.4477 10 13 10C13.5523 10 14 9.55228 14 9V3C14 2.44772 13.5523 2 13 2H7ZM17 22C17.5523 22 18 21.5523 18 21C18 20.4477 17.5523 20 17 20H13.4142L20.7071 12.7071C21.0976 12.3166 21.0976 11.6834 20.7071 11.2929C20.3166 10.9024 19.6834 10.9024 19.2929 11.2929L12 18.5858V15C12 14.4477 11.5523 14 11 14C10.4477 14 10 14.4477 10 15V21C10 21.5523 10.4477 22 11 22H17Z'
        fill='currentColor'
      />
    </svg>
  );
};
