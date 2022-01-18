import React, { useRef, useState } from 'react';
import Datepicker from './Datepicker';
import StoryItem from '../../storybook/StoryItem';
import StoryContainer from '../../storybook/Story';
import { IDateVariants } from './DatepickerCalendar/datepicker.types';
import { StoryDocs, StoryDocsH1 } from '../../storybook';
import { Story } from '@storybook/react';
import StoryRow from '../../storybook/StoryRow';
import Button from '../Button';
import Menu from '../Menu';
import { today } from '../../../index';
import Chip from '../Chip';
import { Calendar } from '../../../indexIcon';

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
      <StoryItem subtitle='Может показывать день недели (showDayOfWeek)'>
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
      <StoryItem subtitle='Bubbling'>

        <StoryRow>

          <Datepicker defaultValue={Date.now()} position='top-start'>
            <Chip onClick={() => { }} isBubble icon={<Calendar />} iconPosition={'left'} type='secondary' size='s'>
              Выбрать дату
            </Chip>
          </Datepicker>
        </StoryRow>
      </StoryItem>

    </StoryContainer>
  </StoryDocs>;
};

export const Playground: Story = (args) => {
  const [date, setDate] = useState<number | string>('20.12.2021 - 21.12.2021');

  const onChange = (date: IDateVariants) => {
    setDate(date.timestamp.value);
  };

  return (
    <StoryContainer name='Datepicker' description='Выбор даты.' width={320}>
      <StoryRow>
        <Datepicker defaultValue={date} min={today()} {...args} onChange={onChange} />
      </StoryRow>
    </StoryContainer>
  );
};

export const Test = () => {
  const menuRef = useRef<HTMLDivElement>(null);

  const list = [];

  for (let i = 1; i < 15; i++) {
    list.push({
      value: `${i}`,
      label: `Вариант ${i} Изменяемое значение извне Изменяемое значение извне Изменяемое значение извне`,
      disabled: i % 6 === 0,
    });
  }

  return (
    <div>
      <Menu
        content={<div style={{ padding: '20px' }} ref={menuRef}>{<Datepicker range parentNode={menuRef} />}</div>}
        position='top-start'
      >
        <div>Datepicker</div>
      </Menu>
    </div>
  );
};

Demo.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Tl0AmqQJK4qaCl4pLRio7A/Design-System-for-Story-Book?node-id=4%3A11116',
  },
};
