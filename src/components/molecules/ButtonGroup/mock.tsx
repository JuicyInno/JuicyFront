import { IButtonGroup } from '../../../types';
import { Button } from '../../../index';
import {
  StatusPending, AllCopy, StatusQuestion
} from '../../../indexNewIcon';
import React from 'react';

export const buttonGroupMock: IButtonGroup[] = [
  { component: <Button size='l'> Отправить </Button> },
  { component: <Button buttonType='light' size='l' onClick={() => console.log('отменить')}> Отменить </Button> },
  {
    component: <Button size='l' buttonType='light' startAdornment={<StatusPending />}></Button>,
    label: 'Подбор',
    tooltip: 'Описание',
    description: 'Начать подбор сотрудника на позицию',
    onClick: () => {
      console.log('Подбор');
    }
  },
  {
    label: 'Перевод',
    description: 'Оформить перевод сотрудника',
    url: '/transfer',

  }
];

export const buttonIconGroupMock: IButtonGroup[] = [
  {
    component: <Button size='l' startAdornment={<StatusPending />}></Button>,
    tooltip: 'Какое-то описание'
  },
  {
    component: <Button size='l' buttonType='light' startAdornment={<AllCopy />}></Button>,
    tooltip: 'Копировать'
  },
  {
    component: <Button size='l' buttonType='light' startAdornment={<StatusQuestion />}></Button>,
    tooltip: 'Описание...',
    label: 'Подбор',
    description: 'Начать подбор сотрудника на позицию',
    onClick: () => {
      /*     console.log('Подбор'); */
    }
  },
];
