import React from 'react';
import Status from './Status';
import Story from '../../storybook/Story';
import StoryItem from '../../storybook/StoryItem';

const statuses = [
  {
    statusText: 'Подписано ЭЦП',
    criticality: '0'
  },
  {
    statusText: 'Согласовано',
    criticality: '1'
  },
  {
    statusText: 'Отклонено ЭДО',
    criticality: '2'
  },
  {
    statusText: 'На доработке',
    criticality: '3'
  },
  {
    statusText: 'Несуществующий',
    criticality: '4'
  },
];

export const status = () => {
  return <Story name='Status'>
    <StoryItem>
      {statuses.map(item => <div style={{ padding: 4 }}>
        <Status statusText={item.statusText} criticality={item.criticality} />
      </div>)}
    </StoryItem>
  </Story>;
};

export default {
  title: 'control/не проверено/Status',
  component: Status
};
