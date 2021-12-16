import React from 'react';
import {
  StoryDocs, StoryDocsH1, StoryDocsH2, StoryDocsDescription
} from '../../storybook';
import { Story } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import HistorySidebar from './HistorySidebar';
import StoryContainer from '../../storybook/Story';
import StoryRow from '../../storybook/StoryRow';
import {
  attachments, pathsHistory, pathHistory20, pathsHistory3, pathsHistory4, pathsHistory5, pathHistory6, pathsHistory1
} from '../HistorySidebar/mock';

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
      {/* <StoryDocsDescription>Отображение пути согласования, используется во всех сервисах, кроме ЮЗЭДО</StoryDocsDescription>*/}
      <StoryDocsDescription>Обычная история на 4 человека</StoryDocsDescription>
      <div style={{
        display: 'flex',
        width: 600,
        height: 'auto',
        justifyContent: 'flex-end'
      }}>
        <HistorySidebar history={pathsHistory} attachments={attachments} />
      </div>

      <StoryDocsDescription>История на {'>'}4 человек, нет Вы, все согласовали - показываем последних 4 пользоавтелей</StoryDocsDescription>
      <div style={{
        display: 'flex',
        width: 600,
        height: 'auto',
        justifyContent: 'flex-end'
      }}>
        <HistorySidebar history={pathsHistory1} />
      </div>

      <StoryDocsDescription>История на {'>'}4 человек, нет Вы, никто не согласовал, показываем первых 4</StoryDocsDescription>
      <div style={{
        display: 'flex',
        width: 600,
        height: 'auto',
        justifyContent: 'flex-end'
      }}>
        <HistorySidebar history={pathHistory20} />
      </div>

      <StoryDocsDescription>История на {'>'}4 человек, нет Вы, до - 2 согласовали, после 3 не согласовали</StoryDocsDescription>
      <div style={{
        display: 'flex',
        width: 600,
        height: 'auto',
        justifyContent: 'flex-end'
      }}>
        <HistorySidebar history={pathsHistory3} />
      </div>

      <StoryDocsDescription>История на {'>'}4 человек, нет Вы, не согласовал - предпоследний</StoryDocsDescription>
      <div style={{
        display: 'flex',
        width: 600,
        height: 'auto',
        justifyContent: 'flex-end'
      }}>
        <HistorySidebar history={pathsHistory4} />
      </div>

      <StoryDocsDescription>История на {'>'}5 человек, нет Вы, не согласовал - последний</StoryDocsDescription>
      <div style={{
        display: 'flex',
        width: 600,
        height: 'auto',
        justifyContent: 'flex-end'
      }}>
        <HistorySidebar history={pathsHistory5} />
      </div>

      <StoryDocsH2>История согласования c "Вы"</StoryDocsH2>
      <StoryDocsDescription>История на {'>'}5 человек</StoryDocsDescription>
      <div style={{
        display: 'flex',
        width: 600,
        height: 'auto',
        justifyContent: 'flex-end'
      }}>
        <HistorySidebar history={pathHistory6} />
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
