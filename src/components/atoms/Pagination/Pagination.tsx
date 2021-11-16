import React, { HTMLProps, useState } from 'react';
import './Pagination.scss';
import ChevronLeft from '../../../assets/icons/ChevronLeft';
import ChevronRight from '../../../assets/icons/ChevronRight';
import { classnames } from '../../../utils/classnames';
import Input from '../Input';
import { IDebounceResult } from '../../../types/projects.types';


export interface IPaginationProps extends HTMLProps<HTMLInputElement> {
    /** Количество страниц */
    count: number;
    /** Функция получения текущей страницы */
    getCurrentPage: (page: number) => void;
}

const Pagination: React.FC<IPaginationProps> = ({
  count,
  getCurrentPage,
}: IPaginationProps) => {

  const [currentPage, setCurrentPage] = useState(1);
  const MIN_PAGE_NUMBER = 1;
  const FIRST_PAGE_LABEL = 1;
  const STEP = 1;
  const STEP_BEFORE_SHOWING_DOTS = 4;
  const PAGES_WITHOUT_DOTS = 7;
  const PAGES_WITHOUT_NUMBER_SELECT = 21;
  const firstEllipsisCondition = currentPage > STEP_BEFORE_SHOWING_DOTS;
  const secondEllipsisCondition = currentPage <= count - STEP_BEFORE_SHOWING_DOTS;

  /** клик по номеру страницы */
  const handleClickByPage = (newPage: number) => () => {
    setCurrentPage(newPage);
    getCurrentPage(newPage);
  };

  /** клик по левому шеврону */
  const handleClickByLeftChevron = () => {
    const newPage = currentPage - STEP;

    if (newPage >= MIN_PAGE_NUMBER) {
      setCurrentPage(newPage);
      getCurrentPage(newPage);
    }
  };

  /** клик по правому шеврону */
  const handleClickByRightChevron = () => {
    const newPage = currentPage + STEP;

    if (newPage <= count) {
      setCurrentPage(newPage);
      getCurrentPage(newPage);
    }
  };

  /** ввод страницы вручную */
  const handleInsertPage = (result:IDebounceResult) => {
    const page = Number(result.debounceString);

    if (!page) {
      setCurrentPage(MIN_PAGE_NUMBER);
      getCurrentPage(MIN_PAGE_NUMBER);
    }

    if (page >= MIN_PAGE_NUMBER && page <= count ) {
      setCurrentPage(page);
      getCurrentPage(page);
    }
  };

  /** отрисовать номер странички */
  const getPageLabel = (label: number) => (
    <div
      className={classnames(
        'rf-pagination__label',
        label === currentPage && 'rf-pagination__label--selected'
      )}

      onClick={handleClickByPage(label)} >
      <span className='rf-pagination__label-text' >
        {label}
      </span>
    </div>
  );

  /** отрисовать троеточие */
  const getEllipsis = () => (
    <div className='rf-pagination__ellipsis'>
      <span> ... </span>
    </div>
  );

  /** отрисовать три номера страничек */
  const getThreePageLabel = (firstLabel: number, secondLabel: number, thirdLabel: number) => (
    <>
      {getPageLabel(firstLabel)}
      {getPageLabel(secondLabel)}
      {getPageLabel(thirdLabel)}
    </>
  );

  /** отрисовать средние лейблы когда с двух сторон троеточие */
  const getMiddleNumbers = () => {
    if (firstEllipsisCondition && secondEllipsisCondition) {
      return getThreePageLabel(
        currentPage - STEP,
        currentPage,
        currentPage + STEP
      );
    }

    const doubleStep = STEP * 2;
    const tripleStep = STEP * 3;
    const quadrupleStep = STEP * 4;

    if (currentPage <= STEP_BEFORE_SHOWING_DOTS) {
      return getThreePageLabel(
        FIRST_PAGE_LABEL + doubleStep,
        FIRST_PAGE_LABEL + tripleStep,
        FIRST_PAGE_LABEL + quadrupleStep
      );
    }

    if (currentPage > (count - STEP_BEFORE_SHOWING_DOTS)) {
      return getThreePageLabel(
        count - quadrupleStep,
        count - tripleStep,
        count - doubleStep
      );
    }
  };

  return (
    <div className='rf-pagination'>
      <div className='rf-pagination__chevron-wrapper' onClick={handleClickByLeftChevron} >
        <ChevronLeft />
      </div>
      { count <= PAGES_WITHOUT_DOTS ?
        Array.from({ length: count }, (item, index: number) => getPageLabel(index + 1)) :
        (<>
          {getPageLabel(FIRST_PAGE_LABEL)}
          { firstEllipsisCondition ? getEllipsis() : getPageLabel(FIRST_PAGE_LABEL + STEP)}
          {getMiddleNumbers()}
          { secondEllipsisCondition ? getEllipsis() : getPageLabel(count - STEP) }
          {getPageLabel(count)}
        </>)
      }
      <div className='rf-pagination__chevron-wrapper' onClick={handleClickByRightChevron} >
        <ChevronRight />
      </div>
      {count > PAGES_WITHOUT_NUMBER_SELECT &&
        <Input className={'rf-pagination__input'} placeholder='№ страницы' onDebounce={handleInsertPage}/>
      }
    </div>
  );
};

export default Pagination;
