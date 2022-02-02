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
      viewBox='0 0 41 40' fill='none' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' clipRule='evenodd' d='M31.5 20C31.5 26.0751 26.5751 31 20.5 31C14.4249 31 9.5 26.0751 9.5 20C9.5 13.9249 14.4249 9 20.5 9C26.5751 9 31.5 13.9249 31.5 20ZM21.5349 13.7275C21.5349 13.1753 21.0872 12.7275 20.5349 12.7275C19.9827 12.7275 19.5349 13.1753 19.5349 13.7275V14.4851C18.7716 14.6653 18.1797 15.0343 17.7377 15.4835C16.426 16.8167 16.5153 19.1018 18.128 20.2209C18.7408 20.6461 19.5458 20.9187 20.5704 20.9187C21.3725 20.9187 21.7967 21.1429 22.0285 21.3419C22.2684 21.548 22.3942 21.8075 22.4558 22.0222C22.542 22.4126 22.435 22.8387 22.1642 23.1139C21.909 23.3733 21.4881 23.6339 20.7253 23.6339C19.7351 23.6339 19.3097 23.2472 19.0984 22.9527C18.9773 22.7839 18.9045 22.6107 18.8627 22.4788C18.8422 22.4141 18.8305 22.3634 18.8246 22.3338L18.8213 22.317L18.8199 22.3089C18.75 21.7672 18.2572 21.3808 17.713 21.4439C17.1644 21.5075 16.7713 22.0038 16.8349 22.5524L17.8282 22.4373C16.8349 22.5524 16.835 22.5536 16.835 22.5536L16.8352 22.5548L16.8355 22.5575L16.8362 22.5634L16.8381 22.5777C16.8395 22.5883 16.8414 22.6012 16.8437 22.6161C16.8483 22.6459 16.8549 22.6841 16.8641 22.7295C16.8824 22.8201 16.9112 22.9409 16.9559 23.0822C17.0445 23.3621 17.2005 23.7382 17.4733 24.1185C17.8936 24.7044 18.5511 25.2413 19.5165 25.4893V26.2725C19.5165 26.8247 19.9642 27.2725 20.5165 27.2725C21.0687 27.2725 21.5165 26.8247 21.5165 26.2725V25.5705C22.4149 25.4205 23.0959 25.0186 23.5899 24.5166C24.3989 23.6943 24.6315 22.5339 24.3985 21.5461L24.3944 21.5289L24.3898 21.5118C24.2568 21.0259 23.9612 20.3654 23.3314 19.8246C22.6868 19.2711 21.78 18.9187 20.5704 18.9187C19.9168 18.9187 19.5173 18.7506 19.2681 18.5777C18.7499 18.2181 18.656 17.4019 19.1633 16.8862C19.4185 16.6269 19.8395 16.3662 20.6023 16.3662L22.5077 17.6924C22.5782 18.2335 23.0707 18.6193 23.6145 18.5562C24.1631 18.4926 24.5563 17.9963 24.4927 17.4477L23.4993 17.5629C24.4927 17.4477 24.4925 17.4465 24.4925 17.4465L24.4924 17.4453L24.4921 17.4427L24.4913 17.4368L24.4895 17.4225C24.488 17.4118 24.4862 17.399 24.4839 17.384C24.4792 17.3542 24.4726 17.316 24.4634 17.2706C24.4452 17.1801 24.4163 17.0592 24.3717 16.918C24.2831 16.638 24.1271 16.262 23.8542 15.8816C23.395 15.2415 22.6526 14.6599 21.5349 14.4495V13.7275ZM20.6023 16.3662C21.5925 16.3662 22.0179 16.7529 22.2291 17.0475C22.3503 17.2163 22.4231 17.3894 22.4648 17.5213C22.4853 17.586 22.497 17.6368 22.503 17.6664L22.5061 17.6823L22.5076 17.6913L20.6023 16.3662Z' fill='#8A96A8'/></svg> );
};