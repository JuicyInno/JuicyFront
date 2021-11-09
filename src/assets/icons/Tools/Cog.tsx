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
        d='M21.1206 14.004C21.1214 14.0056 21.1229 14.0062 21.1238 14.0071C21.5241 14.3663 21.6154 14.9362 21.3472 15.393L20.0066 17.6025C19.7416 18.0525 19.1603 18.2685 18.6294 18.1102L17.0576 17.6378C16.5251 18.0337 15.9508 18.3511 15.3466 18.5851L14.984 20.1225C14.8652 20.6303 14.383 21 13.8371 21H11.1626C10.6165 21 10.1344 20.6303 10.0156 20.121L9.65289 18.5851C9.04879 18.3511 8.47451 18.033 7.942 17.6378L6.37184 18.1102C5.83847 18.2677 5.25799 18.0525 4.99051 17.5979L3.65557 15.3975C3.3842 14.9362 3.47538 14.3663 3.8758 14.0071L5.08889 12.9443C5.04798 12.6247 5.02667 12.3083 5.02667 12C5.02667 11.6917 5.04798 11.3753 5.08961 11.0557L3.87983 9.99596C3.47538 9.63368 3.3842 9.06377 3.65326 8.60619L4.99368 6.3967C5.25799 5.94681 5.84092 5.73299 6.37026 5.88982L7.942 6.36223C8.47451 5.967 9.04879 5.64894 9.65289 5.41493L10.0156 3.87753C10.1344 3.36969 10.6165 3 11.1626 3H13.8371C14.383 3 14.8652 3.36969 14.984 3.87822L15.3466 5.41493C15.9508 5.64894 16.5251 5.967 17.0576 6.36223L18.6278 5.88982C19.1603 5.73148 19.7416 5.94749 20.0091 6.40123L21.344 8.60179C21.6154 9.06377 21.5241 9.63368 21.1238 9.99294L19.9107 11.0557C19.9516 11.3753 19.9729 11.6917 19.9729 12C19.9729 12.3083 19.9516 12.6247 19.9107 12.9443L21.1206 14.004ZM9.50001 12.0033C9.50001 13.5805 10.8458 14.8636 12.5 14.8636C14.1542 14.8636 15.5 13.5805 15.5 12.0033C15.5 10.4262 14.1542 9.14307 12.5 9.14307C10.8458 9.14307 9.50001 10.4262 9.50001 12.0033Z'
        fill='currentColor'
      />
    </svg>
  );
};
