import React from 'react';
import { Story } from '@storybook/react';

import StoryContainer from '../../storybook/Story';
import { BrowserRouter } from 'react-router-dom';

import {
  StoryDocs, StoryDocsH1, StoryDocsDescription
} from '../../storybook';

import Tabs from './Tabs';

import {
  _simpleTabs, _iconTabs, _badgeTabs
} from './mock';

export default {
  title: 'navigations/withTest/Tabs',
  component: Tabs,
  argTypes: {
    showLine: {
      type: 'boolean',
      defaultValue: true
    },
    showMenu: {
      type: 'boolean',
      defaultValue: true
    },
    list: { control: null },
    children: { control: null },
  },
};

export const Demo = () => {
  return (
    <StoryDocs>
      <StoryDocsH1>Tabs</StoryDocsH1>

      <StoryDocsDescription>Переключение между вкладками. Внутри вкладки может быть как компонент, так и роутер.</StoryDocsDescription>
      <StoryDocsDescription>
        Компонент используется для переключения между вкладками.
        Компонент полностью адаптивен и автоматически меняет ширину ячеек в зависимости от контента.
      </StoryDocsDescription>

      <BrowserRouter>
        <div
          style={{
            display: 'grid',
            gap: 32,
          }}
        >
          <Tabs list={_simpleTabs} />
          <Tabs list={_simpleTabs} size='sm' />

          <Tabs list={_simpleTabs} showLine={false} />
          <Tabs list={_iconTabs} />
          <Tabs list={_badgeTabs} />

          <div style={{ maxWidth: 400 }}>
            <Tabs list={_simpleTabs} />
          </div>

        </div>
      </BrowserRouter>
    </StoryDocs>
  );
};

export const Playground: Story = (args) => {
  return (
    <StoryContainer>
      <BrowserRouter>
        <Tabs list={_simpleTabs} {...args} />
      </BrowserRouter>
    </StoryContainer>
  );
};

Demo.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Tl0AmqQJK4qaCl4pLRio7A/Design-System-for-Story-Book?node-id=4%3A29523',
  },
};
