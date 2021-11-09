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
        d='M13.8073 3.1469C12.9788 2.83204 12.0428 3.03263 11.4161 3.6593L4.15924 10.9162C3.28025 11.7951 3.28025 13.2202 4.15924 14.0992L10.4008 20.3408C11.2798 21.2197 12.7049 21.2197 13.5838 20.3408L20.8407 13.0839C21.4674 12.4572 21.668 11.5212 21.3531 10.6927L19.6342 6.17011C19.4057 5.56899 18.931 5.0943 18.3299 4.86583L13.8073 3.1469ZM14.4924 9.50279C14.9903 10.0006 15.7974 10.0006 16.2952 9.50279C16.793 9.00497 16.793 8.19785 16.2952 7.70002C15.7974 7.2022 14.9903 7.2022 14.4924 7.70002C13.9946 8.19784 13.9946 9.00497 14.4924 9.50279Z'
        fill='currentColor'
      />
    </svg>
  );
};
