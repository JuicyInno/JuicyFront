import React from 'react';
import { Story } from '@storybook/react';
import {
  StoryDocs, StoryDocsH1, StoryDocsH2
} from '../../storybook';
import { withDesign } from 'storybook-addon-designs';

import Point from '../../../assets/icons/Tools/Point';
import Trash from '../../../assets/icons/Tools/Trash';
import Location from '../../../assets/icons/Tools/Location';
import OnCard from '../../../assets/icons/Tools/OnCard';
import NewCalendar from '../../../assets/icons/Tools/Calendar';
import Lock from '../../../assets/icons/Tools/Lock';
import Shop from '../../../assets/icons/Tools/Shop';
import NewEdit from '../../../assets/icons/Tools/Edit';
import OnPhone from '../../../assets/icons/Tools/OnPhone';
import Microphone from '../../../assets/icons/Tools/Microphone';
import ChildrenBankCard from '../../../assets/icons/Tools/ChildrenBankCard';
import QR from '../../../assets/icons/Tools/QR';
import OnCount from '../../../assets/icons/Tools/OnCount';
import TuneUp from '../../../assets/icons/Tools/TuneUp';
import Change from '../../../assets/icons/Tools/Change';
import MenuHorizontal from '../../../assets/icons/Tools/MenuHorizontal';
import MenuVertical from '../../../assets/icons/Tools/MenuVertical';
import Refresh from '../../../assets/icons/Tools/Refresh';
import Link from '../../../assets/icons/Tools/Link';
import Cog from '../../../assets/icons/Tools/Cog';
import Printer from '../../../assets/icons/Tools/Printer';
import ShowAll from '../../../assets/icons/Tools/ShowAll';
import Template from '../../../assets/icons/Tools/Template';
import Receipt from '../../../assets/icons/Tools/Receipt';
import AutoPayment from '../../../assets/icons/Tools/AutoPayment';
import Cash from '../../../assets/icons/Tools/Cash';
import Repeat from '../../../assets/icons/Tools/Repeat';
import Cancel from '../../../assets/icons/Tools/Cancel';

import InfoAlert from '../../../assets/icons/Alerts/InfoAlert';
import QuestionAlert from '../../../assets/icons/Alerts/QuestionAlert';
import Dialog from '../../../assets/icons/Alerts/Dialog';
import Holidays from '../../../assets/icons/Alerts/Holidays';
import Notification from '../../../assets/icons/Alerts/Notification';

import Envelope from '../../../assets/icons/Messaging/Envelope';
import Smartphone from '../../../assets/icons/Messaging/Smartphone';
import Phone from '../../../assets/icons/Messaging/Phone';
import Alternative from '../../../assets/icons/Messaging/Alternative';

import User from '../../../assets/icons/Account/User';
import Exit from '../../../assets/icons/Account/Exit';
import EyeOpen from '../../../assets/icons/Account/EyeOpen';
import EyeClose from '../../../assets/icons/Account/EyeClose';
import Search from '../../../assets/icons/Account/Search';
import Send from '../../../assets/icons/Account/Send';
import Copy from '../../../assets/icons/Account/Copy';

import DarkModeStroke from '../../../assets/icons/Themes/DarkModeStroke';
import DarkModeFill from '../../../assets/icons/Themes/DarkModeFill';
import LightModeStroke from '../../../assets/icons/Themes/LightModeStroke';
import LightModeStrokeFill from '../../../assets/icons/Themes/LightModeStrokeFill';

import Star from '../../../assets/icons/Specific/Star';
import BankCard from '../../../assets/icons/Specific/BankCard';
import Archive from '../../../assets/icons/Specific/Archive';
import Diagram from '../../../assets/icons/Specific/Diagram';
import Courier from '../../../assets/icons/Specific/Сourier';
import Safe from '../../../assets/icons/Specific/Safe';
import DigitalCard from '../../../assets/icons/Specific/DigitalCard';
import SpecialSearch from '../../../assets/icons/Specific/SpecialSearch';
import LightBulb from '../../../assets/icons/Specific/LightBulb';
import Coin from '../../../assets/icons/Specific/Coin';
import CardRecommend from '../../../assets/icons/Specific/CardRecommend';
import Bank from '../../../assets/icons/Specific/Bank';
import Gosuslygi from '../../../assets/icons/Specific/Gosuslygi';

