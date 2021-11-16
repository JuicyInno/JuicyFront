import React from 'react';
import StatusWithText from './StatusWithText';
import { StoryDocs, StoryDocsH1 } from '../../storybook';

export default {
  title: 'controls/не проверено/StatusWithText',
  component: StatusWithText
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

export const status = () => <StoryDocs>
  <StoryDocsH1>Status with text</StoryDocsH1>
  <div style={{ display: 'flex' }}>
    {statuses.map(item => <div style={{ padding: 4 }}>
      <div style={{ marginRight: 27 }}>
        <StatusWithText statusText={item.statusText} criticality={item.criticality} />
      </div>
    </div>)}
  </div>
</StoryDocs>;
