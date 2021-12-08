import React from 'react';
import './Avatar.scss';
import { AvatarColor, Size, IIconProps } from '../../../types';
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
declare const Avatar: React.FC<IAvatarProps>;
export default Avatar;
