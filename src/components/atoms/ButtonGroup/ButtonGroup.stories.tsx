import React from 'react';
import ButtonGroup from './ButtonGroup';
import Story from '../../storybook/Story';
import StoryItem from '../../storybook/StoryItem';
import { BrowserRouter } from 'react-router-dom';
import { buttonGroupMock } from './mock';

export default {
  title: 'controls/Группа кнопок',
  component: ButtonGroup,
};

export const buttonGroup = () => {
  return (
    <BrowserRouter>
      <Story name='Группировка кнопок'>
        <StoryItem>
          <ButtonGroup list={buttonGroupMock} max={2}/>
        </StoryItem>
      </Story>
    </BrowserRouter>
  );
};
