import React from 'react';
import Story from '../../storybook/Story';

import Close from '../../../assets/icons/Close';
import SearchIcon from '../../../assets/icons/Search';
import Success from '../../../assets/icons/Success';
import Reduce from '../../../assets/icons/Reduce';
import ChevronDown from '../../../assets/icons/ChevronDown';
import ChevronLeft from '../../../assets/icons/ChevronLeft';
import Info from '../../../assets/icons/Info';
import Calendar from '../../../assets/icons/Calendar';
import Up from '../../../assets/icons/Up';
import Eye from '../../../assets/icons/Eye';
import EyeClose from '../../../assets/icons/EyeClose';
import TuneUp from '../../../assets/icons/TuneUp';
import People from '../../../assets/icons/People';
import Gaming from '../../../assets/icons/Gaming';
import Help from '../../../assets/icons/Help';
import KebabMenu from '../../../assets/icons/KebabMenu';
import Copy from '../../../assets/icons/Copy';
import CircleAlt from '../../../assets/icons/CircleAlt';
import CircleConfirm from '../../../assets/icons/CircleConfirm';
import CircleReject from '../../../assets/icons/CircleReject';
import Circle from '../../../assets/icons/Circle';
import Time from '../../../assets/icons/Time';
import Refresh from '../../../assets/icons/Refresh';
import Download from '../../../assets/icons/Download';
import OpenNewTab from '../../../assets/icons/OpenNewTab';

export default {
  title: 'icons,illustrations/не проверено/Icons',
  // component: Hint,

};

export const icons = () => {

  return (
    <Story name='Icons' description='Иконки'>
      <Close/>
      <SearchIcon/>
      <Download/>
      <Success/>
      <Reduce/>
      <ChevronDown/>
      <Info/>
      <Calendar/>
      <ChevronLeft/>
      <Up/>
      <Eye/>
      <EyeClose/>
      <TuneUp/>
      <People/>
      <Gaming/>
      <Help/>
      <KebabMenu/>
      <Copy/>
      <CircleAlt/>
      <CircleConfirm/>
      <CircleReject/>
      <Circle/>
      <Time/>
      <Refresh/>
      <OpenNewTab />
    </Story>
  );
};
