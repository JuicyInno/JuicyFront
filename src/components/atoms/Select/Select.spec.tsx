import { getByText, screen, render, fireEvent, waitFor } from '@testing-library/react';
import React from 'react';
import Select from '.';
import { IOption } from '../../../types';


const list: IOption[] = [];



for (let i = 1; i < 15; i++) {
  list.push({
    value: `${i}`,
    label: `Вариант ${i} `,
    disabled: i % 6 === 0,
  });
}

describe('Test <Select/> component', () => {

  it('should render select', () => {
    const { container } = render(<Select
      options={list}
      values={[list[0]]}
      onChange={() => { }}
      placeholder='Placeholder'
    />)
    expect(container.getElementsByClassName('rf-select').length).toBe(1)
  })
  it('should be render select with value label', () => {
    const { container } = render(<Select
      options={list}
      values={[list[1]]}
      onChange={() => { }}
      placeholder='Placeholder'
    />)
    expect(container.querySelector('input')!.value.trim()).toBe('Вариант 2')
  })
  it('should be render multiselect with 3 selected values', () => {
    const { container } = render(<Select
      options={list}
      values={[list[1], list[2], list[0]]}
      onChange={() => { }}
      placeholder='Placeholder'
      multiselect
    />)
    expect(container.querySelectorAll('.rf-select__tag').length).toBe(3)
  })
});
