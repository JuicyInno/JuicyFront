import React, { ReactNode, useRef } from 'react';
import './PageWithList.scss';
import { Preloader } from '../../../index';

export interface IPageWithListProps {
  /** Наполнение */
  children: ReactNode | ReactNode[];
  /** Панель с  фильтрами */
  filters?: ReactNode;
  /** Fixed action menu */
  actionMenu?: ReactNode;
  preloader?: boolean;
}

const PageWithList: React.FC<IPageWithListProps> = ({
  children,
  filters,
  actionMenu,
  preloader = false
}: IPageWithListProps) => {

  /** Ссылка на разделитель скролла */
  const dividerRef = useRef<HTMLDivElement>(null);
  /** Ссылка на контент */
  const mainRef = useRef<HTMLDivElement>(null);

  // -------------------------------------------------------------------------------------------------------------------

  const actionMenuHideClass = actionMenu ? '' : 'jf-page__main-action-menu--hidden';
  const noFiltersAndMenuClass = !actionMenu && !filters ? 'jf-page__main-action-menu--no-filters' : '';

  return (
    <div className='jf-page__with-list'>
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
            <main className='jf-page__main' ref={ mainRef }>
              <div className={ `jf-page__main-action-menu ${actionMenuHideClass} ${noFiltersAndMenuClass}` }>
                <div className='jf-page__main-action-menu-inner'>
                  <div className='jf-page__action-menu-divider--list' ref={ dividerRef }/>
                  { actionMenu }
                </div>
              </div>
              <div className='jf-page__main-content'>
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
