import React, { FC } from 'react';
import AvatarStatus from '../../molecules/AvatarStatus';
import { statusValue } from '../../molecules/History/helpers';
import User from '../../../assets/icons/24px/Account/User';
import Tooltip from '../Tooltip';
import InformationAlert from '../../../assets/icons/24px/Alerts/InformationAlert';
import StatusWithText from '../StatusWithText';
import { IRequestPath, IUser } from '../../../types/projects.types';
import Avatar from '../Avatar';
import { IFormattedDate } from '../../../types';
import { formatDate } from '../../../utils/helpers';

import './HistoryPathList.scss';

export interface IHistoryStepList {
  /** Элемент истории */
  path: IRequestPath[];
  /** Флаг на особую версию истории для проекта ЮЗЭДО */
  isUZADO?: boolean;
  /** Флаг на свёрнутое состояние элементов компонента */
  isMinimal?: boolean;
}

const HistoryPathList: FC<IHistoryStepList> = ({ path, isUZADO, isMinimal }) => {
  /** Массив пользователей для тултипа */
  const users = (users: IUser[] | null) => {
    return users?.map((item, i) => (
      <React.Fragment key={i}>
        {i < 5 ? (
          <div className='rf-history-path-list__tooltip-users'>
            <Avatar photo={item.photo} />
            <div className='rf-history-path-list__tooltip-users-info'>
              <p className='rf-history-path-list__tooltip-users-name'>{item.fullName}</p>
              <p className='rf-history-path-list__tooltip-users-position'>{item.department}</p>
            </div>
          </div>
        ) : (
          <></>
        )}
      </React.Fragment>
    ));
  };

  const historyPathListJSX: any = path.map((r: IRequestPath, i: number) => {
    /** Если есть дата, форматируем */
    const date: IFormattedDate | null = r.date ? formatDate(r.date + new Date().getTimezoneOffset() * 60 * 1000) : null;
    /** Определяем последний элемент - рисовать после него маршрутную черту или нет */
    const isLastElement = i !== path.length - 1;
    /** Определяем есть ли решение по шагу - рисовать сплошную или прерывистую черту */
    const isReconciled = path[i + 1] && path[i + 1].criticality === '0';

    return (
      <div className='rf-history-path-list__history-element' key={r.stepId}>
        <div className='rf-history-path-list__user-photo'>
          {/** Если в массиве user находится больше одного юзера,
             * это означает, что согласование производится группой людей,
             * (впоследствии согласование предоставит один представитель этой группы)
             * поэтому, при user.length > 1, необходимо ставить иконку кгруппы людей,
             * а не фото конкретного пользователя из этой группы
             */}
          {r.user && r.user.length === 1 ?
            <AvatarStatus
              fullName={r.user[0].fullName}
              size='l'
              photo={r.user[0].photo}
              variant={r.user[0].fullName === 'Вы' ? statusValue['4'] : statusValue[r.criticality]}
            /> :
            <AvatarStatus
              size='l'
              icon={User}
              variant={statusValue[r.criticality]}
              fullName={r.user[0].fullName}
            />
          }
          {isLastElement && (
            <div className='rf-history-path-list__user-line-wrapper'>
              {/** Если нет результат согласования слующего шага, рисуем прерывистую линию */}
              <div className={`rf-history-path-list__user-line ${isReconciled ? 'incomplete' : 'done'}`} />
            </div>
          )}
        </div>

        {isMinimal ? <div className={`rf-history-sidebar__details--minimal ${!isLastElement && 'last'}`} /> : (
          <div className={`rf-history-path-list__details ${!isLastElement && 'rf-history-path-list__details--last'}`}>
            <div className='rf-history-path-list__details-user-name'>
              {/** При user.length > 1 вместо имени пользователя необходимо ставить значение поля agentName,
                 * которое означает группу людей в массиве user (напр., этот шаг будет согласован бухгалтерией),
                 * в ином случае ставим имя конкретного человека
                 */}
              <h4 className='rf-history-path-list__fullName'>
                {(r.user && r.user.length === 1 && r.user[0].fullName) || r.agentName}
              </h4>
              {/** Подсказка не используется в проекте ЮЗАДО */}
              {!(r.user && r.user.length < 2) && !isUZADO && (
                <Tooltip background='white'>
                  <div className='rf-history-path-list__icon-wrapper'>
                    <InformationAlert />
                  </div>
                  <div className='rf-history-path-list__tooltip-wrapper'>{users(r.user)}</div>
                </Tooltip>
              )}
            </div>
            {/** В проекте ЮЗЭДО вместо описания шага необходимо ставить должность согласующего */}
            <div className='rf-history-path-list__details-column'>
              {r.user.length === 1 ? (
                <p className='rf-history-path-list__details-info'>
                  {isUZADO ? r.user[0].position : r.activityText}
                </p>
              ) : (
                <p className='rf-history-path-list__details-info'>
                  {r.activityText}
                </p>
              )}

              {!!date && (
                <span className='rf-history-path-list__details-date'>
                  {date.dayOfMonth} {date.monthShort} {date.year} в {date.hour}:{date.minutes}
                </span>
              )}
              {!!r.date && (
                <div className='rf-history-path-list__status-wrapper'>
                  <StatusWithText statusText={r.statusText} criticality={r.criticality} />
                </div>
              )}
            </div>

            {!!r.comment && (
              <div className='rf-history-path-list__details-comment-wrapper'>
                <div className='rf-history-path-list__details-comment'>{r.comment}</div>
              </div>
            )}
          </div>
        )}
      </div>);
  });

  return historyPathListJSX;
};

export default HistoryPathList;
