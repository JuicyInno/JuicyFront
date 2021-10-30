import React from 'react';
import './ButtonGroup.scss';
import { IButtonGroup } from '../../../types';
import {
  Button, ChevronLeft, KebabMenu
} from '../../../index';
import Menu from '../Menu';
import { Link } from 'react-router-dom';
import Tooltip from '../Tooltip';

export interface IButtonGroupProps {
  /** Список кнопок */
  list: IButtonGroup[];
  /** Максимальное количество показываемых кнопок */
  max?: number;
}

const ButtonGroup: React.FC<IButtonGroupProps> = ({ list, max = 2 }: IButtonGroupProps) => {

  // -------------------------------------------------------------------------------------------------------------------
  /** Видимые кнопки */

  const buttonsJSX = [];

  // Если max > list.length, то max = list.length
  const m = Math.min(max, list.length);

  for (let i = 0; i < m; i++) {
    if (list[i].component) {
      buttonsJSX.push((
        <div className='button-group__item' key={ i }>
          { list[i].component }
        </div>
      ));
    }
  }

  // -------------------------------------------------------------------------------------------------------------------
  /** Скрытые кнопки */

  const menuJSX = [];

  if (max < list.length) {
    for (let i = max; i < list.length; i++) {

      const onClick = (e: React.MouseEvent) => {
        if (list[i] && list[i].onClick) {
          e.preventDefault();
          e.stopPropagation();
          // @ts-ignore
          list[i].onClick();
        }
      };

      menuJSX.push((
        <Link to={ list[i].url || '/' } className='button-group__menu-button' key={ i } onClick={ onClick }>
          <div className='button-group__menu-button-details'>
            <h4 className='button-group__menu-button-name'>{ list[i].label }</h4>
            { list[i].description && <p className='button-group__menu-button-description'>{ list[i].description }</p> }
          </div>
          <ChevronLeft className='button-group__menu-button-icon'/>
        </Link>
      ));
    }
  }

  // -------------------------------------------------------------------------------------------------------------------


  if (list.length === 0) {
    return null;
  }

  return (
    <div className='button-group'>
      { buttonsJSX }
      {
        menuJSX.length > 0 && (
          <Menu content={<div className='button-group__menu'>{menuJSX}</div>} position='top-left'>
            {/* TODO: перестает работать onClick в Menu */}
            <Tooltip portal position='bottom'>
              <Button buttonType='light' size='l' data-testid='button-group__more' startAdornment={<KebabMenu />}></Button>
              <>Другие действия</>
            </Tooltip>
          </Menu>
        )
      }
    </div>
  );
};

export default ButtonGroup;
