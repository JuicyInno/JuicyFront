import React from 'react';
import { ITreeOption } from '../../../types';
import TreeItem from './TreeItem';

export interface ITreeProps {
  /** Уникальный ID дерева */
  id: string;
  /** Список */
  list: ITreeOption[];
  /** Глубина вложенности */
  depth?: number;
  /** Состояние открыт/закрыт */
  open?: boolean;
  /** Родительский элемент */
  parent?: ITreeOption;
  /** Обновление структуры */
  onChange?: (o: ITreeOption) => void;
  /** Изменение состояния чекбокса. */
  onCheck?: (option: ITreeOption) => void;
  /** Активная запись */
  activeItem?: ITreeOption | undefined;
}

const Folder: React.FC<ITreeProps> = ({ id, list, onChange, onCheck, depth = 0, open = true, activeItem }: ITreeProps) => {

  // ---------------------------------------------------------------------------------------------------------------------------------------

  /** Базовый размер отступа слева */
  const PADDING_LEFT_BASE = 22;
  const style = { paddingLeft: depth === 0 ? 0 : PADDING_LEFT_BASE };

  // ---------------------------------------------------------------------------------------------------------------------------------------

  const listJSX = list.map((item: ITreeOption, i: number) => {
    return (
      <TreeItem id={id} key={item.value + '_' + depth + '_' + i} item={item} onChange={onChange} onCheck={onCheck}
        depth={depth + 1} open={open} activeItem={activeItem} last={i === list.length - 1}/>
    );
  });

  // ---------------------------------------------------------------------------------------------------------------------------------------

  return (
    <div className='rf-tree' style={style}>
      {listJSX}
    </div>
  );
};

export default Folder;
