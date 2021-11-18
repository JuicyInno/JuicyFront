import * as React from 'react'
import { render } from '@testing-library/react'
import Status from "./Status";

describe('Test <Status/> component', () => {
    it('should be render Status component', () => {
        render(<Status type='online' size='xs'  />)
    })

    it('should be render Status in size xxs 16px', () => {
        const { container } = render(<Status type='online' size='xxs' />);
        expect(container.getElementsByClassName('rf-status__wrapper_size-xxs')).toHaveLength(1);
    })

    it('should be render Status in size xs 20px', () => {
        const { container } = render(<Status type='online' size='xs' />);
        expect(container.getElementsByClassName('rf-status__wrapper_size-xs')).toHaveLength(1);
    })

    it('should be render Status in size s 24px', () => {
        const { container } = render(<Status type='online' size='s' />);
        expect(container.getElementsByClassName('rf-status__wrapper_size-s')).toHaveLength(1);
    })
})