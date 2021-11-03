import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { usersMocks } from '../../popups/FindUsers/users.mocks';

import UserCard from './UserCard';
import CommentTile from "../CommentTile";
import {byText} from "testing-library-selector";

const user = usersMocks[0];

describe('Test <UserCard/> component', () => {
    it('should render UserCard component', () => {
        render(<UserCard {...user} />)
    });

    it('should be wrapper', () => {
        const { container } = render(<UserCard {...user} />);
        expect(container.getElementsByClassName('rf-card__user-wrapper')).toHaveLength(1);
    });

    it('should be user-photo', () => {
        const { container } = render(<UserCard {...user} />);
        expect(container.getElementsByClassName('rf-card__user-photo-wrapper')).toHaveLength(1);
    });

    it('should be copy icon', () => {
        const { container } = render(<UserCard {...user} canCopy />);
        expect(container.getElementsByClassName('rf-card__icon-wrapper')).toHaveLength(1);
    });

    it('should be first label', () => {
        render(<UserCard {...user} firstLabel={'Табельный номер'} valueByFirstLabel={'0987654321'} />);
        expect(byText(/Табельный номер/i).get()).toBeInTheDocument();
        expect(byText(/0987654321/i).get()).toBeInTheDocument();
    });

    it('should be second label', () => {
        render(<UserCard {...user} secondLabel={'Второй лейбл'} valueBySecondLabel={'Значение'} />);
        expect(byText(/Второй лейбл/i).get()).toBeInTheDocument();
        expect(byText(/Значение/i).get()).toBeInTheDocument();
    });

    it('should be user fullName', () => {
        render(<UserCard {...user} />);
        expect(byText(user.fullName).get()).toBeInTheDocument();
    });

    it('should be role', () => {
        render(<UserCard {...user} role={'role'} />);
        expect(byText(/role/i).get()).toBeInTheDocument();
    });

    it('should be position', () => {
        render(<UserCard {...user} role={'position'} />);
        expect(byText(/position/i).get()).toBeInTheDocument();
    });
    it('should be period', () => {
        render(<UserCard {...user} role={'period'} />);
        expect(byText(/period/i).get()).toBeInTheDocument();
    });
});
