import React from 'react';
import FatalError, { IFatalErrorProps } from './FatalError';
import Story from '../../storybook/Story';
import StoryItem from '../../storybook/StoryItem';
import FatalErrorIcon from './FatalErrorIcon';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'не проверено/FatalError',
  component: FatalError,
  decorators: [withDesign],
};


export const fatalError = (args: IFatalErrorProps) => {

  return (
    <Story name='FatalError' description='Ошибка' width={600}>
      <StoryItem>
        <FatalError
          {...args}
          icon={<FatalErrorIcon />}
        />
        <FatalError
          {...args}
          icon={<FatalErrorIcon variant='server' />}
          title='Ошибка 500'
          description='Сервер не смог выполнить запрос из-за непредвиденной ошибки' />

        <FatalError
          {...args}
          icon={<FatalErrorIcon variant='task' />}
          title='Задачи не найдены'
          description='Что-то пошло не так, Пожалуйста, обновите страницу.' />
      </StoryItem>
    </Story>
  );
};

fatalError.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Tl0AmqQJK4qaCl4pLRio7A/Design-System-for-Story-Book?node-id=18%3A30092'
  },
};
