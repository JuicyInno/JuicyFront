import React from 'react';
import { Story } from '@storybook/react';
import Timepicker from './Timepicker';
import StoryItem from '../../storybook/StoryItem';
import { StoryDocs, StoryDocsH1 } from '../../storybook';
import StoryContainer from '../../storybook/Story';
import { withDesign } from 'storybook-addon-designs';
import Button from '../Button';

export default {
  title: 'forms/withTest/Timepicker',
  component: Timepicker,
  decorators: [withDesign],
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
      defaultValue: false
    },
    invalid: {
      control: { type: 'boolean' },
      defaultValue: false
    },
    isMinified: {
      control: { type: 'boolean' },
      defaultValue: false
    },
  }
};

export const Demo = (args) => {
  return (
    <StoryDocs>
      <StoryDocsH1>Timepicker</StoryDocsH1>


      <StoryItem description='Выбор времени'>
        <form>
          <Timepicker {...args} name='timepicker' initialValue='12:20' min='08:30' max='20:15' />
        </form>
      </StoryItem>

      <StoryItem description='Disabled'>
        <Timepicker {...args} disabled name='timepicker' initialValue='16:00' min='12:30' max='20:15' />
      </StoryItem>

      <StoryItem description='Empty'>
        <Timepicker {...args} name='timepicker' />
      </StoryItem>

      <StoryItem description='With button active'>
        <Timepicker {...args} name='timepicker' initialValue='16:00' min='12:30' max='20:15' ><Button >Выберите время</Button></Timepicker>
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
