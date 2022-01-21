import React from 'react';
import ContentExpander, { IContentExpanderProps } from './ContentExpander';
import { Story } from '@storybook/react';

import StoryContainer from '../../storybook/Story';
import StoryItem from '../../storybook/StoryItem';

export default {
  title: 'components/withTest/ContentExpander',
  component: ContentExpander,
  argTypes: {
    onExpand: { control: null },
    title: { control: { type: 'text' } },
    titleOpen: { control: { type: 'text' } },
    children: { control: { type: 'text' } },
  }
};

export const Demo = () => (
  <StoryContainer name='ContentExpander (Схлопыватель 🧐)'>
    <StoryItem description='Прячет контент под кнопкой'>
      <ContentExpander title='Контент' titleOpen='lol'>
        <p>Какой-то контент</p>
        <p>Какой-то контент</p>
        <p>Какой-то контент</p>
        <p>Какой-то контент</p>
        <p>Какой-то контент</p>
        <p>Какой-то контент</p>
        <p>Какой-то контент</p>
        <p>Какой-то контент</p>
        <p>Какой-то контент</p>
        <p>Какой-то контент</p>
      </ContentExpander>
    </StoryItem>
  </StoryContainer>
);

export const Playground: Story<IContentExpanderProps> = (args) => {
  return (
    <StoryContainer>
      <ContentExpander title='Title' titleOpen='Show Tile' {...args} onExpand={null}>
        <p>Какой-то контент</p>
      </ContentExpander>
    </StoryContainer>
  );
};

Demo.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Tl0AmqQJK4qaCl4pLRio7A/Design-System-for-Story-Book?node-id=2734%3A38774',
  },
};
