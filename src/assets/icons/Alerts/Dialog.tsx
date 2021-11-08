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
      viewBox={`0 0 ${size} ${size}`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >

      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M3 10.8843C3 7.07598 7.02805 4 12.0082 4C16.9883 4 21.0164 7.07597 21.0897 10.9576C21.0897 14.7659 17.0616 17.8419 12.0814 17.8419C11.5688 17.8419 11.0561 17.8419 10.5435 17.7686C9.15194 19.0137 7.54073 19.6728 6.36893 19.9658C5.49008 20.1855 4.75769 19.3066 5.05064 18.501L5.9295 16.011C4.09856 14.6927 3 12.935 3 10.8843ZM8.93214 10.7376C8.93214 11.3444 8.4403 11.8362 7.83358 11.8362C7.22686 11.8362 6.73501 11.3444 6.73501 10.7376C6.73501 10.1309 7.22686 9.63907 7.83358 9.63907C8.4403 9.63907 8.93214 10.1309 8.93214 10.7376ZM12.0081 11.8362C12.6149 11.8362 13.1067 11.3444 13.1067 10.7376C13.1067 10.1309 12.6149 9.63907 12.0081 9.63907C11.4014 9.63907 10.9096 10.1309 10.9096 10.7376C10.9096 11.3444 11.4014 11.8362 12.0081 11.8362ZM17.2813 10.7376C17.2813 11.3444 16.7894 11.8362 16.1827 11.8362C15.576 11.8362 15.0841 11.3444 15.0841 10.7376C15.0841 10.1309 15.576 9.63907 16.1827 9.63907C16.7894 9.63907 17.2813 10.1309 17.2813 10.7376Z'
        fill='currentColor'
      />
    </svg>
  );
};
