import React from 'react';
import { IIconProps } from '../../../../types';
import { iconSize } from '../../../../utils/helpers';
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
        d='M4.5 15.4064C4.5 16.3411 5.25775 17.0989 6.19248 17.0989H18.4146C19.3494 17.0989 20.1071 16.3411 20.1071 15.4064C20.1071 14.9575 19.9288 14.527 19.6114 14.2096L19.1 13.6983C18.2355 12.8337 17.6837 11.7056 17.532 10.4923L17.1279 7.25881C16.8237 4.8258 14.7555 3 12.3036 3C9.85161 3 7.78338 4.8258 7.47925 7.25881L7.07507 10.4923C6.92341 11.7056 6.37166 12.8337 5.50706 13.6983L4.99572 14.2096C4.67831 14.527 4.5 14.9575 4.5 15.4064ZM14.4348 19.6283C14.6639 19.1258 14.1969 18.6582 13.6447 18.6582H10.9625C10.4102 18.6582 9.94324 19.1258 10.1723 19.6283C10.5411 20.4371 11.3567 20.9993 12.3036 20.9993C13.2505 20.9993 14.0661 20.4371 14.4348 19.6283Z'
        fill='currentColor'
      />
    </svg>
  );
};
