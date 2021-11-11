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
        d='M18.3893 28.2155L28.5025 18.5588C30.6464 16.5117 30.7469 13.1483 28.7273 11.0333C26.7078 8.91828 23.3433 8.86341 21.1994 10.9105L11.0863 20.5672C8.94235 22.6143 8.84186 25.9776 10.8614 28.0927C12.881 30.2077 16.2454 30.2626 18.3893 28.2155ZM17.973 18.7316C18.3984 19.1771 18.3821 19.8832 17.9366 20.3086C17.4911 20.734 16.7851 20.7177 16.3597 20.2721C15.9343 19.8266 15.9506 19.1206 16.3961 18.6952C16.8416 18.2698 17.5476 18.2861 17.973 18.7316ZM20.662 16.1642C21.0874 16.6098 21.0711 17.3158 20.6256 17.7412C20.1801 18.1666 19.474 18.1503 19.0486 17.7048C18.6232 17.2592 18.6395 16.5532 19.085 16.1278C19.5306 15.7024 20.2366 15.7187 20.662 16.1642ZM20.504 22.998C20.9495 22.5726 20.9658 21.8666 20.5404 21.4211C20.115 20.9755 19.409 20.9592 18.9635 21.3846C18.5179 21.8101 18.5016 22.5161 18.927 22.9616C19.3525 23.4071 20.0585 23.4234 20.504 22.998ZM23.2296 18.8537C23.655 19.2992 23.6387 20.0052 23.1932 20.4306C22.7477 20.856 22.0417 20.8397 21.6163 20.3942C21.1908 19.9487 21.2072 19.2427 21.6527 18.8173C22.0982 18.3919 22.8042 18.4082 23.2296 18.8537Z'
        fill='currentColor'
      />
    </svg>
  );
};