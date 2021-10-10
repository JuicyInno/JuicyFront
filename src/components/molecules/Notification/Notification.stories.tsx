import React from 'react';
import Notification from './Notification';
import { INotification } from '../../molecules/Notifications/Notifications';
import Story from '../../storybook/Story';
import StoryRow from '../../storybook/StoryRow';
import StoryItem from '../../storybook/StoryItem';

export default {
  title: 'не проверено/Item',
  component: Notification
};

export const notificationsItem = () => {
  const messages: INotification[] = ['red', 'yellow', 'green'].map((variant: any) => ({
    message: 'Сообщение с уведомлением о том, что данные могли быть сохранены и переданы в управляющий комитет',
    variant
  }));

  const messagesJSX = messages.map((m: INotification) => (
    <StoryRow key={m.variant}>
      <Notification item={m} />
    </StoryRow>
  ));

  return (
    <Story name='Уведомление'>
      <StoryItem description='Сообщение для пользователя'>
        {messagesJSX}
      </StoryItem>
    </Story>
  );
};
