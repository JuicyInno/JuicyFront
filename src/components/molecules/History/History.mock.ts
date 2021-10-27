import { usersMocks } from '../../popups/FindUsers/users.mocks';

export const paths = [
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
export const attachments = [
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
