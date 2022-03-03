import React, {
  useEffect, useRef, useState
} from 'react';
import './Notifications.scss';
import Notification from '../Notification';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { VariantClassic } from '../../../types';
import { createPortal } from 'react-dom';

// ---------------------------------------------------------------------------------------------------------------------

/** Стэк уведомлений */
let notifications$$: BehaviorSubject<INotification[]> = new BehaviorSubject<INotification[]>([]);

/** Удалить уведомление */
export const removeNotification = (id?: number) => {
  if (notifications$$.closed || notifications$$.isStopped) {
    return;
  }

  let tmp = [...notifications$$.getValue()];

  if (tmp.length > 0) {
    if (id !== undefined) {
      tmp = tmp.filter((n: INotification) => n.id !== id);
    } else {
      tmp.shift();
    }

    notifications$$.next(tmp);
  }
};

/** Добавить уведомление */
export const sendNotification = (message: INotification, delay = 8000) => {
  if (notifications$$.closed || notifications$$.isStopped) {
    return;
  }

  const tmp = [...notifications$$.getValue()];

  tmp.push({
    ...message,
    id: message.id || Date.now()
  });

  notifications$$.next(tmp);

  setTimeout(() => {
    removeNotification(message.id);
  }, delay);
};

// ----Компонент--------------------------------------------------------------------------------------------------------

export interface INotification {
  /** Заголовок сообщения */
  title?: string;
  /** Текст сообщения */
  message?: string;
  /** ID сообщения */
  id?: number;
  /** Тип сообщения */
  variant?: Exclude<VariantClassic, 'white'>;
  /** Использовать собственную иконку. Если передать `false` то иконка скроется. */
  icon?: React.ReactNode;
  /** Кнопка */
  button?: React.ReactNode;
}

const Notifications = () => {
  /** Флаг по которому остановить подписку */
  const obstacle = useRef<Subject<boolean>>(new Subject());

  const [sub, setSub] = useState<BehaviorSubject<INotification[]> | null>(null);

  useEffect(() => {
    if (notifications$$.closed) {
      notifications$$ = new BehaviorSubject<INotification[]>([]);
    }

    setSub(notifications$$);
  }, []);

  /** Список уведомлений */
  const [notifications, setNotifications] = useState<INotification[]>([]);

  // -------------------------------------------------------------------------------------------------------------------

  /** Подписываемся на список уведомлений */
  useEffect(() => {
    if (!sub || sub.closed) {
      return;
    }

    const until = obstacle.current;

    sub.pipe(takeUntil(until)).subscribe((data: INotification[]) => {
      setNotifications(data);
    });

    return () => {
      until.next(true);
    };
  }, [sub]);

  // -------------------------------------------------------------------------------------------------------------------
  /** Список уведомлений TSX */
  const list = notifications.map((n: INotification, i: number) => (
    <Notification key={n.id || i} item={n} remove={removeNotification} />
  ));

  // -------------------------------------------------------------------------------------------------------------------

  if (!list.length) {
    return null;
  }

  return createPortal(<div data-testid='rf-notifications' className='rf-notifications__list'>{list}</div>, document.body);
};

export default Notifications;
