import { FC, ReactNode } from 'react';
import './Toast.scss';
export interface IProps {
    children: ReactNode;
    isVisible: boolean;
    setVisibility: (mode: boolean) => void;
}
declare const Toast: FC<IProps>;
export default Toast;
