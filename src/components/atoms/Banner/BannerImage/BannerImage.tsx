import React, { DetailedHTMLProps, ImgHTMLAttributes } from 'react';
import './BannerImage.scss';

import BrokenMagnifier from '!url-loader!../../../../assets/illustrations/broken-magnifier.png';
import CloseEntrance from '!url-loader!../../../../assets/illustrations/close-entrance.png';
import Default from '!url-loader!../../../../assets/illustrations/default.png';
import Donut from '!url-loader!../../../../assets/illustrations/donut.png';
import Donut2 from '!url-loader!../../../../assets/illustrations/donut-2.png';
import Empty from '!url-loader!../../../../assets/illustrations/empty.png';
import Ghost from '!url-loader!../../../../assets/illustrations/ghost.png';
import MagnifierFolder from '!url-loader!../../../../assets/illustrations/magnifier-folder.png';
import MagnifierNotAvailable from '!url-loader!../../../../assets/illustrations/magnifier-not-available.png';
import MagnifierZero from '!url-loader!../../../../assets/illustrations/magnifier-zero.png';
import NotAvailable from '!url-loader!../../../../assets/illustrations/not-available.png';
import Notifications from '!url-loader!../../../../assets/illustrations/notifications.png';
import Settings from '!url-loader!../../../../assets/illustrations/settings.png';
import Work from '!url-loader!../../../../assets/illustrations/work.png';

export type BannerImageVariant =
  'broken-magnifier' |
  'close-entrance' |
  'default' |
  'donut' |
  'donut-2' |
  'empty' |
  'ghost' |
  'magnifier-folder' |
  'magnifier-not-available' |
  'magnifier-zero' |
  'not-available' |
  'notifications' |
  'settings' |
  'work';

export interface BannerImageProps extends DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  /** Использовать встроеное изображение */
  variant?: BannerImageVariant;
}

export const BannerImageMap: { [key in BannerImageVariant]: string } = {
  'broken-magnifier': BrokenMagnifier,
  'close-entrance': CloseEntrance,
  'default': Default,
  'donut': Donut,
  'donut-2': Donut2,
  'empty': Empty,
  'ghost': Ghost,
  'magnifier-folder': MagnifierFolder,
  'magnifier-not-available': MagnifierNotAvailable,
  'magnifier-zero': MagnifierZero,
  'not-available': NotAvailable,
  'notifications': Notifications,
  'settings': Settings,
  'work': Work
};

export const BannerImage = ({ variant, src, ...props }: BannerImageProps) => {
  const source = variant ? BannerImageMap[variant] : src;

  return (
    <img className='banner-image' src={source} role='presentation' {...props} />
  );
};
