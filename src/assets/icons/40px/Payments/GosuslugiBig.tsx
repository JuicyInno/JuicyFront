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
        d='M16.979 8.70337C18.6033 7.76554 20.6046 7.76554 22.229 8.70337L27.715 11.8707C29.3394 12.8086 30.34 14.5417 30.34 16.4174V22.7521C30.34 24.6277 29.3394 26.3609 27.715 27.2987L22.229 30.4661C20.6046 31.4039 18.6033 31.4039 16.979 30.4661L10.375 26.6533C9.77713 26.3081 9.57229 25.5436 9.91747 24.9458C10.2626 24.3479 11.0271 24.143 11.625 24.4882L18.229 28.301C19.0798 28.7923 20.1281 28.7923 20.979 28.301L26.465 25.1337C27.3159 24.6424 27.84 23.7346 27.84 22.7521V16.4174C27.84 15.4349 27.3159 14.527 26.465 14.0358L20.979 10.8684C20.1281 10.3772 19.0798 10.3772 18.229 10.8684L11.625 14.6812C11.0271 15.0264 10.2626 14.8216 9.91747 14.2237C9.57229 13.6258 9.77713 12.8613 10.375 12.5162L16.979 8.70337Z'
        fill='currentColor'
      />
      <path
        d='M9 17.6312C9 17.0789 9.44772 16.6312 10 16.6312H20C20.5523 16.6312 21 17.0789 21 17.6312C21 18.1835 20.5523 18.6312 20 18.6312H10C9.44772 18.6312 9 18.1835 9 17.6312Z'
        fill='currentColor'
      />
      <path
        d='M10 20.6312C9.44772 20.6312 9 21.0789 9 21.6312C9 22.1835 9.44772 22.6312 10 22.6312H16C16.5523 22.6312 17 22.1835 17 21.6312C17 21.0789 16.5523 20.6312 16 20.6312H10Z'
        fill='currentColor'
      />
    </svg>
  );
};
