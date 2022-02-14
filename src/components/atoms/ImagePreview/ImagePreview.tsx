import React, {
  useMemo, useRef, useState
} from 'react';
import { createPortal } from 'react-dom';
import {
  AllAdd, AllClose, AllReduce, ArrowsChevronLeft, ArrowsChevronRight
} from '../../../indexIcon';
import { classnames } from '../../../utils/classnames';
import './ImagePreview.scss';


export interface IImagePreviewProps {
  imageList: string[]
  onClose: () => void
}

const ImagePreview: React.FC<IImagePreviewProps> = ({
  imageList,
  onClose
}: IImagePreviewProps) => {

  console.log(imageList);

  const [currentImage, setCurrentImage] = useState(imageList[0]);
  const zoomRef = useRef<HTMLImageElement>(null);

  const visibleValues = useRef({
    minIndex: 0,
    maxIndex: 9
  });

  const zoomInHandler = () => {
    zoomRef.current!.width += 10;

  };

  const zoomOutHandler = () => {
    zoomRef.current!.width -= 10;
  };

  const closeHandler = () => {
    onClose();
  };

  const topNavigation = useMemo(() => <div className='rf-image-preview__top-navigation'>
    <div className='top-navigation__zoom'>
      <div onClick={zoomInHandler} className='top-navigation__button'>
        <AllAdd />
      </div>
      <div onClick={zoomOutHandler} className='top-navigation__button'>
        <AllReduce />
      </div>
    </div>

    <div className='top-navigation__button'>
      <AllClose onClick={closeHandler} />
    </div>

  </div>, []);

  const imageHandler = (src: string) => () => {
    setCurrentImage(src);
  };

  const currentIndex = useMemo(() => imageList.findIndex((image) => image === currentImage), [currentImage]);

  const prevImageHandler = () => {
    setCurrentImage(imageList[currentIndex - 1]);

    if (visibleValues.current.minIndex >= currentIndex) {
      visibleValues.current = {
        minIndex: visibleValues.current.minIndex - 1,
        maxIndex: visibleValues.current.maxIndex - 1,
      };
    }
  };

  const nextImageHandler = () => {
    setCurrentImage(imageList[currentIndex + 1]);

    if (visibleValues.current.maxIndex <= currentIndex) {
      visibleValues.current = {
        minIndex: visibleValues.current.minIndex + 1,
        maxIndex: visibleValues.current.maxIndex + 1,
      };
    }
  };

  const bottomNavigationMenu = useMemo(() => imageList.length > 1 ? <div className='rf-image-preview__bottom-navigation'>
    {imageList.length > 10 ? <div onClick={currentIndex ? prevImageHandler : () => { }} className={classnames(
      'bottom-navigation__left',
      !currentIndex ?
        'button__disabled' : ''
    )}>
      <ArrowsChevronLeft />
    </div> : null}
    {imageList.map((image, index) => {
      if (visibleValues.current.minIndex <= index && visibleValues.current.maxIndex >= index) {
        return <div
          onClick={imageHandler(image)}
          key={image}
          className={classnames(
            'bottom-navigation__item',
            currentIndex === index ? 'item__active' : ''
          )}>
          <img
            src={image}
            alt={image}
          />
        </div>;
      }

      return null;

    })}
    {imageList.length > 10 ? <div
      onClick={currentIndex + 1 !== imageList.length ? nextImageHandler : () => { }} className={classnames(
        'bottom-navigation__right',
        currentIndex + 1 === imageList.length ?
          'button__disabled' : ''
      )}>
      <ArrowsChevronRight />
    </div> : null}

  </div> : null, [currentIndex, imageList]);


  const labelCountComponent = useMemo(() => imageList.length > 10 ? < div className='rf-label-count__component'>
    <label>{currentIndex + 1 + ' / ' + imageList.length}</label>
  </ div> : null, [currentIndex, imageList.length]);


  const navigationControl = useMemo(() => imageList.length > 1 ? <div className='rf-image-preview__navigation-control'>
    <div onClick={currentIndex ? prevImageHandler : () => { }} className={classnames(
      'navigation-control__left',
      !currentIndex ?
        'button__disabled' : ''
    )}>
      <ArrowsChevronLeft />
    </div>
    <div onClick={currentIndex + 1 !== imageList.length ? nextImageHandler : () => { }} className={classnames(
      'navigation-control__right',
      currentIndex + 1 === imageList.length ?
        'button__disabled' : ''
    )}>
      <ArrowsChevronRight />
    </div>

  </div> : null, [imageList, currentIndex]);

  const imageContent = useMemo(() => <div className='rf-image-preview__full-image'>
    <img ref={zoomRef} src={currentImage} alt={currentImage} />
  </div>, [currentImage]);


  const preview = <div className='rf-image-preview'>
    {topNavigation}
    {imageContent}
    <div className='rf-naviation-bottom__container'>
      {labelCountComponent}
      {bottomNavigationMenu}
    </div>
    {navigationControl}
  </div>;


  return (createPortal(preview, document.body));
};


export default ImagePreview;
