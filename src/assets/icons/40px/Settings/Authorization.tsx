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
        fill='currentColor'
        d='M20 31.5C26.3513 31.5 31.5 26.3513 31.5 20C31.5 13.6487 26.3513 8.5 20 8.5C13.6487 8.5 8.5 13.6487 8.5 20C8.5 26.3513 13.6487 31.5 20 31.5ZM21.4656 14.4484C21.4656 13.639 20.8094 12.9828 20 12.9828C19.1906 12.9828 18.5344 13.639 18.5344 14.4484V20.6344C18.5344 21.0623 18.7213 21.4687 19.0462 21.7472L23.4875 25.554C24.1021 26.0807 25.0273 26.0096 25.554 25.395C26.0808 24.7804 26.0096 23.8552 25.395 23.3284L21.4656 19.9603V14.4484Z'
      />
    </svg>
  );
};
