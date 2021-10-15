
import React from 'react';
import Comment from './Comment';
import { render } from '@testing-library/react'
import { mokUser } from './moks/mokUser';

describe('Test <Comment/> component', () => {
  it('should render with Test comment  ', () => {
    const arrangeComment = 'Test comment'
    const { container } = render(<Comment user={mokUser} commentText={arrangeComment} />);
    const actualComment = container.querySelector('.comment__section-comment-item p')!.innerHTML;
    expect(arrangeComment).toBe(actualComment)
  });
  it('should render ', () => {
    const arrangeComment = 'Test comment'
    const { container } = render(<Comment user={mokUser} commentText={arrangeComment} />);
    const containers = container.querySelectorAll('.comment')!;
    expect(containers.length === 1).toBe(true)
  });

  it('should render 2 comments ', () => {
    const arrangeComment = 'Test comment'
    const { container } = render(
      <>
        <Comment user={mokUser} commentText={arrangeComment} />
        <Comment user={mokUser} commentText={arrangeComment} />
      </>
    );
    const containers = container.querySelectorAll('.comment')!;
    expect(containers.length === 2).toBe(true)
  });

});

