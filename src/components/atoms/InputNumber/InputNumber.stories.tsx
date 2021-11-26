import React from 'react';
import { withDesign } from 'storybook-addon-designs';
import { Story } from '@storybook/react';

import InputNumber from './InputNumber';
import StoryItem from '../../storybook/StoryItem';
import StoryContainer from '../../storybook/Story';

export default {
  title: 'forms/withTest/InputNumber',
  component: InputNumber,
  decorators: [withDesign],
};


export const Demo = () => {

  return (
    <StoryContainer name='InputNumber' description='Поле для ввода чисел.' width={600}>
      <StoryItem>
        <InputNumber name='number' defaultValue={2000.20} max={10000.50} floatPoints={1} />
      </StoryItem>
    </StoryContainer>
  );
};

export const Playground: Story = (args) => {
  return (
    <StoryContainer>
      <StoryItem>
        <InputNumber name='number' {...args} />
      </StoryItem>
    </StoryContainer>
  );
};

/* eslint-disable max-len */
Demo.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Y86V3oIhkZQ4u27iBuhN0l/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%8B-%D0%92%D0%A2%D0%91-%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D0%BE%D0%B9?node-id=18262%3A231242',
  },
};
