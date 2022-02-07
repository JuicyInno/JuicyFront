import React from 'react';
import { render } from '@testing-library/react';
import Chip from './Chip';
import { AllDownload } from '../../../indexIcon';

describe('Test <Chip/> component', () => {
  it('should be primary', () => {
    const { container } = render(<Chip type='primary'> Button </Chip>);
    expect(container.getElementsByClassName('rf-chip--primary')).toHaveLength(1);
  });

  it('should be secondary', () => {
    const { container } = render(<Chip type='secondary'> Button </Chip>);
    expect(container.getElementsByClassName('rf-chip--secondary')).toHaveLength(1);
  });

  it('should be outline', () => {
    const { container } = render(<Chip type='outline'> Button </Chip>);
    expect(container.getElementsByClassName('rf-chip--outline')).toHaveLength(1);
  });

  it('should be pass size', () => {
    const { container, rerender } = render(<Chip> Button </Chip>);
    expect(container.getElementsByClassName('rf--m')).toHaveLength(1);

    rerender(<Chip size='s'> Button </Chip>);
    expect(container.getElementsByClassName('rf--s')).toHaveLength(1);

    rerender(<Chip size='xs'> Button </Chip>);
    expect(container.getElementsByClassName('rf--xs')).toHaveLength(1);
  });

  it('should have close button', () => {
    const { container } = render(<Chip onRemove={jest.fn}> Button </Chip>);
    expect(container.getElementsByClassName('rf-chip__right-icon ')).toHaveLength(1);
  });

  it('should have icon left', () => {
    const { container } = render(
      <Chip icon={<AllDownload />} iconPosition='left'>
        Button
      </Chip>
    );
    expect(container.getElementsByClassName('rf-chip__left-icon ')).toHaveLength(1);
  });

  it('should have icon right', () => {
    const { container } = render(
      <Chip icon={<AllDownload />} iconPosition='right'>
        Button
      </Chip>
    );
    expect(container.getElementsByClassName('rf-chip__right-icon ')).toHaveLength(1);
  });

  it('should not have icon', () => {
    const { container } = render(<Chip icon={<AllDownload />}>Button</Chip>);
    expect(container.getElementsByClassName('rf-chip__right-icon ')).toHaveLength(0);
    expect(container.getElementsByClassName('rf-chip__left-icon ')).toHaveLength(0);
  });

  it('should be disabled', () => {
    const { container } = render(<Chip disabled> Button </Chip>);
    expect(container.getElementsByClassName('rf-chip--secondary ')).toHaveLength(1);
  });

  it('should be clickableClass', () => {
    const { container } = render(<Chip onClick={jest.fn}> Button </Chip>);
    expect(container.getElementsByClassName('rf-chip--clickable ')).toHaveLength(1);
  });

  it('should be not clickableClass', () => {
    const { container } = render(
      <Chip onClick={jest.fn} disabled>
        Button
      </Chip>
    );
    expect(container.getElementsByClassName('rf-chip--clickable ')).toHaveLength(0);
  });

  it('should slice content if the content length is greater than maxLength prop', () => {
    const { container } = render(<Chip maxLength={32}> The size of the line is The size of the line is greater than 32 </Chip>);
    if (container.textContent && container.textContent.length > 32) {
      expect(container.textContent?.length).toEqual(35);
    }
  });
});
