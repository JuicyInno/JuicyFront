import React, {
  FC, useEffect, useState
} from 'react';

import Tile from '../../atoms/Tile';


import './HistoryCardFilter.scss';
import { IOption } from '../../../types';
import {
  Datepicker, Search, Select
} from '../../../index';
import { IDateVariants, IDebounceResult } from '../../../types/projects.types';

export interface IHistoryCardValues {
  /** Выбранный период*/
  datePicker?: {
    startDate?: number,
    endDate?: number
  },
  /** Начальное значение поиска*/
  search?: string,
  /** Начальное значение id статуса*/
  status?: string
}

export interface IHistoryCardFilterProps {
  /** Показывать выбор дат или нет*/
  isShowDatePicker?: boolean;
  /** Показывать статус*/
  isShowStatusFilter?: boolean;
  /** Показывать поиск*/
  isShowSearch?: boolean
  /** Значение статусов*/
  statusOptions?: IOption[],
  /** Начальные значения*/
  initialValues?: IHistoryCardValues,
  /** Срабатывает при изменении значения*/
  onChange?: (values: IHistoryCardValues) => void
}


const HistoryCardFilter: FC<IHistoryCardFilterProps> = ({
  isShowDatePicker = true,
  isShowStatusFilter = true,
  isShowSearch = true,
  initialValues,
  statusOptions = [],
  onChange = () => { }
}: IHistoryCardFilterProps) => {
  // текущие состояние фильтров
  const [filterStatus, setStatus] = useState<IHistoryCardValues>({});

  // =======================
  useEffect(() => {
    initialValues && setStatus({
      ...filterStatus,
      ...initialValues
    });
  }, [initialValues]);

  // =======================================================================================================================================
  // Если изменился календарь
  const changeDateHandler = (value: IDateVariants) => {
    const newValues = {
      ...filterStatus,
      datePicker: {
        startDate: value.timestamp.from,
        endDate: value.timestamp.to
      }
    };
    setStatus(newValues);
    onChange(newValues);
  };
  //* *****************************************
  // Если изменился статус
  const changeSelectHandler = (option: IOption[]) => {
    const newValues = {
      ...filterStatus,
      status: option[0].value
    };
    console.log(newValues, filterStatus);
    setStatus(newValues);
    onChange(newValues);
  };
  //* *****************************************
  // Если изменился результат поиска
  const changeSearchHandler = (result: IDebounceResult) => {
    const newValues = {
      ...filterStatus,
      search: result.debounceString
    };
    setStatus(newValues);
    onChange(newValues);
  };
  // =======================================================================================================================================

  const dateTSX = isShowDatePicker &&
    <div className='card-filter__datepicker'>
      <Datepicker onChange={changeDateHandler} placeholder='Выбрать период' range />
    </div>;
  //* *****************************************
  const statusTSX = isShowStatusFilter &&
    <div >
      <Select placeholder='Статус'
        readOnly
        options={statusOptions}
        values={statusOptions?.filter(i => i.value === filterStatus.status)}
        tagsPosition='outside'
        onChange={changeSelectHandler} />
    </div>;
  //* *****************************************

  const searchTSX = isShowSearch &&
    <div className='card-filter__search'>
      <Search onDebounce={changeSearchHandler} />
    </div>;
  // =======================================================================================================================================


  return <div className='filter__wrapper' >
    <Tile>
      <div className='card-filter__wrapper' >
        {dateTSX}
        {statusTSX}
        {searchTSX}
      </div>
    </Tile>
  </div>;

};

export default HistoryCardFilter;
