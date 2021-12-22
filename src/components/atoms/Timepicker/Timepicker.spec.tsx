import * as React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import Timepicker from './Timepicker';

describe('Test <Timepicker /> component', () => {
  it('should be render Timepicker component', () => {
    const { container } = render(<Timepicker />);

    expect(screen.getByTestId('rf-timepicker__input')).toHaveValue('__:__');
    expect(container.getElementsByClassName('rf-timepicker--empty')).toHaveLength(1);
    expect(container.getElementsByClassName('rf-timepicker__wrapper')).toHaveLength(1);
    expect(container.getElementsByClassName('rf-timepicker__icon-time')).toHaveLength(1);
    expect(container.getElementsByClassName('rf-input--invalid')).toHaveLength(0);
  });

  it('should be have initialValue = 12:00', () => {
    const { container } = render(<Timepicker initialValue='12:00' />);

    expect(screen.getByTestId('rf-timepicker__input')).toHaveValue('12:00');
    expect(container.getElementsByClassName('rf-timepicker--empty')).toHaveLength(0);
    expect(container.getElementsByClassName('rf-timepicker__icon-time')).toHaveLength(0);
    expect(container.getElementsByClassName('rf-timepicker__icon-close')).toHaveLength(1);
  });

  it('should be have className = class-name', () => {
    const { container } = render(<Timepicker className='class-name' />);

    expect(container.getElementsByClassName('class-name')).toHaveLength(1);
  });

  it('should be have min = 11:00', async () => {
    render(<Timepicker min='11:00' />);

    fireEvent.click(screen.getByTestId('rf-timepicker__input'));

    await waitFor(() => {
      expect(screen.queryByText('10:00')).toBeDisabled();
      expect(screen.queryByText('11:00')).not.toBeDisabled();
    });
  });

  it('should be have max = 14:00', async () => {
    render(<Timepicker max='14:00' />);

    fireEvent.click(screen.getByTestId('rf-timepicker__input'));

    await waitFor(() => {
      expect(screen.queryByText('15:00')).toBeDisabled();
      expect(screen.queryByText('14:00')).not.toBeDisabled();
    });
  });

  it('should be invalid', async () => {
    const { container } = render(<Timepicker invalid />);

    expect(container.getElementsByClassName('rf-input--invalid')).toHaveLength(1);
  });

  it('should be disabled', async () => {
    const { container } = render(<Timepicker disabled />);

    expect(container.getElementsByClassName('rf-timepicker--disabled')).toHaveLength(1);
    fireEvent.click(container.getElementsByClassName('rf-timepicker--disabled')[0]);

    await waitFor(() => {
      expect(document.getElementsByClassName('rf-time-element__wrapper').length).toBe(0)
    });
  });

  it('should be call onChangeValue', async () => {
    const onChangeValue = jest.fn();
    render(<Timepicker onChangeValue={onChangeValue} />);

    fireEvent.change(screen.getByTestId('rf-timepicker__input'), { target: { value: '11:00' } });
    expect(screen.getByTestId('rf-timepicker__input')).toHaveValue('11:00');
    expect(onChangeValue).toBeCalled();
  });

  it('should be clear value after clear', async () => {
    const { container } = render(<Timepicker initialValue='11:00' />);

    expect(container.getElementsByClassName('rf-timepicker__icon-time')).toHaveLength(0);
    expect(container.getElementsByClassName('rf-timepicker__icon-close')).toHaveLength(1);

    fireEvent.click(container.getElementsByClassName('rf-timepicker__icon-close')[0]);

    await waitFor(() => {
      expect(screen.getByTestId('rf-timepicker__input')).toHaveValue('__:__');

      expect(container.getElementsByClassName('rf-timepicker__icon-time')).toHaveLength(1);
      expect(container.getElementsByClassName('rf-timepicker__icon-close')).toHaveLength(0);
    });
  });

  it('should be use mask', async () => {
    const { container } = render(<Timepicker />);

    fireEvent.change(screen.getByTestId('rf-timepicker__input'), { target: { value: '29:00' } });
    expect(screen.getByTestId('rf-timepicker__input')).toHaveValue('20:0_');

    fireEvent.click(container.getElementsByClassName('rf-timepicker__icon-close')[0]);

    fireEvent.change(screen.getByTestId('rf-timepicker__input'), { target: { value: '15:99' } });

    await waitFor(() => {
      expect(screen.getByTestId('rf-timepicker__input')).toHaveValue('15:__');
    });

    fireEvent.click(container.getElementsByClassName('rf-timepicker__icon-close')[0]);

    fireEvent.change(screen.getByTestId('rf-timepicker__input'), { target: { value: '99:90000' } });

    await waitFor(() => {
      expect(screen.getByTestId('rf-timepicker__input')).toHaveValue('00:00');
    });
  });

  it('should be show time select when hours introduced', async () => {
    const { container } = render(<Timepicker />);

    fireEvent.click(screen.getByTestId('rf-timepicker__input'));
    fireEvent.change(screen.getByTestId('rf-timepicker__input'), { target: { value: '12' } });

    await waitFor(() => {
      expect(screen.getByTestId('rf-time-element')).toHaveClass('element__translate--active');
    });

    fireEvent.click(container.getElementsByClassName('rf-timepicker__icon-close')[0]);

    fireEvent.click(screen.getByTestId('rf-timepicker__input'));
    fireEvent.change(screen.getByTestId('rf-timepicker__input'), { target: { value: '1' } });

    await waitFor(() => {
      expect(screen.getByTestId('rf-time-element')).not.toHaveClass('element__translate--active');
    });
  });
});
