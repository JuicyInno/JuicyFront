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
        fillRule='evenodd'
        clipRule='evenodd'
        d='M10.8333 18.1963C10.8333 13.1337 14.9374 9.02962 20 9.02962C25.0626 9.02962 29.1667 13.1337 29.1667 18.1963C29.1667 20.4132 28.3809 22.444 27.0717 24.0292C25.254 26.2303 22.5629 29.0037 19.3518 32.2148L20.6482 33.5111C23.8538 30.3055 26.6042 27.4744 28.4853 25.1967C30.0557 23.2951 31 20.8547 31 18.1963C31 12.1212 26.0751 7.19629 20 7.19629C13.9249 7.19629 9 12.1212 9 18.1963C9 20.8547 9.94422 23.2951 11.5147 25.1967C11.8371 25.587 12.4149 25.6421 12.8052 25.3197C13.1955 24.9974 13.2507 24.4196 12.9283 24.0292C11.6191 22.444 10.8333 20.4132 10.8333 18.1963ZM27.3333 18.1963C27.3333 22.2464 24.0501 25.5296 20 25.5296C15.9499 25.5296 12.6667 22.2464 12.6667 18.1963C12.6667 14.1462 15.9499 10.863 20 10.863C24.0501 10.863 27.3333 14.1462 27.3333 18.1963ZM17.25 22.7796H19.1425V19.9284H20.8782C22.7894 19.9284 24.0552 18.7003 24.0552 16.8392V16.8267C24.0552 14.9656 22.7894 13.7373 20.8782 13.7373H17.25V22.7796ZM20.4207 15.235C21.5048 15.235 22.1377 15.8053 22.1377 16.8329V16.8455C22.1377 17.8732 21.5048 18.4497 20.4207 18.4497H19.1425V15.235H20.4207Z'
        fill='currentColor'
      />
    </svg>
  );
};
