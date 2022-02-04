import React, { FC, useState } from 'react';

import Button from '../../atoms/Button';
import Attachment from '../Attachment';
import HistoryPathList from '../../atoms/HistoryPathList';
import Badge from '../../atoms/Badge';
import {
  ArrowsChevronLeft, ArrowsChevronRight, AllDoc
} from '../../../indexNewIcon';

import { useSortPaths } from './helpers';

import { IHistory } from '../History/History';

import './HistorySidebar.scss';

const HistorySidebar: FC<IHistory> = ({
  history,
  isUZADO,
  attachments,
  host = window.location.origin,
}: IHistory) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const paths = useSortPaths(history, isOpen);
  // -------------------------------------------------------------------------------------------------------------------
  /** Секция приложенных документов */
  const attachmentsJSX = (
    <>
      <div className='rf-history-sidebar__attachments-line' />
      {isOpen ? (
        <>
          <p className='rf-history-sidebar__attachments-title'>Приложенные файлы</p>

          <div className='rf-history-sidebar__attachments-container'>
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
        </>
      ) : (
        <Badge badgeContent={attachments && attachments.length}>
          <div className='rf-history-sidebar__attachments-preview'>
            <AllDoc />
          </div>
        </Badge>
      )}
    </>
  );

  return (
    <div className={`rf-history-sidebar ${isOpen ? 'open' : ''}`}>
      <div
        data-testid='side-history-button'
        className='rf-history-sidebar__button-container'>
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size='m'
          buttonType='icon-round'
          className='rf-history-sidebar__button'
        >
          <div className='rf-history-sidebar__button-icon'>
            {isOpen ? <ArrowsChevronRight /> : <ArrowsChevronLeft />}
          </div>
        </Button>
      </div>
      <div className={`rf-history-sidebar__heading ${!isOpen ? 'closed' : ''}`}>
        История согласования
      </div>
      <div className='rf-history-sidebar__paths'>
        <HistoryPathList path={paths} isUZADO={isUZADO} isMinimal={!isOpen} />
      </div>
      {attachments && (
        <div className='rf-history-sidebar__attachments'>
          {attachmentsJSX}
        </div>
      )}
    </div>
  );
};

export default HistorySidebar;
