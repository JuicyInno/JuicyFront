import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Accordion from './Accordion';

import data from './mock';

describe('Test <Accordion /> component', () => {
  it('should be render', () => {
    const { container } = render(<Accordion data={data} />);

    expect(container.getElementsByClassName('rf-accordion__item-wrap')).toHaveLength(3);
  });

  it('should be defaultOpened first item', () => {
    const { container } = render(<Accordion data={data.map((item, index) => ({ ...item, defaultOpened: index === 0 }))} />);

    expect(container.getElementsByClassName('rf-accordion__item-wrap').item(0)).toHaveClass('rf-accordion__item--opened');
    expect(container.getElementsByClassName('rf-accordion__item--opened')).toHaveLength(1);
  });

  it('should be collapse', () => {
    const { container } = render(<Accordion data={data} />);

    const firstItem = container.getElementsByClassName('rf-accordion__item').item(0);
    const item = container.getElementsByClassName('rf-accordion__item').item(1);
    const firstWrapItem = container.getElementsByClassName('rf-accordion__item-wrap').item(0);
    const wrapItem = container.getElementsByClassName('rf-accordion__item-wrap').item(1);

    if (!item) {
      fail('Нет элемента');
    }

    fireEvent.click(item);

    expect(wrapItem).toHaveClass('rf-accordion__item--opened');
    expect(container.getElementsByClassName('rf-accordion__item--opened')).toHaveLength(1);

    if (!firstItem) {
      fail('Нет элемента');
    }

    fireEvent.click(firstItem);

    expect(firstWrapItem).toHaveClass('rf-accordion__item--opened');
    expect(container.getElementsByClassName('rf-accordion__item--opened')).toHaveLength(1);

    fireEvent.click(firstItem);

    expect(container.getElementsByClassName('rf-accordion__item--opened')).toHaveLength(0);
  });

  it('should be pass isMultiple', () => {
    const { container } = render(<Accordion data={data.map((item) => ({ ...item, defaultOpened: true }))} isMultiple />);

    expect(container.getElementsByClassName('rf-accordion__item--opened')).toHaveLength(3);

    const firstItem = container.getElementsByClassName('rf-accordion__item').item(0);
    const item = container.getElementsByClassName('rf-accordion__item').item(1);
    const firstWrapItem = container.getElementsByClassName('rf-accordion__item-wrap').item(0);
    const wrapItem = container.getElementsByClassName('rf-accordion__item-wrap').item(1);

    if (!firstItem) {
      fail('Нет элемента');
    }

    fireEvent.click(firstItem);

    expect(firstWrapItem).not.toHaveClass('rf-accordion__item--opened');
    expect(container.getElementsByClassName('rf-accordion__item--opened')).toHaveLength(2);

    if (!item) {
      fail('Нет элемента');
    }

    fireEvent.click(item);

    expect(wrapItem).not.toHaveClass('rf-accordion__item--opened');
    expect(container.getElementsByClassName('rf-accordion__item--opened')).toHaveLength(1);
  });
});
