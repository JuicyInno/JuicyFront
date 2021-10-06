import React, { SVGProps } from 'react';

const FlagDisabled = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <rect x='1' y='4' width='22' height='15.75' rx='2' fill='currentColor'/>
    </svg>
  );
};

export default FlagDisabled;
