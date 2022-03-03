import React from 'react';
import { Story } from '@storybook/react';
import Notification from './Notification';
import StoryRow from '../../storybook/StoryRow';
import { StoryDocs, StoryDocsH1 } from '../../storybook';
import { variantsClassic } from '../../../types';
import StoryContainer from '../../storybook/Story';

import Button from '../../atoms/Button';

export default {
  title: 'components/withTest/Notification',
  component: Notification,
  argTypes: {
    variant: {
      options: variantsClassic,
      control: { type: 'select' },
      defaultValue: 'default'
    },
    title: {
      control: { type: 'text' },
      defaultValue: 'Заголовок'
    },
    message: {
      control: { type: 'text' },
      defaultValue: 'Текст'
    },
    item: { control: null },
    remove: { control: null },
  }
};

export const Demo: Story = () => {

  return (
    <StoryDocs>
      <StoryDocsH1>Notification</StoryDocsH1>
      <StoryRow >
        <Notification
          item={{
            variant: 'default',
            title: 'Заголовок уведомления',
            message: 'Краткое описание уведомления',
          }}
          remove={() => {}}
        />
      </StoryRow>
      <StoryRow >
        <Notification
          item={{
            variant: 'default',
            title: 'Заголовок уведомления',
            message: 'Длинное описание очень длинное описание уведомления. Длинное описание очень длинное описание уведомления'
          }}
          remove={() => {}}
        />
      </StoryRow>
      <StoryRow >
        <Notification item={{
          variant: 'blue',
          title: 'Заголовок уведомления',
          message: 'Краткое описание уведомления'
        }} />
      </StoryRow>
      <StoryRow >
        <Notification item={{
          variant: 'yellow',
          title: 'Заголовок уведомления',
          message: 'Краткое описание уведомления'
        }} />
      </StoryRow>
      <StoryRow >
        <Notification item={{
          variant: 'red',
          title: 'Заголовок уведомления',
          message: 'Краткое описание уведомления'
        }} />
      </StoryRow>
      <StoryRow >
        <Notification item={{
          variant: 'red',
          title: 'Заголовок уведомления',
          message: 'Краткое описание уведомления',
          button: <Button buttonType='text' textColor='red' size='s'>Действие</Button>
        }} />
      </StoryRow>

      <StoryRow >
        <Notification item={{
          title: 'ТН скопирован',
          variant: 'green',
        }} />
      </StoryRow>
      <StoryRow >
        <Notification item={{
          title: 'ТН скопирован',
          variant: 'green',
          message: 'Описание'
        }} />
      </StoryRow>
    </StoryDocs>
  );
};

Demo.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Y86V3oIhkZQ4u27iBuhN0l/Проекты-ВТБ-основной?node-id=18262%3A231302',
  },
  actions: { disabled: true },
  controls: { disabled: true }
};

export const Playground: Story = (args: any) => {
  return (
    <StoryContainer>
      <StoryRow >
        <Notification item={{
          title: args.title,
          message: args.message,
          variant: args.variant
        }} />
      </StoryRow>
    </StoryContainer>
  );
};
