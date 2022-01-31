import React, {
  FormEvent, ReactNode, useCallback, useState
} from 'react';
import { Link } from 'react-router-dom';

import {
  Button, FormGroup, InputFile, Textarea, Modal, RatePicker, Attachments
} from '../../..';
import { IFileData } from '../../../types';
import { IModalProps } from '../../atoms/Modal/Modal';

import './Feedback.scss';

export type FeedbackData = {
  email: string;
  zdate: string;
  projectId: string | number;
  rate: number;
  browser: string;
  status: string;
  text: string;
  userId: string;
  userName: string;
  file64: string;
  screen: string;
  isAnswered: number;
  photo: string;
  userPosition: string;
  userDepartment: string;
}

export interface IFeedbackProps extends Omit<IModalProps, 'children'> {
  title?: ReactNode;
  description?: ReactNode;
  textareaPlaceholder?: string;
  postFeedback: (data: Partial<FeedbackData>) => Promise<any>;
}

export const Feedback = ({
  title = 'Обратная связь',
  description,
  textareaPlaceholder = 'Оставьте комментарий по сервису',
  postFeedback,
  onClose,
  ...props
}: IFeedbackProps) => {
  const maxLength = 255;
  const [text, setText] = useState<string>('');
  const [rate, setRate] = useState<number>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  /** хранит приложенные файлы */
  const [attachedFile, setAttachedFile] = useState<IFileData>();

  /** Изменение состояния комментария */
  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;

    if (value.length <= maxLength) {
      setText(event.target.value);
    } else {
      setText(event.target.value.slice(0, maxLength));
    }
  };

  /** Прикрепление файла */
  const setFileHandler = useCallback((files: IFileData[]) => {
    const lastFile = files[files.length - 1];

    setAttachedFile(lastFile);
  }, []);

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();

    setIsLoading(true);

    try {
      const res = await postFeedback({
        zdate: Date.parse(new Date().toUTCString()).toString(),
        rate,
        text,
        browser: window.navigator.userAgent,
        status: '0',
        file64: attachedFile ? attachedFile.base64 : '',
        screen: `${window.innerWidth}x${window.innerHeight}`,
        isAnswered: 0,
      });

      onClose?.();

      return res;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal custom onClose={onClose} {...props}>
      <div className='feedback-modal'>
        <h3 className='feedback-modal__title'>{title}</h3>
        <p className='feedback-modal__description'>
          {description ||
            <>
              Помогите нам стать лучше, оцените работу сервиса. <br />
              Для заведения инцидента воспользуйтесь{' '}
              <Link
                to='https://cspp.vtb.ru/webtier/ess.do?ctx=docEngine&file=hpctplincidents&query=tpl.id%3D%2265862778751%22'
                className='feedback-modal__link'
              >
                ЦСПП
              </Link>
            </>}
        </p>

        <FormGroup
          label='Оцените сервис'
          className='feedback-modal__group'
        >
          <RatePicker isStarPicker defaultPickedValue={rate} getRate={(value) => setRate(+value)} />
        </FormGroup>

        <form className='feedback-modal__form' onSubmit={onSubmit}>
          <FormGroup
            label='Комментарий'
            labelSecondary={`(${text.length > maxLength ? maxLength : text.length}/${maxLength})`}
          >
            <Textarea onChange={onChange} value={text} placeholder={textareaPlaceholder} />
          </FormGroup>

          <Attachments
            attachments={attachedFile ? [attachedFile] : []}
            onRemove={() => setAttachedFile(undefined)}
            maxLength={100}
            className='feedback-modal__attachments'
          />

          <div className='feedback-modal__buttons'>
            <div className='feedback-modal__btn-file'>
              <InputFile
                className='rf-comment-tile-button'
                showChips={false}
                setFile={setFileHandler}
                buttonType='light'
                placeholder='Прикрепить файл'
                size='l'
              />
            </div>

            <div className='feedback-modal__btn'>
              <Button size='l' buttonType='light' onClick={onClose}>
                Отменить
              </Button>
            </div>

            <div className='feedback-modal__btn'>
              <Button size='l' preloader={isLoading} type='submit'>Отправить</Button>
            </div>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default Feedback;
