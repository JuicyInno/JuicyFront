import React from 'react';
import Comment from '../Comment';
import CommentForm from './CommentForm';
import Story from '../../storybook/Story';
import StoryItem from '../../storybook/StoryItem';
import { mokUser, mokUser2 } from '../Comment/moks/mokUser';

export default {
  title: 'не проверено/CommentForm',
  component: CommentForm
};

export const contentExpander = () => (
  <Story name='CommentForm (Компонента комментария )'>
    <StoryItem description='Отображение поля ввода комментария и сам комментарий'>
      <div style={{ maxWidth: '648px' }}>


        <CommentForm title='Комментарии' user={mokUser2} >
          <Comment user={mokUser} commentText='Этот комментарий мог оставить другой user:IUser' createdTime={1596377520000} />
        </CommentForm>
      </div>
    </StoryItem>
  </Story>
);
