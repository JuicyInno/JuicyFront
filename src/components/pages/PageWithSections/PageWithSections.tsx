import React, {
  ReactNode, useEffect, useRef
} from 'react';
import './PageWithSections.scss';
import { IPageSection } from '../../../types/projects.types';
import { IButtonGroup, ITab } from '../../../types';
import {
  ButtonGroup,
  ChevronLeft, Preloader, Tabs
} from '../../../index';
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
  preloader?: boolean;
  showNavigation?: boolean;
  /** Отключает  не корректно работающий слайдер навигации*/
  showNavigationPosition?: boolean;
  /** Navigation tabs */
  navigation?: ITab[];
  showHeader?: boolean;
  /** Кнопки действий внизу страницы */
  buttonsGroup?: IButtonGroup[];
  /** количество кнопок для меню */
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
  countOfButtonsGroup = 2,
  buttonsGroup = []
}: IPageWithSectionsProps) => {

  /** Ссылка на навигацию */
  const asideRef = useRef<HTMLDivElement>(null);
  /** Ссылка на секции */
  const sectionsRef = useRef<HTMLDivElement>(null);
  /** Ссылка на ползунок */
  const sliderRef = useRef<HTMLDivElement>(null);
  /** Ссылка на линию */
  const lineRef = useRef<HTMLDivElement>(null);
  /** Ссылка на страницу */
  const pageRef = useRef<HTMLDivElement>(null);
  /** Ссылка на шапку страницы */
  const pageHeaderRef = useRef<HTMLDivElement>(null);

  /** Дополнительной отступ для активации секции в оглавлении */
  const ADDITIONAL_SCROLL_OFFSET = 40;

  // -------------------------------------------------------------------------------------------------------------------

  /** Расчет координаты для Aside */
  useEffect(() => {
    const calculateRightPosition = () => {
      // todo нужно проверить
      const widthDelta = window.innerWidth - 980 - 192;

      if (asideRef.current) {
        if (widthDelta > 0) {
          asideRef.current.style.right = `${widthDelta - 120 + 20}px`;
        }
      }
    };

    setTimeout(() => {
      calculateRightPosition();
    });

    window.addEventListener('resize', calculateRightPosition);

    return () => {
      window.removeEventListener('resize', calculateRightPosition);
    };
  }, [actionMenu]);


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
  const { activeIndex } = useTableOfContents({
    selector: '.rf-page__section-title',
    additionalOffset: ADDITIONAL_SCROLL_OFFSET,
    deps: [preloader]
  });

  /** Боковая навигация для секций */
  const asideJSX = sections?.filter((section: IPageSection) => !!section.title)
    .map((section: IPageSection) => {
      const onNavClick = () => {
        const block = document.getElementById(section.id);

        if (block && pageHeaderRef.current) {
          const top = block.getBoundingClientRect().top + pageYOffset - ADDITIONAL_SCROLL_OFFSET;
          window.scrollTo(0, top);
        }
      };

      return (
        <div key={ section.id } className='rf-page__aside-link' onClick={ onNavClick }>
          { section.title }
        </div>
      );
    });

  /** Передвигаем слайдер к активной секции */
  useEffect(() => {
    showNavigationPosition &&
    setTimeout(() => {
      if (sliderRef.current) {
        const navLinks = document.querySelectorAll('.rf-page__aside-link');
        const navLink = navLinks[activeIndex >= navLinks.length ? navLinks.length - 1 : activeIndex];

        if (asideRef.current && navLink) {
          sliderRef.current.style.top = `${navLink.getBoundingClientRect().top - asideRef.current.getBoundingClientRect().top}px`;
        }
      }
    });
  }, [activeIndex]);


  // -------------------------------------------------------------------------------------------------------------------

  const showAside = !!sections && sections.some((s: IPageSection) => !!s.title);

  const asideBlock = showNavigation && showAside && (
    <aside className='rf-page__content-aside' ref={ asideRef }>
      <div className='rf-page__aside-inner'>
        {showNavigationPosition &&
        <div className='rf-page__aside-bar' ref={lineRef}>
          <div className='rf-page__aside-slider' ref={sliderRef}/>
        </div>
        }
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


      {navigation && (
        <div className='rf-page__tabs'>
          <Tabs list={navigation}/>
        </div>
      )}

      <div className='rf-page__content--sections'>

        {
          preloader ? <Preloader/> : (
            <>
              <div className='rf-page__content-sections' ref={ sectionsRef }>
                { sectionsJSX }
              </div>

              { asideBlock }
            </>
          )
        }
      </div>

      { !preloader && buttonsGroup && !!buttonsGroup.length && (
        <div className='rf-page__buttons-group'>
          <ButtonGroup list={buttonsGroup} max={countOfButtonsGroup}/>
        </div>
      )
      }
    </div>
  );
};
export default PageWithSections;
