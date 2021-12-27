import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { FindEntitiesUser } from './FindEntitiesUser';
import { usersMocks } from './users.mocks';

describe('Test <FindEntitiesUser /> component',  () => {
  it('should call onChange', () => {
    const onChange = jest.fn();
    const { container} = render(<FindEntitiesUser user={usersMocks[0]} isSelected onChange={onChange} />);
    fireEvent.click(container.querySelector('input[type="checkbox"]') as Element);
    expect(onChange).toBeCalled();
  });

  it('should disable checkbox', () => {
    const onChange = jest.fn();
    const { container} = render(<FindEntitiesUser user={usersMocks[0]} isSelected onChange={onChange} disabled />);
    expect(container.querySelector('input[type="checkbox"]')).toBeDisabled();
  });
});
