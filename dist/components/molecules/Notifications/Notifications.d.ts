/// <reference types="react" />
import './Notifications.scss';
import { VariantClassic } from '../../../types';
/** Удалить уведомление */
export declare const removeNotification: (id?: number | undefined) => void;
/** Добавить уведомление */
export declare const sendNotification: (message: INotification, delay?: number) => void;
export interface INotification {
    /** Заголовок сообщения */
    title?: string;
    /** Текст сообщения */
    message?: string;
    /** ID сообщения */
    id?: number;
    /** Тип сообщения */
    variant?: VariantClassic;
}
declare const Notifications: () => JSX.Element;
export default Notifications;
