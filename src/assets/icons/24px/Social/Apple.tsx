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
        d='M15.4492 6.58272C16.7227 6.68352 17.8871 7.34052 18.6318 8.37852C17.4981 9.01129 16.7793 10.1924 16.7382 11.4901C16.7546 12.974 17.7063 14.2857 19.1119 14.7616C19.1119 14.7616 17.2361 19.02 15.138 19.02C13.9556 19.02 13.8756 18.3621 12.3021 18.3621C10.933 18.3621 10.4796 19.02 9.43944 19.02C7.44805 19.02 4.8877 14.8683 4.8877 11.4901C4.8877 7.98736 7.48361 6.58272 9.1105 6.58272C10.5418 6.58272 11.1375 7.38283 12.2843 7.38283C13.2533 7.38283 14.0179 6.58272 15.4492 6.58272ZM15.1202 3C15.2085 3.94249 14.9067 4.87999 14.2851 5.59396C13.6636 6.30792 12.7766 6.73596 11.8309 6.7783C11.5464 4.59133 13.6445 3.11557 15.1202 3Z'
        fill='currentColor'
      />
    </svg>
  );
};
