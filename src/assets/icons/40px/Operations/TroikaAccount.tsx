import React from 'react';
import { IIconProps } from '../../../../types';
import { iconSize } from '../../../../utils/helpers';
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
        d='M26.0521 14.4885H21.8991V28.14C21.8991 28.9262 21.7239 29.5116 21.3736 29.8961C21.0232 30.2721 20.5703 30.4601 20.0148 30.4601C19.4509 30.4601 18.9894 30.2678 18.6305 29.8833C18.2801 29.4987 18.105 28.9177 18.105 28.14V14.4885H13.9519C13.3026 14.4885 12.8197 14.3476 12.5036 14.0655C12.1873 13.775 12.0293 13.3947 12.0293 12.9248C12.0293 12.4377 12.1916 12.0531 12.5163 11.7711C12.8496 11.4892 13.3281 11.3481 13.9519 11.3481H26.052C26.7099 11.3481 27.1971 11.4935 27.5132 11.784C27.8379 12.0745 28.0003 12.4548 28.0003 12.9248C28.0003 13.3947 27.8379 13.775 27.5132 14.0655C27.1885 14.3476 26.7015 14.4885 26.0521 14.4885Z'
        fill='currentColor'
      />
    </svg>
  );
};