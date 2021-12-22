import React, { useEffect, useState } from 'react';
import './Confirm.scss';
import { Button, FormGroup } from '../../../index';
import Textarea from '../../atoms/Textarea';

export interface IConfirmProps {
  /** Текст сабмита */
  textAccept: string;
  /** Действие */
  onAction: (comment?: string) => void;
  /** Текст подтверждения */
  text?: string;
  /** Функция закрытия формы */
  onClose?: () => void;
  /** Комментарий */
  comment?: string;
  /** Показать комментарий */
  showComment?: boolean;
  /** Язык */
  lang?: string;
  /** Прелоудер */
  preloader?: boolean;
}

const Confirm: React.FC<IConfirmProps> = ({
  comment,
  showComment = false,
  textAccept = 'Выбрать',
  onAction,
  onClose,
  text,
  lang = 'ru',
  preloader = false,
}: IConfirmProps) => {

  const handleSubmit = () => {
    onAction(state);

  };

  const [state, setState] = useState<string>('');

  useEffect(() => {
    if (comment && showComment) {
      setState(comment);
    }
  }, [comment, showComment]);

  const onChange = (e: Event) => {

    e.target && setState((e.target as HTMLTextAreaElement).value);
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
            <Textarea defaultValue={state} onDebounce={onChange} />
          </FormGroup>
        )
      }

      <footer className='confirm-popup__footer'>
        <div className='confirm-popup__footer-button'>
          <Button size='l' disabled={showComment && state === ''} onClick={handleSubmit} preloader={preloader}>{textAccept}</Button>
        </div>
        <div className='confirm-popup__footer-button'>
          <Button size='l' onClick={onClose} buttonType='light'>{declineText}</Button>
        </div>
      </footer>
    </div>
  );
};

export default Confirm;
