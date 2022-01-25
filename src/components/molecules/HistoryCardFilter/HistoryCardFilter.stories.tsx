import StoryItem from '../../storybook/StoryItem';
import StoryContainer from '../../storybook/Story';
import React from 'react';

import { withDesign } from 'storybook-addon-designs';
import HistoryCardFilter, { IHistoryCardFilterProps, IHistoryCardValues } from './HistoryCardFilter';
import { IOption } from '../../../types';
import {
  StoryDocs,
  StoryDocsDescription, StoryDocsH1, StoryDocsH2
} from '../../storybook';
import { Story } from '@storybook/react';


const opt: IOption[] = [
  {
    value: 'END',
    label: 'Завершено'
  },
  {
    value: 'DRAFT',
    label: 'Черновик'
  },
  {
    value: 'IN_PROGRESS',
    label: 'На согласовании'
  }
];

const data: IHistoryCardFilterProps = {
  statusOptions: opt,
  initialValues: {},
  onChange: (values: IHistoryCardValues) => {
    console.warn(values);
  }
};

export default {
  title: 'components/withTest/HistoryCardFilter',
  component: HistoryCardFilter,
  typeArgs: {
    isShowDatePicker: { type: 'boolean' },
    isShowStatusFilter: { type: 'boolean' },
    isShowSearch: { type: 'boolean' }

  },
  decorators: [withDesign],
};


export const Demo: Story = () => {
  return (
    <StoryContainer name='Fatal Error' description='Стандартный фильтр для истории'>
      <StoryDocsH1>History Card Filter</StoryDocsH1>
      <StoryDocsH2>Компонент фильтров</StoryDocsH2>
      <StoryDocsDescription>Отображение комопнента фильров для сортировки и фильтрации</StoryDocsDescription>
      <StoryItem>
        <HistoryCardFilter onChange={(result) => {
          console.warn('Значении изменились: ', result);
        }} />
      </StoryItem>
    </StoryContainer>
  );
};

Demo.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Tl0AmqQJK4qaCl4pLRio7A/Design-System-for-Story-Book?node-id=18%3A18191'
  },
  actions: { disabled: true },
  controls: { disabled: true }
};


export const Playground: Story = (props: IHistoryCardFilterProps) => {

  const values = {
    ...data,
    ...props
  };
  return (
    <StoryContainer name='HistoryCardFilter' description='Стандартный фильтр для истории'>
      <StoryDocs>
        <HistoryCardFilter {...values} onChange={(result) => {
          console.warn('Значени изменились: ', result);
        }} />
      </StoryDocs>
    </StoryContainer>);
};
