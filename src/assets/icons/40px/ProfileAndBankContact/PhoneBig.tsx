import React from 'react';
import { IIconProps } from '../../../../types';
import { iconSize } from '../../../../utils/helpers';
/* eslint-disable max-len */

export default (props: IIconProps) => {
  const size = props.size ? iconSize[props.size] : '40';
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 40 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M12.3137 11.174L13.4663 10.0642C14.1867 9.37059 15.3152 9.53339 15.8647 10.3925L17.7133 13.61C18.1935 14.397 18.0334 15.3842 17.3157 15.9364L16.3099 16.766C15.9497 17.1128 15.8003 17.5343 16.003 18.0332C16.9446 20.5971 18.956 22.6861 21.4104 23.7934C21.8319 23.9428 22.3281 23.8815 22.6883 23.5347L23.5554 22.561C24.1344 21.8647 25.1268 21.742 25.8952 22.2516L28.9684 24.2901C29.8061 24.8717 29.9261 26.0056 29.2057 26.6992L28.0531 27.8089C26.1081 29.6816 23.1308 30.0496 20.8205 28.8036L20.2603 28.5101C16.1973 26.453 13.0094 22.9979 11.1074 18.86L10.9047 18.3611C9.74967 15.8639 10.3688 13.0467 12.3137 11.174Z'
        fill='currentColor'
      />
    </svg>
  );
};