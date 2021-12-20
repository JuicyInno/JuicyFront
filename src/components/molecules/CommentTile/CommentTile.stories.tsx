import React from 'react';
import { Story } from '@storybook/react';

import CommentTile, { ICommentTileProps } from './CommentTile';
import StoryContainer from '../../storybook/Story';
import StoryRow from '../../storybook/StoryRow';
import {
  StoryDocs, StoryDocsH2, StoryDocsDescription
} from '../../storybook';
import { initialFiles } from '../../../utils/helpers';
import { variants } from '../../../types';

export default {
  title: 'components/withTest/CommentTile',
  component: CommentTile,
  typeArgs: {
    statusColor: {
      options: variants,
      control: { type: 'select' },
      defaultValue: 'default'
    }
  },
  argTypes: {
    maxLength: {
      type: 'number',
      defaultValue: 255
    },
    initialFiles: { control: null },
  }
};

const comment = 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. ' +
    'Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, ' +
    'а также реальное распределение букв и пробелов в абзацах, которо';

export const Demo: Story = () => {
  return (
    <StoryDocs>
      <StoryDocsH2>CommentTile</StoryDocsH2>
      <StoryDocsDescription>
        С помощью данного элемента можно оставить комментарий и прикрепить сопровождающие файлы.
      </StoryDocsDescription>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '880px'
      }}>
        <div style={{ marginBottom: '40px' }}>
          <CommentTile name='comment-tile' initialFiles={initialFiles}/>
        </div>

        <div style={{ marginBottom: '40px' }}>
          <CommentTile />
        </div>

        <div style={{ marginBottom: '40px' }}>
          <CommentTile autoResize={true} comment={comment}/>
        </div>
      </div>
    </StoryDocs >
  );
};

export const Playground: Story<ICommentTileProps> = (args) => {
  return (
    <StoryContainer>
      <StoryRow>
        <CommentTile {...args} />
      </StoryRow>
    </StoryContainer>
  );
};

Demo.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Tl0AmqQJK4qaCl4pLRio7A/Design-System-for-Story-Book?node-id=31%3A33319',
  },
};
