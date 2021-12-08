import { FC } from 'react';
import { IAvatarProps } from '../../atoms/Avatar/Avatar';
import { IStatus } from '../../atoms/Status/Status';
import { VariantClassic } from '../../../types';
import './AvatarStatus.scss';
export interface IAvatarStatus extends IAvatarProps, Omit<IStatus, 'size'> {
    /** Цвет статуса (обводки) */
    variant?: VariantClassic;
}
declare const AvatarStatus: FC<IAvatarStatus>;
export default AvatarStatus;
