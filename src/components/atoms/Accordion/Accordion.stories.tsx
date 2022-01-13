import React from 'react';
import { Story } from '@storybook/react';

import StoryContainer from '../../storybook/Story';
import StoryRow from '../../storybook/StoryRow';
import Accordion from './index';
import { StoryDocsH3 } from '../../storybook';

import data from './mock';

export default {
  title: 'components/withTest/Accordion',
  component: Accordion,
  argTypes: {}
};

export const Demo: Story = () => {
  return (
    <StoryContainer>
      <div>
        <StoryDocsH3>Простой Accordion</StoryDocsH3>
        <Accordion data={data} />
      </div>

      <div>
        <StoryDocsH3>isMiltiple</StoryDocsH3>
        <Accordion data={data} isMultiple />
      </div>

      <div>
        <StoryDocsH3>defaultOpened</StoryDocsH3>
        <Accordion data={data.map((item) => ({
          ...item,
          defaultOpened: true
        }))} />
      </div>
    </StoryContainer>
  );
};

export const Playground: Story = (args) => {
  return (
    <StoryContainer>
      <StoryRow>
        <Accordion data={data} {...args} />
      </StoryRow>
    </StoryContainer>
  );
};

Playground.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Tl0AmqQJK4qaCl4pLRio7A/Design-System-for-Story-Book?node-id=2734%3A38774',
  },
};
