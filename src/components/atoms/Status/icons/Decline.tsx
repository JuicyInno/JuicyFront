import React from 'react';
import { IStatusIconProps } from './types';
import { statusIconSize } from './helpers';
/* eslint-disable max-len */

export default (props: IStatusIconProps) => {
  const size = props.size ? statusIconSize[props.size] : '20';
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM13.9313 5.71019C13.5703 5.36115 12.9948 5.37077 12.6458 5.73168L9.83171 8.64141L7.01763 5.73168C6.66859 5.37077 6.09307 5.36115 5.73216 5.71019C5.37126 6.05923 5.36164 6.63476 5.71068 6.99566L8.56701 9.94909L5.71053 12.9027C5.36149 13.2636 5.37111 13.8391 5.73201 14.1881C6.09292 14.5372 6.66844 14.5276 7.01748 14.1667L9.83171 11.2568L12.6459 14.1667C12.995 14.5276 13.5705 14.5372 13.9314 14.1881C14.2923 13.8391 14.3019 13.2636 13.9529 12.9027L11.0964 9.94909L13.9527 6.99566C14.3018 6.63476 14.2922 6.05923 13.9313 5.71019Z'
        fill='currentColor'
      />
    </svg>
  );
};
