import React, { ReactNode, useRef } from 'react';
import './PageWithSections.scss';
import { IPageSection } from '../../../types/projects.types';
import { IButtonGroup, ITab } from '../../../types';
import {
  ButtonGroup,
  Preloader, Tabs
} from '../../../index';

import { ChevronLeft } from '../../../indexIcon';

import { Link } from 'react-router-dom';
import Tile from '../../atoms/Tile';
import useTableOfContents from '../../../hooks/useTableOfContents';

export interface IPageWithSectionsProps {
  title?: ReactNode;
  backUrl?: string;
  onBackUrlClick?: () => void;
  sections?: IPageSection[];
  /** [DEPRECATED] Fixed action menu */
  actionMenu?: ReactNode;
  /** Всегда отображает панель с кнопками внизу страницы*/
  actionMenuAlwaysBottom?:boolean;
  /** Показать прелоадер
   * @default false */
  preloader?: boolean;
  /** Показать боковое меню заголовков секций
   * @default true */
  showNavigation?: boolean;
  /** Доп. отступ скролла при клике бокового меню (px)
   * @default 40 */
  additionalScrollOffset?: number;
  /** Отключает подсветку активного элемента меню
   * @default false */
  showNavigationPosition?: boolean;
  /** Navigation tabs */
  navigation?: ITab[];
  /** Показать заголовок
   * @default true */
  showHeader?: boolean;
  /** Кнопки действий внизу страницы
   * @default [] */
  buttonsGroup?: IButtonGroup[];
  /** Количество кнопок для меню
   * @default 2 */
  countOfButtonsGroup?:number;
}

const PageWithSections: React.FC<IPageWithSectionsProps> = ({
  title,
  backUrl,
  onBackUrlClick,
  sections,
  actionMenu,
  preloader = false,
  showNavigation = true,
  navigation,
  showHeader = true,
  actionMenuAlwaysBottom = false,
  showNavigationPosition = false,
  additionalScrollOffset = 40,
  countOfButtonsGroup = 2,
  buttonsGroup = []
}: IPageWithSectionsProps) => {

  /** Ссылка на навигацию */
  const asideRef = useRef<HTMLDivElement>(null);
  /** Ссылка на секции */
  const sectionsRef = useRef<HTMLDivElement>(null);
  /** Ссылка на страницу */
  const pageRef = useRef<HTMLDivElement>(null);
  /** Ссылка на шапку страницы */
  const pageHeaderRef = useRef<HTMLDivElement>(null);

  // -------------------------------------------------------------------------------------------------------------------

  /** Отображение секций */
  const sectionsJSX = sections?.map((section: IPageSection) => {
    return (
      <section key={ section.id } className='rf-page__section-block'>
        {section.withoutTileWrapper ?
          <> { section.component }</> :
          <Tile hideBackground={section.hideBackground}>
            { section.title && <h2 className='rf-page__section-title' id={ section.id }>{ section.title }</h2> }
            { section.component }
          </Tile>}

      </section>
    );
  });

  // -------------------------------------------------------------------------------------------------------------------

  /** Активная секция при скролле */
  const { activeTitle, onClick } = useTableOfContents({
    selector: '.rf-page__section-title',
    deps: [preloader]
  });

  /** Боковая навигация для секций */
  const asideJSX = sections?.filter((section: IPageSection) => !!section.title)
    .map((section: IPageSection, idx: number) => {
      const onNavClick = () => {
        const block = document.getElementById(section.id);

        if (block && pageHeaderRef.current) {
          const top = block.getBoundingClientRect().top + pageYOffset - additionalScrollOffset;
          window.scrollTo(0, top);
        }

        onClick({
          activeIndex: idx,
          activeTitleId: section.id
        });
      };

      const activeClass = showNavigationPosition && activeTitle.activeTitleId === section.id ? 'rf-page__aside-link--active' : '';
      return (
        <div key={ section.id } className={`rf-page__aside-link ${activeClass}`} onClick={ onNavClick }>
          { section.title }
        </div>
      );
    });

  // -------------------------------------------------------------------------------------------------------------------

  const showAside = !!sections && sections.some((s: IPageSection) => !!s.title);
  // (pageRef?.current && window.innerHeight < pageRef.current.scrollHeight);

  const asideBlock = showNavigation && showAside && (
    <aside className='rf-page__content-aside' ref={ asideRef }>
      <div className='rf-page__aside-inner'>
        <nav className='rf-page__aside-nav'>
          { asideJSX }
        </nav>
      </div>
    </aside>
  );

  // -------------------------------------------------------------------------------------------------------------------

  const onBackClick = (e: React.MouseEvent) => {
    if (onBackUrlClick) {
      e.preventDefault();
      onBackUrlClick();
    }
  };

  // -------------------------------------------------------------------------------------------------------------------

  return (
    <div className='rf-sections-page' ref={ pageRef }>
      <header className={`rf-page__sections-header ${showHeader ? '' : 'rf-page__sections-header--hidden'}`} ref={ pageHeaderRef }>
        { backUrl && (
          <Link to={ backUrl } onClick={ onBackClick } className='rf-page__sections-header-back'>
            <ChevronLeft />
          </Link>
        ) }
        <h2 className='rf-page__sections-title'>{ title }</h2>
      </header>

      <div className='rf-page__content--sections'>

        {
          preloader ? <Preloader/> : (
            <>
              <div className='rf-page__content-sections' ref={ sectionsRef }>
                {!!navigation?.length && (
                  <div className='rf-page__tabs'>
                    <Tabs list={navigation}/>
                  </div>
                )}

                { sectionsJSX }
              </div>

              <div className='rf-page__aside'>
                { asideBlock }
              </div>
            </>
          )
        }
      </div>

      { !preloader && actionMenu ? actionMenu : (
        buttonsGroup !== undefined && buttonsGroup.length > 0 && (
          <div className='rf-page__buttons-group'>
            <ButtonGroup max={countOfButtonsGroup} list={ buttonsGroup }/>
          </div>
        )
      ) }
    </div>
  );
};
export default PageWithSections;
