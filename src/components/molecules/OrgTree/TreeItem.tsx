import React, {
  useCallback,
  useEffect, useRef, useState
} from 'react';
import { ITreeOption } from '../../../types';
import './TreeItem.scss';
import Tree from './Tree';
import ResizeObserver from 'resize-observer-polyfill';
import HLine from './lines/hline';
import { Preloader } from '../../../index';
import { ArrowsUp } from '../../../indexNewIcon';
import Circle from './Circle';
import Checkbox from '../../atoms/Checkbox';
import { classnames } from '../../../utils/classnames';

interface IFolderItemProps {
  id: string;
  item: ITreeOption;
  depth: number;
  open: boolean;
  parent?: ITreeOption;
  onChange?: (o: ITreeOption) => void;
  activeItem: ITreeOption | undefined;
  last?: boolean;
  /** Изменение состояния чекбокса. */
  onCheck?: (option: ITreeOption) => void;
}

const FolderItem: React.FC<IFolderItemProps> = ({
  id,
  item,
  onChange,
  onCheck,
  depth,
  open,
  activeItem,
  last = false
}: IFolderItemProps) => {

  const itemRef = useRef<HTMLDivElement>(null);
  const vLine = useRef<HTMLDivElement>(null);
  const folder = useRef<HTMLDivElement>(null);
  const [showFolder, toggleFolder] = useState<boolean>(open);

  useEffect(() => {
    toggleFolder(open);
  }, [open]);

  // ---------------------------------------------------------------------------------------------------------------------------------------

  const openClass = showFolder && item.children && item.children.length > 0 ? 'rf-tree__item--open' : 'rf-tree__item--close';
  const showFolderClass = showFolder ? '' : 'rf-tree__item-folder--hidden';
  const rotateIconClass = (item.hasChildren === undefined ? item.children && item.children.length === 0 : item.hasChildren) || !showFolder ? 'rf-tree__item-label-icon--rotate' : '';
  const itemChildrenClass = item.children && item.children.length > 0 ? '' : 'rf-tree__item--no-children';
  const activeClass = activeItem?.value === item.value ? 'rf-tree__item--active' : '';
  const firstLevelClass = depth === 1 ? 'rf-tree__item--1' : '';

  // ---------------------------------------------------------------------------------------------------------------------------------------

  const openFolder = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();

    if (item.hasChildren === undefined ? (!item.children || item.children.length === 0) : item.hasChildren) {
      onChange && onChange(item);
      toggleFolder(true);
      return;
    }

    toggleFolder((f: boolean) => !f);
  }, [onChange, toggleFolder, item]);

  const handleChange = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    onChange && onChange(item);

    if (item.hasChildren === undefined ? item.children : item.hasChildren) {
      toggleFolder(true);
    }
  }, [onChange, toggleFolder, item]);

  // ---------------------------------------------------------------------------------------------------------------------------------------

  const calculateHeight = useCallback((vLine: HTMLDivElement, folder: HTMLDivElement) => {

    const treeItem = folder.firstElementChild;

    if (!treeItem) {
      return;
    }

    const lastTreeItem = treeItem.children[treeItem.children.length - 1];

    if (!lastTreeItem) {
      return;
    }

    const firstLabelItem = lastTreeItem.children[1];

    const vLineParentNextItem = vLine.parentElement?.nextElementSibling;

    const y = depth === 1 && vLineParentNextItem ?
      vLineParentNextItem.getBoundingClientRect().y : firstLabelItem.getBoundingClientRect().y;
    const height = y - vLine.getBoundingClientRect().y + 1;
    vLine.style.height = height + 'px';
  }, [depth]);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      if (vLine.current && folder.current) {
        calculateHeight(vLine.current, folder.current);
      }
    });

    const container = document.getElementById(id);

    if (container) {
      resizeObserver.observe(container);
    }
  }, [calculateHeight, id]);

  const onCheckboxClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  const onCheckboxChange = () => {
    if (onCheck) {
      onCheck(item);
    }
  };

  // ---------------------------------------------------------------------------------------------------------------------------------------

  return (
    <div className={ `rf-tree__item ${openClass} ${itemChildrenClass} ${activeClass} ${firstLevelClass}` }
      ref={ itemRef }>

      <div className='rf-tree__item--v' ref={ vLine }/>

      <div className={ `rf-tree__item-label rf-tree__item-label--${item.variant || 'default'}` }
        onClick={ handleChange }>
        <HLine className='rf-tree__item--h' data-id={ `d-${depth}` }/>
        {
          (item.hasChildren === undefined ? (item.children && item.children.length > 0) : item.hasChildren) ?
            <ArrowsUp className={ `rf-tree__item-label-icon ${rotateIconClass}` } onClick={openFolder}/> :
            <Circle className='rf-tree__item-label-icon'/>
        }
        <label className={classnames('rf-tree__item-label-text', (onCheck || onChange) && 'rf-tree__item-label-text--clickable')}>
          {!!onCheck && (
            <div className='rf-tree__checkbox' >
              <Checkbox checked={item.checked} onChange={onCheckboxChange} onClick={onCheckboxClick} />
            </div>
          )}
          { item.label }
        </label>
      </div>

      { item.loading && (
        <div className='rf-tree__item-preloader'>
          <Preloader size='s'/>
        </div>
      ) }

      { item.children && item.children.length > 0 && (
        <div className={ `rf-tree__item-folder ${showFolderClass}` } ref={ folder }>
          <Tree id={ id } list={ item.children } onChange={ onChange } parent={ item } depth={ depth } open={ open }
            activeItem={ activeItem } onCheck={onCheck} />
        </div>
      ) }
    </div>
  );
};

export default FolderItem;
