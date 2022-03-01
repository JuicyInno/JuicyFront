import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Segment from './Segment';
import {_segmentList } from './mock';

describe('Test <Segment /> component', () => {
  it('should render', () => {
    const { container } = render(<Segment list={_segmentList} onChange={jest.fn} />);

    expect(container.getElementsByClassName('rf-segment')).toHaveLength(1);
    expect(container.getElementsByClassName('rf-segment__item')).toHaveLength(2);
    expect(container.getElementsByClassName('rf-segment__list--full')).toHaveLength(0);
    expect(screen.getByText('Линейная')).toHaveClass('rf-segment__item--active');
  });

  it('should be full width', () => {
    const { container } = render(<Segment list={_segmentList} value={_segmentList[1]} onChange={jest.fn} fullWidth />);

    expect(container.getElementsByClassName('rf-segment__list--full')).toHaveLength(1);
  });

  it('should pass value', () => {
    render(<Segment list={_segmentList} value={_segmentList[1]} onChange={jest.fn} />);

    expect(screen.getByText('Функциональная')).toHaveClass('rf-segment__item--active');
  });

  it('should pass value', () => {
    render(<Segment list={_segmentList} value={_segmentList[1]} onChange={jest.fn} />);

    expect(screen.getByText('Функциональная')).toHaveClass('rf-segment__item--active');
  });

  it('should render icon', () => {
    const list = [{
      value: '1',
      label: 'Линейная',
      icon: 'Иконка'
    },
    {
      value: '2',
      label: 'Линейная',
    },]
    render(<Segment list={list} value={list[0]} onChange={jest.fn} />);

    expect(screen.getByText('Иконка')).toBeInTheDocument();
  });

  it('should call onChange', () => {
    const onChange = jest.fn();
    render(<Segment list={_segmentList} onChange={onChange} />);

    fireEvent.click(screen.getByText('Линейная'));
    expect(onChange).toHaveBeenCalled();
  });
});
