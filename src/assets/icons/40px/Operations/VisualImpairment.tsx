import React from 'react';
import { IIconProps } from '../../../../types';
import { iconSize } from '../../../../utils/helpers';
/* eslint-disable max-len */

export default (props: IIconProps) => {
  const size = props.size ? iconSize[props.size] : '40';
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 40 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M8.1179 19.5445C9.18194 17.626 10.567 15.9831 12.1818 14.7249C13.1969 13.8166 16.1565 12 19.874 12C24.7848 12 29.1087 14.9984 31.6301 19.5445C31.7873 19.828 31.7873 20.1722 31.6301 20.4556C30.6272 22.2638 29.3392 23.8271 27.8425 25.0543C26.9194 25.8977 25.2435 26.7455 24.5209 27.064C23.066 27.6704 21.5022 28 19.874 28C14.9631 28 10.6392 25.0017 8.1179 20.4556C7.9607 20.1722 7.9607 19.828 8.1179 19.5445ZM17 20C17 18.3431 18.3431 17 20 17C21.6569 17 23 18.3431 23 20C23 21.6569 21.6569 23 20 23C18.3431 23 17 21.6569 17 20ZM20 15C17.2386 15 15 17.2386 15 20C15 22.7614 17.2386 25 20 25C22.7614 25 25 22.7614 25 20C25 17.2386 22.7614 15 20 15Z'
        fill='currentColor'
      />
    </svg>
  );
};
