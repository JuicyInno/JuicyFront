import React, {
  CSSProperties, useEffect, useState
} from 'react';

import PageWithSections from './PageWithSections';
import { IPageSection } from '../../../types/projects.types';
import { ITab } from '../../../types';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'не проверено/Page With Sections',
  component: PageWithSections
};

export const pageWithSections = () => {

  const sections: IPageSection[] = [
    // {
    //   id: 'position',
    //   title: 'Позиция',
    //   component: <div style={{ height: '300px' }}> <Employee user={usersMocks[usersMocks.length - 1]}/> </div>
    // },
    // {
    //   id: 'noname',
    //   component: <div style={{ height: '100px' }}> Без названия </div>
    // },
    // {
    //   id: 'org',
    //   title: 'Организационные данные',
    //   component: <div style={{ height: '300px' }}> Организационные данные </div>,
    //   hideBackground: true
    // },
    {
      id: 'test1',
      title: 'Раздел 1',
      component: <div style={ { height: '300px' } }> Раздел 1 </div>
    },
    // {
    //   id: 'test22',
    //   title: 'Раздел 22',
    //   component: <RequestHistory requestPath={[
    //     {
    //     /** Сфера деятельности*/
    //       actArea: '',
    //       /** Ид. пути выполнения*/
    //       pathId: 'a',
    //       /** Шаг маршрута*/
    //       stepId: 'a',
    //       /** Тип шаг (ид)*/
    //       activityId: 'a',
    //       /** Тип шаг (текст)*/
    //       activityText: 'a',
    //       /** Агент (ид)*/
    //       agent: 'a',
    //       /** Агент (текст)*/
    //       agentName: 'a',
    //       /** Фактический исполнитель*/
    //       user: [],
    //       /** Статус (ид)*/
    //       statusId: 'a',
    //       /** Статус (текст)*/
    //       statusText: 'a',
    //       /** Критичность (0 - None (no color) / 1 - Error (red) / 2 - Warning (yellow) / 3 - Success (green))*/
    //       criticality: '1',
    //       date: Date.now()
    //     }
    //   ]}/>
    // }
  ];

  const navigation: ITab[] = [
    {
      url: '/page1',
      label: 'Page 1'
    },
    {
      url: '/page2',
      label: 'Page 2'
    }
  ];

  const shellAsideStyle: CSSProperties = {
    position: 'fixed',
    top: '20px',
    bottom: '20px',
    left: '20px',
    zIndex: 1000,
    width: '80px',
    padding: '20px',
    borderRadius: '20px',
    boxShadow: '0 4px 10px rgb(0 0 0 / 4%)',
    backgroundColor: 'var(--base-000)',
    flexShrink: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 2000);
  }, []);

  return (
    <BrowserRouter>

      <div style={ shellAsideStyle }/>
      <div style={ { marginLeft: '120px' } }>
        <PageWithSections navigation={ navigation } sections={ sections } preloader={ !loaded }
          title='Изменение графика рабочего времени' backUrl='/'/>
      </div>
    </BrowserRouter>
  );
};
