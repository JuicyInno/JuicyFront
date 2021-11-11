import React from 'react';
import { IIconProps } from '../../../types';
import { iconSize } from '../../../utils/helpers';
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
        d='M29 12H11C9.61929 12 8.5 13.1193 8.5 14.5V24.6832L15.4146 19.6894C15.8125 19.402 16.3601 19.4459 16.7072 19.7929L18.5863 21.6721L24.3904 17.2074C24.8281 16.8707 25.456 16.9526 25.7927 17.3903C26.1294 17.8281 26.0475 18.4559 25.6098 18.7927L19.1098 23.7927C18.7117 24.0989 18.1481 24.0623 17.793 23.7072L15.8952 21.8094L8.90196 26.86C9.34766 27.5462 10.1208 28 11 28H29C30.3807 28 31.5 26.8807 31.5 25.5V14.5C31.5 13.1193 30.3807 12 29 12Z'
        fill='currentColor'
      />
    </svg>
  );
};
