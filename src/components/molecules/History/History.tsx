import React, {
  useCallback, useEffect, useState
} from 'react';
import ChevronDown from '../../../assets/icons/ChevronDown';
import EmptyUser from '../../../assets/icons/EmptyUser';
import Info from '../../../assets/icons/Info';
import { IFormattedDate } from '../../../types';
import {
  IRequestAttachment, IRequestPath, IUser
} from '../../../types/projects.types';
import { formatDate } from '../../../utils/helpers';
import Button from '../../atoms/Button';
import Status from '../../atoms/Status';
import Tooltip from '../../atoms/Tooltip';
import UserPhoto from '../../atoms/UserPhoto';
import './History.scss';
import Chip from '../../atoms/Chip';

export interface IProps {
    history: IRequestPath[];
    attachments?: IRequestAttachment[];
    isUZADO?: boolean;
    host?: string;
}

const History: React.FC<IProps> = ({ history, isUZADO, attachments, host = window.location.origin }: IProps) => {
  // -------------------------------------------------------------------------------------------------------------------
  /** Показать / Скрыть историю */
  const [expanded, setExpanded] = useState<boolean>(false);

  const onExpand = () => {
    setExpanded(!expanded);
  };

  // -------------------------------------------------------------------------------------------------------------------

  /** Фильтруем историю */
  const onPathFilter = (): IRequestPath[] => {
    const find = history.findIndex((i: IRequestPath) => {
      return !i.date;
    });

    let step;

    if (find === -1) {
      step = history.length - 1;
    } else {
      step = find;
    }

    return expanded ? history : [history[step]];
  };

  const [path, setPath] = useState(onPathFilter());

  useEffect(() => {
    setPath(onPathFilter());
  }, [expanded]);

  // -------------------------------------------------------------------------------------------------------------------
  const users = (users: IUser[] | null) => {
    return users?.map((item, i) => (
      <React.Fragment key={i}>
        {i < 5 ? (
          <div className='rf-history__tooltip-users-wrapper'>
            <UserPhoto radius='40px' url={item.photo} />
            <div className='rf-history__tooltip-users-info'>
              <p className='rf-history__name'>{item.fullName}</p>
              <p className='rf-history__position'>{item.department}</p>
            </div>
          </div>
        ) : (
          <></>
        )}
      </React.Fragment>
    ));
  };

  const historyJSX = path.map((r: IRequestPath, i: number) => {
    const d: IFormattedDate | null = r.date ? formatDate(r.date + new Date().getTimezoneOffset() * 60 * 1000) : null;

    return (
      <div className='rf-history__history-element' key={r.stepId}>
        <div className='rf-history__user-photo'>
          {r.user && r.user.length === 1 ? <UserPhoto radius='48px' url={r.user[0].photo} /> : <EmptyUser />}
          {i !== path.length - 1 && (
            <div className='rf-history__user-line'>
              <div className='rf-history__user-line-inner' />
            </div>
          )}
        </div>

        <div className='rf-history__details'>
          <div className='rf-history__details-row'>
            <h4 className='rf-history__fullName'>
              {(r.user && r.user.length === 1 && r.user[0].fullName) || r.agentName}
            </h4>
            {!(r.user && r.user.length < 2) && (
              <Tooltip background='white'>
                <div className='rf-history__info-wrapper'>
                  <Info width={18} height={18} />
                </div>
                <div className='process-history-tooltip__wrapper'>{users(r.user)}</div>
              </Tooltip>
            )}
          </div>
          <div className='rf-history__details-column'>
            {r.user.length === 1 && (
              <p className='rf-history__details-info'>
                {isUZADO ? r.user[0].position : r.activityText}
              </p>
            )}

            {!!d && (
              <span className='rf-history__details-date'>
                {d.dayOfMonth} {d.monthShort} {d.year} в {d.hour}:{d.minutes}
              </span>
            )}
            {!!r.date && (
              <div className='rf-history__status-wrapper'>
                <Status statusText={r.statusText} criticality={r.criticality}/>
              </div>
            )}
          </div>

          {!!r.comment && <div className='rf-history__details-wrapper'>
            <div className='rf-history__details-comment'>{r.comment}</div>
          </div>}
        </div>
      </div>
    );
  });

  // -------------------------------------------------------------------------------------------------------------------

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

  const attachmentsJSX = <div className='rf-history__attachments'>
    <div className='rf-history__attachments-line' />
    <p className='rf-history__attachments-title'>Приложенные файлы</p>
    <div className='rf-history__attachments-container'>
      {attachments?.map(attachment => (
        <div className='rf-history__attachment' key={attachment.fileName + attachment.id}>
          <Chip type='secondary' size='s' onClick={() => openDownloadLink(attachment.id)}>{attachment.fileName}</Chip>
        </div>
      ))}
    </div>
  </div>;

  // -------------------------------------------------------------------------------------------------------------------

  return (

    <div className='rf-history__wrapper'>
      <div className='rf-history'>{historyJSX}</div>
      <div>
        <Button buttonType={'light'} onClick={onExpand}>
          <div className='rf-history__button-wrapper'>
            <div className='rf-history__icon-wrapper'>
              <ChevronDown className={expanded ? 'rf-history__expanded' : ''}/>
            </div>
            <p>{expanded ? 'Свернуть' : 'Смотреть все'}</p>
          </div>
        </Button>
      </div>
      {attachments && attachmentsJSX}
    </div>

  );
};

export default History;
