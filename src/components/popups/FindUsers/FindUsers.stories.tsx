import React, { useState } from 'react';
import FindUsers from './FindUsers';
import { usersMocks } from './users.mocks';
import { IUser } from '../../../types/projects.types';
import Story from '../../storybook/Story';
import StoryItem from '../../storybook/StoryItem';
import { Button, Modal } from '../../../index';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'не проверено/FindUsers',
  component: FindUsers
};

export const findUsers = () => {

  const subtitle = 'Поиск только по сотрудникам банка, которым вы можете делегировать свои полномочия (роль “Делегирование”).';

  const [selected, setSelected] = useState<IUser[]>([usersMocks[0]]);
  const [show, toggle] = useState(true);

  const getUsers = (users: IUser[]) => {
    setSelected(users);
  };

  return (
    <BrowserRouter>
      <Story name='Поиск пользователей'>
        <StoryItem description='Модальное окно'>
          <Button onClick={() => toggle(true)}>Найти сотрудника</Button>
          {show && (
            <Modal onClose={() => toggle(false)}>
              <FindUsers
                getUsers={getUsers}
                users={selected}
                multiSelect={true}
                disableSelected
                onClose={() => toggle(false)}
                subtitle={subtitle}/>
            </Modal>
          )}
        </StoryItem>
      </Story>
    </BrowserRouter>
  );
};
