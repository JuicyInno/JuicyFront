import React from 'react';
import { IIconProps } from '../../../../types';
import { iconSize } from '../../../../utils/helpers';
/* eslint-disable max-len */

export default (props: IIconProps) => {
  const size = props.size ? iconSize[props.size] : '40';
  return (
    <svg
      width={size}
      height={Number(size) + 1}
      viewBox='0 0 40 41'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M27.0842 16.5152C27.0842 20.6522 23.7305 24.0059 19.5935 24.0059C15.4564 24.0059 12.1027 20.6522 12.1027 16.5152C12.1027 12.3781 15.4564 9.02441 19.5935 9.02441C23.7305 9.02441 27.0842 12.3781 27.0842 16.5152ZM9.14477 27.4603L12.0981 22.4486C13.7835 24.5748 16.3544 25.9671 19.2536 26.0685L16.1496 31.3536C15.7581 32.0202 14.8003 32.0373 14.3853 31.3851L13.1848 29.4986C12.9949 29.2003 12.6658 29.0197 12.3122 29.0197H10.0358C9.23555 29.0197 8.73849 28.1498 9.14477 27.4603ZM23.8504 31.3536L20.7119 26.0096C23.5561 25.6782 26.0192 24.0982 27.5387 21.8323L30.8552 27.4603C31.2615 28.1498 30.7644 29.0197 29.9642 29.0197H27.6878C27.3342 29.0197 27.0051 29.2003 26.8152 29.4986L25.6147 31.3851C25.1997 32.0373 24.2419 32.0202 23.8504 31.3536Z'
        fill='currentColor'
      />
    </svg>
  );
};
