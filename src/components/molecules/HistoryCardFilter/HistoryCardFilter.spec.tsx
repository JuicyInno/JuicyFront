import React from 'react';
import HistoryCardFilter from './HistoryCardFilter'
import { render } from '@testing-library/react';

describe('HistoryCardFilter default render', () => {

  it('should be render error screen with default Error text', () => {
    const { container } = render(<HistoryCardFilter />)
    expect(container.querySelectorAll('.card-filter__datepicker').length).toBe(1);
    expect(container.querySelectorAll('.card-filter__status-picker').length).toBe(1)
    expect(container.querySelectorAll('.card-filter__search').length).toBe(1)
  })
})