import { FC } from 'react';
import { IconType, StatusIconSize } from './icons/types';
import './Status.scss';
export interface IStatus {
    /** Тип иконки
     @default online
     */
    type?: IconType;
    /**
     Размер статуса
     @default m
     */
    size?: StatusIconSize;
}
declare const Status: FC<IStatus>;
export default Status;