import ChevronLeft from '../../../assets/icons/Arrows/ChevronLeft';
import ChevronRight from '../../../assets/icons/Arrows/ChevronRight';
import ChevronUp from '../../../assets/icons/Arrows/ChevronUp';
import ChevronDown from '../../../assets/icons/Arrows/ChevronDown';
import Right from '../../../assets/icons/Arrows/Right';
import Left from '../../../assets/icons/Arrows/Left';
import Up from '../../../assets/icons/Arrows/Up';
import Down from '../../../assets/icons/Arrows/Down';
import DownMini from '../../../assets/icons/Arrows/DownMini';
import UpMini from '../../../assets/icons/Arrows/UpMini';
import Download from '../../../assets/icons/Arrows/Download';
import Upload from '../../../assets/icons/Arrows/Upload';
import Exchange from '../../../assets/icons/Arrows/Exchange';
import SubdirectoryRight from '../../../assets/icons/Arrows/SubdirectoryRight';
import Attach from '../../../assets/icons/Arrows/Attach';
import Add from '../../../assets/icons/Arrows/Add';
import Reduce from '../../../assets/icons/Arrows/Reduce';
import Success from '../../../assets/icons/Arrows/Success';
import Warning from '../../../assets/icons/Arrows/Warning';
import Transfer from '../../../assets/icons/Arrows/Transfer';
import Sort from '../../../assets/icons/Arrows/Sort';
import Question from '../../../assets/icons/Arrows/Question';
import Close from '../../../assets/icons/Arrows/Close';
import Renew from '../../../assets/icons/Arrows/Renew';
import InfoStatus from '../../../assets/icons/Arrows/InfoStatus';

import StatusWarning from '../../../assets/icons/Status/Warning';
import StatusInformation from '../../../assets/icons/Status/Information';
import Release from '../../../assets/icons/Status/Release';
import StatusError from '../../../assets/icons/Status/Error';
import StatusQuestion from '../../../assets/icons/Status/Question';
import StatusReturn from '../../../assets/icons/Status/Return';
import Unread from '../../../assets/icons/Status/Unread';
import Pending from '../../../assets/icons/Status/Pending';
import InfoFill from '../../../assets/icons/Status/InfoFill';
import InfoOutline from '../../../assets/icons/Status/InfoOutline';
import Blocked from '../../../assets/icons/Status/Blocked';
import Timer from '../../../assets/icons/Status/Timer';
import Loader from '../../../assets/icons/Status/Loader';
import Reserved from '../../../assets/icons/Status/Reserved';
import Flag from '../../../assets/icons/Status/Flag';
import Troyka from '../../../assets/icons/Status/Troyka';
import Pin from '../../../assets/icons/Status/Pin';

import Android from '../../../assets/icons/Social/Android';
import Windows from '../../../assets/icons/Social/Windows';
import Classmates from '../../../assets/icons/Social/Classmates';
import Facebook from '../../../assets/icons/Social/Facebook';
import Apple from '../../../assets/icons/Social/Apple';
import Youtube from '../../../assets/icons/Social/Youtube';
import VK from '../../../assets/icons/Social/VK';
import GooglePlay from '../../../assets/icons/Social/GooglePlay';
import Twitter from '../../../assets/icons/Social/Twitter';
import Telegram from '../../../assets/icons/Social/Telegram';
import Huawei from '../../../assets/icons/Social/Huawei';

export default {
  title: 'icons,illustrations/не проверено/Icons',
  decorators: [withDesign],
};

