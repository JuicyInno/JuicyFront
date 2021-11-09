import React from 'react';
import { Story } from '@storybook/react';
import {
  StoryDocs, StoryDocsH1, StoryDocsH3, StoryDocsDescription
} from '../../storybook';
import StoryContainer from '../../storybook/Story';
import StoryRow from '../../storybook/StoryRow';

import CalendarPage, { ICalendarPageProps, ICalendarPageMark, } from './CalendarPage';

export default {
  title: 'components/withTest/CalendarPage',
  component: CalendarPage
};

const MARKS: ICalendarPageMark[] = [
  {
    from: new Date(2021, 7, 31),
    to: new Date(2021, 8, 5),
    variant: 'default'
  },
  {
    from: new Date(2021, 8, 14),
    variant: 'magenta'
  },
  {
    from: new Date(2021, 8, 15),
    variant: 'red'
  },
  {
    from: new Date(2021, 8, 23),
    variant: 'yellow'
  },
  {
    from: new Date(2021, 8, 26),
    to: new Date(2021, 8, 28),
    variant: 'magenta'
  },
  {
    from: new Date(2021, 8, 30),
    to: new Date(2021, 9, 30),
    variant: 'default'
  }
];

export const Demo: Story = () => {
  return (
    <StoryDocs>
      <StoryDocsH1>CalendarPage (Календарь)</StoryDocsH1>
      <StoryDocsDescription>
        Данный компонент используется для отображения дней месяца и отметок для определенных дней.
      </StoryDocsDescription>

      <StoryDocsH3>Обычный календарь</StoryDocsH3>
      <CalendarPage year={2021} month={8} />

      <StoryDocsH3>Календарь с отметками</StoryDocsH3>
      <CalendarPage year={2021} month={8} marks={MARKS} />
    </StoryDocs>
  );
};

Demo.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Tl0AmqQJK4qaCl4pLRio7A/Design-System-for-Story-Book?node-id=18%3A22864'
  }
};

export const Playground: Story<ICalendarPageProps> = (args) => {
  return (
    <StoryContainer>
      <StoryRow>
        <CalendarPage {...args} marks={MARKS} />
      </StoryRow>
    </StoryContainer>
  );
};

Playground.argTypes = {
  year: { defaultValue: 2021 },
  month: { defaultValue: 8 },
  marks: { table: { disable: true } },
};
