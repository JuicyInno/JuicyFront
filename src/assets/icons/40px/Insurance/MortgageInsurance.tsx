import React from 'react';
import { IIconProps } from '../../../../types';
import { iconSize } from '../../../../utils/helpers';
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
        d='M11 13.5C11 12.3954 11.8954 11.5 13 11.5H28C29.1046 11.5 30 12.3954 30 13.5V21.7997C30 24.2965 28.8343 26.65 26.8483 28.1632L22.3181 31.6148C21.2441 32.433 19.7559 32.433 18.6819 31.6148L14.1517 28.1632C12.1657 26.65 11 24.2965 11 21.7997V13.5ZM13.5 21.7997V14.7C13.5 14.3134 13.8134 14 14.2 14H19.8C20.1866 14 20.5 14.3134 20.5 14.7V28.478C20.5 29.076 19.7985 29.3987 19.3444 29.0094L19 28.7142L15.6668 26.1746C14.3014 25.1343 13.5 23.5162 13.5 21.7997Z'
        fill='currentColor'
      />
    </svg>
  );
};
