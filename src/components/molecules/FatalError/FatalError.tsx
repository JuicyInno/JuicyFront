import React, {
  ReactNode, InputHTMLAttributes, FC, useState, useEffect
} from 'react';
import './FatalError.scss';
import FatalErrorIcon from './FatalErrorIcon';

export interface IFatalErrorProps extends InputHTMLAttributes<HTMLLabelElement> {
  icon?: ReactNode
  title?: string,
  description: string

}


const FatalError: FC<IFatalErrorProps> =
  ({ description = 'Что-то пошло не так, Пожалуйста, обновите страницу.',
    icon = <FatalErrorIcon />,
    title = 'Ошибка' }) => {

    const [t, setT] = useState(title);
    const [d, setD] = useState(description);

    useEffect(() => {
      setT(title);
      setD(description);
    }, [title, description]);

    // -------------------------------------------------------------------------------------------------------------------


    return (
      <div className='fatal-error'>
        {icon}
        <p className='fatal-error__label'>{t}</p>
        <p className='fatal-error__message'>{d} </p>
      </div>
    );
  };

export default FatalError;
