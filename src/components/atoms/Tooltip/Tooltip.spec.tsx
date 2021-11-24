import React from 'react';
import { render } from '@testing-library/react';
import Tile from './Tile';

describe('Test <Tile/> component', () => {

  it('should render Tile component', () => {
    render(<Tile> Tile </Tile>)
  });

  it('should have content with text "Content"', () => {
    const { container } = render(<Tile><p className='content'>Content</p></Tile>);

    expect(container.getElementsByClassName('content')).toHaveLength(1);
    expect(container.querySelector('.content')).toHaveTextContent('Content');
  });

  it('should have class "custom-class"', () => {
    const { container } = render(<Tile className='custom-class'>
      <p className='content'>Content</p>
    </Tile>);
    expect(container.querySelector('.rf-tile')).toHaveClass('custom-class');
  });
});
