import React, {
  ReactNode, useEffect, useState
} from 'react';
import './ContentExpander.scss';
import Angle from '../../../assets/icons/ChevronDown';
import { Button } from '../../../index';

export interface IContentExpanderProps {
  title: ReactNode;
  titleOpen?: ReactNode;
  showTitle?: boolean;
  children: ReactNode | ReactNode[];
  disabled?: boolean;
  defaultValue?: boolean;
  onExpand?: () => void;
  expanded?: boolean;
  stickArrow?: boolean;
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
  const [innerExpanded, setInnerExpanded] = useState<boolean>(false);
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
            <Angle className={`expander__icon ${expanded || innerExpanded ? 'expander__icon--rotate' : ''}`} />
            <span className='expander__title-text'>{!innerExpanded ? title : titleOpen || title}</span>

          </div>
        </Button>
      </h3>

      <div className={`expander__content ${onExpand || innerExpanded ? 'expander__content--active' : ''}`}>
        {children}
      </div>
    </div>
  );
};

export default ContentExpander;
