import React, { FC } from 'react';
import './Notification.scss';
import { Close } from '../../../index';
import { INotification } from '../Notifications/Notifications';

export interface IProps {
  item: INotification;
  remove?: (id: number) => void;
}

const Notification: FC<IProps> = ({ item, remove }: IProps) => {
  /** Удалить уведомление */
  const removeNotification = () => {
    item.id && remove && remove(item.id);
    item.cancelRetry && item.cancelRetry();
  };

  return (
    <>
      <div className={`rf-notification rf-notification--${item.variant}`}>
        <p className='rf-notification__message'>
          {item.message}
        </p>
        <button type='button' className='rf-notification__close' onClick={removeNotification}>
          <Close />
        </button>
      </div>
    </>
  );
};

export default Notification;
