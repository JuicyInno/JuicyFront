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
        d='M10.3453 15.4102C10.5407 15.4102 10.7284 15.3339 10.8684 15.1976L18.813 7.465C19.3002 6.95506 19.5685 6.27475 19.5606 5.56955C19.5527 4.86435 19.2691 4.19024 18.7706 3.69139C18.2721 3.19253 17.5982 2.90852 16.893 2.9001C16.1878 2.89167 15.5073 3.15948 14.997 3.64629L7.26263 11.5918C7.12632 11.7318 7.05005 11.9195 7.05005 12.115V14.6602C7.05005 15.0744 7.38584 15.4102 7.80005 15.4102H10.3453ZM3.9 18.2999C3.40294 18.2999 3 18.7028 3 19.1999C3 19.697 3.40294 20.0999 3.9 20.0999H20.1C20.5971 20.0999 21 19.697 21 19.1999C21 18.7028 20.5971 18.2999 20.1 18.2999H3.9Z'
        fill='currentColor'
      />
    </svg>
  );
};
