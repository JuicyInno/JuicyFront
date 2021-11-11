import React from 'react';
import { IIconProps } from '../../../types';
import { iconSize } from '../../../utils/helpers';
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
        d='M20.5 9C15.8056 9 12 12.8056 12 17.5V28.7045C12 29.7714 12.8649 30.6363 13.9318 30.6363H27.0682C28.1351 30.6363 29 29.7714 29 28.7045V17.5C29 12.8056 25.1944 9 20.5 9ZM19.3312 20.3111L14.8547 17.5507C14.6186 17.4051 14.3165 17.5498 14.3182 17.8271C14.3242 18.7831 14.6288 20.0902 15.5843 20.7776C16.8243 21.6697 18.2207 21.361 19.2405 21.0448C19.5631 20.9448 19.6188 20.4884 19.3312 20.3111ZM26.1452 17.5502L21.6687 20.3106C21.3812 20.4879 21.4368 20.9443 21.7595 21.0443C22.7792 21.3605 24.1757 21.6692 25.4156 20.7771C26.3712 20.0897 26.6758 18.7826 26.6817 17.8267C26.6834 17.5493 26.3813 17.4046 26.1452 17.5502ZM19.1579 25.1055C18.6637 25.1055 18.2632 25.5061 18.2632 26.0002C18.2632 26.4944 18.6637 26.8949 19.1579 26.8949H21.8421C22.3362 26.8949 22.7368 26.4944 22.7368 26.0002C22.7368 25.5061 22.3362 25.1055 21.8421 25.1055H19.1579Z'
        fill='currentColor'
      />
    </svg>
  );
};
