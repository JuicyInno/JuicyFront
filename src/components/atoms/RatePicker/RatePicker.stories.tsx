import React from 'react';
import Story from '../../storybook/Story';
import StoryItem from '../../storybook/StoryItem';
import StoryRow from '../../storybook/StoryRow';
import RatePicker, { IPickerProps } from './RatePicker';


export default {
  title: 'Form Controls/Rate Picker',
  component: RatePicker,
};


export const ratePicker = (args: IPickerProps) => {
  return (
    <Story name='Rate Picker' description='Rate Picker элемент'>
      <StoryItem description='состояние оцeнщика'>
        <StoryRow >
          <RatePicker {...args} />
        </StoryRow>
      </StoryItem>
    </Story>
  );
};
