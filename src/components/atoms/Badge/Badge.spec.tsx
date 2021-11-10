import React from 'react';
import { render, screen } from '@testing-library/react';
import Badge from './Badge';

describe('Test <Badge/> component', () => {
  it('should render <Badge /> component with text "Badge" and badgeContent "9"', () => {
    const { container } = render(
      <Badge badgeContent={9}>
        <span className='badge-test-9'>Badge</span>
      </Badge>
    );

    const badgeComponent = container.getElementsByClassName('rf-badge').item(0);
    const badgeContent = container.getElementsByClassName('badge-test-9').item(0);

    expect(badgeComponent?.textContent).toBe('9');
    expect(badgeContent?.textContent).toBe('Badge');
  });

  it('should render <Badge /> component with badgeContent "99+"', () => {
    render(
      <Badge badgeContent={999} max={99}>
        Badge
      </Badge>
    );

    const t = screen.getByText('99+');
    expect(t).toBeInTheDocument();
  });

  it('should be empty and have class "rf-badge--dot"', () => {
    const badge = <Badge>Badge</Badge>;
    const { container } = render(badge);
    const item = container.getElementsByClassName('rf-badge')[0];
    expect(item).toHaveClass('rf-badge--dot');
    expect(item?.textContent).toHaveLength(0);
  });

  it('should be blue', () => {
    const badge = <Badge variant='blue'>Badge</Badge>;
    const { container } = render(badge);
    expect(container.getElementsByClassName('rf-badge--blue')).toHaveLength(1);
  });

  it('should be lightBlue', () => {
    const { container } = render(<Badge variant='lightBlue'> Badge </Badge>);
    expect(container.getElementsByClassName('rf-badge--lightBlue')).toHaveLength(1);
  });

  it('should be turquoise', () => {
    const { container } = render(<Badge variant='turquoise'> Badge </Badge>);
    expect(container.getElementsByClassName('rf-badge--turquoise')).toHaveLength(1);
  });

  it('should be green', () => {
    const { container } = render(<Badge variant='green'> Badge </Badge>);
    expect(container.getElementsByClassName('rf-badge--green')).toHaveLength(1);
  });

  it('should be yellow', () => {
    const { container } = render(<Badge variant='yellow'> Badge </Badge>);
    expect(container.getElementsByClassName('rf-badge--yellow')).toHaveLength(1);
  });

  it('should be red', () => {
    const { container } = render(<Badge variant='red'> Badge </Badge>);
    expect(container.getElementsByClassName('rf-badge--red')).toHaveLength(1);
  });

  it('should be magenta', () => {
    const { container } = render(<Badge variant='magenta'> Badge </Badge>);
    expect(container.getElementsByClassName('rf-badge--magenta')).toHaveLength(1);
  });

  it('should be purple', () => {
    const { container } = render(<Badge variant='purple'> Badge </Badge>);
    expect(container.getElementsByClassName('rf-badge--purple')).toHaveLength(1);
  });

  it('should be violet', () => {
    const { container } = render(<Badge variant='violet'> Badge </Badge>);
    expect(container.getElementsByClassName('rf-badge--violet')).toHaveLength(1);
  });
});
