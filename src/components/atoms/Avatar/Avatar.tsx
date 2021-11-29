import React, { useEffect, useState } from 'react';
import './Avatar.scss';
import {
  AvatarColor, Size, IIconProps
} from '../../../types';
import { sizeClass } from '../../../utils/helpers';
import { classnames } from '../../../utils/classnames';

export interface IAvatarProps {
  size?: Size;
  /** Ссылка на фото */
  photo?: string;
  /** Фамилия и Имя */
  fullName?: string;
  /** Цвет фона аватара */
  backgroundColor?: AvatarColor;
  /** Иконка */
  icon?: (props: IIconProps) => JSX.Element;
}

const Avatar: React.FC<IAvatarProps> = ({
  size = 'm',
  photo = '',
  fullName = '',
  backgroundColor = 'default',
  icon: Icon
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
    <div
      className={classnames('rf-avatar', sizeClass[size], `rf-avatar__background_${backgroundColor}`)}
      style={{ backgroundImage: `url("${photo}")`, }}
    >
      {Icon ?
        <div className='rf-avatar__icon-wrapper'><Icon className={classnames('rf-avatar__icon', sizeClass[size])} /></div> :
        !photo && initials
      }
    </div>
  );
};

export default Avatar;
