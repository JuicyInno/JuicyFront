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
        d='M14.0663 6.31324C13.6868 6.71455 13.7046 7.34747 14.1059 7.72689L17.4867 10.9233H4C3.44771 10.9233 3 11.371 3 11.9233C3 12.4756 3.44771 12.9233 4 12.9233H17.4867L14.1059 16.1198C13.7046 16.4992 13.6868 17.1321 14.0663 17.5334C14.4457 17.9347 15.0786 17.9525 15.4799 17.573L20.687 12.65C20.8868 12.4611 21 12.1983 21 11.9233C21 11.6484 20.8868 11.3856 20.687 11.1967L15.4799 6.2736C15.0786 5.89417 14.4457 5.91192 14.0663 6.31324Z'
        fill='currentColor'
      />
    </svg>
  );
};
