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
        d='M28.5937 21.9234C28.2823 22.8543 28.3583 23.9017 28.9673 24.6715L30.5772 26.7066C31.3552 27.6901 30.6547 29.1373 29.4008 29.1373H18.5687C12.7317 29.1373 8 24.4055 8 18.5686C8 12.7317 12.7317 8 18.5687 8C24.4055 8 29.1372 12.7317 29.1372 18.5686C29.1372 19.7413 28.9462 20.8693 28.5937 21.9234ZM15.9494 15.6471C15.3572 15.6471 14.866 15.1477 15.033 14.5795C15.4855 13.0404 16.8358 12 18.9815 12C21.3908 12 23 13.4158 23 15.3872C23 16.7582 22.3317 17.717 21.1358 18.4429C19.9839 19.1239 19.6586 19.5898 19.6586 20.4859C19.6586 20.773 19.4259 21.0057 19.1389 21.0057H18.2549C17.902 21.0057 17.6147 20.7222 17.6098 20.3694C17.5306 19.0432 18.0406 18.2368 19.2541 17.5109C20.3445 16.8389 20.7138 16.355 20.7138 15.4678C20.7138 14.518 19.9751 13.828 18.8672 13.828C18.0984 13.828 17.5154 14.1532 17.1976 14.7088C16.9231 15.1887 16.5022 15.6471 15.9494 15.6471ZM19.94 23.9448C19.94 24.6527 19.3772 25.2173 18.665 25.2173C17.9527 25.2173 17.3812 24.6527 17.3812 23.9448C17.3812 23.2369 17.9527 22.6813 18.665 22.6813C19.3772 22.6813 19.94 23.2369 19.94 23.9448Z'
        fill='currentColor'
      />
    </svg>
  );
};
