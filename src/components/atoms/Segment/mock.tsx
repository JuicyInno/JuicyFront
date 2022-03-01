import React from 'react';
import { ISegment } from '../../../types';

import Badge from '../Badge';
import { AllIconPlace } from '../../../indexIcon';

export const _segmentList: ISegment[] = [
  {
    value: '1',
    label: 'Линейная',
  },
  {
    value: '2',
    label: 'Функциональная'
  }
];

export const _segmentList2: ISegment[] = [
  {
    value: '1',
    label: 'Enabled',
  },
  {
    value: '2',
    label: 'Disabled',
    disabled: true
  }
];

export const _segmentList3: ISegment[] = [
  {
    value: '1',
    label: <Badge badgeContent='2' placeNear>Линейная</Badge>,
  },
  {
    value: '2',
    label: 'Функциональная'
  },
  {
    value: '3',
    label: 'Все',
    icon: <AllIconPlace />
  }
];
