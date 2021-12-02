import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Tooltip from './Tooltip';


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
    expect(screen.getByText('Tooltip')).toBeInTheDocument()
  });



  it('should  not render Tooltip component with isVisible === false', async () => {
    render(
      <Tooltip isVisible={false}>
        <div data-testid="Button">Button</div>
        <div data-testid="tooltip" >
          <p>Tooltip</p>
        </div>
      </Tooltip>
    )

    fireEvent.mouseOver(screen.getByText('Button'));

    await waitFor(() => screen.getByTestId('Button'))
    expect(screen.queryByTestId('tooltip')).toBeNull();
  });

  it('should render Tooltip component with background = white', () => {
    const { container } = render(
      <Tooltip background='white'>
        <div>Button</div>
        <div>
          <p>Tooltip</p>
        </div>
      </Tooltip>
    )
    expect(container.getElementsByClassName('rf-tooltip--white').length).toBe(1)
  });
})

it('should render Tooltip component with background=default', () => {
  const { container } = render(
    <Tooltip background='default'>
      <div>Button</div>
      <div>
        <p>Tooltip</p>
      </div>
    </Tooltip>
  )
  expect(container.getElementsByClassName('rf-tooltip--default').length).toBe(1)
});

