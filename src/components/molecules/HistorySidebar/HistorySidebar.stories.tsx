import React from 'react';
import {
  StoryDocs, StoryDocsH1, StoryDocsH2, StoryDocsDescription
} from '../../storybook';
import { Story } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import HistorySidebar from './HistorySidebar';
import StoryContainer from '../../storybook/Story';
import StoryRow from '../../storybook/StoryRow';
import { attachments, pathsHistory } from '../History/mock';

export default {
  title: 'components/withTest/HistorySidebar',
  component: HistorySidebar,
  decorators: [withDesign],
  argTypes: {
    history: { control: null },
    attachments: { control: null },
    isUZADO: { type: 'boolean' },
    host: { type: 'string' }
  }
};

export const Demo: Story = () => {
  return (
    <StoryDocs>
      <StoryDocsH1>History</StoryDocsH1>
      <StoryDocsH2>История согласования</StoryDocsH2>
      <StoryDocsDescription>Отображение пути согласования, используется во всех сервисах, кроме ЮЗЭДО</StoryDocsDescription>
      <div style={{
        display: 'flex',
        width: 600,
        height: 'auto',
        justifyContent: 'flex-end'
      }}>
        <HistorySidebar history={pathsHistory} attachments={attachments} />
      </div>
    </StoryDocs>
  );
};

Demo.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Tl0AmqQJK4qaCl4pLRio7A/Design-System-for-Story-Book?node-id=4%3A15743',
  },
  actions: { disabled: true },
  controls: { disabled: true }
};

export const Playground: Story = (args: any) => {
  return (
    <StoryContainer>
      <StoryRow>
        <HistorySidebar { ...args } />
      </StoryRow>
    </StoryContainer>
  );
};
