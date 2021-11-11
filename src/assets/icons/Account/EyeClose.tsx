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
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M6.62141 9.29292C6.23089 8.9024 5.59772 8.9024 5.2072 9.29292L3.79299 10.7071C3.40246 11.0977 3.40246 11.7308 3.79299 12.1213C4.18351 12.5119 4.81668 12.5119 5.2072 12.1213L6.62141 10.7071C7.01194 10.3166 7.01194 9.68345 6.62141 9.29292Z'
        fill='currentColor'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12.5 12C11.9477 12 11.5 12.4477 11.5 13L11.5 15C11.5 15.5523 11.9477 16 12.5 16C13.0523 16 13.5 15.5523 13.5 15L13.5 13C13.5 12.4477 13.0523 12 12.5 12Z'
        fill='currentColor'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M15.6341 11.5C15.1558 11.7761 14.9919 12.3877 15.2681 12.866L16.2681 14.5981C16.5442 15.0764 17.1558 15.2402 17.6341 14.9641C18.1124 14.688 18.2763 14.0764 18.0001 13.5981L17.0001 11.866C16.724 11.3877 16.1124 11.2239 15.6341 11.5Z'
        fill='currentColor'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M18.2072 9.29292C18.5977 8.9024 19.2309 8.9024 19.6214 9.29292L21.0356 10.7071C21.4262 11.0977 21.4262 11.7308 21.0356 12.1213C20.6451 12.5119 20.0119 12.5119 19.6214 12.1213L18.2072 10.7071C17.8167 10.3166 17.8167 9.68345 18.2072 9.29292Z'
        fill='currentColor'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M5.05276 8.10555C5.54674 7.85856 6.14741 8.05878 6.3944 8.55276C6.78709 9.33813 7.62884 10.2111 8.76447 10.8925C9.89035 11.568 11.2145 12 12.5 12C13.7854 12 15.1096 11.568 16.2355 10.8925C17.3711 10.2111 18.2129 9.33813 18.6055 8.55276C18.8525 8.05878 19.4532 7.85856 19.9472 8.10555C20.4412 8.35254 20.6414 8.95321 20.3944 9.44719C19.7871 10.6618 18.6288 11.7888 17.2645 12.6075C15.8903 13.4319 14.2145 14 12.5 14C10.7854 14 9.1096 13.4319 7.73548 12.6075C6.37111 11.7888 5.21286 10.6618 4.60555 9.44719C4.35856 8.95321 4.55878 8.35254 5.05276 8.10555Z'
        fill='currentColor'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M9.36615 11.5C9.84444 11.7761 10.0083 12.3877 9.73218 12.866L8.73218 14.5981C8.45604 15.0764 7.84444 15.2402 7.36615 14.9641C6.88786 14.688 6.72398 14.0764 7.00013 13.5981L8.00013 11.866C8.27627 11.3877 8.88786 11.2239 9.36615 11.5Z'
        fill='currentColor'
      />
    </svg>
  );
};