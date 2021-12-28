import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import PageWithSections from './PageWithSections';
import { BrowserRouter } from 'react-router-dom';
import { IPageSection } from '../../../types/projects.types';
import { IButtonGroup } from '../../../types';

describe('Test <PageWithSections /> component', () => {
  // --------- BackUrl -------------------------------------------------------------------------------------------------
  it('Should render backUrl button', () => {
    const { container } = render(<PageWithSections backUrl={'/test'} />, { wrapper: BrowserRouter });

    expect(container.getElementsByClassName('rf-page__sections-header-back')).toHaveLength(1);
  });

  it('Should run onBackUrlClick', () => {
    const callback = jest.fn();
    const { container } = render(<PageWithSections backUrl={'/test'} onBackUrlClick={callback} />, { wrapper: BrowserRouter });

    const btn = container.getElementsByClassName('rf-page__sections-header-back').item(0);
    btn && userEvent.click(btn);

    expect(callback.mock.calls).toHaveLength(1);
  });

  // --------- Header --------------------------------------------------------------------------------------------------
  it('Should render title', () => {
    render(<PageWithSections title={'testTitle'} />, { wrapper: BrowserRouter });
    expect(screen.getByText('testTitle')).toHaveTextContent('testTitle');
  });

  it('Should hide header when showHeader is false', () => {
    const { container } = render(<PageWithSections showHeader={false} title={'testTitle'} />, { wrapper: BrowserRouter });
    expect(container.getElementsByClassName('rf-page__sections-header--hidden')).toHaveLength(1);
  });

  it('Should render only preloader', () => {
    const { container } = render(<PageWithSections title={'testTitle'} preloader />, { wrapper: BrowserRouter });

    expect(container.getElementsByClassName('preloader')).toHaveLength(1);
    expect(container.getElementsByClassName('rf-page__content-sections')).toHaveLength(0);
    expect(container.getElementsByClassName('rf-page__aside')).toHaveLength(0);
  });

  it('Should render navigation block', () => {
    const { container, rerender } = render(<PageWithSections title={'testTitle'} navigation={[]} />, { wrapper: BrowserRouter });
    expect(container.getElementsByClassName('rf-page__tabs')).toHaveLength(0);

    rerender(<PageWithSections title={'testTitle'} navigation={[{ label: 'tab'}]} />)
    expect(container.getElementsByClassName('rf-page__tabs')).toHaveLength(1);

    rerender(<PageWithSections title={'testTitle'} />);
    expect(container.getElementsByClassName('rf-page__tabs')).toHaveLength(0);
  });

  // --------- Aside ---------------------------------------------------------------------------------------------------
  it('Should render aside navigation only with showNavigation and sections with title', () => {
    const section: IPageSection = {
      component: <div>section content</div>,
      id: '1',
      title: 'sectionTitle'
    };

    const emptySection: IPageSection = {
      component: <div>section content</div>,
      id: '2',
    };

    const { container, rerender } = render(<PageWithSections sections={[section]} />, { wrapper: BrowserRouter });
    expect(container.getElementsByClassName('rf-page__content-aside')).toHaveLength(1);

    rerender(<PageWithSections showNavigation={false} sections={[section]} />);
    expect(container.getElementsByClassName('rf-page__content-aside')).toHaveLength(0);

    rerender(<PageWithSections sections={[emptySection]} />);
    expect(container.getElementsByClassName('rf-page__content-aside')).toHaveLength(0);

    rerender(<PageWithSections />);
    expect(container.getElementsByClassName('rf-page__content-aside')).toHaveLength(0);

    rerender(<PageWithSections sections={[section, emptySection]} />);
    expect(container.getElementsByClassName('rf-page__content-aside')).toHaveLength(1);

  });

  it('Should render aside navigation links from titles', () => {
    const section: IPageSection = {
      component: <div>section content</div>,
      id: '1',
      title: 'sectionTitle'
    };

    const emptySection: IPageSection = {
      component: <div>section content</div>,
      id: '2',
    };

    const { container, rerender } = render(<PageWithSections sections={[section]} />, { wrapper: BrowserRouter });
    expect(container.getElementsByClassName('rf-page__aside-link')).toHaveLength(1);
    expect(container.getElementsByClassName('rf-page__aside-link')[0]).toHaveTextContent('sectionTitle');

    rerender(<PageWithSections sections={[section, emptySection]} />);
    expect(container.getElementsByClassName('rf-page__aside-link')).toHaveLength(1);

  });

  it('Should render aside position only with showNavigationPosition', () => {
    const section: IPageSection = {
      component: <div>section content</div>,
      id: '1',
      title: 'sectionTitle'
    };

    window.scrollTo = jest.fn();

    const { container, rerender } = render(<PageWithSections sections={[section]} />, { wrapper: BrowserRouter });
    expect(container.getElementsByClassName('rf-page__aside-link')).toHaveLength(1);
    expect(container.getElementsByClassName('rf-page__aside-link--active')).toHaveLength(0);

    rerender(<PageWithSections sections={[section]} showNavigationPosition />);
    expect(container.getElementsByClassName('rf-page__aside-link')).toHaveLength(1);
    fireEvent.click(container.getElementsByClassName('rf-page__aside-link')[0]);
    expect(container.getElementsByClassName('rf-page__aside-link--active')).toHaveLength(1);

  });

  // --------- BtnGroup-------------------------------------------------------------------------------------------------

  it('Should render buttons', () => {

    const btns: IButtonGroup[] = [
      {
        label: 'btnTest'
      },
      {
        label: '2'
      },
      {
        label: '3'
      }
    ]

    const { container, rerender } = render(<PageWithSections />, { wrapper: BrowserRouter });
    expect(container.getElementsByClassName('rf-page__buttons-group')).toHaveLength(0);

    rerender(<PageWithSections buttonsGroup={btns} />);
    expect(container.getElementsByClassName('rf-page__buttons-group')).toHaveLength(1);

  });

});
