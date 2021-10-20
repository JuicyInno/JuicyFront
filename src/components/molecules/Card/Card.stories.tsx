import React from 'react';
import { Story } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

import Card, { ICard } from './Card';
import { data } from './cards.mocks';
import StoryContainer from '../../storybook/Story';
import StoryRow from '../../storybook/StoryRow';
import {
  StoryDocs, StoryDocsH2, StoryDocsDescription, StoryDocsLabel
} from '../../storybook';
import { variants } from '../../../types';

export default {
  title: 'molecules/Card',
  component: Card,
  typeArgs: {
    statusColor: {
      options: variants,
      control: { type: 'select' },
      defaultValue: 'default'
    }
  },
  args: {
    ...data[0],
  } as ICard,
};

export const Demo: Story = () => {
  return (
    <StoryDocs>
      <StoryDocsH2>Карточки задач/истории заявок</StoryDocsH2>
      <StoryDocsDescription>
        Используется для отображения текущего статуса задачи/заявки в соответствующей вкладке экрана сервиса.
      </StoryDocsDescription>
      {data.map((card) => (
        <div style={{
          display: 'flex',
          marginBottom: '40px',
        }}>
          <div style={{
            marginRight: '100px',
          }}>
            <Card {...card} />
          </div>
          <div style={{
            height: 'fit-content',
          }}>
            <Card {...card} showActionButton />
          </div>
        </div>
      )
      )}
    </StoryDocs >
  );
};

export const Playground: Story<ICard> = (args) => {
  return (
    <StoryContainer>
      <StoryRow>
        <Card {...args} />
      </StoryRow>
    </StoryContainer>
  );
};

Demo.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Y86V3oIhkZQ4u27iBuhN0l/Проекты-ВТБ-основной?node-id=18118%3A280017',
  },
  actions: { disabled: true },
  controls: { disabled: true }
};
