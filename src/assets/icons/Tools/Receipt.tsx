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
        d='M18.6927 20.2873C18.9753 20.6508 19.3514 21 19.8118 21C20.3465 21 20.78 20.5665 20.78 20.0319V12.03V6.25C20.78 4.86929 19.6607 3.75 18.28 3.75H6.71997C5.33926 3.75 4.21997 4.86929 4.21997 6.25V12.03V20.0319C4.21997 20.5665 4.65342 21 5.18811 21C5.64856 21 6.02463 20.6508 6.3072 20.2873C6.6228 19.8812 7.11588 19.62 7.66997 19.62C8.24806 19.62 8.75974 19.9044 9.07275 20.3409C9.3184 20.6834 9.66342 21 10.085 21C10.5065 21 10.8515 20.6834 11.0972 20.3409C11.4102 19.9044 11.9219 19.62 12.5 19.62C13.0781 19.62 13.5897 19.9044 13.9027 20.3409C14.1484 20.6834 14.4934 21 14.915 21C15.3365 21 15.6815 20.6834 15.9272 20.3409C16.2402 19.9044 16.7519 19.62 17.33 19.62C17.8841 19.62 18.3771 19.8812 18.6927 20.2873ZM8.82 8.35C8.82 7.8419 9.2319 7.43 9.74 7.43H15.26C15.7681 7.43 16.18 7.8419 16.18 8.35C16.18 8.8581 15.7681 9.27 15.26 9.27H9.74C9.2319 9.27 8.82 8.8581 8.82 8.35ZM9.74 11.11C9.2319 11.11 8.82 11.5219 8.82 12.03C8.82 12.5381 9.2319 12.95 9.74 12.95H15.26C15.7681 12.95 16.18 12.5381 16.18 12.03C16.18 11.5219 15.7681 11.11 15.26 11.11H9.74Z'
        fill='currentColor'
      />
    </svg>
  );
};
