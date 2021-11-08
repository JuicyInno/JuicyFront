import React from 'react';
import { IIconProps } from '../../../types';
import { iconSize } from '../../../utils/helpers';
/* eslint-disable max-len */

export default (props: IIconProps) => {
  const size = props.size ? iconSize[props.size] : '24';
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M2.84255 6.43039C2.5 7.10268 2.5 7.98276 2.5 9.74293V13.9715C2.5 15.7317 2.5 16.6117 2.84255 17.284C3.14387 17.8754 3.62466 18.3562 4.21603 18.6575C4.88832 19.0001 5.76841 19.0001 7.52857 19.0001H17.4714C19.2316 19.0001 20.1117 19.0001 20.784 18.6575C21.3753 18.3562 21.8561 17.8754 22.1574 17.284C22.5 16.6117 22.5 15.7317 22.5 13.9715V9.74293C22.5 7.98276 22.5 7.10268 22.1574 6.43039C21.8561 5.83902 21.3753 5.35822 20.784 5.05691C20.1117 4.71436 19.2316 4.71436 17.4714 4.71436H7.52857C5.76841 4.71436 4.88832 4.71436 4.21603 5.05691C3.62466 5.35822 3.14387 5.83902 2.84255 6.43039ZM15.7988 8.55986C15.5035 8.27428 15.0327 8.28215 14.7471 8.57744L12.4446 10.9581L10.1422 8.57744C9.85664 8.28215 9.38576 8.27428 9.09047 8.55986C8.79519 8.84544 8.78732 9.31632 9.0729 9.61161L11.4099 12.0281L9.07278 14.4446C8.7872 14.7399 8.79507 15.2108 9.09035 15.4964C9.38564 15.7819 9.85652 15.7741 10.1421 15.4788L12.4446 13.098L14.7472 15.4788C15.0328 15.7741 15.5037 15.7819 15.7989 15.4964C16.0942 15.2108 16.1021 14.7399 15.8165 14.4446L13.4794 12.0281L15.8164 9.61161C16.102 9.31632 16.0941 8.84544 15.7988 8.55986Z'
        fill='currentColor'
      />
    </svg>
  );
};
