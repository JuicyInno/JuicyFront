import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Tabs from './Tabs';
import { ITab } from '../../../types';
import { BrowserRouter } from 'react-router-dom';

describe('Test <Tabs/> component', () => {
  const list: ITab[] = [
    {
      label: 'Заявки',
      tab: <div className="first-content">Tab1</div>
    },
    {
      label: 'Запросы',
      tab: <div className="active-tab">Tab2</div>,
      active: true
    },
    {
      label: 'Ситуации',
      disabled: true
    }
  ];
  
  it('should have 3 Tabs', () => {
    const { container } = render(
      <BrowserRouter>
        <Tabs list={ list }/>
      </BrowserRouter>
    );
    expect(container.getElementsByClassName('rf-tabs__link')).toHaveLength(3);
  });
  
  it('should have active tab at index 1', () => {
    const { container } = render(
      <BrowserRouter>
        <Tabs list={ list }/>
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
        <Tabs list={ list }/>
      </BrowserRouter>
    );
    
    const button = container.getElementsByTagName('button').item(2);
    
    if (!button) {
      fail('Кнопка не найдена');
    }
    
    expect(button.getAttribute('disabled')).toBe('');
  });
  
  it('should change active tab to 1st on click', () => {
    const { container } = render(<BrowserRouter>
      <Tabs list={ list }/>
    </BrowserRouter>);
    const button = container.getElementsByTagName('button').item(0);
    
    if (!button) {
      fail('Кнопка не найдена')
    }
    
    expect(button.classList.contains('rf-tabs__button--active')).toBeFalsy();
    fireEvent.click(button);
    expect(button.classList.contains('rf-tabs__button--active')).toBeTruthy();
    const tab = screen.getByText('Tab1');
    expect(tab).toBeInTheDocument();
  });
});
