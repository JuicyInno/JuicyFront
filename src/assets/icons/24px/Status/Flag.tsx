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
        d='M12.579 4.5548C14.7008 5.08858 16.9205 5.08858 19.0423 4.5548L19.7613 4.37377C20.1847 4.26719 20.5765 4.63281 20.4757 5.06006C20.0296 6.95113 19.2969 8.18189 18.6383 9.83849C18.5041 10.176 18.5317 10.7363 18.6383 11.0581C18.9194 11.9064 19.8544 13.2335 20.3475 13.8994C20.5346 14.152 20.5656 14.4921 20.3497 14.7203C20.1013 14.9827 19.6856 15.3131 19.0423 15.529C16.9675 16.2251 14.7008 16.0627 12.579 15.529C9.81667 14.834 8.53009 14.733 7.20551 15.2261C6.77501 15.3864 6.51976 15.8206 6.51976 16.2824V18.9839C6.51976 19.545 6.06763 20 5.50988 20C4.95213 20 4.5 19.545 4.5 18.9839V6.18061C4.5 2.92873 11.0491 4.16992 12.579 4.5548Z'
        fill='currentColor'/>
    </svg>
  );
};
