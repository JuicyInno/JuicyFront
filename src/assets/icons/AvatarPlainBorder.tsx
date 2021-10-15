import React, { SVGProps } from 'react';

export default (props: SVGProps<SVGSVGElement>) =>
  <svg height='45' width='45' viewBox='0 0 46 46' fill='none' xmlns='http://www.w3.org/2000/svg' { ...props }>
    <circle cx='24' cy='24' r='20' stroke='currentColor' stroke-width='3' fill='currentColor' fill-opacity='0' />
  </svg>;
