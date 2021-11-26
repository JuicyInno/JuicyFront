import React from 'react';
import Story from '../../storybook/Story';
import StoryItem from '../../storybook/StoryItem';
import StoryRow from '../../storybook/StoryRow';
import RatePicker, { IPickerProps } from './RatePicker';
import { withDesign } from 'storybook-addon-designs';
/* eslint-disable max-len */

export default {
  title: 'forms/withTest/Rate Picker',
  decorators: [withDesign],
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
ratePicker.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Y86V3oIhkZQ4u27iBuhN0l/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%8B-%D0%92%D0%A2%D0%91-%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D0%BE%D0%B9?node-id=16095%3A103074'
  },
};
