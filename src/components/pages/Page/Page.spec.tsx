import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/dom';
import React from 'react';
import Page from './Page';

describe('Test <Page /> component', () => {
  it('Should render backUrl button', () => {
    const {container} = render(<Page backUrl={'/test'}/>, {wrapper: BrowserRouter});

    expect(container.getElementsByClassName('rf-page__header-back')).toHaveLength(1);
  });

  it('Should run onBackUrlClick', () => {
    const callback = jest.fn();
    const {container} = render(<Page backUrl={'/test'} onBackUrlClick={callback}/>, {wrapper: BrowserRouter});

    const btn = container.getElementsByClassName('rf-page__header-back').item(0);
    btn && userEvent.click(btn);

    expect(callback.mock.calls).toHaveLength(1);
  });

// --------- Header --------------------------------------------------------------------------------------------------
  it('Should render title', () => {
    render(<Page title={'testTitle'}/>, {wrapper: BrowserRouter});
    expect(screen.getByText('testTitle')).toHaveTextContent('testTitle');
  });

  it('Should render only preloader', () => {
    const {container} = render(<Page title={'testTitle'} preloader><div className='testDiv'>Content</div></Page>, {wrapper: BrowserRouter});

    expect(container.getElementsByClassName('testDiv')).toHaveLength(0);
  });

  it('Should render navigation block', () => {
    const {container, rerender} = render(<Page title={'testTitle'} navigation={[]}/>, {wrapper: BrowserRouter});
    expect(container.getElementsByClassName('rf-page__tabs')).toHaveLength(0);

    rerender(<Page title={'testTitle'} navigation={[{label: 'tab'}]}/>)
    expect(container.getElementsByClassName('rf-page__tabs')).toHaveLength(1);

    rerender(<Page title={'testTitle'}/>)
    expect(container.getElementsByClassName('rf-page__tabs')).toHaveLength(0);
  });
});
