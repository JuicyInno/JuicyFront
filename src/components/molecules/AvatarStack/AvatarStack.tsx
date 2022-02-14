import React, {
  useCallback, useRef, useState
} from 'react';
import './AvatarStack.scss';
import { DropdownPosition, Size } from '../../../types';
import { IUser } from '../../../types/projects.types';
import Avatar from '../../atoms/Avatar/Avatar';
import Dropdown from '../../atoms/Dropdown/Dropdown';
import { Manager, Reference } from 'react-popper';
import { Tooltip } from '../../../index';


export interface IAvatarStackProps {
  /** Список людей */
  list: IUser[];
  /** Размер аватаров */
  size?: Size;
  /** Количество видимых аватаров */
  maxVisible?: number;
  /** Расположение выпадающего списка */
  position?: DropdownPosition;
  /** Обработка клика по аватару */
  onClick?: (user: IUser) => void;
  /** Максимальная ширина выпадающего списка */
  dropdownMaxWidth?: number;
}

const AvatarStack: React.FC<IAvatarStackProps> = ({
  list,
  size = 'm',
  maxVisible = 3,
  position = 'bottom-start',
  onClick,
  dropdownMaxWidth
}: IAvatarStackProps) => {

  const toggleRef = useRef<HTMLDivElement>(null);

  const [showDropdown, setShowDropdown] = useState(false);

  const onDropdownClose = useCallback(() => {
    setShowDropdown(false);
  }, [setShowDropdown]);


  const visibleUsers: IUser[] = [];
  const hiddenUsers: IUser[] = [];

  list.forEach((u: IUser, i: number) => {
    i < maxVisible ? visibleUsers.push(u) : hiddenUsers.push(u);
  });

  const GAP = 4;

  const handleClick = (user: IUser) => {
    if (onClick) {
      onClick(user);
      onDropdownClose();
    }
  };

  const clickableClass = onClick ? 'rf-avatar-stack--clickable' : '';

  const usersJSX = visibleUsers.map((u: IUser, i: number) => (
    <div
      className={ `rf-avatar-stack__item ${clickableClass}` }
      key={ u.id }
      onClick={ () => handleClick(u) }
      style={ {
        transform: `translateX(-${GAP * i}px)`,
        zIndex: list.length + i
      } }>
      <Tooltip position='bottom' background='white'>
        <Avatar photo={ u.photo } fullName={ u.fullName } size={ size }/>
        <div className='rf-avatar-stack__tooltip-content-wrapper'>
          <div className='rf-avatar-stack__tooltip-avatar-wrapper'>
            <Avatar photo={ u.photo } fullName={ u.fullName } size={ size }/>
          </div>
          <div className='rf-avatar-stack__tooltip-info-column'>
            <p className='rf-avatar-stack__tooltip-name'>{ u.fullName }</p>
            { u.position && <p className='rf-avatar-stack__tooltip-position'>{ u.position }</p> }
          </div>
        </div>
      </Tooltip>
    </div>
  ));

  return (
    <Manager>
      <div className='rf-avatar-stack' ref={ toggleRef }>
        { usersJSX }
        { maxVisible < list.length && (
          <>
            <Reference>
              { (referenceProps) => (
                <div
                  { ...referenceProps }
                  data-testid='rf-avatar-stack__toggle'
                  className='rf-avatar-stack__item rf-avatar-stack--clickable'
                  style={ {
                    transform: `translateX(-${GAP * maxVisible}px)`,
                    zIndex: list.length + maxVisible
                  } }
                  onClick={ () => setShowDropdown((f: boolean) => !f) }
                >
                  <Tooltip position='bottom' background='white'>
                    <Avatar size={ size } fullName={ `+${list.length - maxVisible}` }/>
                    <div className='rf-avatar-stack__collective-tooltip-wrapper'>
                      {hiddenUsers.map(u => (
                        <div className='rf-avatar-stack__tooltip-content-container' key={u.id}>
                          <div className='rf-avatar-stack__tooltip-content-wrapper'>
                            <div className='rf-avatar-stack__tooltip-avatar-wrapper'>
                              <Avatar photo={ u.photo } fullName={ u.fullName } size={ size }/>
                            </div>
                            <div className='rf-avatar-stack__tooltip-info-column'>
                              <p
                                className={`${u.fullName !== 'Вы' ?
                                  'rf-avatar-stack__tooltip-name--you' :
                                  'rf-avatar-stack__tooltip-name'}`}>
                                { u.fullName }
                              </p>
                              { u.position && <p className='rf-avatar-stack__tooltip-position'>{ u.position }</p> }
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Tooltip>
                </div>
              ) }
            </Reference>

            <Dropdown show={ showDropdown } toggleRef={ toggleRef } onClose={ onDropdownClose } position={ position }
              style={ {
                maxWidth: dropdownMaxWidth || 'auto',
                width: dropdownMaxWidth ? '100%' : 'auto'
              } }>
              <div className='rf-avatar-stack__menu' data-testid='rf-avatar-stack__menu'>
                {
                  hiddenUsers.map((u: IUser) => (
                    <div className={ `rf-avatar-stack__menu-item ${clickableClass}` } key={ u.id }
                      onClick={ () => handleClick(u) }>
                      <Avatar size='xs' photo={ u.photo } fullName={ u.fullName }/>
                      <span className='rf-avatar-stack__menu-label'>{ u.fullName }</span>
                    </div>
                  ))
                }
              </div>
            </Dropdown>
          </>
        ) }
      </div>
    </Manager>
  );
};

export default AvatarStack;
