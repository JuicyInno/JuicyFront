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

  it('should render Tooltip component with default size m', () => {
    render(
      <Tooltip open>
        <div>Button</div>
        <div >
          <p>Tooltip</p>
        </div>
      </Tooltip>
    )
    expect(screen.queryByTestId('tooltip__inner')).toHaveClass('rf--m');
  });

  it('should render Tooltip component with  size m', () => {
    render(
      <Tooltip open size='m'>
        <div>Button</div>
        <div >
          <p>Tooltip</p>
        </div>
      </Tooltip>
    )
    expect(screen.queryByTestId('tooltip__inner')).toHaveClass('rf--m');
  });

  it('should render Tooltip component with  size l', () => {
    render(
      <Tooltip open size='l'>
        <div>Button</div>
        <div >
          <p>Tooltip</p>
        </div>
      </Tooltip>
    )
    expect(screen.queryByTestId('tooltip__inner')).toHaveClass('rf--l');
  });

  it('should render Tooltip component with custom classname', async () => {
    render(
      <Tooltip open className='testClassName' >
        <div >Button</div>
        <div >
          <p>Tooltip</p>
        </div>
      </Tooltip >
    )
    fireEvent.mouseOver(screen.getByText('Button'));

    await waitFor(() => screen.getByTestId('tooltip__content'));
    expect(screen.queryByTestId('tooltip__content')).toHaveClass('testClassName')
  });

  it('should  not render Tooltip component with open == false', async () => {
    render(
      <Tooltip open={false}>
        <div data-testid="button">Button</div>
        <div data-testid="tooltip" >
          <p>Tooltip</p>
        </div>
      </Tooltip>
    )

    fireEvent.mouseOver(screen.getByText('Button'));

    await waitFor(() => screen.getByTestId('button'))
    expect(screen.queryByTestId('tooltip')).toBeNull();
  });

  it('should render Tooltip component with open == true', async () => {
    render(
      <Tooltip open>
        <div data-testid="button">Button</div>
        <div data-testid="tooltip" >
          <p>Tooltip</p>
        </div>
      </Tooltip>
    )

    fireEvent.mouseOver(screen.getByText('Button'));

    await waitFor(() => screen.getByTestId('button'))
    expect(screen.queryByTestId('tooltip')).toBeInTheDocument()
  });

  it('should render Tooltip component with position = top', () => {
    const { container } = render(
      <Tooltip open position='top'>
        <div>Button</div>
        <div>
          <p>Tooltip</p>
        </div>
      </Tooltip>
    )

    expect(screen.queryByTestId('tooltip__inner')).toHaveClass('rf-tooltip__inner--top')
  });

  it('should render Tooltip component with position = bottom-start', () => {
    const { container } = render(
      <Tooltip open position='bottom-start'>
        <div>Button</div>
        <div>
          <p>Tooltip</p>
        </div>
      </Tooltip>
    )

    expect(screen.queryByTestId('tooltip__inner')).toHaveClass('rf-tooltip__inner--bottom-start')
  });

  it('should render Tooltip component with color = white', () => {
    const { container } = render(
      <Tooltip open color='white'>
        <div>Button</div>
        <div>
          <p>Tooltip</p>
        </div>
      </Tooltip>
    )
    expect(screen.queryByTestId('tooltip__content-wrapper')).toHaveClass('rf-tooltip--white')
  });

  it('should render Tooltip component with color = primary', () => {
    const { container } = render(
      <Tooltip open color='primary' >
        <div>Button</div>
        <div>
          <p>Tooltip</p>
        </div>
      </Tooltip>
    )
    expect(screen.queryByTestId('tooltip__content-wrapper')).toHaveClass('rf-tooltip--primary')
  });

  it('should render Tooltip component with default color ', () => {
    const { container } = render(
      <Tooltip open>
        <div>Button</div>
        <div>
          <p>Tooltip</p>
        </div>
      </Tooltip>
    )
    expect(screen.queryByTestId('tooltip__content-wrapper')).toHaveClass('rf-tooltip--default')
  });
});
