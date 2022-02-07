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
      viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' clipRule='evenodd' d='M12.5 3C7.52944 3 3.5 7.02944 3.5 12C3.5 16.9706 7.52944 21 12.5 21C17.4706 21 21.5 16.9706 21.5 12C21.5 7.02944 17.4706 3 12.5 3ZM12.5251 17.7245C11.9866 17.7245 11.5502 17.288 11.5502 16.7496V11.2901C11.5502 10.7517 11.9866 10.3152 12.5251 10.3152C13.0635 10.3152 13.5 10.7517 13.5 11.2901V16.7496C13.5 17.288 13.0635 17.7245 12.5251 17.7245ZM11.5499 7.975C11.5499 7.43657 11.9864 7.0001 12.5248 7.0001C13.0632 7.0001 13.4997 7.43657 13.4997 7.975C13.4997 8.51342 13.0632 8.94989 12.5248 8.94989C11.9864 8.94989 11.5499 8.51342 11.5499 7.975Z'
        fill='currentColor'
      /></svg> );
};
