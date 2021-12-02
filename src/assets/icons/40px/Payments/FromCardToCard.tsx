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
        d='M13.9997 11.9999C13.2633 11.9999 12.6663 12.5968 12.6663 13.3332V14.6665H25.3329C26.8057 14.6665 27.9996 15.8604 27.9996 17.3331V23.3332H29.333C30.0694 23.3332 30.6663 22.7363 30.6663 21.9999V13.3332C30.6663 12.5968 30.0694 11.9999 29.333 11.9999H13.9997ZM9.33301 17.3332C9.33301 16.5969 9.92996 15.9999 10.6663 15.9999H25.333C26.0694 15.9999 26.6663 16.5969 26.6663 17.3332V26.6666C26.6663 27.403 26.0694 27.9999 25.333 27.9999H10.6663C9.92996 27.9999 9.33301 27.403 9.33301 26.6666V17.3332ZM18.8615 18.8615C19.1218 18.6011 19.544 18.6011 19.8043 18.8615L22.471 21.5282C22.7313 21.7885 22.7313 22.2106 22.471 22.471L19.8044 25.1376C19.544 25.398 19.1219 25.398 18.8616 25.1376C18.6012 24.8773 18.6012 24.4552 18.8616 24.1948L20.39 22.6663H13.3329C12.9647 22.6663 12.6662 22.3679 12.6662 21.9997C12.6662 21.6315 12.9647 21.333 13.3329 21.333H20.3902L18.8615 19.8043C18.6011 19.544 18.6011 19.1218 18.8615 18.8615Z'
        fill='currentColor'
      />
    </svg>
  );
};
