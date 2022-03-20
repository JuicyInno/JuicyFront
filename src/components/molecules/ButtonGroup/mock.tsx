import { IButtonGroup } from '../../../types';
import { Button } from '../../../index';
import {
  StatusPending, AllCopy, StatusQuestion
} from '../../../indexIcon';
import React from 'react';

export const buttonGroupMock: IButtonGroup[] = [
  { component: <Button size='l'> Отправить </Button> },
  { component: <Button buttonType='light' size='l' onClick={() => console.log('отменить')}> Отменить </Button> },
  {
    component: <Button size='l' buttonType='light' startAdornment={<StatusPending />} aria-label='Подбор'></Button>,
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
    component: <Button size='l' startAdornment={<StatusPending />} aria-label='Какое-то описание'></Button>,
    tooltip: 'Какое-то описание'
  },
  {
    component: <Button size='l' buttonType='light' startAdornment={<AllCopy />} aria-label='Копировать'></Button>,
    tooltip: 'Копировать'
  },
  {
    component: <Button size='l' buttonType='light' startAdornment={<StatusQuestion />} aria-label='Описание...'></Button>,
    tooltip: 'Описание...',
    label: 'Подбор',
    description: 'Начать подбор сотрудника на позицию',
    onClick: () => {
      /*     console.log('Подбор'); */
    }
  },
];
