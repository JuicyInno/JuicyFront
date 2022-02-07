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
      viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' clipRule='evenodd' d='M17.6685 10.8502C18.8336 10.3093 20.1742 10.292 21.3528 10.8027L31.3239 15.1235C32.5286 15.6456 32.5286 17.3541 31.3239 17.8762L21.3528 22.197C20.1742 22.7077 18.8336 22.6904 17.6685 22.1495L9.56982 18.3894V23.9998C9.56982 24.5521 9.12211 24.9998 8.56982 24.9998C8.01754 24.9998 7.56982 24.5521 7.56982 23.9998V16.8454C7.56983 15.9998 7.79655 15.4336 8.43035 15.1394L17.6685 10.8502ZM11.5 25.9999V21.4907L16.8263 23.9636C18.5091 24.7449 20.4456 24.7699 22.148 24.0322L28.5 21.2796V25.9999C28.5 28.7613 24.6944 30.9999 20 30.9999C15.3056 30.9999 11.5 28.7613 11.5 25.9999Z'
        fill='currentColor'
      /></svg> );
};
