import React, { SVGProps } from 'react';

export default (props: SVGProps<SVGSVGElement>) =>
  <svg width='16' height='8' viewBox='0 0 16 8' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fill-rule='evenodd'
      clip-rule='evenodd'
      // eslint-disable-next-line max-len
      d='M0.765201 0.32172C1.1398 -0.0841008 1.77246 -0.109407 2.17828 0.265196L8 5.63909L13.8217 0.265196C14.2275 -0.109408 14.8602 -0.0841014 15.2348 0.321719C15.6094 0.72754 15.5841 1.3602 15.1783 1.7348L8.67828 7.7348C8.29522 8.0884 7.70479 8.0884 7.32172 7.7348L0.821725 1.7348C0.415904 1.3602 0.390597 0.72754 0.765201 0.32172Z'
      fill='#8A96A8'
    />
  </svg>;
