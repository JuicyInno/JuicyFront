import * as React from 'react'
import { render } from '@testing-library/react'
import StatusPicker, { IPickerProps } from './StatusPicker'

describe('Test <RatePicker/> component', () => {
  it('should be render RatePicker component', () => {
    render(<StatusPicker position={0} pickedValues={[["", "", ""], ["", "", ""], ["", "", ""]]} />)
  })
})