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
        d='M5 5C3.89543 5 3 5.89543 3 7V7.99977L21 7.99977V7C21 5.89543 20.1046 5 19 5H5ZM21 9.99977L3 9.99977V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V9.99977ZM5.99993 14.9998C5.44765 14.9998 4.99993 15.4475 4.99993 15.9998C4.99993 16.5521 5.44765 16.9998 5.99993 16.9998H7.99993C8.55222 16.9998 8.99993 16.5521 8.99993 15.9998C8.99993 15.4475 8.55222 14.9998 7.99993 14.9998H5.99993Z'
        fill='currentColor'
      />
    </svg>
  );
};
