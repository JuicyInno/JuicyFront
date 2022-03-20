import React from 'react';
import { ITab } from '../../../types';
import { AllIconPlace } from '../../../indexIcon';
import Badge from '../Badge';
import Unread from '../Unread';

export const _simpleTabs: ITab[] = [
  {
    label: 'Заявки',
    tab: <div className='first-content'>Tab1</div>,
  },
  {
    label: 'Запросы',
    tab: <div className='active-tab'>Tab2</div>,
    active: true,
  },
  {
    label: 'Запросы 2',
    tab: <div className='active-tab'>Tab3</div>,
  },
  {
    label: 'Ситуации',
    disabled: true,
  },
];

export const _iconTabs: ITab[] = [
  {
    label: 'Tab 1',
    icon: <AllIconPlace size='s' />,
  },
  {
    label: 'Tab 2',
    icon: <AllIconPlace size='s' />,
  },
  {
    label: 'Tab 3',
    icon: <AllIconPlace size='s' />,
  },
  {
    label: 'Tab 4',
    icon: <AllIconPlace size='s' />,
  },
];

export const _badgeTabs: ITab[] = [
  {
    label: (
      <Badge badgeContent={10} placeNear>
        Заявки
      </Badge>
    ),
  },
  {
    label: (
      <Badge badgeContent={5} placeNear>
        Запросы
      </Badge>
    ),
  },
  {
    label: (
      <Badge badgeContent={10} placeNear>
        Вопросы и ответы
      </Badge>
    ),
  },
  {
    label: (
      <Badge badgeContent={10} placeNear>
        Ситуации
      </Badge>
    ),
    disabled: true,
  },
];

export const _unreadTabs: ITab[] = [
  {
    label: (
      <Unread>
        Заявки
      </Unread>
    ),
  },
  {
    label: (
      <Unread>
        Запросы
      </Unread>
    ),
  },
  { label: 'Вопросы и ответы', },
  {
    label: (
      <Unread>
        Ситуации
      </Unread>
    ),
    disabled: true,
  },
];
