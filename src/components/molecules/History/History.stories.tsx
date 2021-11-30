import React from 'react';
import {
  StoryDocs, StoryDocsH1, StoryDocsH2, StoryDocsDescription
} from '../../storybook';
import History from './History';
import { usersMocks } from '../../popups/FindUsers/users.mocks';

export default {
  title: 'components/не проверено/History',
  component: History
};

export const history = () => {
  const paths = [
    {
      stepId: '-1',
      activityId: 'activityId',
      activityText: 'Подписание приказа',
      agent: 'agent',
      agentName: 'Кузнецова Злата Игоревна',
      user: [usersMocks[9]],
      statusId: '0',
      statusText: 'Подписано ЭП',
      criticality: '3',
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
      fileName: 'myDocksjdfhalkdsjhflkahglkdahglkdsajhflkdsajhgalksgsagdekherliytwreoiytoireuytoiurewytoireytoirewytoirewuytoiurewytoiurewytoirewuytoirewuytoirewytoirewuytoiurewytoirewytoiurewytoirewuytoirewytoirewuytoirewuytoirewuytoirewytoiew.pdf',
      base64: '',
      singBase64: '',
      cert: ''
    }
  ];

  return (
    <StoryDocs>
      <StoryDocsH1>History</StoryDocsH1>
      <StoryDocsH2>История согласования</StoryDocsH2>
      <StoryDocsDescription>Отображение пути согласования, используется во всех сервисах, кроме ЮЗЭДО</StoryDocsDescription>
      <History history={paths} attachments={attachments} />
    </StoryDocs>
  );
};
