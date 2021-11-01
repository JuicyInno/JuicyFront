import React, {
  useCallback,
  useEffect, useRef, useState
} from 'react';
import { ITreeOption } from '../../../types';
import './TreeItem.scss';
import Tree from './Tree';
import ResizeObserver from 'resize-observer-polyfill';
import HLine from './lines/hline';
import { Circle, Up } from '../../../index';

interface IFolderItemProps {
  id: string;
  item: ITreeOption;
  depth: number;
  open: boolean;
  parent?: ITreeOption;
  onChange?: (o: ITreeOption) => void;
  activeItem: ITreeOption | undefined;
  last?: boolean;
}

const FolderItem: React.FC<IFolderItemProps> = ({
  id,
  item,
  onChange,
  depth,
  open,
  activeItem,
  last = false
}: IFolderItemProps) => {

  const itemRef = useRef<HTMLDivElement>(null);
  const [showFolder, toggleFolder] = useState<boolean>(open);

  useEffect(() => {
    toggleFolder(open);
  }, [open]);

  // ---------------------------------------------------------------------------------------------------------------------------------------

  const openClass = showFolder && item.children && item.children.length > 0 ? 'rf-tree__item--open' : 'rf-tree__item--close';
  const showFolderClass = showFolder ? '' : 'rf-tree__item-folder--hidden';
  const rotateIconClass = showFolder ? '' : 'rf-tree__item-label-icon--rotate';
  const itemChildrenClass = item.children && item.children.length > 0 ? '' : 'rf-tree__item--no-children';
  const itemWithChildrenClass = item.children && item.children.length ? 'rf-tree__item--with-children' : '';
  const activeClass = activeItem?.value === item.value ? 'rf-tree__item--active' : '';
  const firstLevelClass = depth === 1 ? 'rf-tree__item--1' : '';

  // ---------------------------------------------------------------------------------------------------------------------------------------

  const handleChange = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChange && onChange(item);
  };

  const openFolder = () => {
    toggleFolder(!showFolder);
  };

  // ---------------------------------------------------------------------------------------------------------------------------------------

  const calculateHeight = () => {
    if (itemRef.current && last && depth > 2) {
      const current = itemRef.current;
      let parent = current.parentElement;

      while (parent) {
        if (parent.classList.contains('rf-tree__item')) {
          break;
        }

        parent = parent.parentElement;
      }

      if (!parent) {
        return;
      }

      const dashes = parent.querySelectorAll<HTMLDivElement>(`[data-id="d-${depth}"]`);
      const lastDash = dashes[dashes.length - 1];

      if (!lastDash) {
        return;
      }

      const ICON_HEIGHT = 20;
      const height = lastDash.getBoundingClientRect().y - parent.getBoundingClientRect().y - ICON_HEIGHT;

      if (parent.firstElementChild) {
        // @ts-ignore
        parent.firstElementChild.style.height = `${height}px`;
      }
    }
  };

  const resizeLastV = useCallback(() => {
    if (depth !== 1 || !itemRef.current) {
      return;
    }

    const root = document.getElementById(id);

    if (!root) {
      return;
    }

    const lastDash: HTMLDivElement | null = root.querySelector('.rf-tree__item--1:last-of-type > .rf-tree__item--v');

    if (!lastDash) {
      return;
    }

    if (itemRef.current.classList.contains('rf-tree__item--close')) {
      lastDash.style.height = '0px';
      return;
    }

    const itemWithoutChild = '.rf-tree__item--1:last-of-type > .rf-tree__item-folder .rf-tree > .rf-tree__item:last-child > .rf-tree__item-label .rf-tree__item-label-icon';
    const itemWithChild = '.rf-tree__item--1:last-of-type > .rf-tree__item-folder .rf-tree > .rf-tree__item:last-child.rf-tree__item--with-children > .rf-tree__item-label .rf-tree__item-label-icon';

    const lastWitoutChildItem = root.querySelector<HTMLDivElement>(itemWithoutChild);
    const lastWithChildItem = root.querySelector<HTMLDivElement>(itemWithChild);
    const ICON_GAP = 2;
    let lastElement;

    if (lastWitoutChildItem && !lastWithChildItem) {
      lastElement = lastWitoutChildItem.getBoundingClientRect().y;
    } else if (lastWithChildItem) {
      lastElement = lastWithChildItem.getBoundingClientRect().y;
    } else {
      return;
    }

    const height = lastElement - lastDash.getBoundingClientRect().y + ICON_GAP;

    lastDash.style.height = `${height}px`;

  }, [depth, open]);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      calculateHeight();
      resizeLastV();
    });

    const container = document.getElementById(id);

    if (container) {
      resizeObserver.observe(container);
    }
  }, [resizeLastV]);

  // ---------------------------------------------------------------------------------------------------------------------------------------

  return (
    <div className={`rf-tree__item ${openClass} ${itemChildrenClass} ${activeClass} ${firstLevelClass} ${itemWithChildrenClass}`} ref={itemRef}>

      <div className='rf-tree__item--v' />

      <div className='rf-tree__item-label' onClick={handleChange}>
        <HLine className='rf-tree__item--h' data-id={`d-${depth}`} />
        {/* <div className='rf-tree__item--h' data-id={`d-${depth}`}/>*/}
        {
          item.children && item.children.length > 0 ? <Up className={`rf-tree__item-label-icon ${rotateIconClass}`} onClick={openFolder} /> :
            <Circle className='rf-tree__item-label-icon' />
        }
        <div className={`${activeClass}-label`} data-testid={item.label}>{item.label}</div>
      </div>
      {item.children && item.children.length > 0 && (
        <div className={`rf-tree__item-folder ${showFolderClass}`}>
          <Tree id={id} list={item.children} onChange={onChange} parent={item} depth={depth} open={open} activeItem={activeItem} />
        </div>
      )}
    </div>
  );
};

export default FolderItem;
