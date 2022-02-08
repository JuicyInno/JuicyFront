import './LayoutColumn.scss';

import React, { useRef, useLayoutEffect } from 'react';

import { classnames } from '../../../../utils/classnames';
import { AllClose } from '../../../../indexIcon';

import { useLayoutContext } from '../Layout.context';

export interface ILayoutColumnProps {
  /** Максимальная ширина столца в состоянии drawer. */
  maxWidth?: string;
}

export const LayoutColumn: React.FC<ILayoutColumnProps> = ({ children, maxWidth }) => {
  const { isColumnVisible, setColumnVisible } = useLayoutContext();

  const ref = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (ref.current) {
      ref.current.style.setProperty('--column-max-width', maxWidth || '100%');
    }
  }, [maxWidth]);

  const onClose = () => {
    setColumnVisible(false);
  };

  return (
    <div className={classnames('layout-column', isColumnVisible && 'layout-column--visible')} ref={ref}>
      <div className='layout-column__backdrop' onClick={onClose} />
      <button className='layout-column__close' type='button' onClick={onClose} aria-label='Закрыть'>
        <AllClose />
      </button>
      <div className='layout-column__content'>
        {children}
      </div>
    </div>
  );
};
