import React, {
  FC, useEffect, useState
} from 'react';
import Tile from '../../atoms/Tile';
import './HistoryCardFilter.scss';
import { IOption } from '../../../types';
import Select from '../../atoms/Select';
import Search from '../../atoms/Search';
import Datepicker from '../../atoms/Datepicker';
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
  /** Плэйсхолдер для поиска*/
  searchPlaceholder?: string
  /** Срабатывает при изменении значения*/
  onChange?: (values: IHistoryCardValues) => void;
  /**
   * Проверять ввод в соответствии с регулярным выражением
   * @example Для проверки на отсутствие спецсимволов в строке можно использовать `'^[\da-zA-Zа-яА-Я]*$'`
   */
  pattern?: string;
}


const HistoryCardFilter: FC<IHistoryCardFilterProps> = ({
  isShowDatePicker = true,
  isShowStatusFilter = true,
  isShowSearch = true,
  searchPlaceholder = 'Номер, ФИО, ТН',
  initialValues,
  statusOptions = [
    {
      label: 'test',
      value: 'f'
    }
  ],
  onChange = () => {
  },
  pattern
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
    let newValues = {};

    if (!value.value) {
      newValues = {
        ...filterStatus,
        datePicker: {
          startDate: '',
          endDate: ''
        }
      };
    } else {
      newValues = {
        ...filterStatus,
        datePicker: {
          startDate: value.timestamp.from,
          endDate: value.timestamp.to
        }
      };
    }

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
      <Datepicker onChange={ changeDateHandler } placeholder='Выбрать период' range/>
    </div>;
  //* *****************************************
  const statusTSX = isShowStatusFilter &&
    <div className='card-filter__status-picker'>
      <Select placeholder='Статус'
        readOnly
        options={ statusOptions }
        values={ statusOptions?.filter(i => i.value === filterStatus.status) }
        onChange={ changeSelectHandler }/>
    </div>;
  //* *****************************************

  const searchTSX = isShowSearch &&
    <div className='card-filter__search'>
      <Search onDebounce={ changeSearchHandler } placeholder={ searchPlaceholder } pattern={ pattern }/>
    </div>;
  // =======================================================================================================================================
  return <div className='filter__wrapper'>
    <Tile>
      <div className='card-filter__wrapper'>
        { dateTSX }
        { statusTSX }
        { searchTSX }
      </div>
    </Tile>
  </div>;

};

export default HistoryCardFilter;
