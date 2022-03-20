import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { Layout, LayoutColumn, LayoutContext } from '.'

describe('Test <Layout/> component', () => {
  it('should have correct maxWidth', () => {
    const { rerender } = render(<Layout maxWidth="s">content</Layout>);
    expect(screen.getByText('content')).toHaveClass('layout--size-s');

    rerender(<Layout maxWidth="m">content</Layout>)
    expect(screen.getByText('content')).toHaveClass('layout--size-m');

    rerender(<Layout maxWidth="l">content</Layout>)
    expect(screen.getByText('content')).toHaveClass('layout--size-l');
  });

  it('should open and close second column', () => {
    const { container } = render(
      <Layout maxWidth="s">
        <LayoutColumn>
          <LayoutContext.Consumer>
            {(value) =>(
              <button onClick={() => value!.setColumnVisible(!value!.isColumnVisible)}>
                toggle
              </button>
            )}
          </LayoutContext.Consumer>
        </LayoutColumn>
        <LayoutColumn>2</LayoutColumn>
      </Layout>
    );

    expect(container.querySelector('.layout-column--visible')).not.toBeInTheDocument();

    fireEvent.click(screen.getByText('toggle'));
    expect(container.querySelector('.layout-column--visible')).toBeInTheDocument();


    fireEvent.click(screen.getAllByLabelText('Закрыть')[1]);
    expect(container.querySelector('.layout-column--visible')).not.toBeInTheDocument();
  });
});
