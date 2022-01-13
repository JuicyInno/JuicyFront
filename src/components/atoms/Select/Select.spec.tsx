import { getByText, screen, render, fireEvent, waitFor } from '@testing-library/react';
import React from 'react';
import { noop } from 'rxjs';
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
    const { container } = render(
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

    await waitFor(() => {
      expect(screen.getByTestId('rf-dropdown')).toBeInTheDocument();
    });

  })

  it('should be call onChange ', async () => {
    const onChange = jest.fn();
    render(<Select
      options={[{ value: 'v', label: 'label' }]}
      values={[]}
      onChange={onChange}
    />);


    fireEvent.click(screen.getByTestId('rf-select'));

    await waitFor(() => {
      fireEvent.click(screen.getByTestId('rf-select'));
      waitFor(() => {
        fireEvent.click(screen.getByTestId(('rf-select__list-element-1')));
        expect(onChange).toBeCalled();
      });
    });

  })


  it('should be call multiselect ', async () => {
    render(<Select
      options={[{ value: 'v', label: 'label' }]}
      values={[]}
      multiselect
      onChange={noop}
    />);
    fireEvent.click(screen.getByTestId('rf-select'));
    await waitFor(() => {
      fireEvent.click(screen.getByTestId('rf-select'));
      waitFor(() => {
        fireEvent.click(screen.getByTestId(('rf-select__list-element-1')));
        expect(document.getElementsByClassName('rf-select__tags')[0]).toBeInTheDocument()
      });
    });
  })

  /*   it('should be render with placeholder ', async () => {
      const { container } = render(<Select
        options={[{ value: 'v', label: 'label' }]}
        values={[]}
        onChange={noop}
        placeholder='TEST'
      />);
  
      expect(document.getElementById('rf-select__input')!.attributes['placeholder']).toBe('TEST')
  
    }) */

});
