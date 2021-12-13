import './FindEntities.scss';

import React, {
  ReactNode, Fragment, useEffect, useRef, useState
} from 'react';

import {
  Button, Preloader, Search, Tabs
} from '../../../index';
import { IOption } from '../../../types';
import { IDebounceResult } from '../../../types/projects.types';


interface IFindEntitiesProps<T> {
  /** Закрытие модального окна. */
  onClose?: () => void;

  /** Список уже выбранных сущностей. */
  value?: T[];
  /** Вернуть выбранные сущности. */
  onChange?: (data: T[]) => void;
  /** Время дебаунса при поиске. */
  debounce?: number;

  /**
   * Функция поиска по сущностям.
   * @returns Кортеж с промисом сущностей и опциональной функцией отмены запроса.
   */
  getEntities: (search: string, filter: string, skip: number) => [Promise<T[]>, (() => void) | null];
  /** Фукция извлечения ID из сущности. */
  getEntityId: (entity: T) => any;

  /** Функция рендера элемента списка. */
  children: (data: { entity: any, isSelected: boolean, onChange: (event: React.ChangeEvent<HTMLInputElement>) => void }) => React.ReactNode;

  /** Дополнительные фильтры. */
  filters?: IOption[];
  /**
   * Множественный выбор.
   * @default false
   */
  multiple?: boolean;
  /**
   * Ленивая подгрузка результатов.
   * @default false
   */
  lazy?: boolean;

  /** Заголовок. */
  title?: ReactNode;
  /** Подзаголовок. */
  subtitle?: ReactNode;

  /**
   * Иконка для эмпти стейта.
   */
  emptyStateIcon?: React.ReactNode;
  /**
   * Текст для эмпти стейта когда ничего не найдено.
   * @default 'Измените поисковый запрос'
   */
  emptyStateText?: string;
  /**
   * Текст для эмпти стейта когда поиск еще не начат.
   */
  emptyStateInitialText?: string;
}

export const FindEntities = <T, >({
  onClose,
  value = [],
  onChange,
  debounce,
  getEntities,
  getEntityId,
  children,
  multiple,
  lazy,
  filters,
  title,
  subtitle,
  emptyStateIcon,
  emptyStateText = 'Измените поисковый запрос',
  emptyStateInitialText
}: IFindEntitiesProps<T>) => {
  const cancelRef = useRef<(() => void) | null>(null);
  const inputRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  /** Список выбранных сущностей */

  const [selected, setSelected] = useState<any[]>(value);
  const selectedMap: Record<string, boolean> = selected.reduce((result: Record<string, boolean>, e) => {
    result[getEntityId(e)] = true;
    return result;
  }, {});

  /** Поиск */

  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState(filters ? filters[0].value : '');
  const [results, setResults] = useState<any[]>([]);
  const [isLoading, setLoading] = useState(false);

  const [isLazyLoading, setLazyLoading] = useState(false);
  /** Выведены все результаты */
  const [isLazyAllLoaded, setLazyAllLoaded] = useState(false);

  const onSearchDebounce = (data: IDebounceResult) => {
    setSearch(data.debounceString);
  };

  const onSearchClear = () => {
    setSearch('');
  };

  const onFilterChange = (value: string) => () => {
    setFilter(value);
  };

  /** Прогрузка */

  const onScroll = () => {
    if (!dropdownRef.current) {
      return;
    }

    const { scrollTop, scrollHeight, offsetHeight } = dropdownRef.current;
    const scrollInPercent = Math.round((100 * scrollTop) / (scrollHeight - offsetHeight));

    if (scrollInPercent > 90 && !isLoading && !isLazyAllLoaded) {
      if (cancelRef.current) {
        cancelRef.current();
        cancelRef.current = null;
      }

      setLoading(true);
      setLazyLoading(true);

      const [request, cancel] = getEntities(search, filter, results.length);
      cancelRef.current = cancel;

      request.then((response) => {
        if (response.length) {
          setResults(results.concat(response));
        } else {
          setLazyAllLoaded(true);
        }
      }).finally(() => {
        setLoading(false);
        setLazyLoading(false);
      });
    }
  };

  /** Запросы */

  useEffect(() => {
    setLoading(true);
    const [request, cancel] = getEntities(search, filter, 0);
    cancelRef.current = cancel;

    request.then((response) => {
      setResults(response);
      setLazyAllLoaded(false);
    }).finally(() => {
      setLoading(false);
    });

    return () => {
      if (cancelRef.current) {
        cancelRef.current();
        cancelRef.current = null;
      }
    };
  }, [getEntities, search, filter]);


  // -------------------------------------------------------------------------------------------------------------------

  const onSubmit = () => {
    onChange && onChange(selected);
    onClose && onClose();
  };

  const onSelectChange = (entity: any) => (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      if (multiple) {
        setSelected([...selected, entity]);
      } else {
        setSelected([entity]);
      }
    } else {
      setSelected(selected.filter((e) => getEntityId(entity) !== getEntityId(e)));
    }
  };


  useEffect(() => {
    setTimeout(() => {
      if (inputRef.current) {
        const input = inputRef.current.querySelector('input');

        if (input) {
          input.focus();
        }
      }
    });
  }, [filter]);

  const tabs = filters ? filters.map(({ label, value }) => ({
    label,
    handler: onFilterChange(value)
  })) : null;

  return (
    <div className='rf-find-entities'>
      {!!title && <h4 className='rf-find-entities__title'>{title}</h4>}
      {!!subtitle && <p className='rf-find-entities__subtitle'>{subtitle}</p>}

      <div className='rf-find-entities__search' ref={ inputRef }>
        <Search onDebounce={ onSearchDebounce } autoFocus onClear={ onSearchClear } debounce={debounce} />
      </div>

      {!!tabs && <div className='rf-find-entities__filters'>
        <Tabs list={tabs}/>
      </div>}

      <div className='rf-find-entities__list' ref={dropdownRef} onScroll={lazy ? onScroll : undefined}>
        {
          results.length > 0 ? (
            results.map((entity, index) => (
              <Fragment key={index}>
                {children({
                  entity,
                  isSelected: !!selectedMap[getEntityId(entity)],
                  onChange: onSelectChange(entity)
                })}
              </Fragment>
            ))
          ) : (
            !isLoading && (
              <div className='rf-find-entities__empty-state'>
                {!!emptyStateIcon && <div className='rf-find-entities__empty-state-icon'>
                  {emptyStateIcon}
                </div>}
                <div className='rf-find-entities__empty-state-title'>
                  {search === '' ? 'Начните поиск' : 'Нет результатов'}
                </div>
                {search === '' && !!emptyStateInitialText && (
                  <p className='rf-find-entities__empty-state-subtitle'>
                    {emptyStateInitialText}
                  </p>
                )}
                {search !== '' && (
                  <p className='rf-find-entities__empty-state-subtitle'>
                    {emptyStateText}
                  </p>
                )}
              </div>
            )
          )
        }
        {
          (isLoading && !isLazyLoading) && (
            <div className='rf-find-entities__preloader'>
              <Preloader size='s'/>
            </div>
          )
        }
      </div>

      <footer className='rf-find-entities__footer'>
        <div className='rf-find-entities__footer-button'>
          <Button onClick={onClose} buttonType='light' size='l'>Отменить</Button>
        </div>
        <div className='rf-find-entities__footer-button'>
          <Button onClick={onSubmit} size='l'>Продолжить</Button>
        </div>
      </footer>
    </div>
  );
};
