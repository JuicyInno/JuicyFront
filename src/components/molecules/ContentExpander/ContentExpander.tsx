import React, {
  ReactNode, useEffect, useState
} from 'react';
import './ContentExpander.scss';
import { ArrowsChevronDown } from '../../../indexIcon';
import Button from '../../atoms/Button';


export interface IContentExpanderProps {
  /** Заголовок */
  title: ReactNode;
  /** Заголовок при открытом контенте */
  titleOpen?: ReactNode;
  /** Показывать заголовок
   * @default true
   */
  showTitle?: boolean;
  /** Контент */
  children: ReactNode | ReactNode[];
  /** Недоступный
  * @default false
  */
  disabled?: boolean;
  /** Значение по умолчанию (открыт/закрыт)
   * @default false
   */
  defaultValue?: boolean;
  /** Функиця открытия/закрытия контента */
  onExpand?: () => void;
  /** Значение открыт/закрыт конент
   * Контролируемое состояние. Используется вместе с onExpand
  */
  expanded?: boolean;
  /**
   * Прижать заголовок к левому краю
   * @default false
   */
  stickArrow?: boolean;
  /** Класс */
  className?: string;
}

const ContentExpander: React.FC<IContentExpanderProps> = ({
  title,
  children,
  onExpand,
  expanded,
  defaultValue = false,
  className = '',
  disabled = false,
  stickArrow = false,
  showTitle = true,
  titleOpen = ''
}: IContentExpanderProps) => {
  /** Раскрыть / Скрыть */
  const [innerExpanded, setInnerExpanded] = useState<boolean>(defaultValue);

  useEffect(() => {
    defaultValue && setInnerExpanded(defaultValue);
  }, [defaultValue]);

  const onClick = () => {
    if (disabled) {
      return;
    }

    onExpand ? onExpand() : setInnerExpanded(!innerExpanded);
  };

  const disabledClass = disabled ? 'expander--disabled' : '';
  const stickArrowClass = stickArrow ? 'expander--arrow-stick' : '';
  const hideTitleClass = !showTitle ? 'expander__title--hidden' : '';

  return (
    <div className={`expander ${className} ${stickArrowClass} ${disabledClass}`}>
      <h3 className={`expander__title ${hideTitleClass}`} onClick={onClick} data-expander={true}>
        <Button buttonType='text'>
          <div className='expander__button-wrapper'>
            <ArrowsChevronDown className={`expander__icon ${expanded || innerExpanded ? 'expander__icon--rotate' : ''}`} />
            <span className='expander__title-text'>{!innerExpanded ? title : titleOpen || title}</span>
          </div>
        </Button>
      </h3>

      <div className={`expander__content ${expanded || innerExpanded ? 'expander__content--active' : ''}`}>
        {children}
      </div>
    </div>
  );
};

export default ContentExpander;
