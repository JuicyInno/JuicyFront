import React, {
  ReactNode, InputHTMLAttributes, FC
} from 'react';
import './FatalError.scss';
import FatalErrorIcon from './FatalErrorIcon';

export interface IFatalErrorProps extends InputHTMLAttributes<HTMLLabelElement> {
  /** Компонент для изображения ошибки */
  icon?: ReactNode,
  /** Компонент для задания заголовка ошибки */
  title?: string,
  /** Компонент для задания описания ошибки */
  description?: string

}


const FatalError: FC<IFatalErrorProps> =
  ({ description = 'Что-то пошло не так, Пожалуйста, обновите страницу.',
    icon = <FatalErrorIcon />,
    title }) => {


    // -------------------------------------------------------------------------------------------------------------------

    return (
      <div className='fatal-error'>
        {icon}
        <p className='fatal-error__label'>{title || 'Ошибка'}</p>
        <p className='fatal-error__message'>{description} </p>
      </div>
    );
  };

export default FatalError;
