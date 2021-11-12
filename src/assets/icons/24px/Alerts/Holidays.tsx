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
        d='M19.5 21H5.5C4.96957 21 4.46089 20.7893 4.08582 20.4142C3.71074 20.0391 3.5 19.5304 3.5 19V7C3.5 6.46957 3.71074 5.96089 4.08582 5.58582C4.46089 5.21074 4.96957 5 5.5 5H7.5V4C7.5 3.73478 7.60537 3.48044 7.79291 3.29291C7.98044 3.10537 8.23478 3 8.5 3C8.76522 3 9.01956 3.10537 9.20709 3.29291C9.39463 3.48044 9.5 3.73478 9.5 4V5H15.5V4C15.5 3.73478 15.6054 3.48044 15.7929 3.29291C15.9804 3.10537 16.2348 3 16.5 3C16.7652 3 17.0196 3.10537 17.2071 3.29291C17.3946 3.48044 17.5 3.73478 17.5 4V5H19.5C20.0304 5 20.5391 5.21074 20.9142 5.58582C21.2893 5.96089 21.5 6.46957 21.5 7V19C21.5 19.5304 21.2893 20.0391 20.9142 20.4142C20.5391 20.7893 20.0304 21 19.5 21ZM13.5 11C13.5 10.4477 13.9477 10 14.5 10C15.0523 10 15.5 10.4477 15.5 11V15C15.5 15.5523 15.0523 16 14.5 16C13.9477 16 13.5 15.5523 13.5 15V11ZM10.5 10C9.94772 10 9.5 10.4477 9.5 11V15C9.5 15.5523 9.94772 16 10.5 16C11.0523 16 11.5 15.5523 11.5 15V11C11.5 10.4477 11.0523 10 10.5 10Z'
        fill='currentColor'
      />
    </svg>
  );
};