import React from 'react';
import ButtonGroup from './ButtonGroup';
import Story from '../../storybook/Story';
import StoryItem from '../../storybook/StoryItem';
import { IButtonGroup } from '../../../types';
import { Button } from '../../../index';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'Группа кнопок',
  component: ButtonGroup,
};

export const buttonGroup = () => {

  const list: IButtonGroup[] = [
    { component: <Button> Отправить </Button> },
    { component: <Button buttonType='light'> Отменить </Button> },
    {
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

  return (
    <BrowserRouter>
      <Story name='Группировка кнопок'>
        <StoryItem>
          <ButtonGroup list={list} max={2}/>
        </StoryItem>
      </Story>
    </BrowserRouter>
  );
};
