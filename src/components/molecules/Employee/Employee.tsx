import React from 'react';
import './Employee.scss';
import { IUser, TooltipPosition } from '../../../types/projects.types';
import Avatar from '../../atoms/Avatar';
import Tile from '../../atoms/Tile';
import Tooltip from '../../atoms/Tooltip';
import Info from '../../../assets/icons/Info';
import Structure from '../Structure';
import Refresh from '../../../assets/icons/Refresh';
import Button from '../../atoms/Button';

export interface IEmployeeProps {
  /** Пользователь */
  user: IUser;
  /** Позиция тултипа подсказки */
  position?: TooltipPosition;
  /** Портал для тултипа */
  portal?: boolean;
  /** Заголовок карточки */
  title?: string;
  /** Коллбек клика по кнопке. */
  onClick?: () => void;
  /** Показывать кнопку */
  showActionButton?: boolean;
}

const Employee: React.FC<IEmployeeProps> = ({ user,
  position = 'right',
  title = '',
  onClick = () => {},
  showActionButton = false,
  portal = false }: IEmployeeProps) => {

  // -------------------------------------------------------------------------------------------------------------------

  const shortDepartment = user.department.slice(0, 60);
  const department = shortDepartment.length < user.department.length ? shortDepartment + '...' : shortDepartment;

  return (
    <div className='rf-employee'>
      <Tile className='rf-employee__tile'>
        { title && <h6 className='rf-employee__title'> {title} </h6>}
        <div className={'rf-employee__details-wrapper'}>
          <Avatar photo={ user.photo } fullName={ user.fullName} size='xxxl'/>
          <div className='rf-employee__details'>
            <div className='rf-employee__name-container'>
              <h3 className='rf-employee__name'>{ user.fullName }</h3>
              {
                user.departmentsPath && (
                  <Tooltip position={position} portal={portal}>
                    <Info data-testid='icon' className='rf-employee__department-icon'/>
                    <Structure departmentsPath={ user.departmentsPath }/>
                  </Tooltip>
                )
              }
            </div>
            <div className='rf-employee__info'> { user.position } </div>
            <div className='rf-employee__info rf-employee__info-department'>
              { department }
            </div>
            <div className='rf-employee__info rf-employee__info-id'>
              TH: { user.id }
            </div>
          </div>
        </div>
        {showActionButton &&
          <Button
            size='xl'
            className='rf-employee__button'
            buttonType='text'
            startAdornment={<Refresh />}
          >
            Выбрать другого сотрудника
          </Button>
        }
      </Tile>
    </div>
  );
};

export default Employee;
