import { FC } from 'react';
import './Notification.scss';
import { INotification } from '../Notifications/Notifications';
export interface IProps {
    /** Данные уведомление */
    item: INotification;
    /** Закрыть уведомление */
    remove?: (id: number) => void;
}
declare const Notification: FC<IProps>;
export default Notification;
