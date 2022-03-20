import React from 'react';

import { Story } from '@storybook/react';
import {
  StoryDocs, StoryDocsH1, StoryDocsH2
} from '../../storybook';

import {
  Layout, LayoutColumn, ILayoutProps, LayoutContext
} from '.';
import Button from '../../atoms/Button';

export default {
  title: 'components/withTest/Layout',
  component: Layout,
  argTypes: {
    columns: { control: { disable: true } },
    maxWidth: { defaultValue: 's' }
  }
};

export const Demo: Story<ILayoutProps> = (args) => {
  return (
    <StoryDocs>
      <StoryDocsH1>Layout</StoryDocsH1>
      <StoryDocsH2>Одноколоночный</StoryDocsH2>
      <Layout {...args}>
        <LayoutColumn>
          <div style={{
            backgroundColor: '#E0F2FF',
            borderRadius: '20px',
            height: '300px',
            padding: '16px',
          }} />
        </LayoutColumn>
      </Layout >
      <StoryDocsH2>Двухколоночный</StoryDocsH2>
      <Layout maxWidth='l' columns={['320px', '1fr']}>
        <LayoutColumn>
          <div style={{
            backgroundColor: '#E0F2FF',
            borderRadius: '20px',
            height: '300px',
            padding: '16px',
          }}>
            <LayoutContext.Consumer>
              {({ isColumnVisible, setColumnVisible }) => (
                <Button buttonType='primary' onClick={() => setColumnVisible(!isColumnVisible)}>
                Раскрыть второй столбец
                </Button>
              )}
            </LayoutContext.Consumer>
          </div>
        </LayoutColumn>
        <LayoutColumn maxWidth='400px'>
          <div style={{
            backgroundColor: '#FFF1D4',
            borderRadius: '20px',
            height: '300px',
            padding: '16px'
          }} />
        </LayoutColumn>
      </Layout >
    </StoryDocs>
  );
};

Demo.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Tl0AmqQJK4qaCl4pLRio7A/Ui-Home-for-Story-Book?node-id=3196%3A52769',
  },
};
