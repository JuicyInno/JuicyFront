import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import { ITab } from '../../../types';
import Page from './Page';
import PageWithSections from '../PageWithSections';
import { IPageSection } from '../../../types/projects.types';
import { Button } from '../../../index';

export default {
  title: 'Pages/Page',
  component: Page,
};

export const page = () => {

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

  const sections: IPageSection[] = [
    {
      id: 'noname',
      component: <div style={{ height: '100px' }}> Без названия </div>
    },
    {
      id: 'org',
      title: 'Организационные данные',
      component: <div style={{ height: '300px' }}> Организационные данные </div>
    },
    {
      id: 'test1',
      title: 'Раздел 1',
      component: <div style={{ height: '300px' }}> Раздел 1 </div>
    }
  ];

  const actionMenu = (
    <>
      <Button> Согласовать </Button>
    </>
  );

  const shellAsideStyle: any = {
    position: 'fixed',
    top: '20px',
    bottom: '20px',
    left: '20px',
    width: '80px',
    borderRadius: '20px',
    backgroundColor: 'white'
  };

  return (
    <BrowserRouter>
      <div style={{
        padding: '0 20px',
        backgroundColor: 'var(--base-150)'
      }}>
        <div style={shellAsideStyle}/>
        <div style={{ marginLeft: '120px' }}>
          <Page backUrl='/' title='Изменение графика рабочего времени' navigation={navigation}>
            <PageWithSections showHeader={false} sections={sections} actionMenu={actionMenu} />
          </Page>
        </div>
      </div>
    </BrowserRouter>
  );
};
