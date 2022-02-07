import React, { useEffect, useState } from 'react';

import Button from '../../atoms/Button';
import Attachment from '../Attachment';
import HistoryPathList from '../../atoms/HistoryPathList';

import { IRequestAttachment, IRequestPath } from '../../../types/projects.types';

import { onPathFilter } from './helpers';

import { ArrowsChevronDown, ArrowsChevronUp } from '../../../indexIcon';

import './History.scss';

export interface IHistory {
  /** Массив с элементами истории */
  history: IRequestPath[];
  /** Документы, приложенные к истории */
  attachments?: IRequestAttachment[];
  /** Флаг на особую версию истории для проекта ЮЗЭДО */
  isUZADO?: boolean;
  /** Хост
   * @default window.location.origin
   * */
  host?: string;
}

const History: React.FC<IHistory> = ({
  history,
  isUZADO,
  attachments = [],
  host = window.location.origin,
}: IHistory) => {

  // -------------------------------------------------------------------------------------------------------------------
  /** Локальное состояние компонента */
  /** Показать / скрыть историю */
  const [expanded, setExpanded] = useState<boolean>(false);

  /** Формируем массив истории на основании фильтрации и состояния отображения (открыто / закрыто) */
  const [path, setPath] = useState(onPathFilter(history, expanded));

  /** Эффект - отслеживает состояние отображения */
  useEffect(() => {
    setPath(onPathFilter(history, expanded));
  }, [expanded]);

  /** Обработчик события нажатия на кнопку "Смотреть всё / Свернуть" */
  const handleExpansion = () => setExpanded(!expanded);

  // -------------------------------------------------------------------------------------------------------------------
  /** Секция приложенных документов */
  const attachmentsJSX = (
    <div className='rf-history__attachments'>
      <div className='rf-history__attachments-line' />
      <p className='rf-history__attachments-title'>Приложенные файлы</p>

      <div className='rf-history__attachments-container'>
        {attachments?.map((attachment, index) => (
          <Attachment
            key={index}
            attachment={{
              id: attachment.id,
              file: new File([attachment.base64], attachment.fileName),
              base64: attachment.base64
            }}
            type='secondary'
            showRemoveIcon={false}
            tooltipBackground='default'
          />
        ))}
      </div>
    </div>
  );

  // -------------------------------------------------------------------------------------------------------------------
  /** Компонент истории */
  return (
    <div className='rf-history'>
      <HistoryPathList path={path} isUZADO={isUZADO} />
      <div className='rf-history__button'>
        <Button
          buttonType='light'
          onClick={handleExpansion}
          startAdornment={expanded ? <ArrowsChevronUp /> : <ArrowsChevronDown />}
        >
          {expanded ? 'Свернуть' : 'Смотреть всё'}
        </Button>
      </div>

      {attachments && attachmentsJSX}
    </div>
  );
};

export default History;
