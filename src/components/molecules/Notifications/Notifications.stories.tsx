import React, { useEffect } from 'react';
import Notifications, { sendNotification } from './Notifications';
import Story from '../../storybook/Story';
import Button from '../../atoms/Button';

export default {
  title: 'components/withTest/Notifications',
  component: Notifications
};

export const Demo = () => {
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
      <Button onClick={() => sendNotification({ title: 'Новая нотификация' })}>
        Добавить нотификацию
      </Button>

      <Notifications />
    </Story>
  );
};
