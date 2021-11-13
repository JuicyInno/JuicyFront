import React, {
  createRef,
  MouseEvent,
  ReactNode,
  RefObject,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  useCallback,
  ReactElement,
} from 'react';
import { useResizeDetector } from 'react-resize-detector/build/withPolyfill';

import './Tabs.scss';
import { useHistory, useLocation } from 'react-router-dom';
import { ITab, IMenuContext } from '../../../types';
import { classnames } from '../../../utils/classnames';
import Menu, { MenuContext } from '../Menu';
import Button from '../Button';
import { KebabMenu } from '../../..';

export interface ITabsProps {
  /** Список вкладок */
  list: ITab[];
  /**
   * @default true
   * Показывать линию под табами
   * */
  showLine?: boolean;
  /**
   * Показывать меню если табы не вмещаются в контейре
   * @default true
  */
  showMenu?: boolean;
  /** Если во вкладках есть url, то через children пробрасывается <Router/> */
  children?: ReactNode | ReactNode[];
}

const Tabs: React.FC<ITabsProps> = ({ list, showLine = true, showMenu = true, children }: ITabsProps) => {
  const history = useHistory();
  const { pathname } = useLocation();
  /** Ссылки на вкладки */
  const refs = useRef<RefObject<HTMLDivElement>[]>([]);
  /** Ссылка на линию */
  const lineRef = useRef<HTMLDivElement>(null);
  /** Ссылка на последний индекс таба, который показан */
  const lastVisibleInexRef = useRef<number>(list.length - 1);

  /** Определяем, если вкладки являются ссылками для роутинга */
  const isRouting: boolean = useMemo(() => list.every((t: ITab) => t.url), [list]);

  /** Устанавливаем индекс последнего видимого таба */
  const onResize = useCallback((width: number | undefined) => {
    handleLastVisibleIndex(width);
  }, [showMenu]);

  const { ref } = useResizeDetector<HTMLDivElement>({
    onResize,
    refreshMode: 'debounce',
    refreshRate: 300,
  });

  useEffect(() => {
    if (!showMenu) {
      lastVisibleInexRef.current = list.length - 1;
    }
  }, [showMenu]);

  useEffect(() => {
    setActive((i: number) => {
      const index = list.findIndex((t: ITab) => {
        return isRouting ? t.url === pathname : t.active;
      });

      return index >= 0 && !list[index].disabled ? index : i;
    });
  }, [list, pathname, isRouting]);

  // -------------------------------------------------------------------------------------------------------------------

  /** Определяем ширину таба */
  const getWidthTab = (element: HTMLDivElement | null) => element?.getBoundingClientRect().width || 0;

  /** Получаем индекс последнего видимого таба */
  const handleLastVisibleIndex = (width = 0) => {
    if (!showMenu) {
      return;
    }

    const MENU_WIDTH = 48;
    const hasHiddenIndex = lastVisibleInexRef.current < list.length - 1;
    let visibleIndex = lastVisibleInexRef.current;
    let visibleWidth = hasHiddenIndex ? MENU_WIDTH : 0;

    for (let index = 0; index < list.length; index++) {
      if (refs.current?.[index]?.current) {
        if (width > visibleWidth + getWidthTab(refs.current[index].current)) {
          visibleWidth += getWidthTab(refs.current[index].current);
        } else {
          break;
        }
      }

      visibleIndex = index;
    }

    lastVisibleInexRef.current = visibleIndex;

    /** Определяем показывать ли следующий скрытый таб */
    if (hasHiddenIndex) {
      const nextIndex = lastVisibleInexRef.current + 1;
      const isLastIndex = nextIndex === refs.current.length - 1;
      const nextWidth = getWidthTab(refs.current?.[nextIndex]?.current);

      if (visibleWidth + nextWidth - (isLastIndex ? MENU_WIDTH : 0) <= width) {
        visibleWidth += isLastIndex ? nextWidth : nextWidth + MENU_WIDTH;
        lastVisibleInexRef.current = nextIndex;
      }
    }
  };

  // -------------------------------------------------------------------------------------------------------------------

  /** Определяем активную вкладку */
  const [active, setActive] = useState<number>(0);

  /** Определяем является ли активный таб в меню */
  const isActiveIndexInMenu: boolean = active > lastVisibleInexRef.current;

  /** Управление полоской */
  const setLinePosition = (element: HTMLDivElement) => {
    if (lineRef.current) {
      const width = element.offsetWidth;
      const x = element.offsetLeft;

      if (isActiveIndexInMenu) {
        lineRef.current.style.width = '0px';
      } else {
        lineRef.current.style.left = `${x}px`;
        lineRef.current.style.width = `${width}px`;
      }
    }
  };

  /** Устанавливаем активную вкладку */
  const onClick = (e: MouseEvent, i: number, element: HTMLDivElement | null) => {
    element && setLinePosition(element);

    if (isRouting && list[i].url) {
      history.push(list[i].url as string);
    }

    setActive(i);

    list[i].handler?.(refs.current[i].current as HTMLDivElement);
  };

  // -------------------------------------------------------------------------------------------------------------------

  /** Список вкладок */
  const nav = list.map((t: ITab, i: number) => {
    if (!refs.current[i]) {
      refs.current[i] = createRef();
    }

    const onMenuClickHandler = (e: MouseEvent) => onClick(e, i, refs.current[i].current);

    return (
      <div key={i} className={classnames('rf-tabs__link', i > lastVisibleInexRef.current && 'rf-tabs__link--hidden')} ref={refs.current[i]}>
        <button
          type='button'
          className={classnames('rf-tabs__button', i === active && 'rf-tabs__button--active')}
          disabled={t.disabled}
          onClick={onMenuClickHandler}
        >
          {!!t.icon && <div className='rf-tabs__icon'>{t.icon}</div>}
          {!!t.label && <div>{t.label}</div>}
        </button>
      </div>
    );
  });

  /** Список вкладок в меню */
  const menuNav = (
    <MenuContext.Consumer>
      {({ onClose }: IMenuContext) =>
        list.reduce((acc: ReactElement[], curr: ITab, i: number) => {
          if (i > lastVisibleInexRef.current) {
            const onMenuClickHandler = (e: MouseEvent) => {
              onClick(e, i, refs.current[i].current);
              onClose();
            };

            return [
              ...acc,
              <div key={i} className={classnames('rf-tabs__link', 'rf-tabs__menu-link')}>
                <button
                  type='button'
                  className={classnames('rf-tabs__button', 'rf-tabs__menu-button', i === active && 'rf-tabs__menu-button--active')}
                  disabled={curr.disabled}
                  onClick={onMenuClickHandler}
                >
                  {!!curr.icon && <div className={classnames('rf-tabs__icon', 'rf-tabs__menu-icon')}>{curr.icon}</div>}
                  {!!curr.label && <div>{curr.label}</div>}
                </button>
              </div>,
            ];
          }

          return acc;
        }, [])
      }
    </MenuContext.Consumer>
  );

  /** Определяем есть ли табы в меню */
  const hasMenuNav = lastVisibleInexRef.current < list.length - 1;

  /** Устанавливаем линию на активную вкладку при инициализации */
  useLayoutEffect(() => {
    if (nav.length > 0 && refs.current[active].current) {
      const element = refs.current[active].current;
      element && setLinePosition(element);
    }
  }, [nav]);

  // -------------------------------------------------------------------------------------------------------------------

  return (
    <div className={'rf-tabs rf-tabs--buttons'} ref={ref}>
      <nav className={classnames('rf-tabs__navigation', showLine && 'rf-tabs__navigation__line')}>
        <div className={classnames('rf-tabs__navigation-list', !showMenu && 'rf-tabs__navigation-list--without-menu')}>
          {nav}

          {hasMenuNav && (
            <Menu
              content={<div className='button-group__menu'>{menuNav}</div>}
              position='right'
              className={classnames('rf-tabs__menu', isActiveIndexInMenu && 'rf-tabs__menu--active')}
            >
              <Button
                buttonType='ghost'
                size='l'
                data-testid='button-menu-group__more'
                className='rf-tabs__menu__btn'
                startAdornment={<KebabMenu />}
              />
            </Menu>
          )}
        </div>
        <div className='rf-tabs__navigation-line' ref={lineRef} />
      </nav>

      {((isRouting && children) || (!isRouting && list.length > 0)) && (
        <div className='rf-tabs__content'>{isRouting && children ? children : list[active].tab}</div>
      )}
    </div>
  );
};

export default Tabs;
