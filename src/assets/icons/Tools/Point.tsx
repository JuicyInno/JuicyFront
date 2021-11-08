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
        d='M15 3.69998C13.1 2.69998 10.8 2.69998 8.90005 3.79998C5.60005 5.59998 4.40005 9.69998 6.30005 12.9L10.5 20.2C11.1 21.3 12.7 21.3 13.3 20.2L17.6 13.1C19.7 9.79998 18.4 5.49998 15 3.69998ZM12 12C10.7 12 9.70005 11 9.70005 9.69998C9.70005 8.39998 10.7 7.39998 12 7.39998C13.3 7.39998 14.3 8.39998 14.3 9.69998C14.3 11 13.3 12 12 12Z'
        fill='currentColor'
      />
    </svg>
  );
};
