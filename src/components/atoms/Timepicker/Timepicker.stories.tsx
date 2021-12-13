import React, { useState } from 'react';
import { Story } from '@storybook/react';
import Timepicker from './Timepicker';
import StoryItem from '../../storybook/StoryItem';
import { StoryDocs, StoryDocsH1 } from '../../storybook';
import StoryContainer from '../../storybook/Story';

export default {
  title: 'forms/withTest/Timepicker',
  component: Timepicker
};

export const Demo = () => {
  const [s, setS] = useState('14:00');

  return (
    <StoryDocs>
      <StoryDocsH1>Timepicker</StoryDocsH1>
      <StoryItem description='Выбор времени'>
        <form>
          <Timepicker name='timepicker' initialValue={s} min='12:30' max='20:15' />
        </form>
      </StoryItem>

      <StoryItem description='Disabled'>
        <Timepicker disabled name='timepicker' initialValue={s} min='12:30' max='20:15' />
      </StoryItem>

      <StoryItem description='Empty'>
        <Timepicker name='timepicker' />
      </StoryItem>
    </StoryDocs>
  );
};

export const Playground: Story = (args) => {
  return (
    <StoryContainer>
      <StoryItem>
        <Timepicker name='timepicker' {...args} />
      </StoryItem>
    </StoryContainer>
  );
};

Demo.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Tl0AmqQJK4qaCl4pLRio7A/Design-System-for-Story-Book?node-id=6%3A37232',
  },
};
