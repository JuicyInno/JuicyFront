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
        d='M7.37203 4C6.89042 4 6.5 4.39042 6.5 4.87203C6.5 6.7029 7.32179 8.43708 8.7388 9.59645L10.7862 11.2716C11.2464 11.6481 11.2464 12.3519 10.7862 12.7284L8.7388 14.4035C7.32179 15.5629 6.5 17.2971 6.5 19.128C6.5 19.6096 6.89042 20 7.37203 20H17.8633C18.3449 20 18.7353 19.6096 18.7353 19.128C18.7353 17.2971 17.9135 15.5629 16.4965 14.4035L14.4491 12.7284C13.9889 12.3519 13.9889 11.6481 14.4491 11.2716L16.4965 9.59645C17.9135 8.43708 18.7353 6.7029 18.7353 4.87203C18.7353 4.39042 18.3449 4 17.8633 4H7.37203ZM11.9921 15.3793L9.30721 17.7659C8.98379 18.0534 9.18714 18.5882 9.61985 18.5882H15.615C16.0477 18.5882 16.251 18.0534 15.9276 17.7659L13.2427 15.3793C12.8861 15.0624 12.3487 15.0624 11.9921 15.3793Z'
        fill='currentColor'
      />
    </svg>
  );
};