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
        d='M20.0739 12.5378C19.9572 12.6 18.7518 13.2221 17.1342 14.062L15.0033 12.04L17.1653 9.96362C18.6896 10.7491 19.8484 11.3557 20.0739 11.4723C20.8205 11.8612 20.4394 12.3433 20.0739 12.5378ZM7.57641 5.00195C7.60881 5.01156 7.64009 5.0246 7.66973 5.04084C8.12857 5.27414 15.0422 8.86707 16.5354 9.63699L14.5134 11.5734L7.57641 5.00195ZM6.75984 19.0082C6.57453 18.815 6.48107 18.5516 6.5032 18.2849V5.76409C6.48461 5.52683 6.56643 5.29266 6.72873 5.11861L14.0312 12.04L6.75984 19.0082ZM16.5121 14.3887C13.2535 16.084 8.82071 18.3938 7.83305 18.9071L14.5134 12.4989L16.5121 14.3887Z'
        fill='currentColor'
      />
    </svg>
  );
};
