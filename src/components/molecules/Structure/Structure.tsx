import React from 'react';
import './Structure.scss';
import { IStructure } from '../../../types/projects.types';
import { ITooltipProps } from '../../atoms/Tooltip/Tooltip';

interface IProps extends Pick<ITooltipProps, 'background'>{
    departmentsPath: IStructure[];
}

const Structure: React.FC<IProps> = ({ departmentsPath = [], background = 'white' }: IProps) => {

  const textColor = background !== 'white' ? 'light-text' : 'dark-text';

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
