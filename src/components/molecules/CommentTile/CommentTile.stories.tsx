import React from 'react';
import { Story } from '@storybook/react';

import CommentTile, { ICommentTileProps } from './CommentTile';
import StoryContainer from '../../storybook/Story';
import StoryRow from '../../storybook/StoryRow';
import {
  StoryDocs, StoryDocsH2, StoryDocsDescription
} from '../../storybook';
import { variants } from '../../../types';

export default {
  title: 'molecules/CommentTile',
  component: CommentTile,
  typeArgs: {
    statusColor: {
      options: variants,
      control: { type: 'select' },
      defaultValue: 'default'
    }
  },
};

export const Demo: Story = () => {
  return (
    <StoryDocs>
      <StoryDocsH2>Комментарии и файлы</StoryDocsH2>
      <StoryDocsDescription>
        С помощью данного элемента можно оставить комментарий и прикрепить сопровождающие файлы.
      </StoryDocsDescription>
      <CommentTile />
    </StoryDocs >
  );
};

export const Playground: Story<ICommentTileProps> = (args) => {
  return (
    <StoryContainer>
      <StoryRow>
        <CommentTile />
      </StoryRow>
    </StoryContainer>
  );
};

Demo.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Y86V3oIhkZQ4u27iBuhN0l/Проекты-ВТБ-основной?node-id=18118%3A266176',
  },
  actions: { disabled: true },
  controls: { disabled: true }
};
