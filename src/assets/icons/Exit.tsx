import React, { SVGProps } from 'react';

export default (props: SVGProps<SVGSVGElement>) => (
  <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' { ...props }>
    <path d='M17 9.5L19.864 12.4315L17 15' stroke='currentColor' strokeWidth='2' strokeLinecap='round'
      strokeLinejoin='round'/>
    <path d='M9.431 12.4328L18.9987 12.4327' stroke='currentColor' strokeWidth='2' strokeLinecap='square'/>
    <path d='M11.5 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H11.5' stroke='currentColor' strokeWidth='2'
      strokeLinecap='square' strokeLinejoin='round'/>
  </svg>

);
