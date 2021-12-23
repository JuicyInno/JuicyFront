import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';

import Pagination  from './Pagination';

const PAGES_WITHOUT_DOTS = 7;
const PAGES_WITH_NUMBER_SELECT = 21;

describe('Test <Pagination/> component', () => {
    it('should render Pagination component', () => {
        render(<Pagination count={PAGES_WITHOUT_DOTS} />)
    });

    it('should be main class', () => {
        const { container } = render(<Pagination count={PAGES_WITHOUT_DOTS} />);
        expect(container.getElementsByClassName('rf-pagination')).toHaveLength(1);
    });

    it('should be be two chevrons', () => {
        const { container } = render(<Pagination count={PAGES_WITHOUT_DOTS} />);
        expect(container.getElementsByClassName('rf-pagination__chevron-wrapper')).toHaveLength(2);
    });

    it('should be input', () => {
        const { container } = render(<Pagination count={PAGES_WITH_NUMBER_SELECT} />);
        expect(container.getElementsByClassName('rf-pagination__input')).toHaveLength(1);
    });


    it('should be all labels', () => {
        const { container } = render(<Pagination count={PAGES_WITHOUT_DOTS} />);
        expect(container.getElementsByClassName('rf-pagination__label')).toHaveLength(PAGES_WITHOUT_DOTS);
    });

    it('should be correct work input ', () => {
        render(<Pagination count={PAGES_WITH_NUMBER_SELECT} />);
        const input = screen.getByPlaceholderText('№ страницы');
        fireEvent.change(input, { target: { value: '3' } });
        expect(input).toHaveValue('3');
    });

    it('should be call getCurrentPage ', () => {
        const getCurrentPage = jest.fn();
        render(<Pagination getCurrentPage={getCurrentPage} count={PAGES_WITHOUT_DOTS} />);
        const page = screen.getByText(/2/);
        fireEvent.click(page);
        expect(getCurrentPage).toHaveBeenCalledTimes(1);
    });

    it('should be disabledPages ', () => {
        const { container } = render(<Pagination disabledPages={[3]} count={PAGES_WITHOUT_DOTS} />);
        expect(container.getElementsByClassName('rf-pagination__label--disabled')).toHaveLength(1);
    });

});
