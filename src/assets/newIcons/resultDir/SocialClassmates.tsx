import React from 'react';
import { IIconProps } from '../../../types';
import { iconSize } from '../../../utils/helpers';
/* eslint-disable max-len */

export default ({ size = 'xs', ...props }: IIconProps) => {
  return (
    <svg
      {...props}
      width={iconSize[size]}
      height={iconSize[size]}
      viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' clipRule='evenodd' d='M11.9884 12.764C13.8298 12.7691 15.4927 11.6635 16.2005 9.96357C16.9083 8.26361 16.5214 6.30462 15.2204 5.00137C13.9195 3.69813 11.9612 3.30774 10.26 4.0125C8.55877 4.71726 7.45025 6.37814 7.45206 8.21956C7.45007 10.727 9.48092 12.7615 11.9884 12.764ZM11.9884 5.97884C13.2234 5.97636 14.2266 6.97553 14.2291 8.21056C14.2316 9.44559 13.2324 10.4488 11.9974 10.4513C10.7624 10.4538 9.75916 9.45459 9.75668 8.21956C9.755 7.62634 9.98931 7.05679 10.4079 6.63647C10.8266 6.21615 11.3952 5.97956 11.9884 5.97884ZM17.2176 13.3219C16.9621 12.8 16.253 12.377 15.3099 13.124C13.2962 14.4558 10.6815 14.4558 8.66781 13.124C7.72473 12.377 7.01562 12.8 6.75915 13.3219C6.30921 14.2218 6.81764 14.6538 7.956 15.3917C8.93215 15.9326 10.0142 16.255 11.1272 16.3366L10.4073 17.0565C9.39222 18.0733 8.41314 19.0542 7.73373 19.7381C7.32785 20.1463 7.32785 20.8057 7.73373 21.2139L7.85611 21.3399C8.263 21.7448 8.92055 21.7448 9.32743 21.3399L12.001 18.6583C13.0152 19.6751 13.9942 20.656 14.6737 21.3399C15.0805 21.7448 15.7381 21.7448 16.145 21.3399L16.2674 21.2139C16.6742 20.8061 16.6742 20.1459 16.2674 19.7381L13.5947 17.0565L12.8748 16.3366C13.9811 16.2557 15.0562 15.9331 16.0244 15.3917C17.1601 14.6538 17.6676 14.2218 17.2176 13.3219Z' fill='#8A96A8'/></svg> );
};
