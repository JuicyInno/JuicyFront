import React from 'react';
import { Story } from '@storybook/react';
import {
  StoryDocs, StoryDocsH1, StoryDocsH3, StoryDocsDescription
} from '../../storybook';

import CalendarPage, { ICalendarPageMark } from './CalendarPage';

export default {
  title: 'components/withTest/Календарь',
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
      <StoryDocsH1>Календарь (CalendarPage)</StoryDocsH1>
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
    url: 'https://www.figma.com/file/Y86V3oIhkZQ4u27iBuhN0l/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%8B-%D0%92%D0%A2%D0%91-%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D0%BE%D0%B9?node-id=17887%3A198621'
  }
};
