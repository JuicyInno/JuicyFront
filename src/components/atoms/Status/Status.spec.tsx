import * as React from 'react'
import { render } from '@testing-library/react'
import Status from "./Status";

describe('Test <Status/> component', () => {
    it('should be render Status component', () => {
        render(<Status type='online' statusSize='s'  />)
    })

    it('should be render Status in size s 16px', () => {
        const { container } = render(<Status type='online' statusSize='s' />);
        expect(container.getElementsByClassName('rf-status__wrapper--size-s')).toHaveLength(1);
    })

    it('should be render Status in size m 20px', () => {
        const { container } = render(<Status type='online' statusSize='m' />);
        expect(container.getElementsByClassName('rf-status__wrapper--size-m')).toHaveLength(1);
    })

    it('should be render Status in size l 24px', () => {
        const { container } = render(<Status type='online' statusSize='l' />);
        expect(container.getElementsByClassName('rf-status__wrapper--size-l')).toHaveLength(1);
    })
})