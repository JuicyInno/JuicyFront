import React, {
  ReactNode, useEffect, useMemo, useRef, useState
} from 'react';
import './PageWithList.scss';
import { Preloader } from '../../../index';
import { classnames } from '../../../utils/classnames';

export interface IPageWithListProps {
  /** Наполнение */
  children: ReactNode | ReactNode[];
  /** Панель с  фильтрами */
  filters?: ReactNode;
  /** Fixed action menu */
  actionMenu?: ReactNode;
  preloader?: boolean;
  /** overflow с внутренним скроллом для списка */
  overflowList?: boolean;
}

const PageWithList: React.FC<IPageWithListProps> = ({
  children,
  filters,
  actionMenu,
  preloader = false,
  overflowList = false
}: IPageWithListProps) => {

  /** Ссылка на разделитель скролла */
  const dividerRef = useRef<HTMLDivElement>(null);
  /** Ссылка на контент */
  const mainRef = useRef<HTMLDivElement>(null);

  // -------------------------------------------------------------------------------------------------------------------

  const actionMenuHideClass = classnames({ 'jf-page__main-action-menu--hidden': !actionMenu });
  const noFiltersAndMenuClass = classnames({ 'jf-page__main-action-menu--no-filters': !actionMenu && !filters });

  const pageClassNames = classnames( {
    'jf-page__with-list': true,
    'jf-page__with-list--overflow': overflowList
  });

  const mainClassNames = classnames( {
    'jf-page__main': true,
    'jf-page__main--overflow': overflowList
  });

  const mainContentClassNames = classnames( {
    'jf-page__main-content': true,
    'jf-page__main-content--overflow': overflowList
  });

  const [pageOffsetTop, setPageOffsetTop] = useState(0);

  const styles = useMemo(() => {
    return pageOffsetTop && overflowList ? { height: `calc(100vh - ${pageOffsetTop}px)` } : undefined;
  }, [pageOffsetTop]);

  useEffect(() => {
    if (!preloader) {
      setTimeout(() => {
        debugger;

        if (mainRef.current) {
          const topPixels = mainRef.current.offsetTop;

          setPageOffsetTop(topPixels);
        }
      });
    }
  }, [preloader]);

  return (
    <div className={pageClassNames} style={styles}>
      {
        preloader ? <Preloader/> : (
          <>
            { filters && (
              <aside className='jf-page__aside-filters'>
                <div className='jf-page__aside-filters-inner'>
                  { filters }
                </div>
              </aside>
            ) }
            <main className={mainClassNames} ref={ mainRef }>
              <div className={ `jf-page__main-action-menu ${actionMenuHideClass} ${noFiltersAndMenuClass}` }>
                <div className='jf-page__main-action-menu-inner'>
                  <div className='jf-page__action-menu-divider--list' ref={ dividerRef }/>
                  { actionMenu }
                </div>
              </div>
              <div className={mainContentClassNames}>
                { children }
              </div>
            </main>
          </>
        )
      }
    </div>
  );
};

export default PageWithList;
