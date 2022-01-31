import React from 'react';
import { IIconProps } from '../../../types';
import { iconSize } from '../../../utils/helpers';
/* eslint-disable max-len */

export default ({ size = 'xs', ...props }: IIconProps) => {
  return (
    <svg
      {...props}
      width={iconSize[size]}
      height={iconSize[size]}
      viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M12.4308 5.36543C12.6327 4.85139 12.3797 4.27097 11.8657 4.06903C11.3516 3.86708 10.7712 4.12009 10.5693 4.63413L5.06927 18.6341C4.86733 19.1482 5.12033 19.7286 5.63437 19.9305C6.14841 20.1325 6.72883 19.8795 6.93078 19.3654L9.43671 12.9867L15.246 19.6566C15.6087 20.073 16.2403 20.1166 16.6568 19.7539C17.0733 19.3911 17.1168 18.7595 16.7541 18.343L10.7649 11.4665L19.5397 5.84167C20.0047 5.54362 20.14 4.92508 19.8419 4.46012C19.5439 3.99516 18.9253 3.85986 18.4604 4.15791L11.0353 8.91758L12.4308 5.36543Z' fill='#8A96A8'/></svg> );
};
