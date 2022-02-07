import React, { ReactNode, useCallback } from 'react';
import './ButtonGroup.scss';
import { IButtonGroup } from '../../../types';
import Preloader from '../../atoms/Preloader';
import Button from '../../atoms/Button';
import { ArrowsChevronLeft, AllMenuHorizontal } from '../../../indexIcon';
import Menu, { MenuContext } from '../../atoms/Menu';
import { Link } from 'react-router-dom';
import Tile from '../../atoms/Tile';
import Tooltip from '../../atoms/Tooltip';

export interface IButtonGroupProps {
  /** Список кнопок */
  list: IButtonGroup[];
  /** Максимальное количество показываемых кнопок */
  max?: number;
  /** Закрывать меню после клика
   * @default false
   */
  closeAfterClick?: boolean;
}

const ButtonGroup: React.FC<IButtonGroupProps> = ({ list, max = 2, closeAfterClick = false }: IButtonGroupProps) => {
  // -------------------------------------------------------------------------------------------------------------------
  /** Видимые кнопки */

  const buttonsJSX = [];

  // Если max > list.length, то max = list.length
  const m = Math.min(max, list.length);

  for (let i = 0; i < m; i++) {
    if (list[i].component) {
      buttonsJSX.push(<div className='button-group__item' key={i}>
        <Tooltip position='bottom'>
          {list[i].component}
          {list[i].tooltip}
        </Tooltip>
      </div>);
    }
  }

  // -------------------------------------------------------------------------------------------------------------------

  /** Скрытые кнопки */
  const hasMenuJSX = max < list.length;

  const getMenuJSX = useCallback((onClose: () => void) => {
    const menu: ReactNode[] = [];

    if (hasMenuJSX) {
      for (let i = max; i < list.length; i++) {
        const onClick = (e: React.MouseEvent) => {
          if (list[i].disabled) {
            e.preventDefault();
            e.stopPropagation();
            return;
          }

          if (list[i] && list[i].onClick) {
            e.preventDefault();
            e.stopPropagation();
            // @ts-ignore
            list[i].onClick();
          }

          /** Закрыть меню после клика */
          if (closeAfterClick) {
            onClose();
          }
        };

        const disabledClass = list[i].disabled ? 'button-group__menu-button--disabled' : '';

        menu.push(<Link to={list[i].url || '/'} className={`button-group__menu-button ${disabledClass}`} key={i} onClick={onClick}>
          <div className='button-group__menu-button-details'>
            <h4 className='button-group__menu-button-name'>{list[i].label}</h4>
            {list[i].description && <p className='button-group__menu-button-description'>{list[i].description}</p>}
          </div>
          {
            list[i].preloader ? (
              <div className='button-group__menu-button-loader'>
                <Preloader size='m' />
              </div>
            ) : (
              <ArrowsChevronLeft className='button-group__menu-button-icon' />
            )
          }
        </Link>);
      }
    }

    return menu;
  }, [list, max, closeAfterClick]);

  // -------------------------------------------------------------------------------------------------------------------

  if (list.length === 0) {
    return null;
  }

  return (
    <Tile className='button-group' padding='12px' variant='non-clickable'>
      {buttonsJSX}

      {hasMenuJSX && (
        <Menu content={
          <MenuContext.Consumer>
            {({ onClose }) => <div className='button-group__menu'>{getMenuJSX(onClose)}</div>}
          </MenuContext.Consumer>
        } position='top-start'>
          <Tooltip position='bottom'>
            <Button buttonType='light' size='l' data-testid='button-group__more' startAdornment={<AllMenuHorizontal />}></Button>
            <>Другие действия</>
          </Tooltip>
        </Menu>
      )}
    </Tile>
  );
};

export default ButtonGroup;
