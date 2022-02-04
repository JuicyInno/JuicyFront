import React, { useState } from 'react';
import { StoryDocs, StoryDocsH1 } from '../../storybook';

import { FindEntities } from './FindEntities';
import { FindEntitiesPosition } from '../FindEntitiesPosition';
import { positionsMocks, IPosition } from '../FindEntitiesPosition/positions.mocks';

import { FindEntitiesUser, createGetUsers } from '../FindEntitiesUser';
import { usersMocks } from '../FindEntitiesUser/users.mocks';
import { Button } from '../../../index';
import { AllUser } from '../../../indexNewIcon';
import { BrowserRouter } from 'react-router-dom';
import { IUser } from '../../../types/projects.types';

import axios from 'axios';

export default {
  title: 'components/withTest/FindEntities',
  component: FindEntities,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Tl0AmqQJK4qaCl4pLRio7A/Design-System-for-Story-Book?node-id=18%3A17987'
    }
  }
};

const USERS_FILTERS = [
  {
    label: 'Все',
    value: 'all'
  },
  {
    label: 'Моя команда',
    value: 'team'
  }
];

const getMockedUsers = (search: string, filter: string, skip = 0) => {
  const LIMIT = 5;

  const promise = new Promise<IUser[]>((resolve) => {
    setTimeout(() => {
      const users = (usersMocks).filter(({ fullName }) => fullName.toLocaleLowerCase().includes(search.toLowerCase()));

      resolve(users.slice(skip, skip + LIMIT));
    }, 1000);
  });

  return [promise, null] as [Promise<IUser[]>, null];
};

const getAsyncEntries = (search: string, filter: string, skip = 0) => {
  const LIMIT = 10;

  const req = fetch(`https://jsonplaceholder.typicode.com/todos?_start=${skip}&_limit=${LIMIT}`)
    .then((response) => response.json())
    .then((json) => {
      const resList = json.map((item: any) => ({
        id: item.id,
        fullName: item.title,
        department: item.title
      }));

      return resList;
    });

  return [req, null] as [Promise<IUser[]>, null];
};

export const Users = () => {
  const [value, setValue] = useState<IUser[]>([]);
  const [isDialogVisible, setDialogVisible] = useState(false);

  const onChange = (v: IUser[]) => {
    setValue(v);
  };

  const onDialogToggle = () => {
    setDialogVisible(!isDialogVisible);
  };

  return (
    <StoryDocs>
      <StoryDocsH1>Поиск по пользователям</StoryDocsH1>
      <div>
        <BrowserRouter>
          <Button onClick={onDialogToggle}>Выбрать сотрудника</Button>
          {isDialogVisible && (
            <FindEntities
              title='Выберите сотрудника'
              getEntities={getMockedUsers}
              entityKey='id'
              value={value}
              filters={USERS_FILTERS}
              onChange={onChange}
              onClose={onDialogToggle}
              lazy
              multiple
              emptyStateIcon={<AllUser />}
              emptyStateInitialText='Найдите нужных вам сотрудников'
            >
              {({ entity, isSelected, onChange }) => (
                <FindEntitiesUser user={entity} isSelected={isSelected} onChange={onChange} />
              )}
            </FindEntities>
          )}
        </BrowserRouter>
      </div>
    </StoryDocs>
  );
};

export const Async = () => {
  const [value, setValue] = useState<IUser[]>([]);
  const [isDialogVisible, setDialogVisible] = useState(false);

  const onChange = (v: IUser[]) => {
    setValue(v);
  };

  const onDialogToggle = () => {
    setDialogVisible(!isDialogVisible);
  };

  return (
    <StoryDocs>
      <StoryDocsH1>Пагинация с Jsonplaceholder</StoryDocsH1>
      <div>
        <BrowserRouter>
          <Button onClick={onDialogToggle}>Выбрать сотрудника</Button>
          {isDialogVisible && (
            <FindEntities
              title='Выберите сотрудника'
              getEntities={getAsyncEntries}
              entityKey='id'
              value={value}
              filters={USERS_FILTERS}
              onChange={onChange}
              onClose={onDialogToggle}
              lazy
              multiple
              emptyStateIcon={<AllUser />}
              emptyStateInitialText='Найдите нужных вам сотрудников'
            >
              {({ entity, isSelected, onChange }) => (
                <FindEntitiesUser user={entity} isSelected={isSelected} onChange={onChange} />
              )}
            </FindEntities>
          )}
        </BrowserRouter>
      </div>
    </StoryDocs>
  );
};

const POSITIONS_FILTERS = [
  {
    label: 'Вакантные должности',
    value: ''
  }
];

const getMockedPositions = (search: string) => {
  const promise = new Promise<IPosition[]>((resolve) => {
    resolve((positionsMocks).filter(({ positionText }) => positionText.toLocaleLowerCase().includes(search.toLowerCase())));
  });

  return [promise, null] as [Promise<IPosition[]>, null];
};

export const Positions = () => {
  const [value, setValue] = useState<IPosition[]>([]);
  const [isDialogVisible, setDialogVisible] = useState(false);

  const onChange = (v: IPosition[]) => {
    setValue(v);
  };

  const onDialogToggle = () => {
    setDialogVisible(!isDialogVisible);
  };

  return (
    <StoryDocs>
      <StoryDocsH1>Поиск по должностям</StoryDocsH1>
      <div>
        <BrowserRouter>
          <Button onClick={onDialogToggle}>Выбрать должность</Button>
          {isDialogVisible && (
            <FindEntities
              title='Выберите штатную должность'
              getEntities={getMockedPositions}
              entityKey='position'
              value={value}
              filters={POSITIONS_FILTERS}
              onChange={onChange}
              onClose={onDialogToggle}
              emptyStateIcon={<AllUser />}
              emptyStateInitialText='Найдите нужную вам должность'
            >
              {({ entity, isSelected, onChange }) => (
                <FindEntitiesPosition position={entity} isSelected={isSelected} onChange={onChange} />
              )}
            </FindEntities>
          )}
        </BrowserRouter>
      </div>
    </StoryDocs>
  );
};

const request = axios.create({ baseURL: 'https://sapd-fes-ap01.vtb24.ru:44310/' });
const getUsers = createGetUsers(request);

export const UsersAPI = () => {
  const [value, setValue] = useState<IUser[]>([]);
  const [isDialogVisible, setDialogVisible] = useState(false);

  const onChange = (v: IUser[]) => {
    setValue(v);
  };

  const onDialogToggle = () => {
    setDialogVisible(!isDialogVisible);
  };

  return (
    <StoryDocs>
      <StoryDocsH1>Поиск по пользователям из API</StoryDocsH1>
      <div>
        <BrowserRouter>
          <Button onClick={onDialogToggle}>Выбрать сотрудника</Button>
          {isDialogVisible && (
            <FindEntities
              title='Выберите сотрудника'
              getEntities={getUsers}
              entityKey='id'
              value={value}
              filters={USERS_FILTERS}
              onChange={onChange}
              onClose={onDialogToggle}
              lazy
              emptyStateIcon={<AllUser />}
              emptyStateInitialText='Найдите нужных вам сотрудников'
            >
              {({ entity, isSelected, onChange }) => (
                <FindEntitiesUser user={entity} isSelected={isSelected} onChange={onChange} />
              )}
            </FindEntities>
          )}
        </BrowserRouter>
      </div>
    </StoryDocs>
  );
};
