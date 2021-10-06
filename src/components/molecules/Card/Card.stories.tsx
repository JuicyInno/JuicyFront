import Story from '../../storybook/Story';
import StoryItem from '../../storybook/StoryItem';
import React from 'react';
import Card, { ICard } from './Card';
import { usersMocks } from '../../popups/FindUsers/users.mocks';
import { variants } from '../../../types';

const data: ICard = {
  id: '',
  title: 'Надбавка за увеличение объёма продаж',
  subTitle: 'Вид заявки: Исполнение обязанностей',
  requestNumber: '347347347',
  date: '01.01.2021',
  statusText: 'На согласовании',
  statusColor: 'yellow',
  user: usersMocks[0],
  onClick: () => {}
};

export default {
  title: 'Card',
  component: Card,
  typeArgs: {
    statusColor: {
      options: variants,
      control: { type: 'select' },
      defaultValue: 'default'
    }
  }
};

export const card = () => {
  return <Story name='Card' description='Карточка'>
    <StoryItem>
      <Card {...data} />
    </StoryItem>
  </Story>;
};
