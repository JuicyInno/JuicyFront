import React, {
  FC, useCallback, useEffect, useState
} from 'react';
import './HistorySidebar.scss';
import { IHistory } from '../History/History';
import Button from '../../atoms/Button';
import ChevronLeft from '../../../assets/icons/24px/Arrows/ChevronLeft';
import ChevronRight from '../../../assets/icons/24px/Arrows/ChevronRight';
import HistoryPathList from '../../atoms/HistoryPathList';
import Chip from '../../atoms/Chip';
import Doc from '../../../assets/icons/40px/Documents/Doc';
import Badge from '../../atoms/Badge';
import { sortPaths } from './helpers';
import { IRequestPath } from '../../../types/projects.types';

const HistorySidebar: FC<IHistory> = ({
  history,
  isUZADO,
  attachments,
  host = window.location.origin,
}: IHistory) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [paths, setPaths] = useState<IRequestPath[]>(sortPaths(history, isOpen));

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
    <>
      <div className={`rf-history-sidebar__attachments-line ${!isOpen ? 'open' : ''}`} />
      {isOpen ? (
        <>
          <p className='rf-history-sidebar__attachments-title'>Приложенные файлы</p>
          <div className='rf-history-sidebar__attachments-container'>
            {attachmentElementsJSX}
          </div>
        </>
      ) : (
        <Badge badgeContent={attachments && attachments.length}>
          <div className='rf-history-sidebar__attachments-preview'>
            <Doc />
          </div>
        </Badge>
      )}
    </>
  );

  useEffect(() => {
    setPaths(sortPaths(paths, isOpen));
  }, [isOpen]);

  return (
    <div className={`rf-history-sidebar ${isOpen ? 'open' : ''}`}>
      <div className='rf-history-sidebar__button-container'>
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size='m'
          buttonType='icon-round'
          className='rf-history-sidebar__button'
        >
          {isOpen ? <ChevronRight /> : <ChevronLeft/>}
        </Button>
      </div>
      <div className={`rf-history-sidebar__heading ${!isOpen ? 'closed' : ''}`}>
        История согласования
      </div>
      <div className={`rf-history-sidebar__paths ${isOpen ? 'open' : ''}`}>
        <HistoryPathList path={paths} isUZADO={isUZADO} isMinimal={!isOpen} />
      </div>
      {attachments && (
        <div className={`rf-history-sidebar__attachments ${isOpen ? 'open' : ''}`}>
          {attachmentsJSX}
        </div>
      )}
    </div>
  );
};

export default HistorySidebar;
