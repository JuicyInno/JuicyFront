import React from 'react';
import ButtonPages from './ButtonPages';
import Story from '../../storybook/Story';
import StoryItem from '../../storybook/StoryItem';
import { withDesign } from 'storybook-addon-designs';
/* eslint-disable max-len */
export default {
  title: 'controls/не проверено/ButtonPages',
  decorators: [withDesign],
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
buttonPages.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Y86V3oIhkZQ4u27iBuhN0l/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%8B-%D0%92%D0%A2%D0%91-%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D0%BE%D0%B9?node-id=13613%3A74776'
  }
};
