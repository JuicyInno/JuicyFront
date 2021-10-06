import React, { useEffect } from 'react';
import Notifications, { sendNotification } from './Notifications';
import Story from '../../storybook/Story';

export default {
  title: 'Notifications/Menu',
  component: Notifications
};

export const notificationsList = () => {
  useEffect(() => {
    sendNotification({ message: 'Данные сохранены.' });

    setTimeout(() => {
      sendNotification({
        message: 'Произошла ошибка. Обратитесь к разработчикам.',
        variant: 'red'
      });
    }, 2000);

    setTimeout(() => {
      sendNotification({
        message: 'Данные не смогут быть восстановлены.',
        variant: 'yellow'
      });
    }, 4000);

    setTimeout(() => {
      sendNotification({
        message: 'Данные удалены.',
        variant: 'green'
      });
    }, 6000);
  }, []);

  return (
    <Story name='Notification (Уведомления)' description='Уведомления для пользователей'>
      <Notifications />
    </Story>
  );
};
