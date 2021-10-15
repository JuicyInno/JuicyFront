import React, { ReactNode, useState } from 'react';
import { FormGroup, Textarea } from '../../..';
import { IUser } from '../../../types/projects.types';
import Comment from '../Comment';
import './CommentForm.scss';

export interface IContentExpanderProps {
  title?: string;
  children?: ReactNode
  user: IUser
}

const CommentForm: React.FC<IContentExpanderProps> = ({ user, title, children }: IContentExpanderProps) => {

  const [comment, setComment] = useState('');
  const [userCommnet, setUserComment] = useState<ReactNode | null>(null);

  const commentHandler = (value: string) => {
    setComment(value);
  };

  const keyPressHandler = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter') {
      setUserComment(<Comment user={user} commentText={comment} />);
      const textarea = document.getElementsByTagName('textarea')[0];
      textarea.value = '';
    }
  };

  const secondaryLabelComponent = <span className='comment-label--secondary'>{`(${comment.length}/255)`}</span>;
  const label = <span className='comment-label--label'>Комментарий</span>;


  return <div className='comment-form'>
    <div className='comment__header-block'>
      <h5 className='header-block__header'>{title}</h5>
    </div>
    <div className='comment__employee-comment'>
      {children}
      {userCommnet}
    </div>
    <FormGroup className='comment__form-input' label={label} labelSecondary={secondaryLabelComponent} >
      <Textarea autoResize={true} debounce={0} placeholder='Оставить комментарий' getValue={commentHandler} onKeyPress={keyPressHandler} />
    </FormGroup>
  </div>;
};

export default CommentForm;
