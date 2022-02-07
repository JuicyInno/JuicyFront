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
      viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' clipRule='evenodd' d='M11 16C13.7614 16 16 13.7614 16 11C16 8.23858 13.7614 6 11 6C8.23858 6 6 8.23858 6 11C6 13.7614 8.23858 16 11 16ZM11 18C14.866 18 18 14.866 18 11C18 7.13401 14.866 4 11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18Z'
        fill='currentColor'
      /><path fillRule='evenodd' clipRule='evenodd' d='M14.7071 14.2929C15.0976 13.9024 15.7308 13.9024 16.1213 14.2929L20.364 18.5355C20.7545 18.9261 20.7545 19.5592 20.364 19.9497C19.9734 20.3403 19.3403 20.3403 18.9497 19.9497L14.7071 15.7071C14.3166 15.3166 14.3166 14.6834 14.7071 14.2929Z'
        fill='currentColor'
      /></svg> );
};
