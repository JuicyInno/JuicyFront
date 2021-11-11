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
        d='M29.5 17.5H23C23.6701 14.8197 23.6666 13.262 23.5915 11.6232C23.525 10.175 22.3247 9 20.875 9C20.3918 9 19.9892 9.39022 19.9159 9.86788C19.6672 11.4898 18.6828 15.1122 14.7859 18.3771C14.3034 18.7814 14 19.3705 14 20V29.5C14 30.6046 14.8954 31.5 16 31.5H25.9478C27.185 31.5 28.2954 30.7405 28.7438 29.5873L31.024 23.7239C31.3386 22.915 31.5 22.0547 31.5 21.1868V19.5C31.5 18.3954 30.6046 17.5 29.5 17.5Z'
        fill='currentColor'
      />
      <path
        d='M12 19H10C9.44772 19 9 19.4477 9 20V30.5C9 31.0523 9.44772 31.5 10 31.5H12V19Z'
        fill='currentColor'
      />
    </svg>
  );
};
