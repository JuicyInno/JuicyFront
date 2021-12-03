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
        d='M21 11.0004C23.6263 11.657 26.3737 11.657 29 11.0004L29.8901 10.7777C30.4141 10.6466 30.8991 11.0963 30.7743 11.6219C30.2221 13.9482 29.3152 15.4622 28.5 17.5C28.3339 17.9152 28.368 18.6045 28.5 19.0003C28.8479 20.0438 30.0053 21.6764 30.6156 22.4955C30.8472 22.8063 30.8856 23.2246 30.6183 23.5053C30.3108 23.8282 29.7963 24.2346 29 24.5002C26.4319 25.3565 23.6263 25.1568 21 24.5002C17.5808 23.6452 15.9883 23.521 14.3488 24.1276C13.8159 24.3247 13.5 24.8589 13.5 25.427V28.7502C13.5 29.4405 12.9404 30.0002 12.25 30.0002C11.5596 30.0002 11 29.4405 11 28.7502V13.0003C11 9.00005 19.1063 10.5269 21 11.0004Z'
        fill='currentColor'
      />
    </svg>
  );
};
