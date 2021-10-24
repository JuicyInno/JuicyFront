import React from 'react';
import Employee from './Employee';
import Story from '../../storybook/Story';
import { usersMocks } from '../../popups/FindUsers/users.mocks';

export default {
  title: 'components/не проверено/Employee',
  component: Employee
};

export const employee = () => {

  return (
    <Story name='Employee'>
      <Employee user={usersMocks[0]}/>
    </Story>
  );
};
