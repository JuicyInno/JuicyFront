import React from 'react';
import {getByText, render, screen} from '@testing-library/react';
import GhostScreen from './GhostScreen';

describe('Test <GoastScreen/> component', () => {
  it('should have text "Задачи не найдены"', () => {
    const { container } = render(<GhostScreen />);
    expect(getByText(container,'Задачи не найдены')).toBeTruthy();
  });
  it('should have text "test_text"', () => {
    const { container } = render(<GhostScreen text='test_text' />);
    expect(getByText(container,'test_text')).toBeTruthy();
  });
});
