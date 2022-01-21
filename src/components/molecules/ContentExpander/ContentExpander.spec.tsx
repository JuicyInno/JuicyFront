import React from 'react';
import ContentExpander from './ContentExpander';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Test <ContentExpander /> component', () => {
  it('should be render', () => {
    const { container } = render(
      <ContentExpander title='Title' titleOpen='TitleOpen'>
        Message
      </ContentExpander>
    );

    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Message')).toBeInTheDocument();

    expect(screen.queryByText('TitleOpen')).not.toBeInTheDocument();

    expect(container.getElementsByClassName('expander__icon--rotate')).toHaveLength(0);
    expect(container.getElementsByClassName('expander__content--active')).toHaveLength(0);

    fireEvent.click(screen.getByText('Title'));

    expect(container.getElementsByClassName('expander__icon--rotate')).toHaveLength(1);
    expect(container.getElementsByClassName('expander__content--active')).toHaveLength(1);
  });

  it('should be pass className', () => {
    const { container } = render(
      <ContentExpander title='Title' className='content-expander-class-name'>
        Message
      </ContentExpander>
    );

    expect(container.getElementsByClassName('content-expander-class-name')).toHaveLength(1);
  });

  it('should be disabled', () => {
    const { container } = render(
      <ContentExpander title='Title' disabled>
        Message
      </ContentExpander>
    );

    expect(container.getElementsByClassName('expander--disabled')).toHaveLength(1);

    fireEvent.click(screen.getByText('Title'));

    expect(container.getElementsByClassName('expander__icon--rotate')).toHaveLength(0);
    expect(container.getElementsByClassName('expander__content--active')).toHaveLength(0);
  });

  it('should be pass stickArrow', () => {
    const { container } = render(
      <ContentExpander title='Title' stickArrow>
        Message
      </ContentExpander>
    );

    expect(container.getElementsByClassName('expander--arrow-stick')).toHaveLength(1);
  });

  it('should be pass showTitle', () => {
    const { container } = render(
      <ContentExpander title='Title' showTitle={false}>
        Message
      </ContentExpander>
    );

    expect(container.getElementsByClassName('expander__title--hidden')).toHaveLength(1);
  });

  it('should be pass defaultValue = true', () => {
    const { container } = render(
      <ContentExpander title='Title' defaultValue={true}>
        Message
      </ContentExpander>
    );

    expect(container.getElementsByClassName('expander__icon--rotate')).toHaveLength(1);
    expect(container.getElementsByClassName('expander__content--active')).toHaveLength(1);
  });

  it('should be pass expanded = true', () => {
    const { container } = render(
      <ContentExpander title='Title' expanded={true}>
        Message
      </ContentExpander>
    );

    expect(container.getElementsByClassName('expander__icon--rotate')).toHaveLength(1);
    expect(container.getElementsByClassName('expander__content--active')).toHaveLength(1);
  });

  it('should expand on click title', () => {
    const { container } = render(<ContentExpander title='Title'>Message</ContentExpander>);

    expect(container.getElementsByClassName('expander__icon--rotate')).toHaveLength(0);
    expect(container.getElementsByClassName('expander__content--active')).toHaveLength(0);

    fireEvent.click(screen.getByText('Title'));

    expect(container.getElementsByClassName('expander__icon--rotate')).toHaveLength(1);
    expect(container.getElementsByClassName('expander__content--active')).toHaveLength(1);
  });

  it('should be call onExpand', () => {
    const onExpand = jest.fn();
    render(
      <ContentExpander title='Title' onExpand={onExpand}>
        Message
      </ContentExpander>
    );

    fireEvent.click(screen.getByText('Title'));

    expect(onExpand).toBeCalled();
  });
});
