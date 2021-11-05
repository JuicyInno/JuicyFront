import React from 'react';
import FatalError from './FatalError';
import Story from '../../storybook/Story';
import StoryItem from '../../storybook/StoryItem';
import FatalErrorIcon from './FatalErrorIcon';

export default {
  title: 'не проверено/FatalError',
  component: FatalError
};


export const fatalError = () => {

  return (
    <Story name='FatalError' description='Ошибка' width={600}>
      <StoryItem>
        <FatalError
          icon={<FatalErrorIcon variant='server' />}
          title='Ошибка 500'
          description='Сервер не смог выполнить запрос из-за непредвиденной ошибки' />
        <FatalError
          icon={<FatalErrorIcon />}
          title='Ошибка'
          description='Что-то пошло не так, Пожалуйста, обновите страницу.' />
        <FatalError
          icon={<FatalErrorIcon variant='task' />}
          title='Задачи не найдены'
          description='Что-то пошло не так, Пожалуйста, обновите страницу.' />
      </StoryItem>
    </Story>
  );
};
