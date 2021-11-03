import React from 'react';
import { render } from '@testing-library/react';

import Card, { ICard } from './Card';
import { usersMocks } from '../../popups/FindUsers/users.mocks';
import userEvent from "@testing-library/user-event";
import {byText} from "testing-library-selector";

const data: ICard = {
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
        const { container } = render(<Card {...data}  showActionButton={true}/>);
        expect(container.getElementsByClassName('rf-card__button-wrapper')).toHaveLength(1);
    });

    it('shouldn\'t have "process" button on tab by history', () => {
        const { container } = render(<Card {...data}  />);
        expect(container.getElementsByClassName('rf-card__button-wrapper')).not.toHaveLength(1);
    });

    it('should call onClick', () => {
        const onClick = jest.fn();
        const { container } = render(<Card {...data} onClick={onClick} />);


        userEvent.click(byText("Табельный номер").get())

        expect(onClick).toHaveBeenCalledTimes(1);
    });
});
