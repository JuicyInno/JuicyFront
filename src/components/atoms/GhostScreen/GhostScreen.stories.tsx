import React from 'react';
import GhostScreen from './GhostScreen';
import Story from '../../storybook/Story';
import StoryItem from '../../storybook/StoryItem';

export default {
  title: 'Экран заглушки с приведением',
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
