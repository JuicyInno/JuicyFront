import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Tabs from './Tabs';
import { BrowserRouter } from 'react-router-dom';

import { _simpleTabs } from './mock';

const { ResizeObserver } = window;

beforeEach(() => {
  //@ts-ignore
  delete window.ResizeObserver;
  window.ResizeObserver = jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  }));

  window.matchMedia = jest.fn().mockReturnValue({
    matches: true,
    addListener: jest.fn(),
    removeListener: jest.fn(),
  });
});

afterEach(() => {
  window.ResizeObserver = ResizeObserver;
  jest.restoreAllMocks();
});

describe('Test <Tabs/> component', () => {
  it('should have 4 Tabs', () => {
    const { container } = render(
      <BrowserRouter>
        <Tabs list={_simpleTabs} />
      </BrowserRouter>
    );
    expect(container.getElementsByClassName('rf-tabs__navigation__line')).toHaveLength(1);
    expect(container.getElementsByClassName('rf-tabs__link')).toHaveLength(4);
  });

  it('should hidden line', () => {
    const { container } = render(
      <BrowserRouter>
        <Tabs list={_simpleTabs} showLine={false} />
      </BrowserRouter>
    );
    expect(container.getElementsByClassName('rf-tabs__navigation__line')).toHaveLength(0);
  });

  it('should have active tab at index 1', () => {
    const { container } = render(
      <BrowserRouter>
        <Tabs list={_simpleTabs} />
      </BrowserRouter>
    );

    const content = container.getElementsByClassName('rf-tabs__content').item(0);
    const button = container.getElementsByClassName('rf-tabs__button').item(1);

    if (!content) {
      fail('Контент не найден');
    }

    if (!button) {
      fail('Кнопка не найдена');
    }

    const activeTab = content.getElementsByClassName('active-tab').item(0);

    if (!activeTab) {
      fail('Нет активной вкладки');
    }

    expect(button.classList.contains('rf-tabs__button--active')).toBeTruthy();
    expect(activeTab.textContent).toBe('Tab2');
  });

  it('should have last tab disabled', () => {
    const { container } = render(
      <BrowserRouter>
        <Tabs list={_simpleTabs} />
      </BrowserRouter>
    );

    const button = container.getElementsByClassName('rf-tabs__button').item(3);

    if (!button) {
      fail('Кнопка не найдена');
    }

    expect(button).toBeDisabled();
  });

  it('should change active tab to 1st on click', () => {
    const { container } = render(
      <BrowserRouter>
        <Tabs list={_simpleTabs} />
      </BrowserRouter>
    );
    const button = container.getElementsByTagName('button').item(0);

    if (!button) {
      fail('Кнопка не найдена');
    }

    expect(button.classList.contains('rf-tabs__button--active')).toBeFalsy();
    fireEvent.click(button);
    expect(button.classList.contains('rf-tabs__button--active')).toBeTruthy();
    const tab = screen.getByText('Tab1');
    expect(tab).toBeInTheDocument();
  });
});
