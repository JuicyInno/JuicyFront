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
        d='M17.6099 14.0663C17.2085 13.6868 16.5756 13.7046 16.1962 14.1059L12.9998 17.4867L12.9998 4C12.9998 3.44771 12.5521 3 11.9998 3C11.4475 3 10.9998 3.44771 10.9998 4L10.9998 17.4867L7.80334 14.1059C7.42392 13.7046 6.791 13.6868 6.38968 14.0663C5.98837 14.4457 5.97062 15.0786 6.35005 15.4799L11.2731 20.687C11.462 20.8868 11.7248 21 11.9998 21C12.2747 21 12.5375 20.8868 12.7264 20.687L17.6495 15.4799C18.0289 15.0786 18.0112 14.4457 17.6099 14.0663Z'
        fill='currentColor'
      />
    </svg>
  );
};
