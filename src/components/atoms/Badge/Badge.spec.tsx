import React from 'react';
import { render, screen } from '@testing-library/react';
import Badge from './Badge';

describe('Test <Badge/> component', () => {
  it('should render <Badge /> component with text "Badge" and badgeContent "9"', () => {
    const { container } = render(
      <Badge badgeContent='9'>
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
      <Badge badgeContent='999' max={99}>
        Badge
      </Badge>
    );

    const t = screen.getByText('99+');
    expect(t).toBeInTheDocument();
  });

  it('should be empty and have class "rf-badge--dot--s"', () => {
    const badge = <Badge size='m'>Badge</Badge>;
    const { container } = render(badge);
    const item = container.getElementsByClassName('rf-badge')[0];
    expect(item).toHaveClass('rf-badge--dot--s');
    expect(item?.textContent).toHaveLength(0);
  });
  it('should be empty and have class "rf-badge--dot--s"', () => {
    const badge = <Badge size='s'>Badge</Badge>;
    const { container } = render(badge);
    const item = container.getElementsByClassName('rf-badge')[0];
    expect(item).toHaveClass('rf-badge--dot--s');
    expect(item?.textContent).toHaveLength(0);
  });

  it('should be dark', () => {
    const badge = <Badge variant='dark'>Badge</Badge>;
    const { container } = render(badge);
    expect(container.getElementsByClassName('rf-badge--dark')).toHaveLength(1);
  });

  it('should be error', () => {
    const { container } = render(<Badge variant='error'> Badge </Badge>);
    expect(container.getElementsByClassName('rf-badge--error')).toHaveLength(1);
  });

  it('should be info', () => {
    const { container } = render(<Badge variant='info'> Badge </Badge>);
    expect(container.getElementsByClassName('rf-badge--info')).toHaveLength(1);
  });

  it('should be light', () => {
    const { container } = render(<Badge variant='light'> Badge </Badge>);
    expect(container.getElementsByClassName('rf-badge--light')).toHaveLength(1);
  });

  it('should be light-disable', () => {
    const { container } = render(<Badge variant='light-disable'> Badge </Badge>);
    expect(container.getElementsByClassName('rf-badge--light-disable')).toHaveLength(1);
  });

  it('should be light-inactive', () => {
    const { container } = render(<Badge variant='light-inactive'> Badge </Badge>);
    expect(container.getElementsByClassName('rf-badge--light-inactive')).toHaveLength(1);
  });

  it('should be success', () => {
    const { container } = render(<Badge variant='success'> Badge </Badge>);
    expect(container.getElementsByClassName('rf-badge--success')).toHaveLength(1);
  });

  it('should be warning', () => {
    const { container } = render(<Badge variant='warning'> Badge </Badge>);
    expect(container.getElementsByClassName('rf-badge--warning')).toHaveLength(1);
  });

  it('should be white', () => {
    const { container } = render(<Badge variant='white'> Badge </Badge>);
    expect(container.getElementsByClassName('rf-badge--white')).toHaveLength(1);
  });
});
