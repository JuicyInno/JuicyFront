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

  it('should render Tooltip component with disposable', () => {
    render(<Tooltip disposable>
      <div>Button</div>
      <div >
        <p>Tooltip</p>
      </div>
    </Tooltip>)

    expect(screen.getByText('Tooltip')).toBeInTheDocument()
  });

  it('should render Tooltip component withClosing', () => {
    const { container } = render(<Tooltip disposable withClosing>
      <div>Button</div>
      <div >
        <p>Tooltip</p>
      </div>
    </Tooltip>)
    expect(container.getElementsByClassName('rf-tooltip__inner--closing')).toHaveLength(1);
  });

  it('should render Tooltip component with default size m', () => {
    const { container } = render(<Tooltip disposable withClosing>
      <div>Button</div>
      <div >
        <p>Tooltip</p>
      </div>
    </Tooltip>)
    expect(container.getElementsByClassName('rf--m')).toHaveLength(1);
  });

  it('should render Tooltip component with size m', () => {
    const { container } = render(<Tooltip disposable size='m'>
      <div>Button</div>
      <div >
        <p>Tooltip</p>
      </div>
    </Tooltip>)
    expect(container.getElementsByClassName('rf--m')).toHaveLength(1);
  });

  it('should render Tooltip component size l', () => {
    const { container } = render(<Tooltip disposable size='l'>
      <div>Button</div>
      <div >
        <p>Tooltip</p>
      </div>
    </Tooltip>)
    expect(container.getElementsByClassName('rf--l')).toHaveLength(1);
  });

  it('should render Tooltip component with custom classname', () => {
    const { container } = render(<Tooltip disposable className='testClassName'>
      <div>Button</div>
      <div >
        <p>Tooltip</p>
      </div>
    </Tooltip>)
    expect(container.getElementsByClassName('testClassName')).toHaveLength(1);
  });

  it('should  not render Tooltip component with isVisible == false', async () => {
    render(<Tooltip isVisible={false} >
      <div data-testid="button">Button</div>
      <div data-testid="tooltip" >
        <p>Tooltip</p>
      </div>
    </Tooltip>)

    fireEvent.mouseOver(screen.getByText('Button'));

    await waitFor(() => screen.getByTestId('button'))
    expect(screen.queryByTestId('tooltip')).toBeNull();
  });

  it('should render Tooltip component with isVisible == true', async () => {
    render(<Tooltip isVisible >
      <div data-testid="button">Button</div>
      <div data-testid="tooltip" >
        <p>Tooltip</p>
      </div>
    </Tooltip>)

    fireEvent.mouseOver(screen.getByText('Button'));

    await waitFor(() => screen.getByTestId('button'))
    expect(screen.queryByTestId('tooltip')).toBeInTheDocument()
  });

  it('should render Tooltip component with position = top', () => {
    const { container } = render(<Tooltip disposable position='top' >
      <div>Button</div>
      <div>
        <p>Tooltip</p>
      </div>
    </Tooltip>)

    expect(container.getElementsByClassName('rf-tooltip__inner--top')).toHaveLength(1);
  });

  it('should render Tooltip component with position = bottom-start', () => {
    const { container } = render(<Tooltip disposable position='bottom-start' >
      <div>Button</div>
      <div>
        <p>Tooltip</p>
      </div>
    </Tooltip>)

    expect(container.getElementsByClassName('rf-tooltip__inner--bottom-start')).toHaveLength(1);
  });

  it('should render Tooltip component with background = white', () => {
    const { container } = render(<Tooltip disposable background='white' >
      <div>Button</div>
      <div>
        <p>Tooltip</p>
      </div>
    </Tooltip>)

    expect(container.getElementsByClassName('rf-tooltip--white')).toHaveLength(1);
  });

  it('should render Tooltip component with background = primary', () => {
    const { container } = render(<Tooltip disposable background='primary' >
      <div>Button</div>
      <div>
        <p>Tooltip</p>
      </div>
    </Tooltip>)

    expect(container.getElementsByClassName('rf-tooltip--primary')).toHaveLength(1);
  });

  it('should render Tooltip component with default background ', () => {
    const { container } = render(<Tooltip disposable  >
      <div>Button</div>
      <div>
        <p>Tooltip</p>
      </div>
    </Tooltip>)

    expect(container.getElementsByClassName('rf-tooltip--default')).toHaveLength(1);
  });

  it('should render Tooltip component with portal ', () => {
    render(<Tooltip disposable portal >
      <div>Button</div>
      <div>
        <p>Tooltip</p>
      </div>
    </Tooltip>)

    expect(screen.getByTestId('portal')).toBeInTheDocument();
  });
});
