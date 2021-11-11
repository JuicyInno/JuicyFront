import React from 'react';
import { Story } from '@storybook/react';
import Notification from './Notification';
import StoryRow from '../../storybook/StoryRow';
import { StoryDocs, StoryDocsH1 } from '../../storybook';
import { variantsClassic, VariantClassic } from '../../../types';
import StoryContainer from '../../storybook/Story';

export interface IProps {
  /** Данные уведомление */
  title: string,
  message: string,
  variant: VariantClassic,
  /** Закрыть уведомление */
  remove?: (id: number) => void;
}

export default {
  title: 'components/withTest/Item',
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
  const frameStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    width: '634px',
    border: '1px dashed #7B61FF',
    borderRadius: 5,
    padding: 32,
  };

  return (
    <StoryDocs>
      <StoryDocsH1>Notification</StoryDocsH1>
      <div style={frameStyle}>
        <StoryRow >
          <Notification item={{
            title: 'Заголовок уведомления',
            variant: 'default'
          }} />
        </StoryRow>
        <StoryRow >
          <Notification item={{
            title: 'Заголовок уведомления',
            variant: 'default',
            message: 'Краткое описание уведомления'
          }} />
        </StoryRow>
        <StoryRow >
          <Notification item={{
            title: 'Ошибка',
            variant: 'red',
          }} />
        </StoryRow>
        <StoryRow >
          <Notification item={{
            title: 'Ошибка',
            variant: 'red',
            message: 'Описание ошибки'
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
      </div>

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
