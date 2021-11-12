import React from 'react';
import { render } from '@testing-library/react';
import Tile from './Tile';

describe('Test <Tile/> component', () => {
  it('should render Tile component', () => {
    render(<Tile> Tile </Tile>);
  });

  it('should have content with text "Content"', () => {
    const { container } = render(
      <Tile>
        <p className='content'>Content</p>
      </Tile>
    );

    expect(container.getElementsByClassName('rf-tile__background')).toHaveLength(1);
    expect(container.getElementsByClassName('content')).toHaveLength(1);
    expect(container.querySelector('.content')).toHaveTextContent('Content');
  });

  it('should have class "custom-class"', () => {
    const { container } = render(
      <Tile className='custom-class'>
        <p className='content'>Content</p>
      </Tile>
    );
    expect(container.querySelector('.rf-tile')).toHaveClass('custom-class');
  });

  it('should have type = stretch', () => {
    const { container } = render(
      <Tile type='stretch'>
        <p className='content'>Content</p>
      </Tile>
    );
    expect(container.getElementsByClassName('rf-tile--stretch')).toHaveLength(1);
  });

  it('should have hideBackground', () => {
    const { container } = render(
      <Tile hideBackground>
        <p className='content'>Content</p>
      </Tile>
    );
    expect(container.getElementsByClassName('rf-tile__background')).toHaveLength(0);
  });

  it('should have padding', () => {
    const { container } = render(
      <Tile padding='50px'>
        <p className='content'>Content</p>
      </Tile>
    );

    expect(container.getElementsByClassName('rf-tile__background').item(0)).toHaveStyle('padding: 50px');
  });

  it('should have borderRadius', () => {
    const { container } = render(
      <Tile borderRadius='10px'>
        <p className='content'>Content</p>
      </Tile>
    );

    expect(container.getElementsByClassName('rf-tile__background').item(0)).toHaveStyle('border-radius: 10px');
  });

  it('should be variant default', () => {
    const { container } = render(<Tile>Content</Tile>);

    expect(container.getElementsByClassName('rf-tile--default')).toHaveLength(1);
  });

  it('should be variant clicable-default', () => {
    const { container } = render(<Tile variant='clicable-default'>Content</Tile>);

    expect(container.getElementsByClassName('rf-tile--clicable-default')).toHaveLength(1);
  });

  it('should be variant non-clicable', () => {
    const { container } = render(<Tile variant='non-clicable'>Content</Tile>);

    expect(container.getElementsByClassName('rf-tile--non-clicable')).toHaveLength(1);
  });

  it('should be variant clicable-hover', () => {
    const { container } = render(<Tile variant='clicable-hover'>Content</Tile>);

    expect(container.getElementsByClassName('rf-tile--clicable-hover')).toHaveLength(1);
  });

  it('should be variant border', () => {
    const { container } = render(<Tile variant='border'>Content</Tile>);

    expect(container.getElementsByClassName('rf-tile--border')).toHaveLength(1);
  });
});
