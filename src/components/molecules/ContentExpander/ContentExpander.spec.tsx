
import React from 'react';
import ContentExpander from './ContentExpander';
import {fireEvent, getByText, render, screen} from '@testing-library/react'
import RatePicker from "../../atoms/RatePicker";


describe('Test <ContentExpander/> component', () => {
  it('should have title "Title"', () => {
    const { container } = render(<ContentExpander title='Title'>Message</ContentExpander>);
    expect(getByText(container,'Title')).toBeTruthy();
  });

  it('should have content "Message"', () => {
    const { container } = render(<ContentExpander title='Title'>Message</ContentExpander>);
    expect(getByText(container,'Message')).toBeTruthy();

  });

  it('should be expanded', () => {
    const { container } = render(<ContentExpander title='Title' defaultValue={true}>
        Message
    </ContentExpander>);
    expect(container.getElementsByClassName('expander__icon--rotate')).toHaveLength(1);
    expect(container.getElementsByClassName('expander__content--active')).toHaveLength(1);

  });

  it('should not be expanded', () => {
    const { container } = render(<ContentExpander title='Title'>Message</ContentExpander>);
    expect(container.getElementsByClassName('expander__icon--rotate')).toHaveLength(0);
    expect(container.getElementsByClassName('expander__content--active')).toHaveLength(0);
  });

  it('should expand on click', () => {
    const { container } = render(<ContentExpander title='Title'>Message</ContentExpander>);
    expect(container.getElementsByClassName('expander__icon--rotate')).toHaveLength(0);
    expect(container.getElementsByClassName('expander__content--active')).toHaveLength(0);
    fireEvent.click(screen.getByText('Title'));
    expect(container.getElementsByClassName('expander__icon--rotate')).toHaveLength(1);
    expect(container.getElementsByClassName('expander__content--active')).toHaveLength(1);

  });

  it('should shrink on click', () => {
    const { container } = render(<ContentExpander title='Title' defaultValue={true}>
        Message
    </ContentExpander>);


    expect(container.getElementsByClassName('expander__icon--rotate')).toHaveLength(1);
    expect(container.getElementsByClassName('expander__content--active')).toHaveLength(1);
    fireEvent.click(screen.getByText('Title'));
    expect(container.getElementsByClassName('expander__icon--rotate')).toHaveLength(0);
    expect(container.getElementsByClassName('expander__content--active')).toHaveLength(0);
  });
});
