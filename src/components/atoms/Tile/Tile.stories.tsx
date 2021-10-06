import React from 'react';
import Tile from './Tile';
import Story from '../../storybook/Story';
import StoryItem from '../../storybook/StoryItem';

export default {
  title: 'Tile',
  component: Tile
};

export const tile = () => {
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
