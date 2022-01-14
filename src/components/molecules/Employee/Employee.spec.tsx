import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { byText } from 'testing-library-selector';

import Employee from './Employee';
import { usersMocks } from '../../popups/FindUsers/users.mocks';
import { IUser } from '../../../types/projects.types';

const user: IUser = {
  ...usersMocks[0],
  departmentsPath: [
    {
      id: 'o1',
      name: 'Name 1',
      unitType: 'Unit type 1',
      unitTypeDesc: 'Unit description 1',
    },
  ],
};

describe('Test <Employee/> component', () => {
  it('should render Employee component', () => {
    render(<Employee user={user} />);
  });

  it('should be wrapper', () => {
    const { container } = render(<Employee user={user} />);
    expect(container.getElementsByClassName('rf-employee__details-wrapper')).toHaveLength(1);
  });

  it('should be tile', () => {
    const { container } = render(<Employee user={user} />);
    expect(container.getElementsByClassName('rf-employee__tile')).toHaveLength(1);
  });

  it('should be title', () => {
    const { container } = render(<Employee user={user} title={'Сотрудник'} />);
    expect(container.getElementsByClassName('rf-employee__title')).toHaveLength(1);
    expect(byText(/Сотрудник/i).get()).toBeInTheDocument();
  });

  it('should be fullName', () => {
    const { container } = render(<Employee user={user} />);
    expect(container.getElementsByClassName('rf-employee__name')).toHaveLength(1);
    expect(byText(user.fullName).get()).toBeInTheDocument();
  });

  it('should be info container by user', () => {
    const { container } = render(<Employee user={user} />);
    expect(container.getElementsByClassName('rf-employee__details')).toHaveLength(1);
  });

  it('should be position', () => {
    const { container } = render(<Employee user={user} />);
    expect(container.getElementsByClassName('rf-employee__info')).toHaveLength(3);
    expect(byText(user.position).get()).toBeInTheDocument();
  });

  it('should be id', () => {
    const { container } = render(<Employee user={user} />);
    expect(container.getElementsByClassName('rf-employee__info-id')).toHaveLength(1);
  });

  it('should be button', () => {
    const { container } = render(<Employee user={user} showActionButton />);
    expect(container.getElementsByClassName('rf-employee__button')).toHaveLength(1);
  });

  it('should be info icon', () => {
    const { container } = render(<Employee user={user} />);
    expect(container.getElementsByClassName('rf-employee__department-icon')).toHaveLength(1);
  });

  it('should be show tooltip', async () => {
    render(<Employee user={user} position={'right'} />);
    fireEvent.mouseEnter(screen.getByTestId('icon'));

    await waitFor(() => {
      expect(screen.getByTestId('rf-tooltip')).toBeInTheDocument();
    });
  });

  it('should be call onClick', () => {
    const onClick = jest.fn();
    const { container } = render(<Employee user={user} showActionButton onClick={onClick} />);
    fireEvent.click(container.getElementsByClassName('rf-employee__button')[0]);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('should be render without tile', () => {
    const { container } = render(<Employee user={user} showBoxShadow={false} />);

    expect(container.getElementsByClassName('rf-tile')).toHaveLength(0);
  });

});
