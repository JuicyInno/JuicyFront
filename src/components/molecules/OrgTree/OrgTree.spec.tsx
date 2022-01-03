import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import OrgTree from './OrgTree';

describe('Test <OrgTree/> component', () => {
  
  it('should emit change event on checkbox click', () => {
    const onCheck = jest.fn();

    const LIST = [{ value: '1', label: 'Item 1', children: [{ value: '2', label: 'Item 2' }]}];

    render(
      <OrgTree 
        list={LIST}
        onCheck={onCheck} 
      />
    );

    fireEvent.click(screen.getByLabelText('Item 1'));
    expect(onCheck).toBeCalledWith(LIST[0]);

    fireEvent.click(screen.getByLabelText('Item 2'));
    expect(onCheck).toBeCalledWith(LIST[0].children[0]);
  });

  it('should render checkbox in correct check state', () => {
    const onCheck = jest.fn();

    const LIST = [
      { 
        value: '1', 
        label: 'Item 1', 
        checked: true,
        children: [
          { value: '2', label: 'Item 2', checked: true }, 
          { value: '3', label: 'Item 3', checked: false }
        ]
      },
      { 
        value: '4', 
        label: 'Item 4', 
        checked: false
      }
    ];

    render(
      <OrgTree 
        list={LIST}
        onCheck={onCheck} 
      />
    );

    expect(screen.getByLabelText('Item 1')).toBeChecked();
    expect(screen.getByLabelText('Item 2')).toBeChecked();
    expect(screen.getByLabelText('Item 3')).not.toBeChecked();
    expect(screen.getByLabelText('Item 4')).not.toBeChecked();
  });
});
