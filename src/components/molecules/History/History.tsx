import React, {
  useCallback, useEffect, useState
} from 'react';

import Button from '../../atoms/Button';
import Chip from '../../atoms/Chip';
import HistoryPathList from '../../atoms/HistoryPathList';

import { IRequestAttachment, IRequestPath } from '../../../types/projects.types';

import { onPathFilter } from './helpers';

import ChevronDown from '../../../assets/icons/24px/Arrows/ChevronDown';
import ChevronUp from '../../../assets/icons/24px/Arrows/ChevronUp';

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
  attachments,
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
  /** Обработчик скачивания документа при клике по чипсе */
  const openDownloadLink = useCallback((id: string | undefined) => {
    if (id === undefined) {
      return;
    }

    if (host.includes('127.0.0')) {
      host = 'https://sapd-fes-ap01.vtb24.ru:44310';
    }

    const url = `${host}/sap/opu/odata4/sap/zhrbc/default/sap/zhrbc_0720_react_utils/0001/IAttachmentContent(${id})/content`;
    window.open(url, '_blank');
  }, []);

  /** JSX прикреплённые документы */
  const attachmentElementsJSX = attachments?.map(attachment => (
    <Chip
      key={attachment.fileName + attachment.id}
      type='secondary'
      size='s'
      maxLength={30}
      onClick={() => openDownloadLink(attachment.id)}
    >
      {attachment.fileName}
    </Chip>
  ));

  const attachmentsJSX = (
    <div className='rf-history__attachments'>
      <div className='rf-history__attachments-line' />
      <p className='rf-history__attachments-title'>Приложенные файлы</p>
      <div className='rf-history__attachments-container'>
        {attachmentElementsJSX}
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
          startAdornment={expanded ? <ChevronUp /> : <ChevronDown />}
        >
          {expanded ? 'Свернуть' : 'Смотреть всё'}
        </Button>
      </div>
      {attachments && attachmentsJSX}
    </div>
  );
};

export default History;
