import React from 'react';
import { IIconProps } from '../../../types';
import { iconSize } from '../../../utils/helpers';
/* eslint-disable max-len */

export default ({ size = 'xs', ...props }: IIconProps) => {
  return (
    <svg
      {...props}
      width={iconSize[size]}
      height={iconSize[size]}
      viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' clipRule='evenodd' d='M17.6685 10.8501C18.8336 10.3092 20.1742 10.2919 21.3528 10.8026L31.3239 15.1234C32.5286 15.6455 32.5286 17.354 31.3239 17.8761L21.3528 22.1969C20.1742 22.7076 18.8336 22.6904 17.6685 22.1495L9.56982 18.3893V23.9998C9.56982 24.552 9.12211 24.9998 8.56982 24.9998C8.01754 24.9998 7.56982 24.552 7.56982 23.9998V16.8453C7.56983 15.9998 7.79655 15.4335 8.43035 15.1393L17.6685 10.8501ZM11.5 25.9998V21.4906L16.8263 23.9635C18.5091 24.7448 20.4456 24.7698 22.148 24.0321L28.5 21.2795V25.9998C28.5 28.7612 24.6944 30.9998 20 30.9998C15.3056 30.9998 11.5 28.7612 11.5 25.9998Z' fill='#8A96A8'/></svg> );
};
