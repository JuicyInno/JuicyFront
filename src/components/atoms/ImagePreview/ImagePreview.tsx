import React, {
  useMemo, useRef, useState
} from 'react';
import { createPortal } from 'react-dom';
import {
  AllAdd, AllClose, AllReduce, ArrowsChevronLeft, ArrowsChevronRight, ArrowsRenew
} from '../../../indexIcon';
import { classnames } from '../../../utils/classnames';
import './ImagePreview.scss';


export interface IImagePreviewProps {
  imageList: string[]
  onClose: () => void,
}

const ImagePreview: React.FC<IImagePreviewProps> = ({
  imageList,
  onClose
}: IImagePreviewProps) => {

  const initMatrix = 'matrix(1,0,0,1,0,0)';

  const [currentImage, setCurrentImage] = useState(imageList[0]);
  const zoomRef = useRef<HTMLImageElement>(null);
  const deltaRef = useRef<number>(1);
  const deltaXRef = useRef<number>(0);
  const deltaYRef = useRef<number>(0);
  const screenRef = useRef<HTMLDivElement>(null);
  const [previewIndex, setPreviewIndex] = useState(0);
  const [isDisabled, setIsDisabled] = useState(true);


  const unFlatArray = (arr: string[], sliceNumber: number) => {
    const result = [];

    for (let s = 0, e = sliceNumber; s < arr.length; s += sliceNumber, e += sliceNumber) {
      result.push(arr.slice(s, e));
    }

    return result;
  };

  const previewArray = useMemo(() => unFlatArray(imageList, 10), [imageList]);


  const visibleValues = useRef({
    minIndex: 0,
    maxIndex: 9
  });

  const zoomInHandler = () => {
    deltaRef.current += 0.5;
    setIsDisabled(false);
    zoomRef.current!.classList.remove('move');
    zoomRef.current!.style.transform = `matrix(${deltaRef.current},0,0,${deltaRef.current},${deltaXRef.current},${deltaYRef.current})`;
  };

  const zoomOutHandler = () => {
    if (deltaRef.current !== 1) {
      deltaRef.current -= 0.5;
    }

    if (deltaRef.current === 1) {
      setIsDisabled(true);
      setInit();
    }

    zoomRef.current!.classList.remove('move');
    zoomRef.current!.style.transform = `matrix(${deltaRef.current},0,0,${deltaRef.current},${deltaXRef.current},${deltaYRef.current})`;
  };

  const zoomInitHandler = () => {
    setIsDisabled(true);
    setInit();
  };

  const closeHandler = () => {
    zoomRef.current!.style.transform = initMatrix;
    onClose();
  };

  const onMoveHandler: React.MouseEventHandler<HTMLElement> = (e) => {
    if (deltaRef.current > 1) {
      zoomRef.current!.classList.add('move');
    }

  };

  const onMouseMoveHandler: React.MouseEventHandler<HTMLElement> = (e) => {
    if (zoomRef.current!.classList[0] === 'move') {
      zoomRef.current!.style.transform =
        `matrix(${deltaRef.current},0,0,${deltaRef.current},${deltaXRef.current += e.movementX},${deltaYRef.current += e.movementY})`;
    }
  };

  const onMoveEndHandler = () => {
    zoomRef.current!.classList.remove('move');
  };


  const topNavigation = useMemo(() => <div className='rf-image-preview__top-navigation'>
    <div className='top-navigation__zoom'>
      <div onClick={zoomInitHandler} className={classnames('top-navigation__button', isDisabled ? 'top-navigation__button--disabled' : '')}>
        <ArrowsRenew />
      </div>
      <div onClick={zoomOutHandler} className={classnames('top-navigation__button', isDisabled ? 'top-navigation__button--disabled' : '')}>
        <AllReduce />
      </div>
      <div onClick={zoomInHandler} className='top-navigation__button'>
        <AllAdd />
      </div>
    </div>

    <div onClick={closeHandler} className='top-navigation__button'>
      <AllClose />
    </div>

  </div>, [isDisabled]);


  const imageHandler = (src: string) => () => {
    setInit();
    setCurrentImage(src);
  };


  const currentIndex = useMemo(() => imageList.findIndex((image) => image === currentImage), [currentImage]);

  const setInit = () => {
    deltaRef.current = 1;
    deltaYRef.current = 0;
    deltaXRef.current = 0;
    zoomRef.current!.style.transform = initMatrix;
    zoomRef.current!.classList.remove('move');
  };

  const prevImageHandler = () => {
    setInit();
    setCurrentImage(imageList[currentIndex - 1]);
    setPreviewIndex(Math.floor(currentIndex / 10));

    if ((currentIndex) % 10 === 0) {
      setPreviewIndex(previewIndex - 1);
    } else {
      if (visibleValues.current.minIndex > previewIndex) {
        visibleValues.current = {
          minIndex: visibleValues.current.minIndex - 1,
          maxIndex: visibleValues.current.maxIndex - 1,
        };
      }
    }


  };

  const nextImageHandler = () => {
    setInit();
    setCurrentImage(imageList[currentIndex + 1]);
    setPreviewIndex(Math.floor(currentIndex / 10));

    if ((currentIndex + 1) % 10 === 0) {
      setPreviewIndex(previewIndex + 1);
    } else {
      if (visibleValues.current.maxIndex <= previewIndex) {
        visibleValues.current = {
          minIndex: visibleValues.current.minIndex + 1,
          maxIndex: visibleValues.current.maxIndex + 1,
        };
      }
    }


  };

  const bottomPrevHandler = () => {
    setPreviewIndex(previewIndex - 1);
  };

  const bottomNextHandler = () => {
    setPreviewIndex(previewIndex + 1);
  };

  const noop = useMemo(() => () => { }, []);

  const bottomNavigationMenu = useMemo(() => imageList.length > 1 ? <div
    data-testid='bottom-chevron-left'
    className={classnames('rf-image-preview__bottom-navigation', imageList.length > 10 ? 'rf-image-preview__bottom-navigation--big' : '', isDisabled ? '' : 'bottom-navigation--disabled')}>
    {imageList.length > 10 ? <div onClick={previewIndex > 0 ? bottomPrevHandler : noop} className={classnames(
      'bottom-navigation__left',
      previewIndex > 0 ?
        '' : 'button__disabled'
    )}>
      <ArrowsChevronLeft />
    </div> : null}
    {previewArray[previewIndex].map((image, index) => {

      const realIndex = index + (10 * previewIndex);

      if (visibleValues.current.minIndex <= index && visibleValues.current.maxIndex >= index) {
        return <div
          data-testid={`bottom__image--${index}`}
          onClick={imageHandler(image)}
          key={image}
          className={classnames(
            'bottom-navigation__item',
            currentIndex === realIndex ? 'item__active' : ''
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
      data-testid='bottom-chevron-right'
      onClick={previewArray.length - 1 > previewIndex ? bottomNextHandler : noop} className={classnames(
        'bottom-navigation__right',
        previewArray.length - 1 > previewIndex ?
          '' : 'button__disabled'
      )}>
      <ArrowsChevronRight />
    </div> : null}

  </div> : null, [currentIndex, previewIndex, isDisabled]);


  const labelCountComponent = useMemo(() => imageList.length > 10 ? isDisabled ? <div className='rf-label-count__component'>
    <label data-testid='label-count-test' > {currentIndex + 1 + ' / ' + imageList.length}</label>
  </ div > : null : null, [currentIndex, imageList.length, isDisabled]);


  const navigationControl = useMemo(() => imageList.length > 1 ? <div className='rf-image-preview__navigation-control'>
    <div onClick={currentIndex ? prevImageHandler : noop} className={classnames(
      'navigation-control__left',
      !currentIndex ?
        'button__disabled' : ''
    )}>
      <ArrowsChevronLeft />
    </div>
    <div onClick={currentIndex + 1 !== imageList.length ? nextImageHandler : noop} className={classnames(
      'navigation-control__right',
      currentIndex + 1 === imageList.length ?
        'button__disabled' : ''
    )}>
      <ArrowsChevronRight />
    </div>

  </div> : null, [imageList, currentIndex]);

  const imageContent = useMemo(() => <div className={`rf-image-preview__full-image ${imageList.length === 1 ? 'single__full-image' : ''}`}>
    <img
      draggable={false}
      onMouseUp={onMoveEndHandler}
      onMouseDown={onMoveHandler}
      onMouseMove={onMouseMoveHandler}
      onMouseOut={onMoveEndHandler}
      ref={zoomRef}
      src={currentImage}
      alt={currentImage} />
  </div>, [currentImage]);


  const preview = <div ref={screenRef} className='rf-image-preview'>
    {topNavigation}
    {imageContent}

    {imageList.length > 1 ? <div className='rf-naviation-bottom__container'>
      {labelCountComponent}
      {bottomNavigationMenu}
    </div> : null}
    {navigationControl}
  </div >;


  return (createPortal(preview, document.body));
};


export default ImagePreview;
