import React from 'react';
import Datepicker from './Datepicker';
import Story from '../../storybook/Story';
import StoryItem from '../../storybook/StoryItem';
import StoryRow from '../../storybook/StoryRow';
import { Button } from '../../../index';
import { IDateVariants } from './DatepickerCalendar/datepicker.types';

export default {
  title: 'forms/не проверено/Datepicker',
  component: Datepicker
};
const log = (res: IDateVariants) => {
  console.log(res);
};

export const datepicker = () => {
  return (
    <Story name='Datepicker' description='Выбор даты.' width={350}>
      <StoryItem subtitle='Default' description='Принимает любой формат: number, string или Date'>
        <StoryRow>
          <Datepicker readOnly/>
        </StoryRow>
      </StoryItem>
      <StoryItem subtitle='Min, max, and disabledWeekDay' description='Позволяет ограничить выбор даты'>
        <StoryRow>
          <Datepicker min={Date.now()} max={Date.now() + 30 * 24 * 3600 * 1000} disableWeekDays={[0, 6]}/>
        </StoryRow>
      </StoryItem>
      <StoryItem subtitle='Может показывать день недели'>
        <StoryRow>
          <Datepicker defaultValue={Date.now()} showDayOfWeek/>
        </StoryRow>
      </StoryItem>
      <StoryItem subtitle='Включает диапазон одним пропсом range'>
        <StoryRow>
          <Datepicker min={Date.now() - 7 * 24 * 3600 * 1000} range showDayOfWeek onChange={log}/>
        </StoryRow>
      </StoryItem>
      <StoryItem subtitle='Кастомная кнопка'>
        <StoryRow>
          <Datepicker defaultValue={Date.now()}>
            <Button> Открыть календарь </Button>
          </Datepicker>
        </StoryRow>
      </StoryItem>
      <StoryItem subtitle='Disabled'>
        <StoryRow>
          <Datepicker disabled defaultValue={Date.now()}/>
        </StoryRow>
      </StoryItem>
    </Story>
  );
};
