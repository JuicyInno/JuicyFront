import React, { SVGProps } from 'react';

const svgResult = (props: SVGProps<SVGSVGElement>) => (
  <svg width='48' height='48' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'{...props}>
    <rect x='0.5' y='0.5' width='47' height='47' rx='23.5' fill='#F2F8FF' stroke='#00AAFF'/>
    <path d='M24 14C21.243 14 19 16.243 19 19C19 21.757 21.243 24 24 24C26.757 24 29 21.757 29 19C29 16.243 26.757 14 24 14ZM24 22C22.346 22 21 20.654 21 19C21 17.346 22.346 16 24 16C25.654 16 27 17.346 27 19C27 20.654 25.654 22 24 22ZM33 33V32C33 28.141 29.859 25 26 25H22C18.14 25 15 28.141 15 32V33H17V32C17 29.243 19.243 27 22 27H26C28.757 27 31 29.243 31 32V33H33Z' fill='#3369FF'/>

  </svg>
);

export default svgResult;
