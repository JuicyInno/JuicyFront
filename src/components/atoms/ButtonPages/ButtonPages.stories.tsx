import React from 'react';
import { Story } from '@storybook/react';
import ButtonPages from './ButtonPages';
import StoryContainer from '../../storybook/Story';
import StoryItem from '../../storybook/StoryItem';
import { withDesign } from 'storybook-addon-designs';
import StoryRow from '../../storybook/StoryRow';
import ControlGroup from '../ControlGroup';
/* eslint-disable max-len */
export default {
  title: 'controls/withTest/ButtonPages',
  decorators: [withDesign],
  component: ButtonPages,
};

const onChange = (p: number) => {
  //
};

export const Demo = () => {
  return (
    <StoryContainer name='Переключатель страниц' description='Переключатель страниц'>
      <StoryItem>
        <ButtonPages max={8} onChange={onChange}/>
      </StoryItem>
    </StoryContainer>
  );
};

export const Playground: Story = (args) => {
  return (
    <StoryContainer>
      <StoryRow>
        <ControlGroup>
          <ButtonPages max={8} onChange={onChange} {...args}/>
        </ControlGroup>
      </StoryRow>
    </StoryContainer>
  );
};

Demo.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Y86V3oIhkZQ4u27iBuhN0l/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%8B-%D0%92%D0%A2%D0%91-%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D0%BE%D0%B9?node-id=13613%3A74776'
  }
};
