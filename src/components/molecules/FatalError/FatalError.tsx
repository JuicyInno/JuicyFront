import React, { ReactNode, FC } from 'react';
import './FatalError.scss';
import FatalErrorIcon from './FatalErrorIcon';

export interface IFatalErrorProps {
  /** Компонент для изображения ошибки */
  icon?: ReactNode,
  /** Заголовок ошибки */
  title?: string,
  /** Описание ошибки */
  description?: string

}


const FatalError: FC<IFatalErrorProps> =
  ({ description = 'Что-то пошло не так, Пожалуйста, обновите страницу.',
    icon = <FatalErrorIcon />,
    title = 'Ошибка' }: IFatalErrorProps) => {

    return (
      <div className='fatal-error'>
        {icon}
        <p className='fatal-error__label'>{title}</p>
        <p className='fatal-error__message'>{description} </p>
      </div>
    );
  };

export default FatalError;
