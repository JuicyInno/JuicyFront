import React, { DetailedHTMLProps, ImgHTMLAttributes } from 'react';
import './BannerImage.scss';

export const BannerImage = (props: DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>) => {
  return (
    <img className='banner-image' {...props} />
  );
};
