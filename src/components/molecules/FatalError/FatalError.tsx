import React, { ReactNode } from 'react';
import './FatalError.scss';

interface IProps {
  icon: ReactNode
  title: string,
  description: string

}

const FatalError = ({ description, icon, title }: IProps) => {


  // -------------------------------------------------------------------------------------------------------------------


  return (
    <div className='fatal-error'>
      {icon}
      <p className='fatal-error__label'>{title}</p>
      <p className='fatal-error__message'>{description} </p>
    </div>
  );
};

export default FatalError;
