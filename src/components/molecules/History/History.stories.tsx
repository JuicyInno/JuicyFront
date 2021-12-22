import React from 'react';
import { withDesign } from 'storybook-addon-designs';
import { Story } from '@storybook/react';
import {
  StoryDocs, StoryDocsH1, StoryDocsH2, StoryDocsDescription
} from '../../storybook';
import History from './History';
import {
  pathsHistory, attachments, pathsUZADO
} from './mock';
import StoryContainer from '../../storybook/Story';
import StoryRow from '../../storybook/StoryRow';

export default {
  title: 'components/withTest/History',
  component: History,
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
      <History history={pathsHistory} attachments={attachments} />

      <StoryDocsH2>История согласования ЮЗЭДО</StoryDocsH2>
      <StoryDocsDescription>
          Вместо активности показываем должность, отключаем иконку (i), используется ТОЛЬКО в ЮЗЭДО
      </StoryDocsDescription>
      <History history={pathsUZADO} isUZADO />
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
        <History { ...args } history={pathsHistory} />
      </StoryRow>
    </StoryContainer>
  );
};
