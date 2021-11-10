import React from 'react';
import './Structure.scss';
import { IStructure } from '../../../types/projects.types';

interface IProps {
    departmentsPath: IStructure[];
    background?: 'default' | 'white';
}

const Structure: React.FC<IProps> = ({ departmentsPath = [], background = 'default' }: IProps) => {

  const textColor = background === 'default' ? 'light-text' : 'dark-text';

  const departmentsPathJSX = departmentsPath.map((item: IStructure) => (
    <div key={item.id} className='structure__item'>
      <h4 className={`structure__unit ${textColor}`}>{item.unitTypeDesc}</h4>
      <p className={`structure__name ${textColor}`}>{item.name}</p>
    </div>
  ));

  // -------------------------------------------------------------------------------------------------------------------


  return (
    <div className='structure'>
      {departmentsPathJSX}
    </div>
  );
};

export default Structure;
