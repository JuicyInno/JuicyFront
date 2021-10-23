import React from 'react';
import { Story } from '@storybook/react';

import StoryContainer from '../../storybook/Story';
import StoryRow from '../../storybook/StoryRow';
import { ITab } from '../../../types';
import { BrowserRouter } from 'react-router-dom';

import {
  StoryDocs, StoryDocsH1, StoryDocsDescription
} from '../../storybook';

import Tabs, { ITabsProps } from './Tabs';
import Badge from '../Badge';
import Placeholder24 from '../../../assets/icons/Placeholder24';

export default {
  title: 'navigations/withTest/Tabs',
  component: Tabs,
  argTypes: {
    type: {
      options: ['underline', 'buttons'],
      control: { type: 'select' },
      defaultValue: 'underline'
    },
    list: { control: null },
    children: { control: null }
  }
};

export const Demo = (args: ITabsProps) => {
  const tab1 = (
    <div style={{ padding: '20px' }}>
      <ul>
        <li> Заявка 1</li>
        <li> Заявка 2</li>
      </ul>
    </div>
  );

  const tab2 = (
    <div style={{ padding: '20px' }}>
      <ul>
        <li> Запрос 1</li>
        <li> Запрос 2</li>
      </ul>
    </div>
  );

  const tab3 = (
    <div style={{ padding: '20px' }}>
      <ul>
        <li> Вопрос 1</li>
        <li> Вопрос 2</li>
      </ul>
    </div>
  );

  const list: ITab[] = [
    {
      label: 'Заявки',
      tab: tab1
    },
    {
      label: 'Запросы',
      tab: tab2,
      active: true
    },
    {
      label: 'Вопросы и ответы',
      tab: tab3
    },
    {
      label: 'Ситуации',
      disabled: true
    }
  ];

  const list2: ITab[] = [
    {
      label: 'Заявки',
      icon: <Placeholder24 />
    },
    {
      label: 'Запросы',
      icon: <Placeholder24 />
    },
    {
      label: 'Вопросы и ответы',
      icon: <Placeholder24 />
    },
    {
      label: 'Ситуации',
      icon: <Placeholder24 />,
      disabled: true
    }
  ];

  const list3: ITab[] = [
    { label: <Badge badgeContent={10} placeNear>Заявки</Badge> },
    { label: <Badge badgeContent={5} placeNear>Запросы</Badge> },
    { label: <Badge badgeContent={10} placeNear>Вопросы и ответы</Badge> },
    {
      label: <Badge badgeContent={10} placeNear>Ситуации</Badge>,
      disabled: true
    }
  ];


  return (
    <StoryDocs>
      <StoryDocsH1>
          Tabs
      </StoryDocsH1>

      <StoryDocsDescription>
        Переключение между вкладками. Внутри вкладки может быть как компонент, так и роутер.
      </StoryDocsDescription>

      <BrowserRouter>
        <div style={{
          display: 'grid',
          gap: 32
        }}>
          <Tabs {...args} list={list2}/>
          <Tabs {...args} list={list3}/>
          <Tabs {...args} list={list}/>
        </div>
      </BrowserRouter>
    </StoryDocs>
  );
};


export const Playground: Story = (args) => {
  const Tab = ({ children }) => (
    <div style={{ padding: '20px' }}>
      {children}
    </div>
  );

  const list: ITab[] = [
    {
      label: 'Заявки',
      tab: <Tab>Заявки</Tab>
    },
    {
      label: 'Запросы',
      tab: <Tab>Запросы</Tab>,
      active: true
    },
    {
      label: 'Вопросы и ответы',
      tab: <Tab>Вопросы и ответы</Tab>
    },
    {
      label: 'Ситуации',
      disabled: true
    }
  ];

  return (
    <StoryContainer>
      <BrowserRouter>
        <StoryRow>
          <Tabs list={list} {...args}/>
        </StoryRow>
      </BrowserRouter>
    </StoryContainer>
  );
};

Demo.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/gDl8sDPM8Zmh5ol4ywzLrj/Design-System-VTB-Home?node-id=20799%3A86694',
  },
};
