import './FindEntities.scss';

import React, {
  ReactNode, Fragment, useEffect, useRef, useState, useCallback
} from 'react';

import {
  Button, Modal, Preloader, Search, Tabs
} from '../../../index';
import { IOption } from '../../../types';
import { IDebounceResult } from '../../../types/projects.types';
import InfiniteScroll from 'react-infinite-scroll-component';
import { classnames } from '../../../utils/classnames';

interface IFindEntitiesProps<T extends Record<string, any>> {
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
  /**
   * Ключ для получения ID из сущности.
   */
  entityKey: keyof T;

  /** Функция рендера элемента списка. */
  children: (data: { entity: any; isSelected: boolean; onChange: (event: React.ChangeEvent<HTMLInputElement>) => void }) => React.ReactNode;

  /** Дополнительные фильтры. */
  filters?: IOption[];
  /**
   * Множественный выбор.
   * @default false
   */
  multiple?: boolean;
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
  /**
   * Ленивая подгрузка результатов.
   * @default false
   */
  lazy?: boolean;
  /**
   * Проверять ввод в соответствии с регулярным выражением
   * @example Для проверки на отсутствие спецсимволов в строке можно использовать `'^[\da-zA-Zа-яА-Я]*$'`
   */
  pattern?: string;
}

export const FindEntities = <T,>({
  onClose,
  value = [],
  onChange,
  debounce,
  getEntities,
  entityKey,
  children,
  multiple,
  filters,
  title,
  subtitle,
  lazy = false,
  emptyStateIcon,
  emptyStateText = 'Измените поисковый запрос',
  emptyStateInitialText,
  pattern
}: IFindEntitiesProps<T>) => {
  const cancelRef = useRef<(() => void) | null>(null);
  const inputRef = useRef<HTMLDivElement>(null);

  /** Список выбранных сущностей */
  const [selected, setSelected] = useState<T[]>(value);
  const selectedMap: Record<string, boolean> = selected.reduce((result: Record<string, boolean>, e) => {
    result[e[entityKey] as unknown as string] = true;
    return result;
  }, {});

  /** Поиск */
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState(filters ? filters[0].value : '');
  const [results, setResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

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

  /** После изенения поиска или фильтра очищаем список */
  useEffect(() => {
    setResults([]);
    setLazyAllLoaded(false);
  }, [search, filter]);

  // -------------------------------------------------------------------------------------------------------------------

  const onSubmit = () => {
    onChange && onChange(selected);
    onClose && onClose();
  };

  const onSelectChange = (entity: T) => (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      if (multiple) {
        setSelected([...selected, entity]);
      } else {
        setSelected([entity]);
      }
    } else {
      setSelected(selected.filter((e) => entity[entityKey] !== e[entityKey]));
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

  const onFetch = useCallback(
    async (skip: number) => {
      setIsLoading(true);

      if (cancelRef.current) {
        cancelRef.current();
        cancelRef.current = null;
      }

      const [request, cancel] = getEntities(search, filter, skip);
      cancelRef.current = cancel;

      return request
        .then((res) => {
          if (res.length) {
            setResults((prevRes) => [...prevRes, ...res]);
          } else {
            setLazyAllLoaded(true);
          }
        })
        .finally(() => {
          setIsLoading(false);
        });
    },
    [search, filter, results.length]
  );

  /** При изменении фильтра или поиска, загрузка начинается с 0 */
  useEffect(() => {
    onFetch(0);

    return () => {
      if (cancelRef.current) {
        cancelRef.current();
        cancelRef.current = null;
      }
    };
  }, [filter, search]);

  const tabs = filters ?
    filters.map(({ label, value }) => ({
      label,
      handler: onFilterChange(value),
    })) :
    null;

  const hasMore = !isLoading && lazy && !isLazyAllLoaded;

  return (
    <Modal size='xl' onClose={onClose} custom>
      <div className='rf-find-entities'>
        {!!title && <h4 className='rf-find-entities__title'>{title}</h4>}
        {!!subtitle && <p className='rf-find-entities__subtitle'>{subtitle}</p>}

        <div className='rf-find-entities__search' ref={inputRef}>
          <Search onDebounce={onSearchDebounce} autoFocus onClear={onSearchClear} debounce={debounce} pattern={pattern} />
        </div>

        {!!tabs && (
          <div className='rf-find-entities__filters'>
            <Tabs list={tabs} />
          </div>
        )}

        <div className='rf-find-entities__list' id='rf-find-entities-scroll'>
          <InfiniteScroll
            hasMore={hasMore}
            dataLength={results?.length}
            next={() => onFetch(results?.length)}
            loader={
              <div className='rf-find-entities__preloader'>
                <Preloader />
              </div>
            }
            scrollableTarget='rf-find-entities-scroll'
          >
            {results?.map((entity, index) => (
              <Fragment key={index}>
                {children({
                  entity,
                  isSelected: !!selectedMap[entity[entityKey]],
                  onChange: onSelectChange(entity),
                })}
              </Fragment>
            ))}
            {isLoading && (
              <div className={classnames('rf-find-entities__preloader', !results.length && 'rf-find-entities__preloader-wrap')}>
                <Preloader />
              </div>
            )}
          </InfiniteScroll>
        </div>

        {!results.length && !isLoading && (
          <div className='rf-find-entities__empty-state'>
            {!!emptyStateIcon && <div className='rf-find-entities__empty-state-icon'>{emptyStateIcon}</div>}
            <div className='rf-find-entities__empty-state-title'>{search === '' ? 'Начните поиск' : 'Нет результатов'}</div>
            {search === '' && !!emptyStateInitialText && <p className='rf-find-entities__empty-state-subtitle'>{emptyStateInitialText}</p>}
            {search !== '' && <p className='rf-find-entities__empty-state-subtitle'>{emptyStateText}</p>}
          </div>
        )}

        <footer className='rf-find-entities__footer'>
          <div className='rf-find-entities__footer-button'>
            <Button onClick={onClose} buttonType='light' size='l'>
              Отменить
            </Button>
          </div>
          <div className='rf-find-entities__footer-button'>
            <Button onClick={onSubmit} size='l'>
              Продолжить
            </Button>
          </div>
        </footer>
      </div>
    </Modal>
  );
};

export default FindEntities;
