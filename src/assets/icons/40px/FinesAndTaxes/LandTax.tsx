import React from 'react';
import { IIconProps } from '../../../../types';
import { iconSize } from '../../../../utils/helpers';
/* eslint-disable max-len */

export default (props: IIconProps) => {
  const size = props.size ? iconSize[props.size] : '40';
  return (
    <svg
      width={Number(size)}
      height={size}
      viewBox='0 0 41 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M17.848 13.9003C16.9203 12.1738 15.0972 11 13 11C9.9624 11 7.5 13.4625 7.5 16.5C7.5 18.6164 8.6954 20.4537 10.4479 21.3733C11.0423 21.6852 11.5 22.2564 11.5 22.9276V27.4997C11.5 28.052 11.9477 28.4997 12.5 28.4997H14V20.2904C14 18.607 14.6791 16.9948 15.8835 15.8187L17.848 13.9003Z'
        fill='currentColor'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M16 27.5C16 28.0523 16.4477 28.5 17 28.5H32C32.5523 28.5 33 28.0523 33 27.5V20.2904C33 19.1457 32.5382 18.0494 31.7192 17.2496L26.2466 11.9057C25.2753 10.9572 23.7247 10.9572 22.7534 11.9057L17.2808 17.2496C16.4618 18.0494 16 19.1457 16 20.2904V27.5ZM26.25 21.0001C26.25 20.724 26.0261 20.5001 25.75 20.5001H23.25C22.9739 20.5001 22.75 20.724 22.75 21.0001V23.5001C22.75 23.7762 22.9739 24.0001 23.25 24.0001H25.75C26.0261 24.0001 26.25 23.7762 26.25 23.5001V21.0001Z'
        fill='currentColor'
      />
    </svg>
  );
};
