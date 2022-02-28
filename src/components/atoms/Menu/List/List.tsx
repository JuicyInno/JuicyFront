import React, {
  useContext, useRef, RefObject, createRef, ReactNode
} from 'react';
import { NavLink } from 'react-router-dom';
import './List.scss';
import { IListElement } from '../../../../types';
import { MenuContext } from '../Menu';
import { classnames } from '../../../../utils/classnames';
import Tooltip from '../../Tooltip';
import { ITooltipProps } from '../../Tooltip/Tooltip';

interface IListProps {
  /** Элементы меню */
  list: IListElement[];
  /** Цвет tooltip */
  tooltipBackground?: ITooltipProps['background'];
}

const List: React.FC<IListProps> = ({ list, tooltipBackground = 'white' }: IListProps) => {
  /** Ссылки на элементы списка */
  const refs = useRef<RefObject<HTMLDivElement | HTMLAnchorElement>[]>([]);

  const onElementClick = (e: React.MouseEvent, li: IListElement) => {
    e.stopPropagation();
    !li.url && e.preventDefault();
    li.handler && li.handler();
    onClose && onClose();
  };

  const { onClose } = useContext(MenuContext);

  const checkOverflow = (index: number) => {
    const el = refs.current[index].current;

    if (!el) {
      return;
    }

    const isOverflowing = el?.clientWidth < el.scrollWidth ||
      el?.clientHeight < el.scrollHeight;

    return isOverflowing;
  };

  const renderLabel = (index: number, label: ReactNode) => {
    return checkOverflow(index) ?
      <Tooltip background={tooltipBackground} position='bottom'><span>{label}</span><>{label}</></Tooltip> : <>{label}</>;
  };

  const listElementJSX =
    list?.map((li: IListElement, i: number) => {
      const disabledClass = li.disabled ? 'rf-list__element--disabled' : '';
      const separatedClass = li.separated ? 'rf-list__element--separated' : '';

      if (!refs.current[i]) {
        refs.current[i] = createRef();
      }

      return (
        <li className='rf-li' key={li.value || i}>
          {li.separated && <div className='rf-list__separator' />}
          {
            li.url ? (
              <NavLink
                innerRef={refs.current[i] as RefObject<HTMLAnchorElement>}
                to={li.url}
                className={classnames('rf-list__element', disabledClass, separatedClass)}
                onClick={(e: React.MouseEvent) => onElementClick(e, li)}
              >
                {renderLabel(i, li.label)}
              </NavLink>
            ) : (
              <div
                ref={refs.current[i] as RefObject<HTMLDivElement>}
                className={classnames('rf-list__element', disabledClass, separatedClass, li.isTitle && 'rf-list__element--title')}
                onClick={(e: React.MouseEvent) => !li.isTitle && onElementClick(e, li)}
              >
                {renderLabel(i, li.label)}
              </div>
            )
          }
        </li>
      );
    });

  // -------------------------------------------------------------------------------------------------------------------

  return <ul className='rf-list' data-testid='rf-list'>{listElementJSX}</ul>;
};

export default List;
