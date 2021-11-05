import Story from '../../storybook/Story';
import StoryItem from '../../storybook/StoryItem';
import React from 'react';
import HistoryCardFilter, { IHistoryCardFilterProps, IHistoryCardValues } from './HistoryCardFilter';
import { IOption } from '../../../types';


const opt: IOption[] = [
  {
    value: 'END',
    label: 'Завершено'
  },
  {
    value: 'DRAFT',
    label: 'ЧерновиK'
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
  title: 'components/не проверено/HistoryCardFilter',
  component: HistoryCardFilter,
  typeArgs: {
    isShowDatePicker: { type: 'boolean' },
    isShowStatusFilter: { type: 'boolean' },
    isShowSearch: { type: 'boolean' }

  }
};
export const historyCardFilter = (props: IHistoryCardFilterProps) => {

  const values = {
    ...data,
    ...props
  };
  return <Story name='HistoryCardFilter' description='Стандартный фильтр для истории'>
    <StoryItem>
      <HistoryCardFilter {...values} onChange={(result) => {
        console.warn('Значени изменились: ', result);
      }} />
    </StoryItem>
  </Story>;
};
