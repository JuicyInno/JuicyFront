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
      viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' clipRule='evenodd' d='M9.5 19.2859V26.5002C9.5 27.8809 10.6193 29.0002 12 29.0002H28C29.3807 29.0002 30.5 27.8809 30.5 26.5002V19.2859C30.5 18.4649 30.1635 17.6797 29.569 17.1135L22.069 9.97065C20.9103 8.8672 19.0897 8.8672 17.931 9.97065L10.431 17.1135C9.83649 17.6797 9.5 18.4649 9.5 19.2859ZM24.182 19.6821C24.5725 19.2916 24.5725 18.6584 24.182 18.2679C23.7915 17.8774 23.1583 17.8774 22.7678 18.2679L19.2322 21.8035L17.4645 20.0357C17.0739 19.6452 16.4408 19.6452 16.0503 20.0357C15.6597 20.4262 15.6597 21.0594 16.0503 21.4499L18.2423 23.6419C18.789 24.1887 19.6754 24.1887 20.2222 23.6419L24.182 19.6821Z'
        fill='currentColor'
      /></svg> );
};
