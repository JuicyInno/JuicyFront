import React, { SVGProps } from 'react';

export default (props: SVGProps<SVGSVGElement>) =>
  <svg width='80' height='80' viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx='40' cy='40' r='40' fill='#F1F2F4'/>
    <path fillRule='evenodd' clipRule='evenodd' d='M37.426 51.847C40.6208 51.847 43.5132 50.5521 45.6068 48.4584L48.3338 51.1853C45.5422 53.9769 41.6857 55.7035 37.426 55.7035C28.9064 55.7035 22 48.7971 22 40.2775C22 31.758 28.9064 24.8516 37.426 24.8516C44.8766 24.8516 51.0935 30.1336 52.5362 37.1573L54.4788 34.3105C55.079 33.4308 56.2787 33.2043 57.1584 33.8045C58.038 34.4048 58.2646 35.6045 57.6643 36.4841L53.0533 43.2417C52.4531 44.1214 51.2534 44.3479 50.3737 43.7477L43.6161 39.1367C42.7365 38.5364 42.5099 37.3367 43.1102 36.4571C43.7104 35.5774 44.9101 35.3509 45.7898 35.9511L48.768 37.9833C47.7036 32.6926 43.0301 28.7081 37.426 28.7081C31.0363 28.7081 25.8565 33.8879 25.8565 40.2775C25.8565 46.6672 31.0363 51.847 37.426 51.847Z' fill='#8A96A8'/>
  </svg>;
