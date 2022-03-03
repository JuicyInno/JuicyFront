import React, {
  useState, useEffect, useCallback, CSSProperties, useMemo, useRef, useLayoutEffect
} from 'react';
import {
  Avatar, Button, Tile
} from '../../..';
import {
  AllDoc, StatusInformation, ArrowsChevronLeft, OtherPeople
} from '../../../indexIcon';
import { IUser, IRequestAttachment } from '../../../types/projects.types';
import { IconType } from '../../atoms/Status/icons/types';
import { classnames } from '../../../utils/classnames';
import { formatDate } from '../../../utils/helpers';
import { VariantClassic } from '../../../types';
import Attachment from '../Attachment/Attachment';
import AvatarStatus from '../AvatarStatus';
import StatusWithText from '../../atoms/StatusWithText';
import Badge from '../../atoms/Badge';
import Tooltip from '../../atoms/Tooltip';

import './HistorySidebar.scss';

export enum Statuses {
  POSITIVE = 'POSITIVE',
  NEGATIVE = 'NEGATIVE',
  NEUTRAL = 'NEUTRAL',
}

export type TypeStatus = `${Statuses}`;

export interface IHistory {
  approvers: IUser[];
  approverName: string;
  approveDateTime?: string | null;
  name: string;
  comment?: string;
  status?: string;
  statusType?: TypeStatus;
}

export interface IHistorySidebar {
  /** Список шагов */
  history: IHistory[];
  /** Список прикрепленных файлов */
  attachments?: IRequestAttachment[];
  /** Открыт ли по умолчанию сайдбар
   * @default false
   */
  defaultOpened?: boolean;
  /** Id текущего пользователя */
  userId?: string;
  /** Стили для открытого сайдбара */
  activeStyle?: CSSProperties;
  /** Стили сайдбара */
  style?: CSSProperties;
  /** Устанавливает высоту от верхней границы
   * @default false
   */
  useHeightOffsetTop?: boolean;
}

const statusByType: Record<TypeStatus, IconType | undefined> = {
  'POSITIVE': 'icon',
  'NEUTRAL': 'load',
  'NEGATIVE': 'decline'
};

const variantByType: Record<TypeStatus, VariantClassic> = {
  'POSITIVE': 'green',
  'NEUTRAL': 'yellow',
  'NEGATIVE': 'red'
};

const criticalityByType: Record<TypeStatus, string> = {
  'POSITIVE': '3',
  'NEUTRAL': '2',
  'NEGATIVE': '1'
};

