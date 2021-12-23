import React from 'react';
import { IIconProps } from '../../../../types';
import { iconSize } from '../../../../utils/helpers';
/* eslint-disable max-len */

export default (props: IIconProps) => {
  const size = props.size ? iconSize[props.size] : '24';
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M11.9879 12.098C13.8293 12.1031 15.4922 10.9975 16.2 9.29756C16.9078 7.59759 16.5209 5.6386 15.22 4.33536C13.919 3.03211 11.9607 2.64172 10.2595 3.34648C8.55829 4.05124 7.44976 5.71212 7.45158 7.55355C7.44959 10.061 9.48043 12.0955 11.9879 12.098ZM11.9879 5.31283C13.2229 5.31035 14.2261 6.30952 14.2286 7.54455C14.2311 8.77957 13.2319 9.78277 11.9969 9.78526C10.7619 9.78775 9.75868 8.78858 9.75619 7.55355C9.75451 6.96032 9.98882 6.39078 10.4074 5.97046C10.8261 5.55013 11.3947 5.31354 11.9879 5.31283ZM17.2172 12.6559C16.9616 12.134 16.2525 11.711 15.3094 12.4579C13.2957 13.7898 10.6811 13.7898 8.66732 12.4579C7.72424 11.711 7.01513 12.134 6.75866 12.6559C6.30872 13.5558 6.81715 13.9877 7.95551 14.7257C8.93166 15.2666 10.0137 15.589 11.1267 15.6705L10.4068 16.3904C9.39173 17.4073 8.41266 18.3882 7.73324 19.0721C7.32736 19.4803 7.32736 20.1397 7.73324 20.5479L7.85562 20.6739C8.26251 21.0788 8.92006 21.0788 9.32694 20.6739L12.0005 17.9922C13.0147 19.0091 13.9938 19.99 14.6732 20.6739C15.0801 21.0788 15.7376 21.0788 16.1445 20.6739L16.2669 20.5479C16.6737 20.1401 16.6737 19.4799 16.2669 19.0721L13.5942 16.3904L12.8743 15.6705C13.9806 15.5897 15.0558 15.2671 16.0239 14.7257C17.1596 13.9877 17.6671 13.5558 17.2172 12.6559Z'
        fill='currentColor'
      />
    </svg>
  );
};
