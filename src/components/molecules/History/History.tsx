import React, {
  useCallback, useEffect, useState
} from 'react';

import Avatar from '../../atoms/Avatar';
import AvatarStatus from '../AvatarStatus';
import Button from '../../atoms/Button';
import StatusWithText from '../../atoms/StatusWithText';
import Tooltip from '../../atoms/Tooltip';
import Chip from '../../atoms/Chip';

import { IFormattedDate } from '../../../types';
import {
  IRequestAttachment, IRequestPath, IUser
} from '../../../types/projects.types';

import { formatDate } from '../../../utils/helpers';
import { onPathFilter, statusValue } from './helpers';

import InformationAlert from '../../../assets/icons/24px/Alerts/InformationAlert';
import User from '../../../assets/icons/24px/Account/User';
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
  /** Массив пользователей для тултипа */
  const users = (users: IUser[] | null) => {
    return users?.map((item, i) => (
      <React.Fragment key={i}>
        {i < 5 ? (
          <div className='rf-history__tooltip-users'>
            <Avatar photo={item.photo} />
            <div className='rf-history__tooltip-users-info'>
              <p className='rf-history__tooltip-users-name'>{item.fullName}</p>
              <p className='rf-history__tooltip-users-position'>{item.department}</p>
            </div>
          </div>
        ) : (
          <></>
        )}
      </React.Fragment>
    ));
  };

  // -------------------------------------------------------------------------------------------------------------------
  /** JSX массив пользователей в истории, зависит от локального состояния (фильтрации и отображения) */
  const historyJSX = path.map((r: IRequestPath, i: number) => {
    const d: IFormattedDate | null = r.date ? formatDate(r.date + new Date().getTimezoneOffset() * 60 * 1000) : null;

    return (
      <div className='rf-history__history-element' key={r.stepId}>
        <div className='rf-history__user-photo'>
          {r.user && r.user.length === 1 ?
            <AvatarStatus
              size='l'
              photo={r.user[0].photo}
              variant={r.user[0].fullName === 'Вы' ? statusValue['4'] : statusValue[r.criticality]}
            /> :
            <AvatarStatus size='l' icon={User} variant={statusValue[r.criticality]} />
          }
          {i !== path.length - 1 && (
            <div className='rf-history__user-line'>
              <div className='rf-history__user-line--inner' />
            </div>
          )}
        </div>

        <div className='rf-history__details'>
          <div className='rf-history__details-user-name'>
            <h4 className='rf-history__fullName'>
              {(r.user && r.user.length === 1 && r.user[0].fullName) || r.agentName}
            </h4>
            {!(r.user && r.user.length < 2) && (
              <Tooltip background='white'>
                <div className='rf-history__icon-wrapper'>
                  <InformationAlert />
                </div>
                <div className='rf-history__tooltip-wrapper'>{users(r.user)}</div>
              </Tooltip>
            )}
          </div>
          <div className='rf-history__details-column'>
            {r.user.length === 1 ? (
              <p className='rf-history__details-info'>
                {isUZADO ? r.user[0].position : r.activityText}
              </p>
            ) : (
              <p className='rf-history__details-info'>
                {r.activityText}
              </p>
            )}

            {!!d && (
              <span className='rf-history__details-date'>
                {d.dayOfMonth} {d.monthShort} {d.year} в {d.hour}:{d.minutes}
              </span>
            )}
            {!!r.date && (
              <div className='rf-history__status-wrapper'>
                <StatusWithText statusText={r.statusText} criticality={r.criticality} />
              </div>
            )}
          </div>

          {!!r.comment && (
            <div className='rf-history__details-comment-wrapper'>
              <div className='rf-history__details-comment'>{r.comment}</div>
            </div>
          )}
        </div>
      </div>
    );
  });

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
    <div className='rf-history__attachment' key={attachment.fileName + attachment.id}>
      <Chip
        type='secondary'
        size='s'
        maxLength={30}
        onClick={() => openDownloadLink(attachment.id)}
      >
        {attachment.fileName}
      </Chip>
    </div>
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
      {historyJSX}
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
