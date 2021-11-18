import * as React from 'react'
import { render } from '@testing-library/react'
import StatusWithText from "./StatusWithText";

describe('Test <StatusWithText/> component', () => {
    it('should be render StatusWithText component', () => {
        render(<StatusWithText statusText='На доработку' criticality='2' />)
    })

    it('should be render StatusWithText green', () => {
        const { container } = render(<StatusWithText statusText='Подписано' criticality='3' />);
        expect(container.getElementsByClassName('rf-status-with-text__title--success')).toHaveLength(1);
        expect(container.getElementsByClassName('rf-status-with-text__title--default')).toHaveLength(0);
    })

    it('should be render StatusWithText blue', () => {
        const { container } = render(<StatusWithText statusText='Согласовано' criticality='0' />);
        expect(container.getElementsByClassName('rf-status-with-text__title--default')).toHaveLength(1);
    })

    it('should be render StatusWithText yellow', () => {
        const { container } = render(<StatusWithText statusText='На доработку' criticality='2' />);
        expect(container.getElementsByClassName('rf-status-with-text__title--warning')).toHaveLength(1);
        expect(container.getElementsByClassName('rf-status-with-text__title--success')).toHaveLength(0);
    })

    it('should be render StatusWithText red', () => {
        const { container } = render(<StatusWithText statusText='Отклонено' criticality='1' />);
        expect(container.getElementsByClassName('rf-status-with-text__title--error')).toHaveLength(1);
        expect(container.getElementsByClassName('rf-status-with-text__title--warning')).toHaveLength(0);
    })
})