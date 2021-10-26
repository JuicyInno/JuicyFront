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
  title: 'components/не проверено/CommentTile',
  component: CommentTile,
  typeArgs: {
    statusColor: {
      options: variants,
      control: { type: 'select' },
      defaultValue: 'default'
    }
  },
};

const initialFiles = [
  {
    base64: '',
    fileName: 'screenshot.jpg',
  },
  {
    base64: '',
    fileName: 'screenshot.jpg',
  }
];
const comment = 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которо';

export const Demo: Story = () => {
  return (
    <StoryDocs>
      <StoryDocsH2>Комментарии и файлы</StoryDocsH2>
      <StoryDocsDescription>
        С помощью данного элемента можно оставить комментарий и прикрепить сопровождающие файлы.
      </StoryDocsDescription>
      <div style={{ 'display': 'flex', }}>
        <div style={{ marginLeft: '40px' }}>
          <CommentTile initialFiles={initialFiles}/>
        </div>
        <div style={{ marginLeft: '40px' }}>
          <CommentTile />
        </div>
        <div style={{
          paddingRight: '40px',
          marginLeft: '40px'
        }}>
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
        <CommentTile />
      </StoryRow>
    </StoryContainer>
  );
};

Demo.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/gDl8sDPM8Zmh5ol4ywzLrj/Design-System-VTB-Home?node-id=20799%3A77566',
  },
  actions: { disabled: true },
  controls: { disabled: true }
};
