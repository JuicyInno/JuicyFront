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
        d='M14.9231 9.99976C13.861 9.99976 13 10.8607 13 11.9228C13 12.2415 13.2529 12.4998 13.5715 12.4998L26.0017 12.4998C28.2108 12.4998 30 14.2906 30 16.4998V22.9229C30 23.2416 30.2583 23.4999 30.577 23.4998C31.639 23.4998 32.5 22.6388 32.5 21.5767V12.4998C32.5 11.119 31.3807 9.99976 30 9.99976H14.9231Z'
        fill='currentColor'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M8.5 26.0001C8.5 27.1047 9.39543 28.0001 10.5 28.0001L25.9999 28.0001C27.1045 28.0001 27.9999 27.1047 27.9999 26.0001L27.9999 16.5001C27.9999 15.3955 27.1045 14.5001 25.9999 14.5001H10.5C9.39547 14.5001 8.50005 15.3955 8.50004 16.5001L8.5 26.0001ZM18.25 18.25C18.7234 18.25 19.1071 18.6338 19.1071 19.1071V20.3928H20.3929C20.8662 20.3928 21.25 20.7766 21.25 21.25C21.25 21.7234 20.8662 22.1071 20.3929 22.1071H19.1071V23.3929C19.1071 23.8662 18.7234 24.25 18.25 24.25C17.7766 24.25 17.3928 23.8662 17.3928 23.3929V22.1071H16.1071C15.6338 22.1071 15.25 21.7234 15.25 21.25C15.25 20.7766 15.6338 20.3928 16.1071 20.3928H17.3928V19.1071C17.3928 18.6338 17.7766 18.25 18.25 18.25Z'
        fill='currentColor'
      />
    </svg>
  );
};
