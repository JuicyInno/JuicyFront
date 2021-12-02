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
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12.8636 11.9686C12.8636 11.9686 12.6889 11.9676 14.2424 11.9683C14.2431 9.04009 16.617 6.6665 19.5454 6.6665C22.4738 6.6665 24.8477 9.04007 24.8484 11.9683C25.648 11.968 26.2272 11.9686 26.2272 11.9686C27.2772 11.9686 28.1363 12.9232 28.1363 14.0899L29.0908 27.8785C29.0908 29.0452 28.2317 29.9998 27.1817 29.9998H11.9091C10.8591 29.9998 10 29.0452 10 27.8785L10.9641 14.0899C10.9641 12.9232 11.8136 11.9686 12.8636 11.9686ZM19.5454 11.9694C19.5454 11.9694 21.2886 11.9694 22.7272 11.9691C22.727 10.212 21.3025 8.78771 19.5454 8.78771C17.7883 8.78771 16.3638 10.212 16.3636 11.9691C18.0237 11.9695 19.5454 11.9694 19.5454 11.9694ZM23.1164 24.7187C23.9399 24.7187 24.6075 24.0511 24.6075 23.2276C24.6075 22.4041 23.9399 21.7365 23.1164 21.7365C22.2928 21.7365 21.6252 22.4041 21.6252 23.2276C21.6252 24.0511 22.2928 24.7187 23.1164 24.7187ZM17.6486 18.2566C17.6486 19.0801 16.981 19.7477 16.1575 19.7477C15.3339 19.7477 14.6663 19.0801 14.6663 18.2566C14.6663 17.4331 15.3339 16.7655 16.1575 16.7655C16.981 16.7655 17.6486 17.4331 17.6486 18.2566ZM23.3219 18.5588C23.7102 18.1706 23.7102 17.5412 23.3219 17.153C22.9337 16.7648 22.3043 16.7648 21.9161 17.153L15.9516 23.1174C15.5634 23.5056 15.5634 24.1351 15.9516 24.5233C16.3399 24.9115 16.9693 24.9115 17.3575 24.5233L23.3219 18.5588Z'
        fill='currentColor'
      />
    </svg>
  );
};
