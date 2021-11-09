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
        d='M12.6646 14.142C11.4376 14.2206 10.4238 13.1908 10.5045 11.9402C10.5669 10.9068 11.3899 10.0717 12.4036 10.0042C13.6307 9.92563 14.6445 10.9554 14.5638 12.206C14.4976 13.2434 13.6749 14.0784 12.6646 14.142Z'
        fill='currentColor'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M3.64048 12.8867C3.45317 12.632 3.45317 12.2762 3.64048 12.0217C5.93639 8.91349 9.04787 7 12.4788 7C15.91 7 19.0213 8.91349 21.3173 12.0253C21.5047 12.28 21.5047 12.6357 21.3173 12.8904C19.0213 15.9984 15.91 17.912 12.4788 17.912C9.04787 17.912 5.93639 15.9984 3.64048 12.8867ZM5.84795 12.4547C7.77179 14.7159 10.0999 15.912 12.4788 15.912C14.858 15.912 17.186 14.7159 19.1098 12.4574C17.186 10.196 14.858 9 12.4788 9C10.0998 9 7.77176 10.196 5.84795 12.4547Z'
        fill='currentColor'
      />
    </svg>
  );
};
