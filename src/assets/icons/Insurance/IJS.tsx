import React from 'react';
import { IIconProps } from '../../../types';
import { iconSize } from '../../../utils/helpers';
/* eslint-disable max-len */

export default (props: IIconProps) => {
  const size = props.size ? iconSize[props.size] : '40';
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 40 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M12 11C10.8954 11 10 11.8954 10 13V21.2997C10 22.1624 10.1392 23.008 10.4032 23.8077L15.4867 19.3086C15.8657 18.9732 16.4355 18.9738 16.8138 19.3101L19.025 21.2755L24.3128 16.2735C24.714 15.894 25.347 15.9116 25.7265 16.3128C26.106 16.714 26.0884 17.3469 25.6872 17.7265L19.7332 23.3587C19.3563 23.7152 18.7694 23.7243 18.3816 23.3796L16.148 21.3942L11.3056 25.6799C11.7977 26.4321 12.4188 27.1048 13.1517 27.6632L17.6819 31.1148C18.7559 31.933 20.2441 31.933 21.3181 31.1148L25.8483 27.6632C27.8343 26.15 29 23.7965 29 21.2997V13C29 11.8954 28.1046 11 27 11H12Z'
        fill='currentColor'
      />
    </svg>
  );
};
