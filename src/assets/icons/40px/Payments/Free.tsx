import React from 'react';
import { IIconProps } from '../../../../types';
import { iconSize } from '../../../../utils/helpers';
/* eslint-disable max-len */

export default (props: IIconProps) => {
  const size = props.size ? iconSize[props.size] : '40';
  return (
    <svg
      width={Number(size) + 1}
      height={size}
      viewBox='0 0 41 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M20.5126 19.3467C20.5126 21.1808 20.3345 22.6497 19.9784 23.7532C19.7404 24.5118 19.452 25.1495 19.1131 25.6663C18.9659 25.8906 18.8093 26.0922 18.6431 26.271C18.0941 26.8461 17.4931 27.2269 16.8402 27.4134C16.1873 27.5999 15.5567 27.6932 14.9483 27.6932C14.3399 27.6932 13.7092 27.5999 13.0563 27.4134C12.4034 27.2269 11.8025 26.8461 11.2535 26.271C10.7044 25.6803 10.2518 24.841 9.89572 23.753C9.55443 22.6494 9.38379 21.1806 9.38379 19.3465C9.38379 17.5123 9.55443 16.0513 9.89572 14.9633C10.1385 14.2111 10.426 13.5817 10.7583 13.075C10.9135 12.8384 11.0785 12.6286 11.2533 12.4455C11.8023 11.8549 12.4033 11.4663 13.0562 11.2798C13.7091 11.0933 14.3397 11 14.9481 11C15.5565 11 16.1871 11.0933 16.84 11.2798C17.4929 11.4663 18.0939 11.8549 18.6429 12.4455C19.1919 13.0206 19.6371 13.86 19.9784 14.9635C20.3345 16.0516 20.5126 17.5126 20.5126 19.3467ZM16.5563 24.0059C16.7294 23.7427 16.8685 23.4408 16.9737 23.1001C17.1518 22.5717 17.2631 21.981 17.3076 21.3282C17.367 20.6599 17.3966 19.9993 17.3966 19.3465C17.3966 18.6936 17.367 18.0408 17.3076 17.388C17.2631 16.7196 17.1518 16.1212 16.9737 15.5928C16.8105 15.0643 16.5657 14.6369 16.2392 14.3104C15.9128 13.9685 15.4825 13.7975 14.9483 13.7975C14.4141 13.7975 13.9838 13.9685 13.6573 14.3104C13.5259 14.4418 13.4066 14.5895 13.2992 14.7536C13.1398 14.9973 13.0068 15.2771 12.9004 15.593C12.7371 16.1215 12.6259 16.7199 12.5665 17.3883C12.522 18.0411 12.4997 18.6939 12.4997 19.3467C12.4997 19.9995 12.522 20.6601 12.5665 21.3285C12.6259 21.9813 12.7371 22.5719 12.9004 23.1004C13.0784 23.6289 13.3307 24.0641 13.6571 24.406C13.9836 24.7324 14.4139 24.8957 14.9481 24.8957C15.4823 24.8957 15.9126 24.7324 16.2391 24.406C16.3551 24.2845 16.4609 24.1511 16.5563 24.0059Z'
        fill='currentColor'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M24.9909 15.4209L25.0059 15.421H28.3664C30.1772 15.421 31.8161 16.8103 31.8161 18.6847C31.8161 20.5591 30.1772 21.9483 28.3664 21.9483H26.1164V22.9191H28.0526C28.6496 22.9191 29.1798 23.3875 29.1798 24.0232C29.1798 24.6589 28.6496 25.1273 28.0526 25.1273H26.1164V26.6958C26.1164 27.3315 25.5862 27.7999 24.9892 27.7999C24.3922 27.7999 23.8619 27.3316 23.8619 26.6958V25.1273H23.6589C23.0618 25.1273 22.5316 24.6589 22.5316 24.0232C22.5316 23.3875 23.0618 22.9191 23.6589 22.9191H23.8619V21.9483H23.6589C23.0619 21.9483 22.5316 21.4799 22.5316 20.8442C22.5316 20.2085 23.0619 19.7401 23.6589 19.7401H23.8619V16.5323L23.8619 16.5261C23.8619 16.4518 23.8694 16.378 23.8838 16.3074C23.9906 15.7838 24.4603 15.4209 24.9892 15.4209L24.9909 15.4209ZM26.1164 19.7401H28.3664C29.064 19.7401 29.5616 19.2119 29.5616 18.6847C29.5616 18.1574 29.064 17.6292 28.3664 17.6292H26.1164V19.7401Z'
        fill='currentColor'
      />
    </svg>
  );
};