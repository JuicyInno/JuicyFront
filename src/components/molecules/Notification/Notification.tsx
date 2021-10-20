import React, { FC } from 'react';
import './Notification.scss';
import {
  Close, Info, Check
} from '../../../index';
import { INotification } from '../Notifications/Notifications';

export interface IProps {
  /** Данные уведомление */
  item: INotification;
  /** Закрыть уведомление */
  remove?: (id: number) => void;
}

const Notification: FC<IProps> = ({ item, remove }: IProps) => {
  /** Удалить уведомление */
  const removeNotification = () => {
    item.id && remove && remove(item.id);
    item.cancelRetry && item.cancelRetry();
  };

  const Icon = item.variant === 'green' ? Check : Info;

  return (
    <>
      <div className='rf-notification'>
        <Icon className={`rf-notification--${item.variant || 'default'}`} />
        <div className='rf-notification__wrap'>
          <p className='rf-notification__title'>
            {item.title}
          </p>
          <p className='rf-notification__message'>
            {item.message}
          </p></div>

        <button type='button' className='rf-notification__close' onClick={removeNotification}>
          <Close />
        </button>
      </div>
    </>
  );
};

export default Notification;
