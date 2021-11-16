import React from 'react';
import { IIconProps } from '../../../../types';
import { iconSize } from '../../../../utils/helpers';
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
        d='M5.06522 7C4.20077 7 3.5 7.70077 3.5 8.56522V15.6087C3.5 16.4731 4.20077 17.1739 5.06522 17.1739H19.9348C20.7992 17.1739 21.5 16.4731 21.5 15.6087V8.56522C21.5 7.70077 20.7992 7 19.9348 7H5.06522ZM12.5 14.0431C13.5806 14.0431 14.4566 13.1672 14.4566 12.0866C14.4566 11.006 13.5806 10.1301 12.5 10.1301C11.4195 10.1301 10.5435 11.006 10.5435 12.0866C10.5435 13.1672 11.4195 14.0431 12.5 14.0431Z'
        fill='currentColor'
      />
    </svg>
  );
};
