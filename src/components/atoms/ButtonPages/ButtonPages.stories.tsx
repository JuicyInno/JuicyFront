import React from 'react';
import ButtonPages from './ButtonPages';
import Story from '../../storybook/Story';
import StoryItem from '../../storybook/StoryItem';

export default {
  title: 'ButtonPages',
  component: ButtonPages,
};

export const buttonPages = () => {


  const onChange = (p: number) => {
    //
  };

  return (
    <Story name='Переключатель страниц' description='Переключатель страниц'>
      <StoryItem>
        <ButtonPages max={8} onChange={onChange}/>
      </StoryItem>
    </Story>
  );
};
