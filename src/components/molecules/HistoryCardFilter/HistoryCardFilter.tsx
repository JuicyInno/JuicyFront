import React, {
  FC, ReactNode, useEffect, useState
} from 'react';
import './HistoryCardFilter.scss';
import { IOption } from '../../../types';
import { IDateVariants, IDebounceResult } from '../../../types/projects.types';
import Tile from '../../atoms/Tile';
import Datepicker from '../../atoms/Datepicker';
import Search from '../../atoms/Search';
import Select from '../../atoms/Select';


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
  searchPlaceholder?: string,
  /** Дополнительный компонент JSX*/
  endAdornment?: ReactNode,
  /** Срабатывает при изменении значения*/
  onChange?: (values: IHistoryCardValues) => void
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
  endAdornment = null,
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
      <Datepicker onChange={changeDateHandler} placeholder='Выбрать период' range />
    </div>;
  //* *****************************************
  const statusTSX = isShowStatusFilter &&
    <div className='card-filter__status-picker' >
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
      <Search onDebounce={changeSearchHandler} placeholder={searchPlaceholder} />
    </div>;

  // =======================================================================================================================================


  const endAdornmentComponent = endAdornment ? endAdornment : null;

  return <div className='filter__wrapper' >
    <Tile>
      {!endAdornment ? <div className='card-filter__wrapper' >
        {dateTSX}
        {statusTSX}
        {searchTSX}
      </div> :
        <div className='card-filter__wrapper-end-adornment'>
          {searchTSX}
          <div className='card-filter__end-adornment--wrapper'>
            {statusTSX}
            {endAdornmentComponent}
          </div>
        </div>
      }
    </Tile>
  </div>;

};

export default HistoryCardFilter;
