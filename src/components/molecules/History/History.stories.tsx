import React from 'react';
import History from './History';
import Story from '../../storybook/Story';
import StoryItem from '../../storybook/StoryItem';
import { usersMocks } from '../../popups/FindUsers/users.mocks';

export const history = () => {
  const paths = [
    {
      stepId: '-1',
      activityId: 'activityId',
      activityText: 'Подписание приказа',
      agent: 'agent',
      agentName: 'Кузнецова Злата Игоревна',
      user: [usersMocks[0]],
      statusId: '0',
      statusText: 'Согласовано',
      criticality: '0',
      comment: 'Прошу выдать работникам банка ключи ЭП',
      actArea: 'Ведущий аналитик',
      pathId: '',
      date: 20202103
    },
    {
      stepId: '0',
      activityId: 'activityId',
      activityText: 'Согласование заявки',
      agent: 'agent',
      agentName: 'Кузнецова Злата Игоревна',
      user: [usersMocks[1]],
      statusId: '2',
      statusText: 'Подписано ЭЦП',
      criticality: '3',
      comment: '',
      actArea: 'Ведущий аналитик',
      pathId: '',
      date: 20202103
    },
    {
      stepId: '1',
      activityId: 'activityId',
      activityText: 'activityText',
      agent: 'agent',
      agentName: 'Отдел бухгалтерии',
      user: usersMocks,
      statusId: '2',
      statusText: 'Отклонено',
      criticality: '1',
      comment: '',
      actArea: 'Ведущий аналитик',
      pathId: '',
      date: 0
    }
  ];
  const attachments = [
    {
      id: '0',
      attType: '',
      attTypeText: '',
      fileName: 'doc.pdf',
      base64: '',
      singBase64: '',
      cert: ''
    },
    {
      id: '0',
      attType: '',
      attTypeText: '',
      fileName: 'myDoc.pdf',
      base64: '',
      singBase64: '',
      cert: ''
    }
  ];
  return <Story name='History'>
    <StoryItem description='История'>
      <div>
        <History history={paths} attachments={attachments} />
      </div>
    </StoryItem>
  </Story>;
};

export default {
  title: 'History',
  component: History
};
