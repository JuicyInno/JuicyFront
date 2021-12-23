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
        d='M10 23.8984C10 25.0962 10.971 26.0672 12.1689 26.0672H27.8311C29.029 26.0672 30 25.0962 30 23.8984C30 23.3232 29.7715 22.7715 29.3648 22.3648L28.7095 21.7095C27.6015 20.6015 26.8945 19.1559 26.7001 17.6011L26.1822 13.4575C25.7925 10.3397 23.1421 8 20 8C16.8579 8 14.2075 10.3397 13.8178 13.4575L13.2999 17.6011C13.1055 19.1559 12.3985 20.6015 11.2905 21.7095L10.6352 22.3648C10.2285 22.7715 10 23.3232 10 23.8984Z'
        fill='currentColor'
      />
      <path
        d='M22.8356 29.049C23.0163 28.5271 22.5523 28.0671 22 28.0671H18C17.4477 28.0671 16.9837 28.5271 17.1644 29.049C17.5711 30.2237 18.687 31.0671 20 31.0671C21.313 31.0671 22.4289 30.2237 22.8356 29.049Z'
        fill='currentColor'
      />
    </svg>
  );
};
