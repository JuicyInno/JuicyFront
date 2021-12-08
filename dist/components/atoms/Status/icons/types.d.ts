import { SVGProps } from 'react';
export declare type IconType = 'online' | 'icon' | 'decline' | 'load' | 'in' | 'out' | 'vacation' | 'birthday' | 'disease' | 'businessTrip' | 'remoteWork' | 'boss' | 'decree';
export declare type StatusIconSize = 's' | 'm' | 'l';
/** Пропсы иконки статуса */
export interface IStatusIconProps extends SVGProps<SVGSVGElement> {
    /** размер */
    size?: StatusIconSize;
}
