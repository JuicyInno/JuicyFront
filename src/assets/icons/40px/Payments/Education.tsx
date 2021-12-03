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
        d='M17.6681 10.8502C18.8331 10.3093 20.1737 10.292 21.3523 10.8028L31.3234 15.1236C32.5282 15.6456 32.5282 17.3542 31.3234 17.8762L21.3523 22.197C20.1737 22.7077 18.8331 22.6905 17.6681 22.1496L9.56934 18.3895V23.9999C9.56934 24.5522 9.12162 24.9999 8.56933 24.9999C8.01705 24.9999 7.56934 24.5522 7.56934 23.9999V16.8454C7.56934 15.9999 7.79606 15.4336 8.42986 15.1394L17.6681 10.8502ZM11.4995 25.9999V21.4907L16.8258 23.9636C18.5086 24.745 20.4451 24.7699 22.1475 24.0322L28.4995 21.2797V25.9999C28.4995 28.7614 24.6939 30.9999 19.9995 30.9999C15.3051 30.9999 11.4995 28.7614 11.4995 25.9999Z'
        fill='currentColor'
      />
    </svg>
  );
};
