import { FC } from 'react';
import './UsersStack.scss';
import { IUser } from '../../../types/projects.types';
import { Size } from '../../../types';
export interface IUsersStackProps {
    users: IUser[];
    size?: Size;
    max?: number;
}
declare const UsersStack: FC<IUsersStackProps>;
export default UsersStack;
