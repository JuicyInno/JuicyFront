import React from 'react';
import {render, screen} from '@testing-library/react';
import AvatarStatus from "./AvatarStatus";

const variants: any = [
    'green',
    'default',
    'none',
    'yellow',
    'red'
];

describe('Test <AvatarStatus /> component', () => {
    it('should render AvatarStatus component without any props', () => {
        render(<AvatarStatus />)
    });

    it('should render AvatarStatus component with hasBadge prop only', () => {
        render(<AvatarStatus hasBadge />)
    });

    for(const variant of variants) {
        it(`{should render AvatarStatus component with variant = \'${variant}\' prop only}`, () => {
            render(<AvatarStatus variant={variant} />);
            expect(screen.getByTestId('avatar-status-border')).toHaveClass(`rf-avatar-status__border-color_${variant}`);
        });
    }
});