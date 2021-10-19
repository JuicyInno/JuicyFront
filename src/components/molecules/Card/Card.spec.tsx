import React from 'react';
import { render, screen } from '@testing-library/react';

import Card, { ICard } from './Card';
import { usersMocks } from '../../popups/FindUsers/users.mocks';

const data: ICard = {
    id: '',
    title: 'Надбавка за увеличение объёма продаж',
    requestNumber: '347347347',
    date: '01.01.2021',
    statusText: 'На согласовании',
    statusColor: 'yellow',
    users: usersMocks.slice(0, 1),
    onClick: () => { }
};

describe('Test <Card/> component', () => {
    it('should render Card component', () => {
        render(<Card {...data} />)
    });

    it('should be wrapper', () => {
        const { container } = render(<Card {...data} />);
        expect(container.getElementsByClassName('rf-card__wrapper')).toHaveLength(1);
    });

    it('should be tile', () => {
        const { container } = render(<Card {...data} />);
        expect(container.getElementsByClassName('rf-card__tile')).toHaveLength(1);
    });

    it('should be title', () => {
        const { container } = render(<Card {...data} />);
        expect(container.getElementsByClassName('rf-card__title')).toHaveLength(1);
    });

    it('should have "process" button on tab by tasks', () => {
        const { container } = render(<Card {...data} />);
        expect(container.getElementsByClassName('rf-card__button-wrapper')).toHaveLength(1);
    });

    it('shouldn\'t have "process" button on tab by history', () => {
        const { container } = render(<Card {...data} isHistoryTab />);
        expect(container.getElementsByClassName('rf-card__button-wrapper')).not.toHaveLength(1);
    });
});
