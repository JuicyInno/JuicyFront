import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { usersMocks } from '../../popups/FindUsers/users.mocks';

import EntityCard from './EntityCard';
import CommentTile from "../CommentTile";
import {byText} from "testing-library-selector";

const entity = usersMocks[0];

describe('Test <EntityCard/> component', () => {
    it('should render EntityCard component', () => {
        render(<EntityCard {...entity} />)
    });

    it('should be wrapper', () => {
        const { container } = render(<EntityCard {...entity} />);
        expect(container.getElementsByClassName('rf-card__entity-wrapper')).toHaveLength(1);
    });

    it('should be entity-photo', () => {
        const { container } = render(<EntityCard {...entity} />);
        expect(container.getElementsByClassName('rf-card__entity-photo-wrapper')).toHaveLength(1);
    });

    it('should be copy icon', () => {
        const { container } = render(<EntityCard {...entity} canCopy />);
        expect(container.getElementsByClassName('rf-card__icon-wrapper')).toHaveLength(1);
    });

    it('should be first label', () => {
        render(<EntityCard {...entity} firstLabel={'Табельный номер'} valueByFirstLabel={'0987654321'} />);
        expect(byText(/Табельный номер/i).get()).toBeInTheDocument();
        expect(byText(/0987654321/i).get()).toBeInTheDocument();
    });

    it('should be second label', () => {
        render(<EntityCard {...entity} secondLabel={'Второй лейбл'} valueBySecondLabel={'Значение'} />);
        expect(byText(/Второй лейбл/i).get()).toBeInTheDocument();
        expect(byText(/Значение/i).get()).toBeInTheDocument();
    });

    it('should be entity fullName', () => {
        render(<EntityCard {...entity} />);
        expect(byText(entity.fullName).get()).toBeInTheDocument();
    });

    it('should be role', () => {
        render(<EntityCard {...entity} role={'role'} />);
        expect(byText(/role/i).get()).toBeInTheDocument();
    });
});
