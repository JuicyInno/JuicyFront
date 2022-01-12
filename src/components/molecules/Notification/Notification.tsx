import React, { FC } from 'react';
import './Notification.scss';
import {
  Close, Info, StatusSuccess
} from '../../../index';
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

  const Icon = item.variant === 'green' ? StatusSuccess : Info;

  return (
    <div className='rf-notification'>
      <Icon className={`rf-notification__icon rf-notification--${item.variant || 'default'}`}/>
      <div className='rf-notification__wrap'>
        <h3 className='rf-notification__title'>{ item.title }</h3>
        <p className='rf-notification__message'>{ item.message }</p>
      </div>

      <button className='rf-notification__close' onClick={ removeNotification }>
        <Close />
      </button>
    </div>
  );
};

export default Notification;
