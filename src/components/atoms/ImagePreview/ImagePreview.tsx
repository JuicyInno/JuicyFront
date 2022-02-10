import React, {
  useMemo, useRef, useState
} from 'react';
import { createPortal } from 'react-dom';
import {
  AllAdd, AllClose, AllReduce, ArrowsChevronLeft, ArrowsChevronRight
} from '../../../indexIcon';
import { classnames } from '../../../utils/classnames';
import './ImagePreview.scss';


const mockList = [
  'https://klike.net/uploads/posts/2019-05/1556708032_1.jpg',
  'https://bipbap.ru/wp-content/uploads/2017/07/1-campos-amapolas.jpg',
  'https://24tv.ua/resources/photos/news/1200x675_DIR/202105/1619997.jpg',
  'https://www.ejin.ru/wp-content/uploads/2017/09/1-931.jpg',
  'https://oir.mobi/uploads/posts/2021-06/1623810332_31-oir_mobi-p-samie-krasivie-letnie-peizazhi-priroda-kra-31.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFs-VLqsAoid2QHok8-KYgJ-VXX1ufdUD6dCmYP3Cc7zw6MRrGftd3ASrlwQO9oh9AfPo&usqp=CAU',
  'https://cs8.pikabu.ru/post_img/big/2018/04/20/10/1524246614168232071.jpg',
  'https://cs9.pikabu.ru/post_img/big/2018/04/20/10/152424661518614873.jpg',
  'https://oir.mobi/uploads/posts/2021-06/thumbs/1623387620_30-oir_mobi-p-temnii-peizazh-priroda-krasivo-foto-35.jpg',
  'https://bipbap.ru/wp-content/uploads/2017/09/50dca6763731640fb4fa59a302daf612.jpg',
  'https://bipbap.ru/wp-content/uploads/2017/07/morskie_peyzagi_krasivie_plyagi_foto_12.jpg'
];

export interface IImagePreviewProps {
  imageList: string[]
}

const ImagePreview: React.FC<IImagePreviewProps> = ({
  imageList = mockList
}: IImagePreviewProps) => {

  const [currentImage, setCurrentImage] = useState(imageList[0]);
  const zoomRef = useRef<HTMLImageElement>(null);

  const zoomInHandler = () => {
    zoomRef.current!.width += 10;
    zoomRef.current!.height += 5;

  };

  const zoomOutHandler = () => {
    zoomRef.current!.width -= 10;
    zoomRef.current!.height -= 5;
  };

  const topNavigation = <div className='rf-image-preview__top-navigation'>
    <div className='top-navigation__zoom'>
      <div onClick={zoomInHandler} className='top-navigation__button'>
        <AllAdd />
      </div>
      <div onClick={zoomOutHandler} className='top-navigation__button'>
        <AllReduce />
      </div>
    </div>

    <div className='top-navigation__button'>
      <AllClose />
    </div>

  </div>;

  const imageHandler = (src: string) => () => {
    setCurrentImage(src);
  };

  const currentIndex = useMemo(() => imageList.findIndex((image) => image === currentImage), [currentImage]);

  const prevImageHandler = () => {
    setCurrentImage(imageList[currentIndex - 1]);
  };

  const nextImageHandler = () => {
    setCurrentImage(imageList[currentIndex + 1]);
  };


  const bottomNavigationMenu = imageList.length > 1 ? <div className='rf-image-preview__bottom-navigation'>
    {mockList.map((image, index) => {
      return <div onClick={imageHandler(image)} key={image} className={classnames('bottom-navigation__item', currentIndex === index ? 'item__active' : '')}>
        <img src={image} alt={image} />
      </div>;
    })}
  </div> : null;


  const navigationControl = imageList.length > 1 ? <div className='rf-image-preview__navigation-control'>
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

  </div> : null;

  const imageContent = <div className='rf-image-preview__full-image'>
    <img ref={zoomRef} src={currentImage} alt={currentImage} />
  </div>;


  const preview = <div className='rf-image-preview'>
    {topNavigation}
    {imageContent}
    {bottomNavigationMenu}
    {navigationControl}
  </div>;


  return (createPortal(preview, document.body));
};


export default ImagePreview;
