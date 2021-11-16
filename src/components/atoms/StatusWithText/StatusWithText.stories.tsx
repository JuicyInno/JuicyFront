import React from 'react';
import StatusWithText from './StatusWithText';
import { StoryDocs, StoryDocsH1 } from '../../storybook';

export default {
  title: 'controls/withTest/StatusWithText',
  component: StatusWithText,
  argTypes: {
    statusText: {
      control: 'text',
      defaultValue: 'Заголовок'
    },
    criticality: {
      type: 'string',
      defaultValue: '0'
    },
  }
};

const statuses = [
  {
    statusText: 'Подписано ЭЦП',
    criticality: '3'
  },
  {
    statusText: 'Согласовано',
    criticality: '0'
  },
  {
    statusText: 'Отклонено ЭДО',
    criticality: '1'
  },
  {
    statusText: 'На добработке',
    criticality: '2'
  }
];

export const Demo = () => <StoryDocs>
  <StoryDocsH1>Status with text</StoryDocsH1>
  <div style={{ display: 'flex' }}>
    {statuses.map(item => <div style={{ padding: 4 }}>
      <div style={{ marginRight: 27 }}>
        <StatusWithText statusText={item.statusText} criticality={item.criticality} />
      </div>
    </div>)}
  </div>
</StoryDocs>;

Demo.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Tl0AmqQJK4qaCl4pLRio7A/Design-System-for-Story-Book?node-id=1223%3A24006',
  },
  actions: { disabled: true },
  controls: { disabled: true }
};
