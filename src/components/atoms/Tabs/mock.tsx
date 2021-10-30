import React from 'react';
import { ITab } from '../../../types';
import Placeholder24 from '../../../assets/icons/Placeholder24';
import Badge from '../Badge';

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
    icon: <Placeholder24 />,
  },
  {
    label: 'Tab 2',
    icon: <Placeholder24 />,
  },
  {
    label: 'Tab 3',
    icon: <Placeholder24 />,
  },
  {
    label: 'Tab 4',
    icon: <Placeholder24 />,
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
