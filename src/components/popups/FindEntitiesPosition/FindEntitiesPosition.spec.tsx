import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { FindEntitiesPosition } from './FindEntitiesPosition';
import { positionsMocks} from './positions.mocks';

describe('Test <FindEntitiesPosition /> component',  () => {
  it('should call onChange', () => {
    const onChange = jest.fn();
    const { container} = render(<FindEntitiesPosition position={positionsMocks[0]} isSelected onChange={onChange} />);
    fireEvent.click(container.querySelector('input[type="checkbox"]') as Element);
    expect(onChange).toBeCalled();
  });

  it('should disable checkbox', () => {
    const onChange = jest.fn();
    const { container} = render(<FindEntitiesPosition position={positionsMocks[0]} isSelected onChange={onChange} disabled />);
    expect(container.querySelector('input[type="checkbox"]')).toBeDisabled();
  });
});
