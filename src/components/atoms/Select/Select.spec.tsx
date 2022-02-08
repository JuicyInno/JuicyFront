import { screen, render, fireEvent, waitFor } from '@testing-library/react';
import React from 'react';
import { noop } from 'rxjs';
import { AllCalendar, AllClose } from '../../../indexIcon';
import { IOption } from '../../../types';
import Select from './Select';

describe('Test <Select/> component', () => {
  it('should be render', async () => {
    const { container } = render(
      <Select placeholder='Выберите значение' options={[{ value: 'v', label: 'label' }]} values={[]} onChange={jest.fn} />
    );

    expect(container.getElementsByClassName('rf-select__button')).toHaveLength(1);
    expect(container.getElementsByClassName('rf-select__wrapper--disabled')).toHaveLength(0);
    expect(screen.queryByTestId('rf-dropdown')).not.toBeInTheDocument();

    fireEvent.click(screen.getByTestId('rf-select'));

    await waitFor(() => {
      expect(screen.getByTestId('rf-dropdown')).toBeInTheDocument();
    });
  });

  it('should be disabled', async () => {
    const { container } = render(
      <Select placeholder='Выберите значение' options={[{ value: 'v', label: 'label' }]} values={[]} onChange={jest.fn} disabled />
    );

    expect(container.getElementsByClassName('rf-select__wrapper--disabled')).toHaveLength(1);
    expect(screen.queryByTestId('rf-dropdown')).not.toBeInTheDocument();

    fireEvent.click(screen.getByTestId('rf-select'));

    await waitFor(() => {
      expect(screen.queryByTestId('rf-dropdown')).not.toBeInTheDocument();
    });
  });

  it('should close dropdown on chevron click', async () => {
    render(
      <Select options={[{ value: 'v', label: 'label' }]} values={[]} onChange={jest.fn} />
    );

    fireEvent.click(screen.getByTestId('rf-select__chevron'));

    await waitFor(() => {
      expect(screen.getByTestId('rf-dropdown')).toBeInTheDocument();
    });

    fireEvent.click(screen.getByTestId('rf-select__chevron'));

    await waitFor(() => {
      expect(screen.queryByTestId('rf-dropdown')).not.toBeInTheDocument();
    });
  });

  it('should open dropdown after disabled props change', async () => {
    const { container, rerender } = render(
      <Select options={[{ value: 'v', label: 'label' }]} values={[]} disabled={true} onChange={jest.fn} />
    );

    rerender(<Select options={[{ value: 'v', label: 'label' }]} values={[]} disabled={false} onChange={jest.fn} />)
    fireEvent.click(screen.getByTestId('rf-select'));
    expect(screen.getByTestId('rf-dropdown')).toBeInTheDocument();
  })

  it('should be call onChange ', () => {
    const onChange = jest.fn();
    render(<Select
      options={[{ value: '1', label: 'label1' }]}
      values={[]}
      multiselect
      onChange={onChange}
    />);


    fireEvent.click(screen.getByTestId('rf-select'));
    fireEvent.click(screen.getByLabelText('label1'));
    expect(onChange).toBeCalled();
  })


  it('should be call multiselect ', async () => {
    render(<Select
      options={[{ value: '1', label: 'label1' }]}
      values={[]}
      multiselect
      onChange={noop}
    />);

    fireEvent.click(screen.getByTestId('rf-select'));
    fireEvent.click(screen.getByLabelText('label1'));
    expect(document.getElementsByClassName('rf-select__tags')[0]).toBeInTheDocument()
  });

  it('should be render with placeholder ', () => {
    render(<Select
      options={[{ value: 'v', label: 'label' }]}
      values={[]}
      onChange={noop}
      placeholder='TEST'
    />);
    expect(document.getElementById('rf-select__input')!.getAttribute('placeholder')).toBe('TEST')

  })
  it('should be readOnly ', () => {
    render(<Select
      options={[{ value: 'v', label: 'label' }]}
      values={[]}
      onChange={noop}
      placeholder='TEST'
      readOnly
    />);
    expect(document.getElementById('rf-select__input')!.hasAttribute('readonly')).toBeTruthy()
  })

  it('should be render with 2 max selected options', () => {
    render(<Select
      options={[
        { value: '1', label: 'label1' },
        { value: '2', label: 'label2' },
        { value: '3', label: 'label3' },
        { value: '4', label: 'label4' },
        { value: '5', label: 'label5' }]}
      values={[]}
      onChange={noop}
      multiselect
      maxOptions={2}
    />);
    fireEvent.click(screen.getByTestId('rf-select'));
    fireEvent.click(screen.getByLabelText('label1'));
    fireEvent.click(screen.getByLabelText('label2'));
    fireEvent.click(screen.getByLabelText('label3'));
    fireEvent.click(screen.getByLabelText('label4'));
    expect(document.getElementsByClassName('rf-select__list-element--active').length).toBe(2)
  });
  it('should be render with preloader', () => {
    render(<Select
      options={[
        { value: '1', label: 'label1' },
        { value: '2', label: 'label2' },
        { value: '3', label: 'label3' },
        { value: '4', label: 'label4' },
        { value: '5', label: 'label5' }]}
      values={[]}
      onChange={noop}
      multiselect
      maxOptions={2}
      preloader
    />);
    fireEvent.click(screen.getByTestId('rf-select'));
    expect(document.getElementsByClassName('rf-select__preloader').length).toBeTruthy()
  })
  it('should be clear select after chosen', () => {
    render(<Select
      options={[
        { value: '1', label: 'label1' },
        { value: '2', label: 'label2' },
        { value: '3', label: 'label3' },
        { value: '4', label: 'label4' },
        { value: '5', label: 'label5' }]}
      values={[]}
      onChange={noop}
      multiselect
      maxOptions={2}
      clearOnSelect
    />);
    fireEvent.click(screen.getByTestId('rf-select'));
    fireEvent.click(screen.getByLabelText('label1'));
    expect(document.getElementById('rf-select__input')!.getAttribute('value')).toBeFalsy()
  })
  it('should be invalid', () => {
    render(<Select
      options={[
        { value: '1', label: 'label1' },
        { value: '2', label: 'label2' },
        { value: '3', label: 'label3' },
        { value: '4', label: 'label4' },
        { value: '5', label: 'label5' }]}
      values={[]}
      onChange={noop}
      multiselect
      maxOptions={2}
      clearOnSelect
    />);
    fireEvent.click(screen.getByTestId('rf-select'));
    fireEvent.click(screen.getByLabelText('label1'));
    expect(document.getElementsByClassName('rf-select__wrapper--invalid')).toBeTruthy()
  });

  it('should be scroll dropdown', () => {
    const onScroll = jest.fn();
    render(<Select
      options={[
        { value: '1', label: 'label1' },
        { value: '2', label: 'label2' },
        { value: '3', label: 'label3' },
        { value: '4', label: 'label4' },
        { value: '5', label: 'label5' }]}
      values={[]}
      onChange={noop}
      onScroll={onScroll}
      multiselect
      maxOptions={2}
      clearOnSelect
    />);
    fireEvent.click(screen.getByTestId('rf-select'));
    fireEvent.scroll(screen.getByTestId('rf-select-list-scroll'));
    expect(onScroll).toBeCalled();
  });
  it('should be render withadditional icons dropdown', () => {
    render(<Select
      options={[
        { value: '1', label: 'label1' },
      ]}
      values={[]}
      onChange={noop}
      startAdornment={<AllCalendar />}
      endAdornment={<AllClose />}
    />);
    fireEvent.click(screen.getByTestId('rf-select'));
    expect(document.getElementsByClassName('rf-select__button__icon')).toBeTruthy()
    expect(document.getElementsByClassName('rf-select__button__icon-end')).toBeTruthy()
  });

  it('should be change value after async delay', async () => {

    let values: IOption[] = []

    const { container, rerender } = render(<Select
      options={[
        { value: '1', label: 'label1' },
      ]}
      values={values}
      onChange={noop}
    />);
    expect(container.getElementsByClassName('rf-select__input')[0].getAttribute('value')).toBeFalsy();

    await waitFor(() => values = [
      {
        value: 'test',
        label: 'test'
      }
    ], {
      timeout: 0
    })

    rerender(<Select
      options={[
        { value: '1', label: 'label1' },
      ]}
      values={values}
      onChange={noop}
    />);
    expect(container.getElementsByClassName('rf-select__input')[0].getAttribute('value')).toBeTruthy();
  });

  it('should be render with gray background', () => {
    render(<Select
      options={[
        { value: '1', label: 'label1' },
      ]}
      values={[]}
      backgroundColor='gray'
      onChange={noop}
    />);

    expect(document.getElementsByClassName('rf-select__background-gray').length).toBe(1)
  });
  it('should be render as menu variant', () => {
    render(<Select
      options={[
        { value: '1', label: 'label1' },
      ]}
      variant='menu'
      values={[]}
      onChange={noop}
    />);

    expect(document.getElementsByClassName('rf-select__wrapper--menu').length).toBe(1)
  });
});
