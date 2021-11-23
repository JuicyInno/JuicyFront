import React from 'react';
import Datepicker from './Datepicker';
import { render } from '@testing-library/react';

describe('Test <Datepicker/> component', () => {
  it('should be render with default placeholder', () => {
    const { container } = render(<Datepicker readOnly />);
    const placeholder = container.getAttribute('placeholder');
    expect(placeholder === 'Выберите дату');
  })
  it('should be disabled', () => {
    const { container } = render(<Datepicker disabled />);
    const disabled = container.getElementsByClassName('rf-datepicker__input-wrapper--disabled');
    expect(disabled.length).toBe(1);
  })
  /*   it('should be render with white tooltip', () => {
      const { container } = render(<Datepicker toolTipBackground={'white'} />);
      const toolTip = container.getElementsByClassName(`rf-tooltip rf-tooltip--white`);
      expect(toolTip.length).toBe(1);
    })
    it('should be render with default tooltip', () => {
      const { container } = render(<Datepicker toolTipBackground='default' />);
      const toolTip = container.getElementsByClassName(`rf-tooltip rf-tooltip--default`);
      expect(toolTip.length).toBe(1);
    }) */
})