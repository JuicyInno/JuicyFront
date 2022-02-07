import React, { SVGProps } from 'react';

const FlagRU = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <rect x='1' y='4' width='22' height='15.75' rx='2' fill='#C4C4C4'/>
      <rect x='1.25' y='4.25' width='21.5' height='15.2143' rx='1.75' fill='white' stroke='#F5F5F5' strokeWidth='0.5'/>
      <mask id='mask0' style={{ maskType: 'alpha' }} maskUnits='userSpaceOnUse' x='1' y='4' width='22' height='16'>
        <rect x='1.25' y='4.25' width='21.5' height='15.2143' rx='1.75' fill='white' stroke='white' strokeWidth='0.5'/>
      </mask>
      <g mask='url(#mask0)'>
        <path fillRule='evenodd' clipRule='evenodd' d='M1 14.4764H23V9.23828H1V14.4764Z' fill='#0C47B7'/>
        <path fillRule='evenodd' clipRule='evenodd' d='M1 19.7147H23V14.4766H1V19.7147Z' fill='#E53B35'/>
      </g>
    </svg>
  );
};

export default FlagRU;
