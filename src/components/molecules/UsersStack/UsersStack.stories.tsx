import React from 'react';
import UsersStack from './UsersStack';
import { IUser } from '../../../types/projects.types';
import Story from '../../storybook/Story';

export default {
  title: 'components/не проверено/UsersStack',
  component: UsersStack
};

export const usersStack = () => {
  const users: IUser[] = [
    {
      id: 'vtb4037234',
      fullName: 'Симпсон Гомер Абрахамович',
      firstName: 'Гомер',
      lastName: 'Симпсон',
      middleName: 'Абрахамович',
      photo:
        'data:image/png;base64,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',
      position: 'Электрик',
      department: 'Пончики и электроны'
    },
    {
      id: 'vtb4037116',
      fullName: 'Симпсон Гомер Абрахамович',
      firstName: 'Гомер',
      lastName: 'Симпсон',
      middleName: 'Абрахамович',
      photo:
        'data:image/png;base64,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',
      position: 'Электрик',
      department: 'Пончики и электроны'
    },
    {
      id: 'vtb4037117',
      fullName: 'Симпсон Гомер Абрахамович',
      firstName: 'Гомер',
      lastName: 'Симпсон',
      middleName: 'Абрахамович',
      photo: '',
      position: 'Электрик',
      department: 'Пончики и электроны'
    },
    {
      id: 'vtb4037118',
      fullName: 'Симпсон Гомер Абрахамович',
      firstName: 'Гомер',
      lastName: 'Симпсон',
      middleName: 'Абрахамович',
      photo: '',
      position: 'Электрик',
      department: 'Пончики и электроны'
    }
  ];

  return (
    <Story name='Стек пользователей'>
      <UsersStack users={ users }/>
    </Story>
  );
};
