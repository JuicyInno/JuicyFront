import React from 'react';
import GhostScreen from './GhostScreen';
import Story from '../../storybook/Story';
import StoryItem from '../../storybook/StoryItem';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'atoms/withTest/Экран заглушки с приведением',
  decorators: [withDesign],
  component: GhostScreen,
};

export const ghostScreen = () => {

  return (
    <Story name='Экран заглушки с приведением' description='GhostScreen'>
      <StoryItem>
        <GhostScreen text={'Не все приведения страшные? Не так ли?'}/>
      </StoryItem>
    </Story>
  );
};
ghostScreen.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Y86V3oIhkZQ4u27iBuhN0l/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%8B-%D0%92%D0%A2%D0%91-%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D0%BE%D0%B9?node-id=19060%3A302735'
  },
};
