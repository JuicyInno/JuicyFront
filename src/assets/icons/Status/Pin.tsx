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
        d='M12.5 3C9.65968 3 7.35714 5.30254 7.35714 8.14286V10.7143H5.75C4.50736 10.7143 3.5 11.7216 3.5 12.9643V18.75C3.5 19.9926 4.50736 21 5.75 21H19.25C20.4926 21 21.5 19.9926 21.5 18.75V12.9643C21.5 11.7216 20.4926 10.7143 19.25 10.7143H17.6429V8.14286C17.6429 5.30254 15.3403 3 12.5 3ZM15.0714 10.7143V8.14286C15.0714 6.7227 13.9202 5.57143 12.5 5.57143C11.0798 5.57143 9.92857 6.7227 9.92857 8.14286V10.7143H15.0714ZM8.64286 15.8572C8.64286 16.5673 8.06722 17.1429 7.35714 17.1429C6.64706 17.1429 6.07143 16.5673 6.07143 15.8572C6.07143 15.1471 6.64706 14.5715 7.35714 14.5715C8.06722 14.5715 8.64286 15.1471 8.64286 15.8572ZM12.5001 17.1429C13.2102 17.1429 13.7858 16.5673 13.7858 15.8572C13.7858 15.1471 13.2102 14.5715 12.5001 14.5715C11.79 14.5715 11.2144 15.1471 11.2144 15.8572C11.2144 16.5673 11.79 17.1429 12.5001 17.1429ZM18.9286 15.8572C18.9286 16.5673 18.353 17.1429 17.6429 17.1429C16.9329 17.1429 16.3572 16.5673 16.3572 15.8572C16.3572 15.1471 16.9329 14.5715 17.6429 14.5715C18.353 14.5715 18.9286 15.1471 18.9286 15.8572Z'
        fill='currentColor'
      />
    </svg>
  );
};
