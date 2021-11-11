import React from 'react';
import { IIconProps } from '../../../types';
import { iconSize } from '../../../utils/helpers';
/* eslint-disable max-len */

export default (props: IIconProps) => {
  const size = props.size ? iconSize[props.size] : '40';
  return (
    <svg
      width={Number(size) + 1}
      height={size}
      viewBox='0 0 41 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M20.0281 17.6027H17.7594V15.1175H20.0281C20.751 15.1175 21.3283 15.6964 21.3283 16.3601C21.3283 17.0239 20.751 17.6027 20.0281 17.6027Z'
        fill='currentColor'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M10.7437 13.9996C9.93547 13.9996 9.28027 14.6712 9.28027 15.4996V25.4996C9.28027 26.3281 9.93547 26.9996 10.7437 26.9996H30.2559C31.0641 26.9996 31.7193 26.3281 31.7193 25.4996V15.4996C31.7193 14.6712 31.0641 13.9996 30.2559 13.9996H10.7437ZM20.4993 23C21.8463 23 22.9383 21.8807 22.9383 20.5C22.9383 19.1193 21.8463 18 20.4993 18C19.1522 18 18.0603 19.1193 18.0603 20.5C18.0603 21.8807 19.1522 23 20.4993 23Z'
        fill='currentColor'
      />
    </svg>
  );
};
