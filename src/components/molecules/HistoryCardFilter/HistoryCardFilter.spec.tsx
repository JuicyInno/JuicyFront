import React from 'react';
import HistoryCardFilter from './HistoryCardFilter'
import { render } from '@testing-library/react';
import { IOption } from '../../../types';

describe('HistoryCardFilter default render', () => {
  it('should be render error screen with default Error text', () => {
    const { container } = render(<HistoryCardFilter />)
    expect(container.querySelectorAll('.card-filter__datepicker').length).toBe(1);
    expect(container.querySelectorAll('.card-filter__status-picker').length).toBe(1)
    expect(container.querySelectorAll('.card-filter__search').length).toBe(1)
  });
  it('should be without datePicker', () => {
    const { container } = render(<HistoryCardFilter isShowDatePicker={false} />)
    expect(container.querySelectorAll('.card-filter__datepicker').length).toBe(0)
  })
  it('should be without statusFilter', () => {
    const { container } = render(<HistoryCardFilter isShowStatusFilter={false} />)
    expect(container.querySelectorAll('.card-filter__status-picker').length).toBe(0)
  })
  it('should be without showSearch', () => {
    const { container } = render(<HistoryCardFilter isShowSearch={false} />)
    expect(container.querySelectorAll('.card-filter__search').length).toBe(0)
  })

  it('should be with default statusOptions and initialValues', () => {
    const testOptions: IOption[] = [{ label: 'test', value: 'f' }, { label: 'test2', value: 'f2' }]
    const { container } = render(<HistoryCardFilter initialValues={{}} statusOptions={testOptions} />)
    const testOpt = container.getElementsByClassName('card-filter__status-picker')
    expect(testOpt.length).toBe(1)
  })

})