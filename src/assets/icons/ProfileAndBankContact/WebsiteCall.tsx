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
        d='M11.362 17.8023C11.362 13.2698 15.0175 9.6142 19.5501 9.6142C24.0826 9.6142 27.7382 13.2698 27.7382 17.8023C27.7382 19.3305 27.3322 20.7376 26.6072 21.9475C26.5982 20.5075 25.4255 19.3404 23.9835 19.3404C22.5359 19.3404 21.3597 20.5166 21.3597 21.9642V27.4832C21.3597 28.4805 21.9179 29.349 22.7386 29.7928C22.5045 30.3747 21.9348 30.7855 21.2691 30.7855H20.3643C19.7397 30.7855 19.2334 31.2919 19.2334 31.9165C19.2334 32.5411 19.7397 33.0474 20.3643 33.0474H21.2691C23.162 33.0474 24.7355 31.6796 25.055 29.8785C25.9694 29.4681 26.6073 28.5493 26.6073 27.4832V25.4716C28.7103 23.5587 30.0001 20.8682 30.0001 17.8023C30.0001 12.0205 25.3318 7.35229 19.5501 7.35229C13.7683 7.35229 9.1001 12.0205 9.1001 17.8023C9.1001 20.834 10.4259 23.5558 12.493 25.4784V27.4832C12.493 28.9309 13.6691 30.1071 15.1168 30.1071C16.5644 30.1071 17.7406 28.9309 17.7406 27.4832V21.9642C17.7406 20.5166 16.5644 19.3404 15.1168 19.3404C13.6861 19.3404 12.5205 20.4892 12.4934 21.9134C11.7744 20.6963 11.362 19.292 11.362 17.8023Z'
        fill='currentColor'
      />
    </svg>
  );
};