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
        d='M18.1445 8.42632C17.0777 7.06852 14.9566 7.10041 13.8412 8.41863C13.8004 8.46683 13.7602 8.51563 13.7204 8.56509C12.3802 10.2333 13.4843 12.9616 15.9453 13H10.5C9.67157 13 9 13.6716 9 14.5V17.125H31V14.5C31 13.6716 30.3284 13 29.5 13H23.9993C26.5 13 27.627 10.2451 26.2773 8.56509C26.2376 8.51563 26.1973 8.46683 26.1565 8.41863C25.0412 7.10041 22.9201 7.06852 21.8533 8.42632C20.9403 9.58837 20.5356 10.9085 19.999 13C19.4624 10.9085 19.0575 9.58837 18.1445 8.42632Z'
        fill='currentColor'
      />
      <path
        d='M31 18.875H20.875V30H29.5C30.3284 30 31 29.3284 31 28.5V18.875Z'
        fill='currentColor'
      />
      <path
        d='M9 18.875H19.125V30H10.5C9.67157 30 9 29.3284 9 28.5V18.875Z'
        fill='currentColor'
      />
    </svg>
  );
};
