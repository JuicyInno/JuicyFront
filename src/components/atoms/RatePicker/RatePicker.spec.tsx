import * as React from 'react'
import { fireEvent, render } from '@testing-library/react'
import RatePicker from './RatePicker'

describe('Test <RatePicker/> component', () => {
  it('should be render RatePicker component', () => {
    render(<RatePicker />)
  })

  it('should be render with 0 picked class names', () => {
    const { container } = render(<RatePicker />);
    expect(container.getElementsByClassName('rate-picked-primary')).toHaveLength(0);
  })

  it('should be render with 7 picked class names', () => {
    const { container } = render(<RatePicker sizePicker={10} defaultPickedValue={7} />);
    expect(container.getElementsByClassName('rate-picker__label_picked_primary')).toHaveLength(7);
  })

  it('should be render unactive with default 1', () => {
    const { container } = render(<RatePicker isActive={false} defaultPickedValue={1} />);
    expect(container.getElementsByClassName('rate-picker__label_picked_tertiary')).toHaveLength(1);
  })
  it('should be render active withd default 1', () => {
    const { container } = render(<RatePicker defaultPickedValue={1} />);
    expect(container.getElementsByClassName('rate-picker__label_picked_primary')).toHaveLength(1);
  })
  it('should be render star picker', () => {
    const { container } = render(<RatePicker isStarPicker={true} />);
    expect(container.getElementsByClassName('star-picker')).toBeTruthy;
  })
  it('should be call change event', () => {
    const getRateEvent = jest.fn()
    const { container } = render(<RatePicker getRate={getRateEvent} isStarPicker={true} />);
    fireEvent.click(container.getElementsByClassName('star-picker')[0]);
    expect(getRateEvent).toBeCalled();
  })

  it('should be abort rating after click StarPicker', () => {
    let rating = 0
    const { container } = render(<RatePicker getRate={(val) => { rating = +val }} isStarPicker />);
    expect(rating).toBe(0);
    fireEvent.click(container.getElementsByClassName('star-picker')[0]);
    expect(rating).toBe(1);
    fireEvent.click(container.getElementsByClassName('star-picker')[0]);
    expect(rating).toBe(0);

  })
  it('should be abort rating after click RatePicker', () => {
    let rating = 0
    const { container } = render(<RatePicker getRate={(val) => { rating = +val }} />);
    expect(rating).toBe(0);
    fireEvent.click(container.getElementsByClassName('rate-picker__label')[0]);
    expect(rating).toBe(1);
    fireEvent.click(container.getElementsByClassName('rate-picker__label')[0]);
    expect(rating).toBe(0);

  })
})
