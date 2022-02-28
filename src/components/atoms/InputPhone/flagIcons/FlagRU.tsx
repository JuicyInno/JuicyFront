import React, { SVGProps } from 'react';

const FlagRU = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg width='24' height='16' viewBox='0 0 24 16' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path d='M24 .016H0v15.969h24V.015Z' fill='#0052B4' />
      <path d='M24 .016H0v5.322h24V.016Z' fill='#F0F0F0' />
      <path d='M24 10.661H0v5.323h24V10.66Z' fill='#D80027' />
    </svg>
  );
};

export default FlagRU;
