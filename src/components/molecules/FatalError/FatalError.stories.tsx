import React from 'react';
import { withDesign } from 'storybook-addon-designs';
import FatalError, { IFatalErrorProps } from './FatalError';
import StoryItem from '../../storybook/StoryItem';
import FatalErrorIcon from './FatalErrorIcon';
import StoryContainer from '../../storybook/Story';
import { Story } from '@storybook/react';

export default {
  title: 'components/withTest/FatalError',
  component: FatalError,
  decorators: [withDesign],
};


const Demo = () => {
  <StoryContainer name='Fatal Error' description='Страница отображение критической ошибка приложения.'>
    <StoryItem>
      <FatalError
      />
      <FatalError
        icon={<FatalErrorIcon variant='server' />}
        title='Ошибка 500'
        description='Сервер не смог выполнить запрос из-за непредвиденной ошибки' />

      <FatalError
        icon={<FatalErrorIcon variant='task' />}
        title='Задачи не найдены'
        description='Что-то пошло не так, Пожалуйста, обновите страницу.' />
    </StoryItem>
  </StoryContainer>;
};

export const Playground: Story = (args: IFatalErrorProps) => {
  return (
    <StoryContainer name='Fatal Error' description='Страница отображение критической ошибка приложения.'>
      <StoryItem>
        <FatalError
          {...args}
        />
      </StoryItem>
    </StoryContainer>
  );
};

Demo.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Tl0AmqQJK4qaCl4pLRio7A/Design-System-for-Story-Book?node-id=18%3A30092'
  },
};
