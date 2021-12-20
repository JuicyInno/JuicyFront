import { IStructure } from '../../../types/projects.types';

export interface IPosition {
  position: string;
  positionText: string;
  departmentsPath?: IStructure[];
}

export const positionsMocks: IPosition[] = [
  {
    position: '19784571',
    positionText: 'Начальник отдела',
    departmentsPath: [
      {
        id: 'o1',
        name: 'Name 1',
        unitType: 'Unit type 1',
        unitTypeDesc: 'Unit description 1'
      },
      {
        id: 'o2',
        name: 'Name 2',
        unitType: 'Unit type 2',
        unitTypeDesc: 'Unit description 2'
      },
      {
        id: 'o3',
        name: 'Name 3',
        unitType: 'Unit type 3',
        unitTypeDesc: 'Unit description 3'
      }
    ]
  },
  {
    position: '19784572',
    positionText: 'Программист'
  },
  {
    position: '19784573',
    positionText: 'Дизайнер'
  },
  {
    position: '19784574',
    positionText: 'HR'
  },
  {
    position: '19784575',
    positionText: 'Аналитик'
  },
  {
    position: '19784576',
    positionText: 'Главный аналитик'
  },
  {
    position: '19784577',
    positionText: 'Начального головного офиса'
  },
  {
    position: '19784578',
    positionText: 'Руководитель должности'
  },
  {
    position: '19784579',
    positionText: 'Руководитель проекта'
  },
  {
    position: '19784580',
    positionText: 'Секретарь руководителя'
  }
];
