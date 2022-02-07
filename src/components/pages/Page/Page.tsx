import React, { ReactNode } from 'react';
import './Page.scss';
import { Link } from 'react-router-dom';
import { ITab } from '../../../types';
import Preloader from '../../atoms/Preloader';
import Tabs from '../../atoms/Tabs';
import { ArrowsChevronLeft } from '../../../indexIcon';


export interface IPageProps {
  title?: ReactNode;
  className?: string;
  backUrl?: string;
  onBackUrlClick?: () => void;
  children?: ReactNode | ReactNode[];
  /** Navigation */
  navigation?: ITab[];
  preloader?: boolean;
}

const Page: React.FC<IPageProps> = ({
  title,
  className = '',
  backUrl = '',
  onBackUrlClick,
  children,
  navigation,
  preloader = false
}: IPageProps) => {

  // -------------------------------------------------------------------------------------------------------------------


  const onBackClick = (e: React.MouseEvent) => {
    if (onBackUrlClick) {
      e.preventDefault();
      onBackUrlClick();
    }
  };

  return (
    <div className={`rf-page ${className}`}>
      <header className='rf-page__header'>
        <div className='rf-page__header-wrapper'>
          {backUrl && <Link to={backUrl} onClick={onBackClick} className='rf-page__header-back'>
            <ArrowsChevronLeft />
          </Link>}
          <h2 className='rf-page__title'>{title}</h2>
        </div>
      </header>

      <div className='rf-page__content'>
        {!!navigation?.length && (
          <div className='rf-page__tabs'>
            <Tabs list={navigation}/>
          </div>
        )}
        {preloader ? <Preloader/> : children}
      </div>
    </div>
  );
};

export default Page;
