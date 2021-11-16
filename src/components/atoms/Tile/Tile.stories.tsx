import React from 'react';
import Tile from './Tile';
import Story from '../../storybook/Story';
import StoryItem from '../../storybook/StoryItem';

export default {
  title: 'controls/не проверено/Tile',
  component: Tile
};

export const Demo = () => {
  return (
    <Story name='Tile (Плитка)'>
      <StoryItem description='Плитка оборачивает контент в стилизованный блок'>
        <div style={{
          backgroundColor: '#F1F2F4',
          padding: '20px',
          width: '600px'
        }}>
          <Tile>Контент</Tile>
        </div>
      </StoryItem>
    </Story>
  );
};

Demo.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Tl0AmqQJK4qaCl4pLRio7A/Design-System-for-Story-Book?node-id=4%3A31714',
  }
};