const HistorySidebar = ({
  history,
  attachments,
  defaultOpened = false,
  useHeightOffsetTop = false,
  userId: currentUserId,
  activeStyle,
  style,
}: IHistorySidebar) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [prevCount, setPrevCount] = useState<number>(0);
  const refs = useRef<HTMLDivElement[]>([]);

  const getActiveIndex = useCallback((list: IHistory[]): number => list.findIndex((item) => !item.approveDateTime), []);
  const getIndexByUserId = useCallback((list: IHistory[]): number =>
    list.findIndex((item) => !!item.approvers.find((approver) => approver.id === currentUserId)), [currentUserId]);

  /**
   * Определяем список шагов которые будут отображаться при открытом и закрытом сайдбаре
   * Если передан currentUserId то определяем список по пользователю и только если он найден,
   * иначе определяем список по текущему шагу (первый шаг в котором нету approveDateTime)
   */
  const getActiveHistory = () => {
    if (opened || history.length < 4) {
      return history;
    }

    const indexByUserId = getIndexByUserId(history);
    const indexByApproveDate = getActiveIndex(history) !== -1 ? getActiveIndex(history) : history.length - 1;
    const activeIndex = indexByUserId !== -1 ? indexByUserId : indexByApproveDate;

    if (activeIndex > 2) {
      setPrevCount(activeIndex - 2);
    }

    return history.reduce((acc: IHistory[], curr: IHistory, index: number) => {
      const diffIndex = index - activeIndex;
      const nextStep = diffIndex === 1;
      const currentStep = diffIndex === 0;
      const prevTwoStep = diffIndex >= -2 && diffIndex < 0;

      if (currentStep || prevTwoStep || nextStep) {
        return [...acc, curr];
      }

      return acc;
    }, []);
  };

  const [opened, setOpened] = useState(defaultOpened);
  const [list, setList] = useState<IHistory[]>(() => getActiveHistory());

  useEffect(() => {
    setList(getActiveHistory());
  }, [opened, history, currentUserId]);

  useEffect(() => {
    if (opened) {
      setTimeout(() => {
        refs.current[prevCount]?.scrollIntoView({
          block: 'start',
          behavior: 'smooth'
        });
      }, 0);
    }
  }, [opened, prevCount]);

  const getOffsetDateStirng = useCallback((approveDateTime: string) => {
    const currentDate = new Date(approveDateTime);
    const offset = currentDate.getTimezoneOffset() * 60 * 1000;
    const dateWithOffset = currentDate.getTime() + offset * -1;

    const { dayOfMonth, monthShort, year, hour, minutes } = formatDate(dateWithOffset);

    return `${dayOfMonth} ${monthShort} ${year} в ${hour}:${minutes}`;
  }, []);

  /**
   * Устанавливаем цвет автотарок по их статусу
   * Синий цвет для автивного шага (первый шаг в котором нету approveDateTime)
   */
  const getAvatarVariant = useCallback((item: IHistory, index: number): VariantClassic => {
    const activeIndex = getActiveIndex(list);

    return activeIndex === index ? 'blue' : item.statusType ? variantByType[item.statusType] : 'default';
  }, [getActiveIndex, list]);

  const styles = useMemo(() => opened ? {
    ...style,
    ...activeStyle
  } : style, [style, activeStyle, opened]);

  /**
   * Если установлено useHeightOffsetTop, тогда определяем выосту компонента от верхней границы экрана
   * только в открытом состоянии
   */
  useLayoutEffect(() => {
    if (containerRef.current && useHeightOffsetTop) {
      const topToHeight = containerRef.current?.getBoundingClientRect().top;

      containerRef.current.style.height = opened ? `calc(100vh - ${topToHeight}px - 20px` : 'auto';
    }

  }, [opened, history, useHeightOffsetTop]);

  const isCurrentUser = (userId: string) => userId === currentUserId;

  return (
    <div
      className={classnames(
        'rf-history-sidebar',
        opened && 'rf-history-sidebar--opened',
        !useHeightOffsetTop && 'rf-history-sidebar--default'
      )}
      style={styles}
      ref={containerRef}
    >
      <Tile variant={opened ? 'non-clickable' : 'none'} className='rf-history-sidebar__tile'>
        <div className='rf-history-sidebar__head'>
          <Button
            onClick={() => setOpened(!opened)}
            size='m'
            buttonType='icon-round'
            className='rf-history-sidebar__btn'
            aria-label={opened ? 'Свернуть' : 'Развернуть'}
          >
            <div className='rf-history-sidebar__btn-icon'>
              <ArrowsChevronLeft />
            </div>
          </Button>

          {
            opened &&
              <h3 className='rf-history-sidebar__title'>
                История согласования
              </h3>
          }
        </div>

        <div className='rf-history-sidebar__list'>
          {
            !!prevCount && !opened &&
            <div
              className={classnames(
                'rf-history-sidebar__item',
                'rf-history-sidebar__item--prev-count'
              )}
            >
              <AvatarStatus
                size='l'
                variant='default'
                fullName={`+${prevCount}`}
              />
            </div>
          }
          {
            list.map((item, index) => {
              const variant = getAvatarVariant(item, index);
              const isMe = isCurrentUser(item.approvers[0].id);
              const isMultiApprovers = item.approvers.length > 1;

              return (
                <div
                  key={index}
                  className={classnames(
                    'rf-history-sidebar__item',
                    item.statusType && `rf-history-sidebar__item--${variant}`
                  )}
                  ref={el => refs.current[index] = el as HTMLDivElement}
                >
                  <AvatarStatus
                    size='l'
                    variant={variant}
                    type={opened ? undefined : item.statusType && statusByType[item.statusType]}
                    {...(!isMultiApprovers && item.approvers[0])}
                    {...(isMultiApprovers && { icon: () => <OtherPeople size='m' /> })}
                  />

                  {
                    opened && <div className='rf-history-sidebar__item-content'>
                      <h4 className='rf-history-sidebar__item-name'>
                        {
                          isMe && !isMultiApprovers ?
                            <span className='rf-history-sidebar__item-me'>Вы</span> :
                            <span>{isMultiApprovers ? item.approverName : item.approvers[0].fullName}</span>
                        }

                        {item.approvers.length > 1 &&
                          <Tooltip position='top' background='white'>
                            <div className='rf-history-sidebar__item-info-icon'>
                              <StatusInformation />
                            </div>
                            <div className='rf-history-sidebar__item-list rf-history-sidebar__approvers'>
                              {item.approvers.map((approver, index) => (
                                <div key={index} className='rf-history-sidebar__approvers-item'>
                                  <Avatar {...approver} />
                                  <div className='rf-history-sidebar__approvers-item__content'>
                                    <h5 className='rf-history-sidebar__approvers-item__name'>
                                      {
                                        isCurrentUser(approver.id) ?
                                          <span className='rf-history-sidebar__item-me'>Вы</span> :
                                          <span>{approver.fullName}</span>
                                      }
                                    </h5>
                                    <p className='rf-history-sidebar__approvers-item__TN'>ТН: {approver.id}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </Tooltip>
                        }
                      </h4>

                      <p className='rf-history-sidebar__item-text'>{item.name}</p>
                      {item.approveDateTime &&
                        <p className='rf-history-sidebar__item-text'>{getOffsetDateStirng(item.approveDateTime)}</p>
                      }
                      {item.status && item.statusType && <div className='rf-history-sidebar__item-status'>
                        <StatusWithText statusText={item.status} criticality={criticalityByType[item.statusType]} />
                      </div>}
                      {item.comment && <div className='rf-history-sidebar__item-comment'>{item.comment}</div>}
                    </div>
                  }
                </div>
              );
            })
          }
        </div>

        {!!attachments?.length &&
          <div className={classnames('rf-history-sidebar__attachments', !attachments?.length && 'rf-history-sidebar__attachments-empty')}>
            {
              opened ?
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
                        tooltipBackground='white'
                      />
                    ))}
                  </div>
                </> :
                <Badge display={!!attachments?.length} badgeContent={attachments?.length}>
                  <div className='rf-history-sidebar__attachments-preview'>
                    <AllDoc />
                  </div>
                </Badge>
            }
          </div>
        }
      </Tile>
    </div>
  );
};

export default HistorySidebar;
