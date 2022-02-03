import React from 'react';
import { render, RenderResult, screen, fireEvent, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { FindEntities } from './FindEntities';

import { FindEntitiesPosition } from '../FindEntitiesPosition';
import { positionsMocks, IPosition } from '../FindEntitiesPosition/positions.mocks';

const getMockedPositions = (search: string) => {
  const promise = new Promise<IPosition[]>((resolve) => {
    if (search.length < 3) {
      resolve([]);
    } else {
      resolve((positionsMocks).filter(({ positionText }) => positionText.toLocaleLowerCase().includes(search.toLowerCase())));
    }
  });

  return [promise, null] as [Promise<IPosition[]>, null];
};

const POSITIONS_FILTERS = [
  {
    label: 'Вакантные должности',
    value: '1'
  },
  {
    label: 'Все должности',
    value: '2'
  }
];

const waitForComponentToLoadData = async () => {
  await act(async () => {
    await new Promise(resolve => setTimeout(resolve));
  });
};

describe('Test <FindEntities/> component',  () => {
  let result: RenderResult;
  const onClose = jest.fn();
  const onChange = jest.fn();

  beforeEach(async() => {
    onClose.mockClear();
    onChange.mockClear();

    result = render(
      <MemoryRouter>
        <FindEntities
          title='Выберите штатную должность'
          getEntities={getMockedPositions}
          entityKey='position'
          value={[]}
          filters={POSITIONS_FILTERS}
          onChange={onChange}
          onClose={onClose}
          emptyStateInitialText='Найдите нужную вам должность'
          debounce={0}
          >
          {({ entity, isSelected, onChange }) => (
            <FindEntitiesPosition position={entity} isSelected={isSelected} onChange={onChange} />
            )}
        </FindEntities>
      </MemoryRouter>
    );

    await waitForComponentToLoadData();
  });

  it('should render filters', () => {
    expect(screen.queryByText('Вакантные должности')).toBeInTheDocument();
    expect(screen.queryByText('Все должности')).toBeInTheDocument();
  });

  it('should call onClose', () => {
    fireEvent.click(screen.getByText('Отменить'));
    expect(onClose).toHaveBeenCalled();
  });

  it('should render title', () => {
    expect(screen.queryByText('Выберите штатную должность')).toBeInTheDocument();
  });

  it('should render empty state initial text', () => {
    expect(screen.queryByText('Найдите нужную вам должность')).toBeInTheDocument();
  });

  it('should render empty state', async () => {
    act(() => {
      const input = screen.getByPlaceholderText('Поиск');
      fireEvent.change(input, {target: { value: '1234' }});
    });

    await waitForComponentToLoadData();
    expect(screen.queryByText('Измените поисковый запрос')).toBeInTheDocument();
  });

  it('should call onChange', async () => {
    const { baseElement } = result;

    act(() => {
      const input = screen.getByPlaceholderText('Поиск');
      fireEvent.change(input, { target: { value: 'Начальник' } });
    });

    await waitForComponentToLoadData();

    fireEvent.click(baseElement.querySelector('input[type="checkbox"]') as Element);
    fireEvent.click(screen.getByText('Продолжить'));

    expect(onChange).toHaveBeenCalledWith([positionsMocks[0]]);
  });
});