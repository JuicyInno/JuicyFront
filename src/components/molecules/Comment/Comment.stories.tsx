import React from 'react';
import Comment from './Comment';
import Story from '../../storybook/Story';
import StoryItem from '../../storybook/StoryItem';
import { mokUser } from './moks/mokUser';

export default {
  title: 'не проверено/Comment',
  component: Comment
};

export const contentExpander = () => (
  <Story name='Comment(Компонент комментария )'>
    <StoryItem description='Отображение комментария '>
      <Comment user={mokUser} commentText='Заполнила анкету. Спасибо вам за работу!' />
    </StoryItem>
  </Story>
);
