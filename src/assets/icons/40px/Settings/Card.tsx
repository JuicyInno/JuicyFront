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
        d='M28.5 12.8H10.5C9.11929 12.8 8 13.9193 8 15.3V26.3C8 27.6807 9.11929 28.8 10.5 28.8H28.5C29.8807 28.8 31 27.6807 31 26.3V15.3C31 13.9193 29.8807 12.8 28.5 12.8ZM20.7299 16.8405C21.0631 16.5073 21.6034 16.5073 21.9367 16.8405L25.35 20.2539C25.6833 20.5871 25.6833 21.1274 25.35 21.4607L21.9368 24.874C21.6036 25.2073 21.0633 25.2073 20.73 24.874C20.3967 24.5408 20.3967 24.0005 20.73 23.6672L22.6857 21.7114H13.6533C13.182 21.7114 12.8 21.3293 12.8 20.8581C12.8 20.3868 13.182 20.0047 13.6533 20.0047H22.6873L20.7299 18.0473C20.3966 17.7141 20.3966 17.1738 20.7299 16.8405Z'
        fill='currentColor'
      />
    </svg>
  );
};
