import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { variants } from '../../../types';

import Tag from './Tag';

describe('Test <Tag/> component', () => {
  it('should render component', () => {
    render(<Tag>Tag</Tag>);
    expect(screen.queryByText('Tag')).toBeInTheDocument();
  });

  it('should render icon', () => {
    render(<Tag icon={<i>icon</i>}>Tag</Tag>);
    expect(screen.queryByText('icon')).toBeInTheDocument();
  });

  it('should call onClick', () => {
    const onClick = jest.fn();
    render(<Tag onClick={onClick}>Tag</Tag>);

    fireEvent.click(screen.getByText('Tag'));
    expect(screen.getByText('Tag')).toHaveClass('rf-tag--clickable');
    expect(onClick).toBeCalled();
  });

  it('should call onRemove', () => {
    const onRemove = jest.fn();
    render(<Tag onRemove={onRemove}>Tag</Tag>);

    fireEvent.click(screen.getByLabelText('Удалить'));
    expect(onRemove).toBeCalled();
  });

  for (const variant of variants) {
    it(`should be ${variant}`, () => {
      render(<Tag variant={variant}>Tag</Tag>);
      expect(screen.getByText('Tag')).toHaveClass(`rf-tag--${variant}`);
    });
  }
});
