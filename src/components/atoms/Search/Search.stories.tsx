import React from 'react';
import Story from '../../storybook/Story';
import StoryItem from '../../storybook/StoryItem';
import Search from './Search';

export default {
  title: 'Form Controls/Search',
  component: Search
};

export const search = () => {
  return (
    <Story name='Search' description='Поиск' width={600}>
      <StoryItem>
        <Search/>
      </StoryItem>
    </Story>
  );
};
