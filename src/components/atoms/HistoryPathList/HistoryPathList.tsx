import React, { ReactNode } from 'react';

import AvatarStatus from '../../molecules/AvatarStatus';
import InformationAlert from '../../../assets/icons/24px/Alerts/InformationAlert';
import User from '../../../assets/icons/24px/Account/User';

import { statusValue } from '../../molecules/History/helpers';
import { statusType } from './helpers';
import { formatDate } from '../../../utils/helpers';

import Avatar from '../Avatar';
import Tooltip from '../Tooltip';
import StatusWithText from '../StatusWithText';

import { IRequestPath, IUser } from '../../../types/projects.types';
import { IFormattedDate } from '../../../types';
import { IconType } from '../Status/icons/types';

import './HistoryPathList.scss';

export interface IHistoryStepList {
  /** Элемент истории */
  path: IRequestPath[];
  /** Флаг на особую версию истории для проекта ЮЗЭДО
   * @default false
   */
  isUZADO?: boolean;
  /** Флаг на свёрнутое состояние элементов компонента
   * @default false
  */
  isMinimal?: boolean;
}

const HistoryPathList: ({ path, isUZADO, isMinimal }: IHistoryStepList) => JSX.Element = ({ path,
  isUZADO = false,
  isMinimal = false }) => {
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

  const historyPathListJSX: ReactNode = path.map((pathItem: IRequestPath, pathNumber: number) => {
    /** Если есть дата, форматируем */
    const date: IFormattedDate | null = pathItem.date ? formatDate(pathItem.date + new Date().getTimezoneOffset() * 60 * 1000) : null;
    /** Определяем последний элемент - рисовать после него маршрутную черту или нет */
    const isLastElement = pathNumber !== path.length - 1;
    /** Определяем есть ли решение по шагу - рисовать сплошную или прерывистую черту */
    const isReconciled = path[pathNumber + 1] && path[pathNumber + 1].criticality === '0';

    return (
      <div className='rf-history-path-list__history-element' key={pathItem.stepId}>
        <div className='rf-history-path-list__user-photo'>
          {/** Если в массиве user находится больше одного юзера,
             * это означает, что согласование производится группой людей,
             * (впоследствии согласование предоставит один представитель этой группы)
             * поэтому, при user.length > 1, необходимо ставить иконку кгруппы людей,
             * а не фото конкретного пользователя из этой группы
             */}
          {pathItem.user && pathItem.user.length === 1 ?
            <AvatarStatus
              fullName={pathItem.user[0].fullName}
              size='l'
              photo={pathItem.user[0].photo}
              variant={pathItem.user[0].fullName === 'Вы' ? statusValue['4'] : statusValue[pathItem.criticality]}
              type={isMinimal ? statusType[pathItem.criticality] as IconType : undefined}
            /> :
            <AvatarStatus
              size='l'
              icon={User}
              variant={statusValue[pathItem.criticality]}
              type={isMinimal ? statusType[pathItem.criticality] as IconType : undefined}
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
                {(pathItem.user && pathItem.user.length === 1 && pathItem.user[0].fullName) || pathItem.agentName}
              </h4>
              {/** Подсказка не используется в проекте ЮЗАДО */}
              {!(pathItem.user && pathItem.user.length < 2) && !isUZADO && (
                <Tooltip background='white'>
                  <div className='rf-history-path-list__icon-wrapper'>
                    <InformationAlert />
                  </div>
                  <div className='rf-history-path-list__tooltip-wrapper'>{users(pathItem.user)}</div>
                </Tooltip>
              )}
            </div>
            {/** В проекте ЮЗЭДО вместо описания шага необходимо ставить должность согласующего */}
            <div className='rf-history-path-list__details-column'>
              {pathItem.user.length === 1 ? (
                <p className='rf-history-path-list__details-info'>
                  {isUZADO ? pathItem.user[0].position : pathItem.activityText}
                </p>
              ) : (
                <p className='rf-history-path-list__details-info'>
                  {pathItem.activityText}
                </p>
              )}

              {!!date && (
                <span className='rf-history-path-list__details-date'>
                  {date.dayOfMonth} {date.monthShort} {date.year} в {date.hour}:{date.minutes}
                </span>
              )}
              {!!pathItem.date && (
                <div className='rf-history-path-list__status-wrapper'>
                  <StatusWithText statusText={pathItem.statusText} criticality={pathItem.criticality} />
                </div>
              )}
            </div>

            {!!pathItem.comment && (
              <div className='rf-history-path-list__details-comment-wrapper'>
                <div className='rf-history-path-list__details-comment'>{pathItem.comment}</div>
              </div>
            )}
          </div>
        )}
      </div>);
  });

  return <>{historyPathListJSX}</>;
};

export default HistoryPathList;
