
import React from 'react';
import CommentForm from './CommentForm';
import Comment from '../Comment'
import { render } from '@testing-library/react'
import { mokUser, mokUser2 } from '../Comment/moks/mokUser';



describe('Test <ContentExpander/> component', () => {
  it('should render without any comment', () => {
    const { container } = render(<CommentForm user={mokUser}></CommentForm>);
    const comment = container.getElementsByClassName('comment');
    expect(comment.length).toBe(0)
  });

  it('should render with one comment', () => {
    const { container } = render(
      <CommentForm user={mokUser}>
        <Comment user={mokUser2} commentText='test text' />
      </CommentForm>);
    const comment = container.getElementsByClassName('comment');
    expect(comment.length).toBe(1)
  });

  it('should render with two commenta', () => {
    const { container } = render(
      <CommentForm user={mokUser}>
        <Comment user={mokUser2} commentText='test text' />
        <Comment user={mokUser} commentText='test text' />
      </CommentForm>);
    const comment = container.getElementsByClassName('comment');
    expect(comment.length).toBe(2)
  });

  it('should rendered with correct title', () => {
    const title = 'Test title'
    const { container } = render(
      <CommentForm user={mokUser} title={title}>
        <Comment user={mokUser2} commentText='test text' />
      </CommentForm>);
    const actualTitle = container.getElementsByClassName('header-block__header')[0].innerHTML;
    expect(actualTitle).toBe(title)
  });
});
