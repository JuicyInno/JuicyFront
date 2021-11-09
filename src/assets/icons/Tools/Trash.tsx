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
        d='M9.5 3C8.94772 3 8.5 3.44772 8.5 4C8.5 4.55228 8.94772 5 9.5 5H14.5C15.0523 5 15.5 4.55228 15.5 4C15.5 3.44772 15.0523 3 14.5 3H9.5ZM19 8.68429H20C20.5523 8.68429 21 8.26014 21 7.73692C21 7.2137 20.5523 6.78955 20 6.78955H4C3.44772 6.78955 3 7.2137 3 7.73692C3 8.26014 3.44772 8.68429 4 8.68429H5V19.1053C5 20.1518 5.89543 21.0001 7 21.0001H17C18.1046 21.0001 19 20.1518 19 19.1053V8.68429ZM11 11.5263C11 11.0031 10.5523 10.5789 10 10.5789C9.44772 10.5789 9 11.0031 9 11.5263V16.2632C9 16.7864 9.44772 17.2105 10 17.2105C10.5523 17.2105 11 16.7864 11 16.2632V11.5263ZM14 10.5789C14.5523 10.5789 15 11.0031 15 11.5263V16.2632C15 16.7864 14.5523 17.2105 14 17.2105C13.4477 17.2105 13 16.7864 13 16.2632V11.5263C13 11.0031 13.4477 10.5789 14 10.5789Z'
        fill='currentColor'
      />
    </svg>
  );
};
