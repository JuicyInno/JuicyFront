import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { Microphone } from '../../../index';
import Search from './Search';

describe('Test <Search/> component', () => {
  it('should render component', () => {
    const { container } = render(<Search />);

    expect(container.getElementsByClassName('rf-search__input')).toHaveLength(1);
  });

  it('should render component with isShowClear ', () => {
    const { container } = render(<Search isShowClear value="test" />);

    expect(container.getElementsByClassName('rf-search__close-icon')).toHaveLength(1);
  });

  it('should render component with endAdornment ', () => {
    const { container } = render(<Search endAdornment={<Microphone className="test-classname" />} />);

    expect(container.getElementsByClassName('test-classname')).toHaveLength(1);
  });
});
