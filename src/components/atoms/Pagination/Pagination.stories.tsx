import React from 'react';
import Pagination, { IPaginationProps } from './Pagination';
import {
  StoryDocs, StoryDocsH1, StoryDocsH2
} from '../../storybook';
import StoryContainer from '../../storybook/Story';
import StoryRow from '../../storybook/StoryRow';
import { Story } from '@storybook/react';

export default {
  title: 'navigations/withTest/Pagination',
  component: Pagination,
  argTypes: {
    count: { defaultValue: 7 },
    getCurrentPage: { control: null },

    isSimple: {
      control: 'boolean',
      defaultValue: false,
    },
    disabled: {
      defaultValue: false,
      control: 'boolean',
    },
    disabledPages: { defaultValue: [] },
  }
};

export const Demo = () => {

  const getCurrentPage = (page: number) => {
    console.log('Current page', page);
  };

  return (
    <StoryDocs>
      <StoryDocsH1>Pagination</StoryDocsH1>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
      }}>
        <Pagination count={7} getCurrentPage={getCurrentPage} />
        <Pagination count={16} getCurrentPage={getCurrentPage} />
        <Pagination count={21} getCurrentPage={getCurrentPage} />
        <Pagination disabledPages={[1, 2, 3]} count={7} getCurrentPage={getCurrentPage} />
        <Pagination disabled count={7} getCurrentPage={getCurrentPage} />

      </div>
      <StoryDocsH2>Pagination simple</StoryDocsH2>
      <Pagination isSimple count={7} getCurrentPage={getCurrentPage} />
    </StoryDocs>

  );
};

Demo.parameters = {
  actions: { disabled: true },
  controls: { disabled: true },
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Tl0AmqQJK4qaCl4pLRio7A/Design-System-for-Story-Book?node-id=1315%3A23731',
  },
};

export const Playground: Story<IPaginationProps> = (args: IPaginationProps) => {
  console.log(args);

  return (
    <StoryContainer>
      <StoryRow>
        <Pagination {...args} />
      </StoryRow>
    </StoryContainer>
  );
};
