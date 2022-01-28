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
      viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' clipRule='evenodd' d='M15.0944 7.75984C15.1005 7.70395 15.1053 7.62943 15.1053 7.53268C15.1053 5.99703 13.8604 4.75213 12.3247 4.75213C10.7891 4.75213 9.54418 5.99703 9.54418 7.53268C9.54418 7.62943 9.54893 7.70395 9.55509 7.75984C9.74394 7.79679 10.0387 7.81837 10.5126 7.81625C10.7464 7.81521 10.9928 7.80915 11.2715 7.80229C11.2959 7.80169 11.3205 7.80108 11.3454 7.80047C11.6472 7.79308 11.9798 7.78545 12.3247 7.78545C12.6697 7.78545 13.0023 7.79308 13.3041 7.80047C13.3289 7.80108 13.3536 7.80169 13.378 7.80229C13.6567 7.80915 13.903 7.81521 14.1368 7.81625C14.6107 7.81837 14.9055 7.79679 15.0944 7.75984ZM13.3359 9.65551C15.409 9.70661 16.959 9.74481 16.959 7.53268C16.959 4.97326 14.8841 2.89844 12.3247 2.89844C9.7653 2.89844 7.69048 4.97326 7.69048 7.53268C7.69048 9.74481 9.24044 9.70661 11.3136 9.65551C11.6391 9.64749 11.9774 9.63915 12.3247 9.63915C12.672 9.63915 13.0104 9.64749 13.3359 9.65551Z' fill='#8A96A8'/><path d='M5.58401 20.276H18.8937C20.0571 20.276 21.0002 19.3329 21.0002 18.1695V12.1669H3.47754V18.1695C3.47754 19.3329 4.42064 20.276 5.58401 20.276Z' fill='#8A96A8'/><path d='M3.47754 10.4817V8.90106C3.47754 7.73769 4.42064 6.79459 5.58401 6.79459H18.8937C20.0571 6.79459 21.0002 7.73769 21.0002 8.90106V10.4817H3.47754Z' fill='#8A96A8'/></svg> );
};
