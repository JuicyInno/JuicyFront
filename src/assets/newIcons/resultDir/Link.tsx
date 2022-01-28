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
      viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M19.143 10.6503C18.4596 11.3337 18.4596 12.4417 19.143 13.1251C19.8264 13.8086 20.9344 13.8086 21.6178 13.1251C22.7385 12.0045 24.5554 12.0045 25.676 13.1251L26.7136 14.1628C27.9828 15.432 27.9828 17.4897 26.7136 18.7589L24.3118 21.1608C23.0426 22.43 20.9848 22.43 19.7156 21.1608L19.3313 20.7765C18.6479 20.0931 17.5398 20.0931 16.8564 20.7765C16.173 21.4599 16.173 22.568 16.8564 23.2514L17.2407 23.6357C19.8767 26.2717 24.1506 26.2717 26.7866 23.6357L29.1885 21.2338C31.8245 18.5978 31.8245 14.3239 29.1885 11.6879L28.1509 10.6503C25.6634 8.1628 21.6304 8.1628 19.143 10.6503Z' fill='#8A96A8'/><path d='M20.9649 29.4578C21.6484 28.7743 21.6484 27.6663 20.9649 26.9829C20.2815 26.2995 19.1735 26.2995 18.4901 26.9829C17.3694 28.1035 15.5525 28.1035 14.4319 26.9829L13.3943 25.9453C12.1251 24.6761 12.1251 22.6183 13.3943 21.3491L15.7961 18.9472C17.0654 17.678 19.1231 17.678 20.3923 18.9472L20.7766 19.3315C21.4601 20.0149 22.5681 20.0149 23.2515 19.3315C23.9349 18.6481 23.9349 17.5401 23.2515 16.8567L22.8672 16.4724C20.2312 13.8363 15.9573 13.8363 13.3213 16.4724L10.9194 18.8742C8.28338 21.5103 8.28337 25.7841 10.9194 28.4202L11.957 29.4578C14.4445 31.9452 18.4775 31.9452 20.9649 29.4578Z' fill='#8A96A8'/></svg> );
};
