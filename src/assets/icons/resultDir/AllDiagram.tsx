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
      viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' clipRule='evenodd' d='M20 21H4C3.448 21 3 20.552 3 20C3 19.448 3.448 19 4 19H20C20.552 19 21 19.448 21 20C21 20.552 20.552 21 20 21ZM18 17C17.448 17 17 16.552 17 16V4C17 3.448 17.448 3 18 3C18.552 3 19 3.448 19 4V16C19 16.552 18.552 17 18 17ZM14 17C13.448 17 13 16.552 13 16V8C13 7.448 13.448 7 14 7C14.552 7 15 7.448 15 8V16C15 16.552 14.552 17 14 17ZM10 17C9.448 17 9 16.552 9 16V8C9 7.448 9.448 7 10 7C10.552 7 11 7.448 11 8V16C11 16.552 10.552 17 10 17ZM6 17C5.448 17 5 16.552 5 16V13C5 12.448 5.448 12 6 12C6.552 12 7 12.448 7 13V16C7 16.552 6.552 17 6 17Z'
        fill='currentColor'
      /></svg> );
};
