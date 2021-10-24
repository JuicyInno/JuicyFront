import React, { useEffect, useState } from 'react';
import './Avatar.scss';
import { Size } from '../../../types';
import { sizeClass } from '../../../utils/helpers';

export interface IAvatarProps {
  size?: Size;
  /** Ссылка на фото */
  photo?: string;
  /** Фамилия и Имя */
  fullName?: string;
}

const Avatar: React.FC<IAvatarProps> = ({ size = 'm', photo = '', fullName = '' }: IAvatarProps) => {

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
      s && (text += s.charAt(0).toUpperCase());
      setInitials(text);
    }
  }, [fullName]);

  return (
    <div className={`rf-avatar ${sizeClass[size]}`} style={{ backgroundImage: `url("${photo}")`, }}>
      {!photo && initials}
    </div>
  );
};

export default Avatar;
