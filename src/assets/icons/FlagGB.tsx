import React, { SVGProps } from 'react';
/* eslint-disable max-len */
const FlagGB = (props: SVGProps<SVGSVGElement>) => {
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
      <rect x='1' y='4' width='22' height='15.7143' rx='2' fill='white'/>
      <mask id='mask1' style={{ maskType: 'alpha' }} maskUnits='userSpaceOnUse' x='1' y='4' width='22' height='16'>
        <rect x='1' y='4' width='22' height='15.7143' rx='2' fill='white'/>
      </mask>
      <g mask='url(#mask1)'>
        <rect x='1' y='4' width='22' height='15.7143' fill='#0A17A7'/>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M-0.00755692 2.49414L9.38105 8.82684V2.9523H14.6191V8.82684L24.0078 2.49414L25.1794 4.23117L17.7564 9.23801H23.0001V14.4761H17.7564L25.1794 19.483L24.0078 21.22L14.6191 14.8873V20.7618H9.38105V14.8873L-0.00755692 21.22L-1.1792 19.483L6.24375 14.4761H1.0001V9.23801H6.24375L-1.1792 4.23117L-0.00755692 2.49414Z'
          fill='white'
        />
        <path d='M15.6675 8.97446L25.6188 2.42773' stroke='#DB1F35' strokeWidth='0.666667' strokeLinecap='round'/>
        <path d='M16.7241 14.7625L25.645 20.7754' stroke='#DB1F35' strokeWidth='0.666667' strokeLinecap='round'/>
        <path d='M7.29009 8.95864L-2.01514 2.6875' stroke='#DB1F35' strokeWidth='0.666667' strokeLinecap='round'/>
        <path d='M8.29934 14.6892L-2.01514 21.5293' stroke='#DB1F35' strokeWidth='0.666667' strokeLinecap='round'/>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M1 13.4286H10.4286V19.7143H13.5714V13.4286H23V10.2857H13.5714V4H10.4286V10.2857H1V13.4286Z'
          fill='#E6273E'
        />
      </g>
    </svg>
  );
};

export default FlagGB;
