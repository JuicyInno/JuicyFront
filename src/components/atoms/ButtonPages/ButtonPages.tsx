import React, {
  useCallback, useEffect, useMemo, useState
} from 'react';
import './ButtonPages.scss';
import { ChevronLeft } from '../../../index';

export interface IButtonPagesProps {
  /** Количество страниц */
  max: number;
  /** Изменить страницу */
  onChange: (page: number) => void;
  /** Текущая страница */
  page?: number;
}

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

  const className = useMemo(() => {
    if (max < 10) {
      return '';
    }

    if (max < 100) {
      return 'large';
    }
  }, [max]);


  return (
    <div className='rf-button-pages'>
      <button type='button' className='rf-button-pages__button' disabled={p === 1} onClick={() => onPageChange(-1)}>
        <ChevronLeft className='rf-button-pages__left'/>
      </button>

      <div className={`rf-button-pages__value ${className}`}>
        {p} / {max}
      </div>

      <button type='button' className='rf-button-pages__button' disabled={p === max} onClick={() => onPageChange(1)}>
        <ChevronLeft className='rf-button-pages__right'/>
      </button>

    </div>
  );
};

export default ButtonPages;
