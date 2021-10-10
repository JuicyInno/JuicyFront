import * as React from 'react'
import { render } from '@testing-library/react'
import RatePicker from './RatePicker'

describe('Test <RatePicker/> component', () => {
  it('should be render RatePicker component', () => {
    render(<RatePicker />)
  })

  it('should be render with underline class name', () => {
    const { container } = render(<RatePicker isUnderline={true} />);
    expect(container.getElementsByClassName('rate-picker')).toHaveLength(1);
  })

  it('should be render with 0 picked class names', () => {
    const { container } = render(<RatePicker />);
    expect(container.getElementsByClassName('rate-picked-primary')).toHaveLength(0);
  })

  it('should be render with 7 picked class names', () => {
    const { container } = render(<RatePicker defaultPickedValue={7} />);
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
})
