import './Notification.scss';

import React, { FC, ReactNode } from 'react';

import { INotification } from '../Notifications/Notifications';
import {
  AllClose, StatusError, StatusInfoFill, StatusRelease
} from '../../../indexIcon';
import { classnames } from '../../../utils/classnames';
import { VariantClassic } from '../../../types';

export interface INotificationProps {
  /** Данные уведомление */
  item: INotification;
  /** Закрыть уведомление */
  remove?: (id: number) => void;
}

const ICON_MAPPING: Record<Exclude<VariantClassic, 'white'>, ReactNode> = {
  'default': <StatusInfoFill />,
  'red': <StatusError />,
  'green': <StatusRelease />,
  'blue': <StatusInfoFill />,
  'yellow': <StatusInfoFill />,
};

const Notification: FC<INotificationProps> = ({ item, remove }: INotificationProps) => {
  /** Удалить уведомление */
  const removeNotification = () => {
    item.id && remove && remove(item.id);
  };

  return (
    <div className={classnames('rf-notification', `rf-notification--${item.variant || 'default'}`)}>
      {item.icon !== false && <div className='rf-notification__icon'>
        {item.icon || ICON_MAPPING[item.variant || 'default']}
      </div>}
      <div className='rf-notification__body'>
        {!!item.title && <h3 className='rf-notification__title'>{ item.title }</h3>}
        {!!item.message && <p className='rf-notification__message'>{ item.message }</p>}
        {!!item.button && <div className='rf-notification__button'>{ item.button }</div>}
      </div>
      {!!remove && (
        <button className='rf-notification__close' onClick={ removeNotification } aria-label='Скрыть'>
          <AllClose size='xxs' />
        </button>
      )}
    </div>
  );
};

export default Notification;
