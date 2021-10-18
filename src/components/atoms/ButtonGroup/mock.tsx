import { IButtonGroup } from '../../../types';
import { Button } from '../../../index';
import React from 'react';

export const buttonGroupMock: IButtonGroup[] = [
  { component: <Button> Отправить </Button> },
  { component: <Button buttonType='light'> Отменить </Button> },
  {
    component: <Button> Подбор </Button>,
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
