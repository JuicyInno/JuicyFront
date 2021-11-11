import React from 'react';
import { IIconProps } from '../../../types';
import { iconSize } from '../../../utils/helpers';
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
        d='M7.0663 18.3208L8.64801 21.6887C9.10298 22.6574 10.0768 23.2759 11.1471 23.2759H31.3087C31.8427 23.2759 32.1745 22.6955 31.9035 22.2354L31.3772 21.3419C30.881 20.4994 29.9761 19.9821 28.9982 19.9821H11.3546L8.9424 17.5421C8.81274 17.411 8.63598 17.3372 8.45154 17.3372H7.69107C7.18534 17.3372 6.85132 17.8631 7.0663 18.3208Z'
        fill='currentColor'
      />
      <path
        d='M22.6499 18.146L18.1406 13.2241C18.0099 13.0814 17.8252 13.0001 17.6317 13.0001H16.6692C16.1634 13.0001 15.8293 13.5262 16.0445 13.984L18.0008 18.146H22.6499Z'
        fill='currentColor'
      />
      <path
        d='M22.6
            275 23.2759L17.7014 29.5448C17.5705 29.7113 17.3705 29.8085 17.1587 29.8086L15.7495 29.8086C15.2567 29.8086 14.9227 29.3072 15.1124 28.8525L17.4397 23.2759H22.6275Z'
        fill='currentColor'
      />
    </svg>
  );
};
