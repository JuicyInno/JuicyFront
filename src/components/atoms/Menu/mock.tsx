import { IListElement } from '../../../types';

export const _listMenu: IListElement[] = [
  {
    value: '1',
    label: 'Значение 1',
    url: '/test'
  },
  {
    value: '2',
    label: 'Значение 2'
  },
  {
    value: '3',
    label: 'Неактивное значение 3',
    disabled: true
  },
  {
    value: '4',
    label: 'Значение 4',
    separated: true
  },
  {
    value: '5',
    label: 'Значение 5'
  },
  {
    value: '6',
    label: 'Значение 6',
    separated: true
  },
];

export const _listMenuWithTile: IListElement[] = [
  {
    value: '0',
    label: 'Заголовок 2',
    isTitle: true
  },
  ..._listMenu,
  {
    value: '10',
    label: 'Заголовок 2',
    isTitle: true,
  },
  {
    value: '11',
    label: 'Длинный текст очень длинный ооооочень',
  },
];
