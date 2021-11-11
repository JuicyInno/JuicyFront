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
        d='M9.23928 12.5116C8.85455 12.2452 8.80653 11.695 9.18597 11.4211C10.8465 10.2228 13.5737 9.46002 16.0004 10.5C18.8004 11.7001 19.8337 14 20.0004 15C20.1671 14 21.2004 11.7001 24.0004 10.5C26.4271 9.46002 29.1543 10.2228 30.8148 11.4211C31.1943 11.695 31.1462 12.2452 30.7615 12.5116L25.0004 16.5C26.5004 16 28.5004 17.1667 29.5004 18.5001C30.3792 19.6718 30.8719 21.4871 30.639 23.946C30.5902 24.462 30.0242 24.7355 29.5711 24.4838L22.1122 20.3399C21.8377 20.1874 21.5004 20.3859 21.5004 20.6999V21.3882C21.5004 25.0705 20.5765 28.6939 18.8132 31.9265C18.6204 32.2801 18.2499 32.5 17.8472 32.5H16.3884C15.9883 32.5 15.734 32.0717 15.9256 31.7204C17.6151 28.623 18.5004 25.1512 18.5004 21.623V20.6999C18.5004 20.3859 18.1631 20.1874 17.8886 20.3399L10.4297 24.4838C9.97658 24.7355 9.41064 24.462 9.36178 23.946C9.12894 21.4871 9.6216 19.6718 10.5004 18.5001C11.5004 17.1667 13.5004 16 15.0004 16.5L9.23928 12.5116Z'
        fill='currentColor'
      />
    </svg>
  );
};
