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
        d='M19.2912 10.7013C19.2912 9.76443 18.4588 9.03573 17.5618 9.30598C12.8974 10.7112 9.5 15.0403 9.5 20.1628C9.5 26.4242 14.5758 31.5 20.8372 31.5C25.9598 31.5 30.2887 28.1026 31.6941 23.4382C31.9643 22.5412 31.2356 21.7088 30.2988 21.7088H22.3831C20.6756 21.7088 19.2912 20.3245 19.2912 18.6169V10.7013Z'
        fill='currentColor'
      />
      <path
        d='M30.5461 19.6475C31.427 19.6475 32.1401 18.9084 31.9764 18.0428C31.1136 13.4815 27.5186 9.88636 22.9572 9.02354C22.0916 8.85981 21.3525 9.57291 21.3525 10.4538V18.6169C21.3525 19.1861 21.814 19.6475 22.3831 19.6475H30.5461Z'
        fill='currentColor'
      />
    </svg>
  );
};
