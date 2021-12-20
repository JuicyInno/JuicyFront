import React, { ReactNode } from 'react';
import './ActionMenu.scss';
import ChevronDown from '../../../assets/icons/ChevronDown';
import { IOption } from '../../../types';
import { IActionMenuListConfig } from '../../../types/projects.types';
import {
  Button, Input, Menu, Select
} from '../../../index';

interface IActionMenuProps {
  type?: 'default' | 'list' | 'action';
  listConfig?: IActionMenuListConfig;
  component?: ReactNode | ReactNode[];
  children?: ReactNode | ReactNode[];
}

const ActionMenu: React.FC<IActionMenuProps> = ({
  type = 'default',
  listConfig,
  component,
  children
}: IActionMenuProps) => {


  // -------------------------------------------------------------------------------------------------------------------

  const getSortValue = (o: IOption[]) => {
    listConfig?.onSort(o[0].value);
  };

  const handleSearch = (e: React.KeyboardEvent) => {
    listConfig?.onSearch((e.target as HTMLInputElement).value);
  };

  const listJSX = listConfig && (
    <div className='jf-action-menu__header'>
      <div className='jf-action-menu__sorting'>
        {component ? component :
          listConfig.sortList.length > 0 && listConfig &&
          <Select readOnly options={ listConfig.sortList }
            values={ listConfig.defaultSortValue ? [listConfig.defaultSortValue] : [listConfig.sortList[0]] }
            onChange={ getSortValue }/>
        }
      </div>
      <div className='jf-action-menu__search'>
        <Input onKeyUp={ handleSearch } placeholder='Поиск' onClear={ listConfig.onClear }/>
      </div>
      {
        listConfig.singleAction && (
          <div className='jf-action-menu__list-button'>
            <Button onClick={ listConfig.singleAction }>
              { listConfig.actionLabel || 'Создать' }
            </Button>
          </div>
        )
      }
      { !listConfig.singleAction && listConfig.actionList.length > 0 && (
        <div className='jf-action-menu__list-button'>
          <Menu list={ listConfig.actionList } position='top-end'>
            <Button>
              <div className='jf-action-menu__button-inner'>
                { listConfig.actionLabel || 'Создать' } <ChevronDown className='jf-action-menu__list-button-icon'/>
              </div>
            </Button>
          </Menu>
        </div>
      ) }
    </div>
  );

  // -------------------------------------------------------------------------------------------------------------------

  return (
    <div className={ `jf-action-menu jf-action-menu--${type}` }>
      { type === 'list' ? listJSX : children }
    </div>
  );
};

export default ActionMenu;
