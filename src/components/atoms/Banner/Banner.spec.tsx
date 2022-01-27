import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import {Banner} from './Banner';

describe('Test <Banner/> component', () => {
  it('should render icon, heading and subheading', () => {
    render(<Banner icon={<i>icon</i>} heading="heading" subheading="subheading" />);
    expect(screen.getByText('icon')).toBeInTheDocument();
    expect(screen.getByText('heading')).toBeInTheDocument();
    expect(screen.getByText('subheading')).toBeInTheDocument();
  });

  it('should render buttons', () => {
    const onPrimaryClick = jest.fn();
    const onSecondaryClick = jest.fn();

    render(<Banner primaryText="primary" onPrimaryClick={onPrimaryClick} secondaryText="secondary" onSecondaryClick={onSecondaryClick} />);

    fireEvent.click(screen.getByText('primary'));
    fireEvent.click(screen.getByText('secondary'));

    expect(onPrimaryClick).toBeCalled();
    expect(onSecondaryClick).toBeCalled();
  });
});
