import React from 'react';
import {render, screen} from '@testing-library/react';
import Status from "./Status";

describe('Test <Status /> component', () => {
    it('should render AvatarStatus component', () => {
        render(<Status statusText='Согласовано' criticality='1' />)
    });

    it(`{should render Status component with critically variant 0`, () => {
        render(<Status statusText='Согласовано' criticality='0' />);
        expect(screen.getByTestId('status-background')).toHaveClass('rf-status__defaultColorBackground');
        expect(screen.getByTestId('status-symbol')).toHaveClass('rf-status__defaultColorSymbol');
    });

    it(`{should render Status component with critically variant 1`, () => {
        render(<Status statusText='Подписано ЭЦП' criticality='1' />);
        expect(screen.getByTestId('status-background')).toHaveClass('rf-status__errorColorBackground');
        expect(screen.getByTestId('status-symbol')).toHaveClass('rf-status__errorColorSymbol');
    });

    it(`{should render Status component with critically variant 2`, () => {
        render(<Status statusText='На доработке' criticality='2' />);
        expect(screen.getByTestId('status-background')).toHaveClass('rf-status__warningColorBackground');
        expect(screen.getByTestId('status-symbol')).toHaveClass('rf-status__warningColorSymbol');
    });

    it(`{should render Status component with critically variant 3`, () => {
        render(<Status statusText='Отклонено' criticality='3' />);
        expect(screen.getByTestId('status-background')).toHaveClass('rf-status__successColorBackground');
        expect(screen.getByTestId('status-symbol')).toHaveClass('rf-status__successColorSymbol');
    });

    it(`{should render Status component with critically variant 4`, () => {
        render(<Status statusText='Отклонено' criticality='4' />);
        expect(screen.getByTestId('status-background')).toHaveClass('rf-status__noneColorBackground');
        expect(screen.getByTestId('status-symbol')).toHaveClass('rf-status__noneColorSymbol');
    });
});
