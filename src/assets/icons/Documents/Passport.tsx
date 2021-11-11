import React from 'react';
import { IIconProps } from '../../../types';
import { iconSize } from '../../../utils/helpers';
/* eslint-disable max-len */

export default (props: IIconProps) => {
  const size = props.size ? iconSize[props.size] : '40';
  return (
    <svg
      width={Number(size) + 1}
      height={size}
      viewBox='0 0 41 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12 9.5H27C28.1046 9.5 29 10.3954 29 11.5V28.5C29 29.6046 28.1046 30.5 27 30.5H12V9.5ZM25 22.5C25.5523 22.5 26 22.9477 26 23.5C26 24.0523 25.5523 24.5 25 24.5H16C15.4477 24.5 15 24.0523 15 23.5C15 22.9477 15.4477 22.5 16 22.5H25ZM20.5 18.5C21.6046 18.5 22.5 17.6046 22.5 16.5C22.5 15.3954 21.6046 14.5 20.5 14.5C19.3954 14.5 18.5 15.3954 18.5 16.5C18.5 17.6046 19.3954 18.5 20.5 18.5Z'
        fill='currentColor'
      />
    </svg>
  );
};
