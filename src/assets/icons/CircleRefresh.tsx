import React from 'react';
import { svgWithColor } from './CircleConfirm';
/* eslint-disable max-len */
export default (props: svgWithColor) =>
  <svg width='80' height='80' viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx='40' cy='40' r='40' fill={`${props.color1 ? props.color1 || '' : '#F1F2F4'}`} />
    <path fillRule='evenodd' clipRule='evenodd' d='M52.965 41.5424L54.9419 39.5548C55.6415 38.8515 56.7757 38.8515 57.4753 39.5548C58.1748 40.2582 58.1748 41.3985 57.4753 42.1018L52.6386 46.9644C51.9391 47.6677 50.8049 47.6677 50.1053 46.9644L45.2687 42.1018C44.5691 41.3985 44.5691 40.2582 45.2687 39.5548C45.9682 38.8515 47.1025 38.8515 47.802 39.5548L49.3959 41.1573C49.3997 41.0481 49.4016 40.9384 49.4016 40.8282C49.4016 35.6561 45.2311 31.4632 40.0866 31.4632C38.3264 31.4632 36.6803 31.9541 35.2762 32.807C34.6056 33.2144 33.7646 33.2991 33.0861 32.9052C32.0113 32.2813 31.821 30.796 32.8476 30.0948C34.9115 28.6851 37.4034 27.8613 40.0866 27.8613C47.2098 27.8613 52.9842 33.6668 52.9842 40.8282C52.9842 41.0679 52.9778 41.306 52.965 41.5424ZM34.7312 42.1004C34.0317 42.8038 32.8975 42.8038 32.1979 42.1004L30.6038 40.4978C30.6001 40.6072 30.5982 40.7171 30.5982 40.8274C30.5982 45.9995 34.7686 50.1924 39.9131 50.1924C41.6733 50.1924 43.3195 49.7015 44.7235 48.8486C45.3941 48.4412 46.2351 48.3566 46.9136 48.7504C47.9885 49.3743 48.1787 50.8597 47.1521 51.5608C45.0882 52.9705 42.5964 53.7943 39.9131 53.7943C32.79 53.7943 27.0155 47.9888 27.0155 40.8274C27.0155 40.5877 27.022 40.3496 27.0347 40.1131L25.058 42.1004C24.3584 42.8038 23.2242 42.8038 22.5247 42.1004C21.8251 41.3971 21.8251 40.2568 22.5247 39.5535L27.3613 34.6909C28.0608 33.9876 29.1951 33.9876 29.8946 34.6909L34.7312 39.5535C35.4308 40.2568 35.4308 41.3971 34.7312 42.1004Z' fill={`${props.color2 ? props.color2 || '' : '#8A96A8'}`} />
  </svg>;
