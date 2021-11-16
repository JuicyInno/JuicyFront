import React from 'react';
import { IIconProps } from '../../../../types';
import { iconSize } from '../../../../utils/helpers';
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
        fillRule='evenodd'
        clipRule='evenodd'
        d='M11.0005 11C10.172 11 9.50047 11.6716 9.50047 12.5V22.5C9.50047 23.3284 10.172 24 11.0005 24H31.0005C31.8289 24 32.5005 23.3284 32.5005 22.5V12.5C32.5005 11.6716 31.8289 11 31.0005 11H11.0005ZM21 20C22.3807 20 23.5 18.8807 23.5 17.5C23.5 16.1193 22.3807 15 21 15C19.6193 15 18.5 16.1193 18.5 17.5C18.5 18.8807 19.6193 20 21 20Z'
        fill='currentColor'
      />
      <path d='M9.5 25.9919L32.5005 25.9917V28.9385C32.5005 29.9917 31.66 30.3281 30.5 29.9917C28.1009 29.296 21.0951 28.1084 11.0015 28C10.1731 27.9911 9.50002 27.3205 9.50001 26.492L9.5 25.9919Z'
        fill='currentColor'
      />
    </svg>
  );
};
