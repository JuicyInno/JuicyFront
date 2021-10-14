import React from 'react';
import { Story } from '@storybook/react';
import {
  StoryDocs, StoryDocsH1, StoryDocsDescription
} from '../../storybook';

import Schedule from './Schedule';
import ScheduleLegend from './ScheduleLegend';
import ScheduleLegendItem from './ScheduleLegendItem';

import { ICalendarPageMark } from '../../atoms/CalendarPage';

export default {
  title: 'Molecules/withTest/Расписание',
  component: Schedule
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
    from: new Date(2021, 8, 16),
    to: new Date(2021, 8, 20),
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
    to: new Date(2021, 9, 10),
    variant: 'default'
  }
];

export const Demo: Story = () => {
  return (
    <StoryDocs>
      <StoryDocsH1>Расписание (Schedule)</StoryDocsH1>
      <StoryDocsDescription>
        Расписание / график работы сотрудника.
      </StoryDocsDescription>

      <Schedule defaultYear={2021} defaultMonth={8} marks={MARKS}>
        <ScheduleLegend>
          <ScheduleLegendItem color='default'>Отпуск</ScheduleLegendItem>
          <ScheduleLegendItem color='yellow'>Командировка</ScheduleLegendItem>
          <ScheduleLegendItem color='red'>Больничный</ScheduleLegendItem>
          <ScheduleLegendItem color='magenta'>Прочие отсутствия</ScheduleLegendItem>
        </ScheduleLegend>
      </Schedule>
    </StoryDocs>
  );
};

Demo.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Y86V3oIhkZQ4u27iBuhN0l/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%8B-%D0%92%D0%A2%D0%91-%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D0%BE%D0%B9?node-id=17887%3A198621'
  }
};
