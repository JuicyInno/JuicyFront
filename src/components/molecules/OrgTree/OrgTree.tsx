import React from 'react';
import { ITreeOption } from '../../../types';
import Tree from './Tree';

interface IOrgTreeProps {
  /** Уникальный ID дерева */
  id?: string;
  /** Список */
  list: ITreeOption[];
  /** Состояние открыт/закрыт */
  open?: boolean;
  /** Изменение состояние */
  onChange?: (option: ITreeOption) => void;
  /** Изменение состояния чекбокса. */
  onCheck?: (option: ITreeOption) => void;
  /** Активная опция в случае единичного выбора */
  activeOption?: ITreeOption;
}

// FIXME: Elements must have sufficient color contrast
const OrgTree: React.FC<IOrgTreeProps> = ({ id = 'rf-org-tree', list, open, onChange, onCheck, activeOption }: IOrgTreeProps) => {

  return (
    <div id={id}>
      <Tree id={id} list={list} onChange={onChange} open={open} activeItem={activeOption} onCheck={onCheck} />
    </div>
  );
};

export default OrgTree;
