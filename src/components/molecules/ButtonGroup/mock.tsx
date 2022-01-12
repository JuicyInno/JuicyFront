import { IButtonGroup } from '../../../types';
import { Button } from '../../../index';
import {
  Time, Copy, Help
} from '../../../indexIcon';
import React from 'react';

export const buttonGroupMock: IButtonGroup[] = [
  { component: <Button size='l'> Отправить </Button> },
  { component: <Button buttonType='light' size='l' onClick={() => console.log('отменить')}> Отменить </Button> },
  {
    component: <Button size='l' buttonType='light' startAdornment={<Time />}></Button>,
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
    disabled: true
  }
];

export const buttonIconGroupMock: IButtonGroup[] = [
  {
    component: <Button size='l' startAdornment={<Time />}></Button>,
    tooltip: 'Какое-то описание'
  },
  {
    component: <Button size='l' buttonType='light' startAdornment={<Copy />}></Button>,
    tooltip: 'Копировать'
  },
  {
    component: <Button size='l' buttonType='light' startAdornment={<Help />}></Button>,
    tooltip: 'Описание...',
    label: 'Подбор',
    description: 'Начать подбор сотрудника на позицию',
    onClick: () => {
      console.log('Подбор');
    }
  },
];
