import React, { useEffect } from 'react';
import Notifications, { sendNotification } from './Notifications';
import Story from '../../storybook/Story';

export default {
  title: 'components/не проверено/Notifications',
  component: Notifications
};

export const notificationsList = () => {
  useEffect(() => {
    sendNotification({ message: 'Данные сохранены.' });

    setTimeout(() => {
      sendNotification({
        title: 'Ошибка',
        message: 'Произошла ошибка. Обратитесь к разработчикам.',
        variant: 'red'
      });
    }, 2000);

    setTimeout(() => {
      sendNotification({
        title: 'Предупреждение',
        message: 'Данные не смогут быть восстановлены.',
        variant: 'yellow'
      });
    }, 4000);

    setTimeout(() => {
      sendNotification({
        title: 'Успех',
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
