import React, { useEffect, useState } from 'react';
import './Confirm.scss';
import { Button, FormGroup } from '../../../index';
import Textarea, { ITextareaProps } from '../../atoms/Textarea';

export interface IConfirmProps extends Omit<ITextareaProps, 'defaultValue' | 'onDebounce' | 'onClear'> {
  /** Текст сабмита */
  textAccept: string;
  /** Действие */
  onAction: (comment?: string) => void;
  /** Текст подтверждения */
  text?: string;
  /** Событие закрытия */
  onClose?: () => void;
  /** Вернуться назад */
  onBack?: () => void;
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
  textAccept = 'Подтвердить',
  onAction,
  onClose,
  onBack,
  text,
  lang = 'ru',
  preloader = false,
  maxLength = 255,
  ...props
}: IConfirmProps) => {
  const handleSubmit = () => onAction(state);

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
  const declineText = isRussian ? 'Отменить' : 'Cancel';
  const commentTitle = isRussian ? 'Комментарий' : 'Comment';
  const title = isRussian ? 'Подтвердите действие' : 'Confirm action';

  return (
    <div className='confirm-popup'>
      <h2 className='confirm-popup__title'>{title}</h2>
      {text && <p className='confirm-popup__text'>{text}</p>}

      {showComment && (
        <FormGroup label={commentTitle} labelSecondary={`(${state.length}/${maxLength})`}>
          <Textarea defaultValue={state} onDebounce={onChange} maxLength={maxLength} placeholder='Оставить комментарий' {...props} />
        </FormGroup>
      )}

      <footer className='confirm-popup__footer'>
        {onBack && (
          <div className='confirm-popup__footer-button'>
            <Button onClick={onBack} buttonType='light' size='l'>
              Назад
            </Button>
          </div>
        )}

        <div className='confirm-popup__footer-button confirm-popup__footer-left'>
          <Button onClick={onClose} buttonType='light' size='l'>
            {declineText}
          </Button>
        </div>
        <div className='confirm-popup__footer-button'>
          <Button disabled={showComment && state === ''} onClick={handleSubmit} preloader={preloader} size='l'>
            {textAccept}
          </Button>
        </div>
      </footer>
    </div>
  );
};

export default Confirm;
