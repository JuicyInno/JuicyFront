import React from 'react';
import { createPortal } from 'react-dom';
import { ArrowsChevronLeft, ArrowsChevronRight } from '../../../indexIcon';
import './ImagePreview.scss';


const mockList = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11
];

export interface IImagePreviewProps {
  props?: any
}

const ImagePreview: React.FC<IImagePreviewProps> = ({
  props
}: IImagePreviewProps) => {


  const bottomNavigationMenu = <div className='rf-image-preview__bottom-navigation'>
    {mockList.map((image) => {
      return <div className='bottom-navigation__item'>

      </div>;
    })}
  </div>;

  const navigationControl = <div className='rf-image-preview__navigation-control'>
    <div className='navigation-control__left'>
      <ArrowsChevronLeft />
    </div>
    <div className='navigation-control__right'>
      <ArrowsChevronRight />
    </div>

  </div>;

  const imageContent = <div className='rf-image-preview__full-image'>

  </div>;


  const preview = <div className='rf-image-preview'>
    {imageContent}
    {bottomNavigationMenu}
    {navigationControl}
  </div>;


  return (createPortal(preview, document.body));
};


export default ImagePreview;
