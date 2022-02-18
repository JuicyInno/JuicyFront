import React, { FC } from 'react';
import './Notification.scss';
import {
  AllClose, StatusInfoFill, StatusRelease
} from '../../../indexIcon';
import { INotification } from '../Notifications/Notifications';

export interface INotificationProps {
  /** Данные уведомление */
  item: INotification;
  /** Закрыть уведомление */
  remove?: (id: number) => void;
}

const Notification: FC<INotificationProps> = ({ item, remove }: INotificationProps) => {
  /** Удалить уведомление */
  const removeNotification = () => {
    item.id && remove && remove(item.id);
  };

  const Icon = item.variant === 'green' ? StatusRelease : StatusInfoFill;

  return (
    <div className='rf-notification'>
      <Icon className={`rf-notification__icon rf-notification--${item.variant || 'default'}`}/>
      <div className='rf-notification__wrap'>
        <h3 className='rf-notification__title'>{ item.title }</h3>
        <p className='rf-notification__message'>{ item.message }</p>
      </div>

      <button className='rf-notification__close' onClick={ removeNotification } aria-label='Скрыть'>
        <AllClose />
      </button>
    </div>
  );
};

export default Notification;
