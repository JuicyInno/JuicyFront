import React, { useEffect, useState } from 'react';
import './Avatar.scss';
import { AvatarColor, Size } from '../../../types';
import { sizeClass } from '../../../utils/helpers';
import AvatarIcon from './AvatarIcon';

export interface IAvatarProps {
  size?: Size;
  /** Ссылка на фото */
  photo?: string;
  /** Фамилия и Имя */
  fullName?: string;
  /** Цвет фона аватара */
  backgroundColor?: AvatarColor;
  /** Иконка заглушки */
  hasIcon?: boolean;
}

export const Avatar: React.FC<IAvatarProps> = ({
  size = 'm',
  photo = '',
  fullName = '',
  backgroundColor = 'default',
  hasIcon = false
}: IAvatarProps) => {

  const [initials, setInitials] = useState<string>('');

  const isSapUrl: boolean = photo?.slice(0, 4) === '/sap';

  if (isSapUrl) {
    const host = ~window.location.hostname.indexOf('127.0.') ? 'https://sapd-fes-ap01.vtb24.ru:44310/' : '';
    photo = host + photo;
  }

  useEffect(() => {
    if (fullName) {

      if (!isNaN(+fullName)) {
        setInitials(fullName);
        return;
      }

      const [f, s]: string[] = fullName.split(' ');
      let text = '';
      f && (text = f.charAt(0).toUpperCase());

      // при размере xxs и xs оставляем только одну букву инициалов
      if (size !== 'xxs' && size !== 'xs') {
        s && (text += s.charAt(0).toUpperCase());
      }

      setInitials(text);
    }
  }, [fullName]);

  return (
    <div className={`rf-avatar ${sizeClass[size]} rf-avatar__background_${backgroundColor}`}
      style={{ backgroundImage: `url("${photo}")`, }}
    >
      {hasIcon ? (
        <div className='rf-avatar__icon-wrapper'>
          <AvatarIcon className={`rf-avatar__icon ${sizeClass[size]}`} />
        </div>
      ) :
        !photo && initials}
    </div>
  );
};

export default Avatar;
