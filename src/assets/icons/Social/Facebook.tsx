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
      viewBox={`0 0 ${size} ${size}`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M10.2398 20.0172V12.5116H8.39941V9.807H10.2398V7.4945C10.1814 6.53538 10.5447 5.59857 11.2345 4.92958C11.9242 4.26058 12.8717 3.92609 13.8286 4.01375C14.417 4.01198 15.0049 4.04672 15.589 4.11778L15.5297 6.64632C15.5297 6.64632 14.7656 6.63832 13.9294 6.63832C13.0268 6.63832 12.882 7.08641 12.882 7.83057V9.807H15.601L15.4825 12.5116H12.8836V20.0172H10.2398Z'
        fill='currentColor'
      />
    </svg>
  );
};
