import React, { useState } from 'react';
import { render } from '@testing-library/react';

import Toast from "../../atoms/Toast/Toast";

describe('Toast default render', () => {
  it('should be render ', () => {
    render(
      <>
        <Toast
          duration={10000}
          isVisible={true}
          setVisibility={() => { }} >
          <p>Text notification</p>
        </Toast>
      </>
    )
    expect(document.getElementsByClassName('visible').length).toBe(1)
  });
  it('shouldnt be render ', () => {
    render(
      <>
        <Toast
          duration={10000}
          isVisible={false}
          setVisibility={() => { }} >
          <p>Text notification</p>
        </Toast>
      </>
    )
    expect(document.getElementsByClassName('not-visible').length).toBe(1)
  });

})