import React from 'react';
import { Story } from '@storybook/react';

import Card from './Card';
import { data } from './cards.mocks';
import {
  StoryDocs, StoryDocsH2, StoryDocsDescription, StoryDocsLabel
} from '../../storybook';
import { variants } from '../../../types';

export default {
  title: 'не проверено/Card',
  component: Card,
  typeArgs: {
    statusColor: {
      options: variants,
      control: { type: 'select' },
      defaultValue: 'default'
    }
  }
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
            <Card {...card} isHistoryTab />
          </div>
        </div>
      )
      )}
    </StoryDocs >
  );
};

Demo.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Y86V3oIhkZQ4u27iBuhN0l/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%8B-%D0%92%D0%A2%D0%91-%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D0%BE%D0%B9?node-id=18118%3A281361',
  },
  actions: { disabled: true },
  controls: { disabled: true }
};
