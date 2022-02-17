import React, {
  useCallback, useEffect, useState
} from 'react';
import './ButtonPages.scss';
import { ArrowsChevronLeft, ArrowsChevronRight } from '../../../indexIcon';

export interface IButtonPagesProps {
  /** Количество страниц */
  max: number;
  /** Изменить страницу */
  onChange: (page: number) => void;
  /** Текущая страница */
  page?: number;
}

// FIXME: Buttons must have discernible text
const ButtonPages: React.FC<IButtonPagesProps> = ({ page = 1, max, onChange }: IButtonPagesProps) => {

  const [p, setP] = useState(1);

  useEffect(() => {
    if (page) {
      setP(page);
    }
  }, [page]);

  const onPageChange = useCallback((n: number) => {
    const nextPage = p + n;
    setP(nextPage);
    onChange(nextPage);
  }, [p]);

  return (
    <div className='rf-button-pages'>
      <button type='button' className='rf-button-pages__button' disabled={p === 1} onClick={() => onPageChange(-1)}>
        <ArrowsChevronLeft size={'xxs'} />
      </button>

      <div className={'rf-button-pages__value'}>
        {p} / {max}
      </div>

      <button type='button' className='rf-button-pages__button' disabled={p === max} onClick={() => onPageChange(1)}>
        <ArrowsChevronRight size={'xxs'} />
      </button>

    </div>
  );
};

export default ButtonPages;
