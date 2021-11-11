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
        d='M25.5 11.5C25.5 11.2239 25.7239 11 26 11H28.25C28.5261 11 28.75 11.2239 28.75 11.5V13.75C28.75 14.0261 28.5261 14.25 28.25 14.25H26C25.7239 14.25 25.5 14.0261 25.5 13.75V11.5Z'
        fill='currentColor'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M11 12.25C9.61929 12.25 8.5 13.3693 8.5 14.75V25.75C8.5 27.1307 9.61929 28.25 11 28.25H29C30.3807 28.25 31.5 27.1307 31.5 25.75V20.75C31.5 20.4739 31.2761 20.25 31 20.25H28.5V17.25C28.5 16.9739 28.2761 16.75 28 16.75H23.5C23.2239 16.75 23 16.5261 23 16.25V12.75C23 12.4739 22.7761 12.25 22.5 12.25H11ZM28.5 20.25V22.75C28.5 23.0261 28.2761 23.25 28 23.25H26C25.7239 23.25 25.5 23.0261 25.5 22.75V20.75C25.5 20.4739 25.7239 20.25 26 20.25H28.5Z'
        fill='currentColor'
      />
      <path
        d='M31 14.25C30.7239 14.25 30.5 14.4739 30.5 14.75V17C30.5 17.2761 30.7239 17.5 31 17.5H33.25C33.5261 17.5 33.75 17.2761 33.75 17V14.75C33.75 14.4739 33.5261 14.25 33.25 14.25H31Z'
        fill='currentColor'
      />
    </svg>
  );
};
