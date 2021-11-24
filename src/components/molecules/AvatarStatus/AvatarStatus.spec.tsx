import { render } from '@testing-library/react';
import React from 'react';
import AvatarStatus from "./AvatarStatus";

describe('Test <AvatarStatus /> component', () => {
    it('should render AvatarStatus', () => {
        const { container } = render(<AvatarStatus />);
        render(<AvatarStatus /> );
        expect(container.getElementsByClassName('rf-avatar-status')).toHaveLength(1);
    });
})