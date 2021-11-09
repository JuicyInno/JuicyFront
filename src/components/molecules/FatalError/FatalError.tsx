import React, {
  ReactNode, InputHTMLAttributes, FC, useState, useEffect
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

    const [currentTitle, setCurrentTitile] = useState(title);
    const [currentDescription, setCurrentDescription] = useState(description);

    useEffect(() => {
      setCurrentTitile(title);
      setCurrentDescription(description);
    }, [title, description]);

    // -------------------------------------------------------------------------------------------------------------------


    return (
      <div className='fatal-error'>
        {icon}
        <p className='fatal-error__label'>{currentTitle || 'Ошибка'}</p>
        <p className='fatal-error__message'>{currentDescription} </p>
      </div>
    );
  };

export default FatalError;
