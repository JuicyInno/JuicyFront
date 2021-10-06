import React, { useEffect, useState } from 'react';
import './Confirm.scss';
import {
  Button, FormGroup, Textarea
} from '../../../index';


export interface IConfirmProps {
  /** Текст сабмита */
  textAccept: string;
  /** Действие */
  onAction: (comment?: string) => void;
  /** Текст подтверждения */
  text?: string;
  onClose?: () => void;
  /** Комментарий */
  comment?: string;
  /** Показать комментарий */
  showComment?: boolean;
  /** Язык */
  lang?: string;
}

const Confirm: React.FC<IConfirmProps> = ({
  comment,
  showComment = false,
  textAccept = 'Выбрать',
  onAction,
  onClose,
  text,
  lang = 'ru'
}: IConfirmProps) => {

  const handleSubmit = () => {
    onAction(state);
    // onClose && onClose();
  };

  const [state, setState] = useState<string>('');

  useEffect(() => {
    if (comment && showComment) {
      setState(comment);
    }
  }, [comment, showComment]);

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setState(e.target.value);
  };

  const isRussian = lang?.toLowerCase().includes('ru');
  const declineText = isRussian ? 'Отмена' : 'Cancel';
  const commentTitle = isRussian ? 'Комментарий' : 'Comment';
  const title = isRussian ? 'Подтвердите действие' : 'Confirm action';

  return (
    <div className='confirm-popup'>
      <h2 className='confirm-popup__title'>{title}</h2>
      {text && <p className='confirm-popup__text'>{text}</p>}
      {
        showComment && (
          <FormGroup label={commentTitle}>
            <Textarea value={state} onChange={onChange}/>
          </FormGroup>
        )
      }

      <footer className='confirm-popup__footer'>
        <div className='confirm-popup__footer-button'>
          <Button disabled={showComment && state === ''} onClick={handleSubmit}>{textAccept}</Button>
        </div>
        <div className='confirm-popup__footer-button'>
          <Button onClick={onClose} buttonType='light'>{declineText}</Button>
        </div>
      </footer>
    </div>
  );
};

export default Confirm;
