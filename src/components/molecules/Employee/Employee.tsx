import React from 'react';
import './Employee.scss';
import { IUser, TooltipPosition } from '../../../types/projects.types';
import Avatar from '../../atoms/Avatar';
import Tooltip from '../../atoms/Tooltip';
import Info from '../../../assets/icons/Info';
import Structure from '../Structure';

export interface IEmployeeProps {
  user: IUser;
  position?: TooltipPosition;
  portal?: boolean;
}

const Employee: React.FC<IEmployeeProps> = ({ user, position = 'right', portal = false }: IEmployeeProps) => {


  // -------------------------------------------------------------------------------------------------------------------

  const shortDepartment = user.department.slice(0, 60);
  const department = shortDepartment.length < user.department.length ? shortDepartment + '...' : shortDepartment;

  return (
    <div className='rf-employee'>
      <Avatar photo={ user.photo } fullName={ user.fullName} size='xxl'/>
      <div className='rf-employee__details'>
        <div className='rf-employee__name-container'>
          <h3 className='rf-employee__name'>{ user.fullName }</h3>
          {
            user.departmentsPath && (
              <Tooltip position={position} portal={portal}>
                <Info className='rf-employee__department-icon'/>
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
  );
};

export default Employee;
