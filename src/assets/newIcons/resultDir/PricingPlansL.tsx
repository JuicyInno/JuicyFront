import React from 'react';
import { IIconProps } from '../../../types';
import { iconSize } from '../../../utils/helpers';
/* eslint-disable max-len */

export default ({ size = 'xs', ...props }: IIconProps) => {
  return (
    <svg
      {...props}
      width={iconSize[size]}
      height={iconSize[size]}
      viewBox='0 0 41 40' fill='none' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' clipRule='evenodd' d='M27.1668 12.9171L26.6668 12.5004V9.41707C26.6668 9.08374 26.4168 8.75041 26.0002 8.75041H25.1668C24.8335 8.75041 24.5002 9.00041 24.5002 9.41707V10.8337L21.6668 8.58374C20.8335 7.91707 19.6668 7.91707 18.8335 8.58374L13.6668 12.9171C13.0002 13.5004 12.5835 14.3337 12.5835 15.1671V19.5837H11.2503C10.2503 19.5837 9.41699 20.4171 9.41699 21.4171V28.4171C9.41699 29.4171 10.2503 30.2504 11.2503 30.2504H29.667C30.667 30.2504 31.5003 29.4171 31.5003 28.4171V21.4171C31.5003 20.4171 30.667 19.5837 29.667 19.5837H28.0835V15.2504C28.2502 14.3337 27.8335 13.5004 27.1668 12.9171ZM19.75 17.4174H21.3334C21.6667 17.4174 21.9167 17.1674 22 16.7507V15.1674C22 14.7507 21.6667 14.5007 21.3334 14.5007H19.75C19.3334 14.5007 19.0834 14.8341 19.0834 15.1674V16.7507C19.0834 17.1674 19.4167 17.4174 19.75 17.4174ZM14.9169 26.3334H16.5003C16.8336 26.3334 17.1669 26.0834 17.1669 25.6667V24.0834C17.1669 23.6667 16.8336 23.4167 16.5003 23.4167H14.9169C14.5002 23.4167 14.2502 23.7501 14.2502 24.0834V25.6667C14.2502 26.0834 14.5836 26.3334 14.9169 26.3334ZM26.0835 26.3334H24.5002C24.1668 26.3334 23.8335 26.0834 23.8335 25.6667V24.0834C23.8335 23.7501 24.0835 23.4167 24.5002 23.4167H26.0835C26.4168 23.4167 26.7502 23.6667 26.7502 24.0834V25.6667C26.6668 26.0834 26.4168 26.3334 26.0835 26.3334Z' fill='#8A96A8'/></svg> );
};
