import { IButtonGroup } from '../../../types';
import {
  Button, Time, Copy, Help
} from '../../../index';
import React from 'react';

export const buttonGroupMock: IButtonGroup[] = [
  { component: <Button size='l'> Отправить </Button> },
  { component: <Button buttonType='light' size='l'> Отменить </Button> },
  {
    component: <Button size='l' buttonType='light' startAdornment={<Time />}></Button>,
    label: 'Подбор',
    description: 'Начать подбор сотрудника на позицию',
    onClick: () => {
      console.log('Подбор');
    }
  },
  {
    label: 'Перевод',
    description: 'Оформить перевод сотрудника',
    url: '/transfer'
  }
];

export const buttonIconGroupMock: IButtonGroup[] = [
  { component: <Button size='l' startAdornment={<Time />}></Button> },
  { component: <Button size='l' buttonType='light' startAdornment={<Copy />}></Button> },
  {
    component: <Button size='l' buttonType='light' startAdornment={<Help />}></Button>,
    label: 'Подбор',
    description: 'Начать подбор сотрудника на позицию',
    onClick: () => {
      console.log('Подбор');
    }
  },
];
