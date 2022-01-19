import React from 'react';
import StoryContainer from '../../storybook/Story';
import StoryItem from '../../storybook/StoryItem';
import StoryRow from '../../storybook/StoryRow';

import RatePicker, { IPickerProps } from './RatePicker';
import { withDesign } from 'storybook-addon-designs';
import { StoryDocs, StoryDocsH1 } from '../../storybook';
import { Story } from '@storybook/react';
/* eslint-disable max-len */

export default {
  title: 'forms/withTest/Rate Picker',
  decorators: [withDesign],
  component: RatePicker,
};

export const Demo = (args: IPickerProps) => {
  return <StoryDocs>
    <StoryDocsH1>Rate picker</StoryDocsH1>
    <StoryContainer>
      <StoryItem subtitle='Default rate picker' description='Обычный rate picker'>
        <StoryRow>
          <RatePicker {...args} />
        </StoryRow>
        <StoryRow>
          <RatePicker isActive={false} defaultPickedValue={2} />
        </StoryRow>
      </StoryItem>
      <StoryItem subtitle='Star Picker rate picker' description='Обычный star picker '>
        <StoryRow>
          <RatePicker isStarPicker={true} {...args} />

        </StoryRow>
        <StoryRow >

          <RatePicker isStarPicker={true} isActive={false} defaultPickedValue={2} />
        </StoryRow>
      </StoryItem>
    </StoryContainer>
  </StoryDocs>;
};

export const Playground: Story = (args: IPickerProps) => {


  return (
    <StoryContainer name='Datepicker' description='Выбор даты.' width={320}>
      <StoryRow>
        <RatePicker {...args} />
      </StoryRow>
    </StoryContainer>
  );
};


Demo.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Y86V3oIhkZQ4u27iBuhN0l/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%8B-%D0%92%D0%A2%D0%91-%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D0%BE%D0%B9?node-id=16095%3A103074'
  },
};
