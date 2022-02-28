import * as React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import StatusPicker, { IPickerProps } from './StatusPicker'

describe('Test <StatusPicker/> component', () => {
  it('should render component', () => {
    render(<StatusPicker position={0} pickedValues={[["", "", ""], ["", "", ""], ["", "", ""]]} />)
  })

  it('should change value', () => {
    const pv = [["", "", ""], ["", "", ""], ["", "", ""]]
    let pickedStatus = 0;
    let pickedPosition = 0;
    const onChange = jest.fn();

    const onChangeHandler = (val: number, arr: Array<Array<string>>, pos: number) => {
      pickedStatus = val;
      pickedPosition = pos;
      onChange();

    }
    render(<StatusPicker getRate={onChangeHandler} position={0} pickedValues={pv} />)

    fireEvent.click(screen.getByTestId('10'))
    expect(onChange).toBeCalled();
    expect(pickedStatus).toBe(1)
    expect(pickedPosition).toBe(0)
  })
})