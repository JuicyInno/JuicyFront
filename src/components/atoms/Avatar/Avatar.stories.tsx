import React from 'react';
import Avatar from './Avatar';
import Story from '../../storybook/Story';
import StoryItem from '../../storybook/StoryItem';

export default {
  title: 'не проверено/Avatar',
  component: Avatar,
};

export const avatar = () => {

  return (
    <Story name='Аватар' description='Аватар пользователя'>
      <StoryItem>
        <Avatar fullName='K M'/>
      </StoryItem>
    </Story>
  );
};
