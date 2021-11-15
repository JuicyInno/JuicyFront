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
        d='M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM12.0251 17.7245C11.4866 17.7245 11.0502 17.288 11.0502 16.7496V11.2901C11.0502 10.7517 11.4866 10.3152 12.0251 10.3152C12.5635 10.3152 13 10.7517 13 11.2901V16.7496C13 17.288 12.5635 17.7245 12.0251 17.7245ZM11.0499 7.975C11.0499 7.43657 11.4864 7.0001 12.0248 7.0001C12.5632 7.0001 12.9997 7.43657 12.9997 7.975C12.9997 8.51342 12.5632 8.94989 12.0248 8.94989C11.4864 8.94989 11.0499 8.51342 11.0499 7.975Z'
        fill='currentColor'
      />
    </svg>
  );
};
