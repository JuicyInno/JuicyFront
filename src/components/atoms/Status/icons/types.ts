import { SVGProps } from 'react';

export type IconType = 'online' | 'icon' | 'decline' | 'load' | 'in' | 'out' | 'vacation' |
    'birthday' | 'disease' | 'businessTrip' | 'remoteWork' | 'boss' | 'decree';

export type StatusIconSize = 'xxs' | 'xs' | 's';

/** Пропсы иконки статуса */
export interface IStatusIconProps extends SVGProps<SVGSVGElement> {
    /** размер */
    size?: StatusIconSize
}
