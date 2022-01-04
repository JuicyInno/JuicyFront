import { getByText, screen, render, fireEvent, waitFor } from '@testing-library/react';
import React from 'react';
import { async } from 'rxjs';
import Select from '.';
import { Add, Cross } from '../../..';
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
  it('should be render without correct placeholder', () => {

    const { container } = render(<Select
      options={list}
      values={[list[1], list[2], list[0]]}
      onChange={() => { }}
      placeholder='Placeholder'
      multiselect
    />)
    expect(container.querySelector('input')!.getAttribute('placeholder')).toBe('')
  })

  it('should be render readOnly and diabled', () => {
    const { container } = render(<Select
      options={list}
      values={[list[1], list[2], list[0]]}
      onChange={() => { }}
      placeholder='Placeholder'
      multiselect
      readOnly
      disabled
    />)
    expect(container.querySelector('input')!.getAttributeNames().filter((attr) => attr === 'readonly' || attr === 'disabled')).toEqual(["disabled", "readonly"] || ["readonly", "disabled"])
  })


  it('should be render with 3 max selected values', async () => {
    render(<Select
      options={list}
      values={[list[1], list[2], list[3]]}
      onChange={() => { }}
      placeholder='Placeholder'
      multiselect
      maxOptions={3}
    />)

    const button = screen.getByTestId('rf-select__chevron');
    fireEvent.click(button)
    await waitFor(() => {
      expect(document.querySelectorAll('.rf-select__list-element--active').length).toBe(3)
    })

    fireEvent.click(button)
    await waitFor(async () => {
      const checkbox = document.getElementById('rf-select__input')
      fireEvent.click(checkbox!)
      await waitFor(() => {
        expect(document.querySelectorAll('.rf-select__list-element--active').length).toBe(3)
      })
    })
  })

  it('should be clear value after chosen', async () => {
    render(<Select
      options={list}
      values={[list[0]]}
      onChange={() => { }}
      placeholder='Placeholder'
      clearOnSelect={true}

    />)
    const button = document.getElementById('rf-select__input')!
    fireEvent.click(button)
    await waitFor(async () => {
      const checkbox = document.getElementById('rf-select__input')
      fireEvent.click(checkbox!)
      await waitFor(() => {
        expect((document.getElementById('rf-select__input') as HTMLInputElement)!.value).toBe('')
      })
    })
  })

  it('should be render in invalid status', () => {
    render(<Select
      options={list}
      values={[list[0]]}
      onChange={() => { }}
      placeholder='Placeholder'
      invalid
    />)
    expect(document.getElementsByClassName('rf-select__wrapper--invalid')!.length).toBe(1)
  });

  it('should be render in right dropdown position', async () => {
    render(<Select
      options={list}
      values={[list[0]]}
      onChange={() => { }}
      placeholder='Placeholder'
      position='left'
    />)
    const button = document.getElementById('rf-select__input')!
    fireEvent.click(button);
    await waitFor(() => {
      expect(document.getElementsByClassName('rf-dropdown__content')[0]!.getAttributeNode('style')!.value).toBe('position: absolute; left: 0px; top: 0px;')
    })
  })

  it('should be render in with startAdornment and endAdornment', async () => {
    render(<Select
      options={list}
      values={[list[0]]}
      onChange={() => { }}
      placeholder='Placeholder'
      startAdornment={<Cross />}
      endAdornment={<Add />}
    />)

    expect(document.getElementsByClassName('rf-select__button__icon--end')!.length).toBe(1);
    expect(document.getElementsByClassName('rf-select__button__icon')!.length).toBe(1)
  })
});
