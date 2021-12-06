import React from 'react';
import Datepicker from './Datepicker';
import StoryItem from '../../storybook/StoryItem';
import StoryContainer from '../../storybook/Story';
import { IDateVariants } from './DatepickerCalendar/datepicker.types';
import { StoryDocs, StoryDocsH1 } from '../../storybook';
import { Story } from '@storybook/react';
import StoryRow from '../../storybook/StoryRow';
import Button from '../Button';

export default {
  title: 'forms/withTest/Datepicker',
  component: Datepicker
};
const log = (res: IDateVariants) => {
  console.log(res);
};

export const Demo = () => {
  return <StoryDocs >
    <StoryDocsH1>Date Picker</StoryDocsH1>
    <StoryContainer width={600}>
      <StoryItem subtitle='Default' description='Принимает любой формат: number, string или Date'>
        <StoryRow>
          <Datepicker readOnly />
        </StoryRow>
      </StoryItem>
      <StoryItem subtitle='Min, max, and disabledWeekDay' description='Позволяет ограничить выбор даты'>
        <StoryRow>
          <Datepicker min={Date.now()} max={Date.now() + 30 * 24 * 3600 * 1000} disableWeekDays={[0, 6]} />
        </StoryRow>
      </StoryItem>
      <StoryItem subtitle='Может показывать день недели'>
        <StoryRow>
          <Datepicker defaultValue={Date.now()} showDayOfWeek />
        </StoryRow>
      </StoryItem>
      <StoryItem subtitle='Включает диапазон одним пропсом range'>
        <StoryRow>
          <Datepicker min={Date.now() - 7 * 24 * 3600 * 1000} range showDayOfWeek onChange={log} />
        </StoryRow>
      </StoryItem>
      <StoryItem subtitle='Кастомная кнопка'>
        <StoryRow>
          <Datepicker defaultValue={Date.now()} position='bottom-start'>
            <Button> Открыть календарь </Button>
          </Datepicker>
        </StoryRow>
      </StoryItem>
      <StoryItem subtitle='Disabled'>
        <StoryRow>
          <Datepicker disabled defaultValue={Date.now()} />
        </StoryRow>
      </StoryItem>
    </StoryContainer>
  </StoryDocs>;
};

export const Playground: Story = () => {
  return (
    <StoryContainer name='Datepicker' description='Выбор даты.' width={280}>
      <StoryRow>
        <Datepicker readOnly position='bottom-start' />
      </StoryRow>
    </StoryContainer>
  );
};

Demo.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Tl0AmqQJK4qaCl4pLRio7A/Design-System-for-Story-Book?node-id=4%3A11116',
  },
};