export const Demo: Story = () => {
  const iconStyle = {
    color: '#8A96A8',
    marginRight: 25
  };
  const elemStyle = {
    marginBottom: 32,
    display: 'flex',
    justifyItems: 'center',
    color: '#4C5767'
  };

  return (
    <StoryDocs>
      <StoryDocsH1>Системные иконки 24 px</StoryDocsH1>
      <StoryDocsH2>Tools</StoryDocsH2>
      <div style={{ display: 'flex' }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          marginRight: 250
        }}>
          <div style={elemStyle}><div style={iconStyle}><Point /></div>Point</div>
          <div style={elemStyle}><div style={iconStyle}><Trash /></div>Trash</div>
          <div style={elemStyle}><div style={iconStyle}><Location /></div>Location</div>
          <div style={elemStyle}><div style={iconStyle}><OnCard /></div>On_Card</div>
          <div style={elemStyle}><div style={iconStyle}><NewCalendar /></div>Calendar</div>
          <div style={elemStyle}><div style={iconStyle}><Lock /></div>Lock</div>
          <div style={elemStyle}><div style={iconStyle}><Shop /></div>Shop</div>
          <div style={elemStyle}><div style={iconStyle}><NewEdit /></div>Edit</div>
          <div style={elemStyle}><div style={iconStyle}><OnPhone /></div>On_phone</div>
          <div style={elemStyle}><div style={iconStyle}><Microphone /></div>Microphone</div>
          <div style={elemStyle}><div style={iconStyle}><ChildrenBankCard /></div>Children_bank_card</div>
          <div style={elemStyle}><div style={iconStyle}><QR /></div>QR</div>
          <div style={elemStyle}><div style={iconStyle}><OnCount /></div>On_count</div>
          <div style={elemStyle}><div style={iconStyle}><TuneUp /></div>Tune-up</div>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column'
        }}>
          <div style={elemStyle}><div style={iconStyle}><Change /></div>Change</div>
          <div style={elemStyle}><div style={iconStyle}><MenuHorizontal /></div>Menu_horizontal</div>
          <div style={elemStyle}><div style={iconStyle}><MenuVertical /></div>Menu_vertical</div>
          <div style={elemStyle}><div style={iconStyle}><Refresh /></div>Refresh</div>
          <div style={elemStyle}><div style={iconStyle}><Link /></div>Link</div>
          <div style={elemStyle}><div style={iconStyle}><Cog /></div>Cog</div>
          <div style={elemStyle}><div style={iconStyle}><Printer /></div>Printer</div>
          <div style={elemStyle}><div style={iconStyle}><ShowAll /></div>Show_all</div>
          <div style={elemStyle}><div style={iconStyle}><Template /></div>Template</div>
          <div style={elemStyle}><div style={iconStyle}><Receipt/></div>Receipt</div>
          <div style={elemStyle}><div style={iconStyle}><AutoPayment /></div>Auto_payment</div>
          <div style={elemStyle}><div style={iconStyle}><Cash /></div>Cash</div>
          <div style={elemStyle}><div style={iconStyle}><Repeat /></div>Repeat</div>
          <div style={elemStyle}><div style={iconStyle}><Cancel /></div>Cancel</div>
        </div>
      </div>
      <StoryDocsH2>Alerts</StoryDocsH2>
      <div style={{ display: 'flex' }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          marginRight: 250
        }}>
          <div style={elemStyle}><div style={iconStyle}><InfoAlert /></div>Info_alert</div>
          <div style={elemStyle}><div style={iconStyle}><QuestionAlert /></div>Question_alert</div>
          <div style={elemStyle}><div style={iconStyle}><Dialog /></div>Dialog</div>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column'
        }}>
          <div style={elemStyle}><div style={iconStyle}><Holidays /></div>Holidays</div>
          <div style={elemStyle}><div style={iconStyle}><Notification /></div>Notification</div>
        </div>
      </div>
      <StoryDocsH2>Messaging</StoryDocsH2>
      <div style={{ display: 'flex' }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          marginRight: 250
        }}>
          <div style={elemStyle}><div style={iconStyle}><Envelope /></div>Envelope</div>
          <div style={elemStyle}><div style={iconStyle}><Smartphone /></div>Smartphone</div>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column'
        }}>
          <div style={elemStyle}><div style={iconStyle}><Phone /></div>Phone</div>
          <div style={elemStyle}><div style={iconStyle}><Alternative /></div>Alternative</div>
        </div>
      </div>
      <StoryDocsH2>Account</StoryDocsH2>
      <div style={{ display: 'flex' }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          marginRight: 250
        }}>
          <div style={elemStyle}><div style={iconStyle}><User /></div>User</div>
          <div style={elemStyle}><div style={iconStyle}><Exit /></div>Exit</div>
          <div style={elemStyle}><div style={iconStyle}><Send /></div>Send</div>
          <div style={elemStyle}><div style={iconStyle}><Copy /></div>Copy</div>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column'
        }}>
          <div style={elemStyle}><div style={iconStyle}><EyeOpen /></div>Eye_open</div>
          <div style={elemStyle}><div style={iconStyle}><EyeClose /></div>Eye_close</div>
          <div style={elemStyle}><div style={iconStyle}><Search /></div>Search</div>
        </div>
      </div>
      <StoryDocsH2>Specific</StoryDocsH2>
      <div style={{ display: 'flex' }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          marginRight: 250
        }}>
          <div style={elemStyle}><div style={iconStyle}><Star /></div>Star</div>
          <div style={elemStyle}><div style={iconStyle}><BankCard /></div>Bank_card</div>
          <div style={elemStyle}><div style={iconStyle}><Archive /></div>Archive</div>
          <div style={elemStyle}><div style={iconStyle}><Courier /></div>Courier</div>
          <div style={elemStyle}><div style={iconStyle}><Diagram /></div>Diagramm</div>
          <div style={elemStyle}><div style={iconStyle}><Safe /></div>Safe</div>
          <div style={elemStyle}><div style={iconStyle}><DigitalCard /></div>Digital_card</div>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column'
        }}>
          <div style={elemStyle}><div style={iconStyle}><SpecialSearch /></div>Special_search</div>
          <div style={elemStyle}><div style={iconStyle}><LightBulb /></div>Lightbulb</div>
          <div style={elemStyle}><div style={iconStyle}><Coin /></div>Coin</div>
          <div style={elemStyle}><div style={iconStyle}><CardRecommend /></div>Card_recomend</div>
          <div style={elemStyle}><div style={iconStyle}><Bank /></div>Bank</div>
          <div style={elemStyle}><div style={iconStyle}><Gosuslygi /></div>Gosuslygi</div>
        </div>
      </div>
      <StoryDocsH2>Themes</StoryDocsH2>
      <div style={{ display: 'flex' }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          marginRight: 250
        }}>
          <div style={elemStyle}><div style={iconStyle}><DarkModeStroke /></div>Dark_mode (Stroke)</div>
          <div style={elemStyle}><div style={iconStyle}><LightModeStroke /></div>Light_mode_stroke</div>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column'
        }}>
          <div style={elemStyle}><div style={iconStyle}><DarkModeFill /></div>Dark_mode (Fill)</div>
          <div style={elemStyle}><div style={iconStyle}><LightModeStrokeFill /></div>Light_mode_stroke (Fill)</div>

        </div>
      </div>
      <StoryDocsH2>Arrows</StoryDocsH2>
      <div style={{ display: 'flex' }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          marginRight: 250
        }}>
          <div style={elemStyle}><div style={iconStyle}><ChevronLeft /></div>Chevron-left</div>
          <div style={elemStyle}><div style={iconStyle}><ChevronRight /></div>Chevron-right</div>
          <div style={elemStyle}><div style={iconStyle}><ChevronUp /></div>Chevron-up</div>
          <div style={elemStyle}><div style={iconStyle}><ChevronDown /></div>Chevron-down</div>
          <div style={elemStyle}><div style={iconStyle}><Right /></div>Right</div>
          <div style={elemStyle}><div style={iconStyle}><Left /></div>Left</div>
          <div style={elemStyle}><div style={iconStyle}><Up /></div>Up</div>
          <div style={elemStyle}><div style={iconStyle}><Down /></div>Down</div>
          <div style={elemStyle}><div style={iconStyle}><DownMini /></div>Down</div>
          <div style={elemStyle}><div style={iconStyle}><UpMini /></div>Up</div>
          <div style={elemStyle}><div style={iconStyle}><Download /></div>Download</div>
          <div style={elemStyle}><div style={iconStyle}><Upload /></div>Upload</div>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column'
        }}>
          <div style={elemStyle}><div style={iconStyle}><Exchange /></div>Exchange</div>
          <div style={elemStyle}><div style={iconStyle}><Sort /></div>Sort</div>
          <div style={elemStyle}><div style={iconStyle}><Transfer /></div>Transfer</div>
          <div style={elemStyle}><div style={iconStyle}><SubdirectoryRight /></div>Subdirectory-right</div>
          <div style={elemStyle}><div style={iconStyle}><Attach /></div>Attach</div>
          <div style={elemStyle}><div style={iconStyle}><Add /></div>Add</div>
          <div style={elemStyle}><div style={iconStyle}><Reduce /></div>Reduce</div>
          <div style={elemStyle}><div style={iconStyle}><Question /></div>Question</div>
          <div style={elemStyle}><div style={iconStyle}><Success /></div>Success</div>
          <div style={elemStyle}><div style={iconStyle}><Warning /></div>Warning</div>
          <div style={elemStyle}><div style={iconStyle}><Close /></div>Close</div>
          <div style={elemStyle}><div style={iconStyle}><Renew /></div>Renew</div>
          <div style={elemStyle}><div style={iconStyle}><InfoStatus /></div>Info status</div>
        </div>
      </div>
      <StoryDocsH2>Status</StoryDocsH2>
      <div style={{ display: 'flex' }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          marginRight: 250
        }}>
          <div style={elemStyle}><div style={iconStyle}><StatusWarning /></div>Warning</div>
          <div style={elemStyle}><div style={iconStyle}><StatusInformation /></div>Information</div>
          <div style={elemStyle}><div style={iconStyle}><Release /></div>Release</div>
          <div style={elemStyle}><div style={iconStyle}><StatusError /></div>Error</div>
          <div style={elemStyle}><div style={iconStyle}><StatusQuestion /></div>Question</div>
          <div style={elemStyle}><div style={iconStyle}><StatusReturn /></div>Return</div>
          <div style={elemStyle}><div style={iconStyle}><Unread /></div>Unread</div>
          <div style={elemStyle}><div style={iconStyle}><Pending /></div>Pending</div>
          <div style={elemStyle}><div style={iconStyle}><InfoFill /></div>Info_fill</div>
          <div style={elemStyle}><div style={iconStyle}><InfoOutline /></div>Info_outline</div>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column'
        }}>
          <div style={elemStyle}><div style={iconStyle}><Blocked /></div>Blocked</div>
          <div style={elemStyle}><div style={iconStyle}><Timer /></div>Timer</div>
          <div style={elemStyle}><div style={iconStyle}><Loader /></div>Loader</div>
          <div style={elemStyle}><div style={iconStyle}><Reserved /></div>Reserved</div>
          <div style={elemStyle}><div style={iconStyle}><Flag /></div>Flag</div>
          <div style={elemStyle}><div style={iconStyle}><Troyka /></div>Troyka</div>
          <div style={elemStyle}><div style={iconStyle}><Pin /></div>Pin</div>
        </div>
      </div>
      <StoryDocsH2>Social</StoryDocsH2>
      <div style={{ display: 'flex' }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          marginRight: 250
        }}>
          <div style={elemStyle}><div style={iconStyle}><Android /></div>Android</div>
          <div style={elemStyle}><div style={iconStyle}><Windows /></div>Windows</div>
          <div style={elemStyle}><div style={iconStyle}><Classmates /></div>Classmates</div>
          <div style={elemStyle}><div style={iconStyle}><Facebook /></div>Facebook</div>
          <div style={elemStyle}><div style={iconStyle}><Apple /></div>Apple</div>
          <div style={elemStyle}><div style={iconStyle}><Youtube /></div>Youtube</div>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column'
        }}>
          <div style={elemStyle}><div style={iconStyle}><VK /></div>VK</div>
          <div style={elemStyle}><div style={iconStyle}><GooglePlay /></div>Google Play</div>
          <div style={elemStyle}><div style={iconStyle}><Twitter /></div>Twitter</div>
          <div style={elemStyle}><div style={iconStyle}><Telegram /></div>Telegram</div>
          <div style={elemStyle}><div style={iconStyle}><Huawei /></div>Huawei</div>
        </div>
      </div>
    </StoryDocs>
  );
};

Demo.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Tl0AmqQJK4qaCl4pLRio7A/Design-System-for-Story-Book?node-id=182%3A23104',
  },
  actions: { disabled: true },
  controls: { disabled: true }
};
