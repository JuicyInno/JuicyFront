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
        d='M14.8731 12.25C14.8731 9.14339 17.3915 6.625 20.4981 6.625C23.6047 6.625 26.1231 9.14339 26.1231 12.25C26.1231 15.3566 23.6047 17.875 20.4981 17.875C17.3915 17.875 14.8731 15.3566 14.8731 12.25Z'
        fill='currentColor'
      />
      <path fillRule='evenodd'
        clipRule='evenodd'
        d='M18.6569 20.673C18.8538 20.9543 18.8926 21.3171 18.7596 21.6337L17.1334 25.5057C16.9761 25.8802 17.061 26.3127 17.3483 26.6L19.6662 28.9179C20.0567 29.3084 20.6898 29.3084 21.0804 28.9179L23.3982 26.6001C23.6855 26.3128 23.7704 25.8803 23.6131 25.5057L21.9869 21.6337C21.8539 21.3171 21.8927 20.9543 22.0897 20.673C22.0897 20.673 22.4004 20.1862 22.5799 19.8521C22.6681 19.6879 22.8538 19.596 23.0363 19.6339C27.2012 20.4997 30.4809 23.4605 31.0451 27.3651C31.1236 27.9083 30.9651 28.4496 30.6142 28.8717C28.3999 31.535 24.5404 33.3749 20.4985 33.3749C16.4447 33.3749 12.6141 31.559 10.3866 28.8775C10.0344 28.4535 9.87396 27.9092 9.95536 27.364C10.5242 23.5546 13.6768 20.6219 17.7203 19.6886C17.9012 19.6469 18.0884 19.732 18.1793 19.8938C18.3583 20.2123 18.6569 20.673 18.6569 20.673Z'
        fill='currentColor'
      />
    </svg>
  );
};
