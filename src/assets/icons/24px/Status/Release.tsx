import React from 'react';
import { IIconProps } from '../../../../types';
import { iconSize } from '../../../../utils/helpers';
/* eslint-disable max-len */

export default (props: IIconProps) => {
  const size = props.size ? iconSize[props.size] : '24';
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM15.1326 9.81438C15.4912 9.4558 16.0725 9.4558 16.4311 9.81438C16.7897 10.1729 16.7897 10.7543 16.4311 11.1129L11.9311 15.6129C11.5725 15.9715 10.9912 15.9715 10.6326 15.6129L8.17804 13.1583C7.81946 12.7998 7.81946 12.2184 8.17804 11.8598C8.53661 11.5013 9.11797 11.5013 9.47654 11.8598L11.2818 13.6651L15.1326 9.81438Z'
        fill='#2ABB5B'
      />
    </svg>
  );
};
