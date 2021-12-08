import React from 'react';
import './Structure.scss';
import { IStructure } from '../../../types/projects.types';
interface IProps {
    departmentsPath: IStructure[];
    background?: 'default' | 'white';
}
declare const Structure: React.FC<IProps>;
export default Structure;
