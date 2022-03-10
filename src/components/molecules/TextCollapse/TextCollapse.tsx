import React, {
  useCallback, useEffect, useRef, useState
} from 'react';
import { Button } from '../../..';
import { ArrowsChevronDown } from '../../../indexIcon';
import { classnames } from '../../../utils/classnames';

import './TextCollapse.scss';

export interface ITextCollapseProps {
  /** Текст */
  children: string;
  /** Высота строки
   * @default 21px
   */
  lineHeight?: string;
  /**
   * Кол-во отображаемых строк
   * @default 3
   */
  row?: number;
}

const TextCollapse = ({ children, lineHeight = '21px', row = 3 }: ITextCollapseProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [opened, setOpened] = useState(false);
  const [showExpander, setShowExpander] = useState(false);

  const handleHeightText = useCallback(() => {
    if (textRef.current?.offsetHeight) {
      const heightRow = Number(lineHeight.replace(/px$/, ''));
      const allRows = Math.ceil(textRef.current?.offsetHeight / heightRow);

      if (allRows > row && !opened) {
        textRef.current.style.height = `${heightRow * row}px`;
      } else {
        textRef.current.style.height = 'auto';
      }

      if (!opened && allRows > row) {
        setShowExpander(true);
      }
    }

  }, [children, opened]);

  const makeHandleExpand = () => () => setOpened((prevOpened) => !prevOpened);

  useEffect(() => {
    handleHeightText();
  }, [handleHeightText]);

  return (
    <div ref={contentRef} className={classnames('rf-text-collapse')}>
      <div className='rf-text-collapse__text' ref={textRef}>
        {children}
      </div>

      {showExpander &&
        <Button buttonType='text' onClick={makeHandleExpand()}>
          <div className='rf-text-collapse__btn'>
            <ArrowsChevronDown className={`rf-text-collapse__icon ${opened ? 'rf-text-collapse__icon--rotate' : ''}`} />
            <span className='rf-text-collapse__btn-text'>{opened ? 'Скрыть' : 'Раскрыть' }</span>
          </div>
        </Button>}
    </div>
  );
};

export default TextCollapse;
