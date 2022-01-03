import StoryItem from '../../storybook/StoryItem';
import StoryContainer from '../../storybook/Story';
import React from 'react';

import { withDesign } from 'storybook-addon-designs';
import HistoryCardFilter, { IHistoryCardFilterProps, IHistoryCardValues } from './HistoryCardFilter';
import { IOption } from '../../../types';
import { Button } from '../../..';


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

const buttonComponent = <Button buttonType='primary' onClick={() => {
  alert('CLICK');
}} >Создать</Button >;


const Demo = () => {
  <StoryContainer name='Fatal Error' description='Стандартный фильтр для истории'>
    <StoryItem>
      <HistoryCardFilter onChange={(result) => {
        console.warn('Значении изменились: ', result);
      }} />
    </StoryItem>
  </StoryContainer>;
};

export const Playground = (props: IHistoryCardFilterProps) => {

  const values = {
    ...data,
    ...props
  };
  return <StoryContainer name='HistoryCardFilter' description='Стандартный фильтр для истории'>
    <StoryItem>
      <HistoryCardFilter endAdornment={buttonComponent} {...values} onChange={(result) => {
        console.warn('Значени изменились: ', result);
      }} />
    </StoryItem>
  </StoryContainer>;
};

Demo.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Tl0AmqQJK4qaCl4pLRio7A/Design-System-for-Story-Book?node-id=18%3A18191'
  },
};
