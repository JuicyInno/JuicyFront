import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import Schedule from './Schedule';
import ScheduleLegend from './ScheduleLegend';
import ScheduleLegendItem from './ScheduleLegendItem';

describe('Test <Schedule/> component', () => {
  
  it('should change month to the prev', () => {
    render(
      <Schedule defaultYear={2021} defaultMonth={0} />
    );

    expect(screen.queryByText('Январь 2021')).toBeInTheDocument();
    expect(screen.queryByText('Февраль 2021')).toBeInTheDocument();

    fireEvent.click(screen.getByLabelText('Назад'));

    expect(screen.queryByText('Декабрь 2020')).toBeInTheDocument();
    expect(screen.queryByText('Январь 2021')).toBeInTheDocument();
  });

  it('should change month to the next', () => {
    render(
      <Schedule defaultYear={2021} defaultMonth={10} />
    );

    expect(screen.queryByText('Ноябрь 2021')).toBeInTheDocument();
    expect(screen.queryByText('Декабрь 2021')).toBeInTheDocument();

    fireEvent.click(screen.getByLabelText('Вперед'));

    expect(screen.queryByText('Декабрь 2021')).toBeInTheDocument();
    expect(screen.queryByText('Январь 2022')).toBeInTheDocument();
  });

  it('should render the legend', () => {
    render(
      <Schedule defaultYear={2021} defaultMonth={8}>
        <ScheduleLegend>
          <ScheduleLegendItem color="default">Отпуск</ScheduleLegendItem>
          <ScheduleLegendItem color="red">Больничный</ScheduleLegendItem>
        </ScheduleLegend>
      </Schedule>
    );

    expect(screen.queryByText('Отпуск')).toBeInTheDocument();
    expect(screen.queryByText('Больничный')).toBeInTheDocument();
  });
});
