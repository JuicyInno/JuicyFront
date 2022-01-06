import React, { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import Dropdown, { IDropdownProps } from './Dropdown';

const getMockDropdown = (props?: Partial<IDropdownProps>) => {
  const toggleRef = createRef<HTMLElement>();

  return render(
    <div>
      <div data-testid='click-outside-btn'>click outside</div>
      <Dropdown show toggleRef={toggleRef} onClose={jest.fn} {...props}>
        <div>children</div>
      </Dropdown>
    </div>
  );
};

describe('Test <Dropdown /> component', () => {
  it('should be render', () => {
    getMockDropdown();

    expect(screen.getByText('children')).toBeInTheDocument();
  });

  it('should be pass show', () => {
    getMockDropdown({ show: false });

    expect(screen.queryByTestId('rf-dropdown')).not.toBeInTheDocument();
  });

  it('should be pass style', () => {
    getMockDropdown({ style: { marginBottom: '10px' } });

    expect(screen.getByTestId('rf-dropdown')).toHaveStyle({ marginBottom: '10px' });
  });
});
