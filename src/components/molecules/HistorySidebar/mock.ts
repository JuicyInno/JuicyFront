import { IUser } from '../../../types/projects.types';
import { IHistory } from './HistorySidebar';

const getUser = (user: Partial<IUser> = {}) => ({
  id: '3',
  firstName: 'Иван',
  lastName: 'Иванов',
  middleName: 'Иванович',
  fullName: 'Иванов Иван Иванович',
  photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuIbv-7JSgC23hcGq8qDRBpFzdMBEw8urHdQ&usqp=CAU',
  phone: '+7(495)999-99-99',
  mobilePhone: '+79999999999',
  internalPhone: '9999',
  email: 'user@domail.com',
  manager: true,
  position: '',
  department: '',
  ...user
});

const _item: IHistory = {
  approvers: [getUser({ id: '0' })],
  approverName: 'Линейный руководитель Name',
  approveDateTime: '2022-02-15T09:03:37.612Z',
  name: 'Согласование линейным руководителем',
  comment: `Прошу выдать работникам, ЭППрошу выдать работникам, 
    ЭППрошу выдать работникам,
    ЭППрошу выдать работникам, 
    ЭППрошу выдать работникам, 
    ЭППрошу выдать работникам, ЭП`,
  status: 'Согласовано',
  statusType: 'POSITIVE'
};

export const history: IHistory[] = [
  _item,
  {
    ..._item,
    approverName: 'Бусыгина Александра Анатольевна Name',
    approveDateTime: '2022-02-15T09:03:37.612Z',
    name: 'Согласование заявки',
    comment: undefined,
    status: 'Подписано ЭП',
    statusType: 'NEUTRAL'
  },
  {
    ..._item,
    approvers: [getUser({ id: '1' }), getUser({ id: '2' })],
    approverName: 'Бусыгина Александра Name',
    approveDateTime: '2022-02-15T09:03:37.612Z',
    name: 'Согласование заявки',
    comment: undefined,
    status: 'Отклонено',
    statusType: 'NEGATIVE'
  },
  {
    ..._item,
    approvers: [getUser({ id: '4' })],
    approverName: 'Петров Александр Палович Name',
    approveDateTime: undefined,
    name: 'Согласование заявки',
    comment: undefined,
    status: undefined,
    statusType: undefined
  },
  {
    ..._item,
    approvers: [getUser({ id: '5' }), getUser({ id: '6' }), getUser({ id: '7' })],
    approverName: 'Никита Другой Name',
    approveDateTime: undefined,
    name: 'Согласование заявки',
    comment: undefined,
    status: undefined,
    statusType: undefined
  },
  {
    ..._item,
    approvers: [
      getUser({
        id: '8',
        fullName: 'Аня петровна'
      })
    ],
    approverName: 'Аня петровна Name',
    approveDateTime: undefined,
    name: 'Согласование заявки 2',
    comment: undefined,
    status: undefined,
    statusType: undefined
  },
];
