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
  title: 'components/withTest/Schedule',
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
      <StoryDocsH1>Schedule (Расписание)</StoryDocsH1>
      <StoryDocsDescription>
        Расписание / график работы сотрудника.
      </StoryDocsDescription>
      <div style={{ alignSelf: 'flex-start' }}>
        <Schedule defaultYear={2021} defaultMonth={8} marks={MARKS}>
          <ScheduleLegend>
            <ScheduleLegendItem variant='default'>Отпуск</ScheduleLegendItem>
            <ScheduleLegendItem variant='yellow'>Командировка</ScheduleLegendItem>
            <ScheduleLegendItem variant='red'>Больничный</ScheduleLegendItem>
            <ScheduleLegendItem variant='magenta'>Прочие отсутствия</ScheduleLegendItem>
          </ScheduleLegend>
        </Schedule>
      </div>
    </StoryDocs>
  );
};

Demo.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Tl0AmqQJK4qaCl4pLRio7A/Design-System-for-Story-Book?node-id=18%3A22864'
  }
};
