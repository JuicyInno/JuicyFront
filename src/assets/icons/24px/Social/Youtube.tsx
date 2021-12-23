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
        d='M20.3146 15.8143C20.1843 16.8803 19.319 17.7057 18.2481 17.7857C17.5984 17.88 14.4809 18 12.0046 18C9.52836 18 6.41179 17.88 5.76207 17.7857C4.69093 17.7058 3.82537 16.8804 3.69464 15.8143C3.53728 14.5832 3.45142 13.3439 3.4375 12.1029V11.8971C3.45142 10.6561 3.53728 9.41685 3.69464 8.18571C3.82537 7.11958 4.69093 6.29421 5.76207 6.21429C6.41179 6.12 9.52836 6 12.0046 6C14.4809 6 17.5984 6.12 18.2481 6.21429C19.319 6.29427 20.1843 7.11971 20.3146 8.18571C20.4724 9.41681 20.5583 10.6561 20.5718 11.8971V12.1029C20.5583 13.3439 20.4724 14.5832 20.3146 15.8143ZM9.42893 8.57143V15.4286L15.4135 11.8886L9.42893 8.57143Z'
        fill='currentColor'
      />
    </svg>
  );
};
