import React from 'react';
import './Banner.scss';

import Button from '../Button';

export interface IBannerProps {
  /** Иконка/иллюстрация */
  icon?: React.ReactNode;
  /** Текст заголовка */
  heading?: React.ReactNode;
  /** Текст подзаголовка */
  subheading?: React.ReactNode;

  /** Текст основной кнопки */
  primaryText?: string;
  /** Клик по основной кнопке */
  onPrimaryClick?: () => void;

  /** Текст второстепенной кнопки */
  secondaryText?: string;
  /** Клик по второстепенной кнопке */
  onSecondaryClick?: () => void;
}

/**
 * @example
 * import illustration form 'juicyfront/assets/illustrations/default.png'
 * <Banner icon={<BannerImage src={illustration} />} heading="Заголовок" />
 */
export const Banner = ({ icon, heading, subheading, primaryText, onPrimaryClick, secondaryText, onSecondaryClick }: IBannerProps) => {
  return (
    <div className='banner'>
      {!!icon && (
        <div className='banner__icon'>
          {icon}
        </div>
      )}
      {!!heading && (
        <div className='banner__heading'>
          {heading}
        </div>
      )}
      {!!subheading && (
        <div className='banner__subheading'>
          {subheading}
        </div>
      )}
      {(!!primaryText || !!secondaryText) && (
        <div className='banner__actions'>
          {!!secondaryText && (
            <div className='banner__action'>
              <Button fullWidth size='m' buttonType='light' onClick={onSecondaryClick}>{secondaryText}</Button>
            </div>
          )}
          {!!primaryText && (
            <div className='banner__action'>
              <Button fullWidth size='m' onClick={onPrimaryClick}>{primaryText}</Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
