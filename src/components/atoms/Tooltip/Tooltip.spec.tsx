import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Tooltip from './Tooltip';
import Employee from "../../molecules/Employee";


describe('Test <Tooltip/> component', () => {

  it("should render Tooltip component after hover ", async () => {
    render(
      <Tooltip >
        <div>Button</div>
        <div data-testid="tooltip-content">
          <p>Tooltip</p>
        </div>
      </Tooltip>);

    fireEvent.mouseOver(screen.getByText('Button'));

    await waitFor(() => screen.getByTestId('tooltip-content'))
    expect(screen.getByText('Tooltip')).toBeInTheDocument();
  });



  it('should  not render Tooltip component with isVisible === false', async () => {
    render(
      <Tooltip isVisible={false}>
        <div data-testid="Button">Button</div>
        <div data-testid="tooltip" >
          <p>Tooltip</p>
        </div>
      </Tooltip>
    );

    fireEvent.mouseOver(screen.getByText('Button'));

    await waitFor(() => screen.getByTestId('Button'));
    expect(screen.queryByTestId('tooltip')).toBeNull();
  });

  it('should render Tooltip component with background = white', () => {
    const { container } = render(
      <Tooltip background='white'>
        <div>Button</div>
        <p>Tooltip</p>
      </Tooltip>
    );

    expect(container.getElementsByClassName('rf-tooltip--white')).toHaveLength(1);
  });

  it('should render Tooltip component with background=default', () => {
    const { container } = render(
      <Tooltip background='white'>
        <div>Button</div>
        <p>Tooltip</p>
      </Tooltip>
    );

    expect(container.getElementsByClassName('rf-tooltip--white')).toHaveLength(1);
  });

  it('should be show tooltip with delay', async () => {
    const closeDelay = 150;
    render(
      <Tooltip background='white' closeDelay={closeDelay}>
        <div>Button</div>
        <p>Tooltip</p>
      </Tooltip>
    );

    fireEvent.mouseEnter(screen.getByTestId('rf-tooltip'));

    await waitFor(() => {
      expect(screen.getByText('Tooltip')).toBeInTheDocument();
    }, {timeout: closeDelay});
  });
})

