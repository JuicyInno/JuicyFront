import React from 'react';
import { Story } from '@storybook/react';
import {
  StoryDocs, StoryDocsH1, StoryDocsH2
} from '../../storybook';
import { withDesign } from 'storybook-addon-designs';

// инконки 24px
import Point from '../../../assets/icons/24px/Tools/Point';
import Trash from '../../../assets/icons/24px/Tools/Trash';
import Location from '../../../assets/icons/24px/Tools/Location';
import OnCard from '../../../assets/icons/24px/Tools/OnCard';
import NewCalendar from '../../../assets/icons/24px/Tools/Calendar';
import Lock from '../../../assets/icons/24px/Tools/Lock';
import InternetShop from '../../../assets/icons/24px/Tools/InternetShop';
import NewEdit from '../../../assets/icons/24px/Tools/Edit';
import OnPhone from '../../../assets/icons/24px/Tools/OnPhone';
import Microphone from '../../../assets/icons/24px/Tools/Microphone';
import ChildrenBankCard from '../../../assets/icons/24px/Tools/ChildrenBankCard';
import QR from '../../../assets/icons/24px/Tools/QR';
import Doc from '../../../assets/icons/24px/Tools/Doc';
import TuneUp from '../../../assets/icons/24px/Tools/TuneUp';
import Change from '../../../assets/icons/24px/Tools/Change';
import MenuHorizontal from '../../../assets/icons/24px/Tools/MenuHorizontal';
import MenuVertical from '../../../assets/icons/24px/Tools/MenuVertical';
import Refresh from '../../../assets/icons/24px/Tools/Refresh';
import Link from '../../../assets/icons/24px/Tools/Link';
import Cog from '../../../assets/icons/24px/Tools/Cog';
import Printer from '../../../assets/icons/24px/Tools/Printer';
import ShowAll from '../../../assets/icons/24px/Tools/ShowAll';
import Template from '../../../assets/icons/24px/Tools/Template';
import Receipt from '../../../assets/icons/24px/Tools/Receipt';
import AutoPayment from '../../../assets/icons/24px/Tools/AutoPayment';
import Cash from '../../../assets/icons/24px/Tools/Cash';
import Repeat from '../../../assets/icons/24px/Tools/Repeat';
import Cancel from '../../../assets/icons/24px/Tools/Cancel';

import InformationAlert from '../../../assets/icons/24px/Alerts/InformationAlert';
import QuestionAlert from '../../../assets/icons/24px/Alerts/QuestionAlert';
import Dialog from '../../../assets/icons/24px/Alerts/Dialog';
import Holidays from '../../../assets/icons/24px/Alerts/Holidays';
import Notification from '../../../assets/icons/24px/Alerts/Notification';

import Envelope from '../../../assets/icons/24px/Messaging/Envelope';
import Smartphone from '../../../assets/icons/24px/Messaging/Smartphone';
import Phone from '../../../assets/icons/24px/Messaging/Phone';
import Alternative from '../../../assets/icons/24px/Messaging/Alternative';

import User from '../../../assets/icons/24px/Account/User';
import Exit from '../../../assets/icons/24px/Account/Exit';
import EyeOpen from '../../../assets/icons/24px/Account/EyeOpen';
import EyeClose from '../../../assets/icons/24px/Account/EyeClose';
import Search from '../../../assets/icons/24px/Account/Search';
import Send from '../../../assets/icons/24px/Account/Send';
import Copy from '../../../assets/icons/24px/Account/Copy';

import DarkModeStroke from '../../../assets/icons/24px/Themes/DarkModeStroke';
import DarkModeFill from '../../../assets/icons/24px/Themes/DarkModeFill';
import LightModeStroke from '../../../assets/icons/24px/Themes/LightModeStroke';
import LightModeStrokeFill from '../../../assets/icons/24px/Themes/LightModeStrokeFill';

import Star from '../../../assets/icons/24px/Specific/Star';
import BankCard from '../../../assets/icons/24px/Specific/BankCard';
import Archive from '../../../assets/icons/24px/Specific/Archive';
import Diagram from '../../../assets/icons/24px/Specific/Diagram';
import Courier from '../../../assets/icons/24px/Specific/Сourier';
import Safe from '../../../assets/icons/24px/Specific/Safe';
import DigitalCard from '../../../assets/icons/24px/Specific/DigitalCard';
import SpecialSearch from '../../../assets/icons/24px/Specific/SpecialSearch';
import LightBulb from '../../../assets/icons/24px/Specific/LightBulb';
import Coin from '../../../assets/icons/24px/Specific/Coin';
import CardRecommend from '../../../assets/icons/24px/Specific/CardRecommend';
import Bank from '../../../assets/icons/24px/Specific/Bank';
import Gosuslygi from '../../../assets/icons/24px/Specific/Gosuslygi';

import ChevronLeft from '../../../assets/icons/24px/Arrows/ChevronLeft';
import ChevronRight from '../../../assets/icons/24px/Arrows/ChevronRight';
import ChevronUp from '../../../assets/icons/24px/Arrows/ChevronUp';
import ChevronDown from '../../../assets/icons/24px/Arrows/ChevronDown';
import ArrowLeft from '../../../assets/icons/24px/Arrows/ArrowLeft';
import ArrowRight from '../../../assets/icons/24px/Arrows/ArrowRight';
import ArrowUp from '../../../assets/icons/24px/Arrows/ArrowUp';
import ArrowDown from '../../../assets/icons/24px/Arrows/ArrowDown';
import Down from '../../../assets/icons/24px/Arrows/Down';
import Up from '../../../assets/icons/24px/Arrows/Up';
import Download from '../../../assets/icons/24px/Arrows/Download';
import Upload from '../../../assets/icons/24px/Arrows/Upload';
import Exchange from '../../../assets/icons/24px/Arrows/Exchange';
import SubdirectoryRight from '../../../assets/icons/24px/Arrows/SubdirectoryRight';
import Attach from '../../../assets/icons/24px/Arrows/Attach';
import Add from '../../../assets/icons/24px/Arrows/Add';
import Reduce from '../../../assets/icons/24px/Arrows/Reduce';
import Success from '../../../assets/icons/24px/Arrows/Success';
import Warning from '../../../assets/icons/24px/Arrows/Warning';
import Transfer from '../../../assets/icons/24px/Arrows/Transfer';
import Sort from '../../../assets/icons/24px/Arrows/Sort';
import Question from '../../../assets/icons/24px/Arrows/Question';
import Close from '../../../assets/icons/24px/Arrows/Close';
import Renew from '../../../assets/icons/24px/Arrows/Renew';
import InfoStatus from '../../../assets/icons/24px/Arrows/InfoStatus';

import StatusWarning from '../../../assets/icons/24px/Status/Warning';
import StatusInformation from '../../../assets/icons/24px/Status/Information';
import Release from '../../../assets/icons/24px/Status/Release';
import StatusError from '../../../assets/icons/24px/Status/Error';
import StatusQuestion from '../../../assets/icons/24px/Status/Question';
import StatusReturn from '../../../assets/icons/24px/Status/Return';
import Unread from '../../../assets/icons/24px/Status/Unread';
import Pending from '../../../assets/icons/24px/Status/Pending';
import InfoFill from '../../../assets/icons/24px/Status/InfoFill';
import InfoOutline from '../../../assets/icons/24px/Status/InfoOutline';
import Blocked from '../../../assets/icons/24px/Status/Blocked';
import Timer from '../../../assets/icons/24px/Status/Timer';
import Loader from '../../../assets/icons/24px/Status/Loader';
import Reserved from '../../../assets/icons/24px/Status/Reserved';
import Flag from '../../../assets/icons/24px/Status/Flag';
import Troyka from '../../../assets/icons/24px/Status/Troyka';
import Pin from '../../../assets/icons/24px/Status/Pin';

import Android from '../../../assets/icons/24px/Social/Android';
import Windows from '../../../assets/icons/24px/Social/Windows';
import Classmates from '../../../assets/icons/24px/Social/Classmates';
import Facebook from '../../../assets/icons/24px/Social/Facebook';
import Apple from '../../../assets/icons/24px/Social/Apple';
import Youtube from '../../../assets/icons/24px/Social/Youtube';
import VK from '../../../assets/icons/24px/Social/VK';
import GooglePlay from '../../../assets/icons/24px/Social/GooglePlay';
import Twitter from '../../../assets/icons/24px/Social/Twitter';
import Telegram from '../../../assets/icons/24px/Social/Telegram';
import Huawei from '../../../assets/icons/24px/Social/Huawei';

// иконки 40px

import NotificationBig from '../../../assets/icons/40px/Settings/NotificationBig';
import TuneUpBig from '../../../assets/icons/40px/Settings/TuneUpBig';
import Login from '../../../assets/icons/40px/Settings/Login';
import Authorization from '../../../assets/icons/40px/Settings/Authorization';
import LinkBig from '../../../assets/icons/40px/Settings/LinkBig';
import Card from '../../../assets/icons/40px/Settings/Card';
import DigitalCardM from '../../../assets/icons/40px/Settings/DigitalCard';
import ListOfCards from '../../../assets/icons/40px/Settings/ListOfCards';
import OnCardBig from '../../../assets/icons/40px/Settings/OnCardBig';
import AnotherCard from '../../../assets/icons/40px/Settings/AnotherCard';
import CreditCard from '../../../assets/icons/40px/Settings/CreditCard';
import Limits from '../../../assets/icons/40px/Settings/Limits';
import InvestmentProducts from '../../../assets/icons/24px/Specific/InvestmentProducts';
import SpecialSearchBig from '../../../assets/icons/40px/Settings/SpecialSearchBig';

import WebsiteCall from '../../../assets/icons/40px/ProfileAndBankContact/WebsiteCall';
import BackCall from '../../../assets/icons/40px/ProfileAndBankContact/BackCall';
import TransferOfSalary from '../../../assets/icons/40px/ProfileAndBankContact/TransferOfSalary';
import Salary from '../../../assets/icons/40px/ProfileAndBankContact/Salary';
import OperationCompleted from '../../../assets/icons/40px/ProfileAndBankContact/OperationCompleted';
import PointBig from '../../../assets/icons/40px/ProfileAndBankContact/PointBig';
import DialogBig from '../../../assets/icons/40px/ProfileAndBankContact/DialogBig';
import PhoneBig from '../../../assets/icons/40px/ProfileAndBankContact/PhoneBig';
import UserBig from '../../../assets/icons/40px/ProfileAndBankContact/UserBig';
import CogBig from '../../../assets/icons/40px/ProfileAndBankContact/CogBig';
import ExitBig from '../../../assets/icons/40px/ProfileAndBankContact/ExitBig';
import EnvelopeBig from '../../../assets/icons/40px/ProfileAndBankContact/EnvelopeBig';

import Credit from '../../../assets/icons/40px/Credit/Credit';
import Credits from '../../../assets/icons/40px/Credit/Credits';
import Mortgage from '../../../assets/icons/40px/Credit/Mortgage';
import AutoCredit from '../../../assets/icons/40px/Credit/AutoCredit';

import Broker from '../../../assets/icons/40px/Investments/Broker';
import Investment from '../../../assets/icons/40px/Investments/Investment';
import IIS from '../../../assets/icons/40px/Investments/IIS';
import MicroInvestments from '../../../assets/icons/40px/Investments/MicroInvestments';

import MortgageRefinancing from '../../../assets/icons/40px/Refinancing/MortgageRefinancing';
import CreditCardRefinancing from '../../../assets/icons/40px/Refinancing/CreditCardRefinancing';

import DocBig from '../../../assets/icons/40px/Documents/Doc';
import Passport from '../../../assets/icons/40px/Documents/Passport';
import ReceiptBig from '../../../assets/icons/40px/Documents/ReceiptBig';

import GosuslugiBig from '../../../assets/icons/40px/Payments/GosuslugiBig';
import World from '../../../assets/icons/40px/Payments/World';
import FromCardToCard from '../../../assets/icons/40px/Payments/FromCardToCard';
import TransfersBetweenAccounts from '../../../assets/icons/40px/Payments/TransfersBetweenAccounts';
import ToOrganizations from '../../../assets/icons/40px/Payments/ToOrganizations';
import OtherPeople from '../../../assets/icons/40px/Payments/OtherPeople';
import Charity from '../../../assets/icons/40px/Payments/Charity';
import Airplane from '../../../assets/icons/40px/Payments/Airplane';
import InternetNetworks from '../../../assets/icons/40px/Payments/InternetNetworks';
import OnlineGames from '../../../assets/icons/40px/Payments/OnlineGames';
import MobileConnection from '../../../assets/icons/40px/Payments/MobileConnection';
import InternetShopBig from '../../../assets/icons/40px/Payments/InternetShopBig';
import ExtractAndReferences from '../../../assets/icons/40px/Payments/ExtractAndReferences';
import Education from '../../../assets/icons/40px/Payments/Education';
import OtherServices from '../../../assets/icons/40px/Payments/OtherServices';
import PensionFunds from '../../../assets/icons/40px/Payments/PensionFunds';
import ElectronicMoney from '../../../assets/icons/40px/Payments/ElectronicMoney';
import SWIFT from '../../../assets/icons/40px/Payments/SWIFT';
import GovernmentServices from '../../../assets/icons/40px/Payments/GovernmentServices';
import InvestmentFunds from '../../../assets/icons/40px/Payments/InvestmentFunds';
import RepeatBig from '../../../assets/icons/40px/Payments/RepeatBig';
import TransfersWithinBankLegalEntities from '../../../assets/icons/40px/Payments/TransfersWithinBankLegalEntities';
import TransfersPhoneNumber from '../../../assets/icons/40px/Payments/TransfersPhoneNumber';
import TransfersAddressManagement from '../../../assets/icons/40px/Payments/TransfersAddressManagement';
import CashWithdrawal from '../../../assets/icons/40px/Payments/CashWithdrawal';
import Free from '../../../assets/icons/40px/Payments/Free';
import RefundMoney from '../../../assets/icons/40px/Payments/RefundMoney';
import CurrencyExchange from '../../../assets/icons/40px/Payments/CurrencyExchange';
import Transport from '../../../assets/icons/40px/Payments/Transport';
import Collecting from '../../../assets/icons/40px/Payments/Collecting';
import CashBig from '../../../assets/icons/40px/Payments/CashBig';
import Elections from '../../../assets/icons/40px/Payments/Elections';

import Gift from '../../../assets/icons/40px/DigitalService/Gift';
import Concierge from '../../../assets/icons/40px/DigitalService/Concierge';
import Baggage from '../../../assets/icons/40px/DigitalService/Baggage';
import InjuryFall from '../../../assets/icons/40px/DigitalService/InjuryFall';
import Drink from '../../../assets/icons/40px/DigitalService/Drink';
import AccountProtection from '../../../assets/icons/40px/DigitalService/AccountProtection';
import Transponder from '../../../assets/icons/40px/DigitalService/Transponder';
import Gender from '../../../assets/icons/40px/DigitalService/Gender';

import MovableProperty from '../../../assets/icons/40px/FinesAndTaxes/MovableProperty';
import LandTax from '../../../assets/icons/40px/FinesAndTaxes/LandTax';

import MetalAccount from '../../../assets/icons/40px/Metal/MetalAccount';

import HomeInsurance from '../../../assets/icons/40px/Insurance/HomeInsurance';
import Hospital from '../../../assets/icons/40px/Insurance/Hospital';
import Disability from '../../../assets/icons/40px/Insurance/Disability';
import Death from '../../../assets/icons/40px/Insurance/Death';
import Injury from '../../../assets/icons/40px/Insurance/Injury';
import CivilLiability from '../../../assets/icons/40px/Insurance/CivilLiability';
import IJS from '../../../assets/icons/40px/Insurance/IJS';
import InsuranceAgainstFraud from '../../../assets/icons/40px/Insurance/InsuranceAgainstFraud';
import ChildrenBankCardBig from '../../../assets/icons/40px/Insurance/ChildrenBankCardBig';
import InteriorDecoration from '../../../assets/icons/40px/Insurance/InteriorDecoration';
import MortgageInsurance from '../../../assets/icons/40px/Insurance/MortgageInsurance';
import Lawyer from '../../../assets/icons/40px/Insurance/Lawyer';
import CarAccident from '../../../assets/icons/40px/Insurance/CarAccident';
import DMS from '../../../assets/icons/40px/Insurance/DMS';
import ChildProtection from '../../../assets/icons/40px/Insurance/ChildProtection';

import PricingPlansS from '../../../assets/icons/40px/Plans/PricingPlansS';
import PricingPlansM from '../../../assets/icons/40px/Plans/PricingPlansM';
import PricingPlansL from '../../../assets/icons/40px/Plans/PricingPlansL';

import Refinancing from '../../../assets/icons/40px/Savings/Refinancing';
import SavingsAccountMoneyBox from '../../../assets/icons/40px/Savings/SavingsAccountMoneyBox';
import SavingsAccountBanknote from '../../../assets/icons/40px/Savings/SavingsAccountBanknote';
import CreditCash from '../../../assets/icons/40px/Savings/CreditCash';
import Deposit from '../../../assets/icons/40px/Savings/Deposit';
import Savings from '../../../assets/icons/40px/Savings/Savings';

import AvailableFunds from '../../../assets/icons/40px/MyFunds/AvailableFunds';
import StarBig from '../../../assets/icons/40px/MyFunds/StarBig';

import VTBMobile from '../../../assets/icons/40px/Mobile/VTBMobile';

import OnVacation from '../../../assets/icons/40px/Goal/OnVacation';
import OnYourself from '../../../assets/icons/40px/Goal/OnYourself';
import Home from '../../../assets/icons/40px/Goal/Home';

import CollectBonus from '../../../assets/icons/40px/Bonus/CollectBonus';
import Borrower from '../../../assets/icons/40px/Bonus/Borrower';
import Restaurant from '../../../assets/icons/40px/Bonus/Restaurant';

import ProtestingOperations from '../../../assets/icons/40px/Operations/ProtestingOperations';
import OtherBankProducts from '../../../assets/icons/40px/Operations/OtherBankProducts';
import Maintenance from '../../../assets/icons/40px/Operations/Maintenance';
import QualityOfService from '../../../assets/icons/40px/Operations/QualityOfService';
import ATMOperation from '../../../assets/icons/40px/Operations/ATMOperation';
import InvestmentProductsBig from '../../../assets/icons/40px/Operations/InvestmentProductsBig';
import GetAReceipt from '../../../assets/icons/40px/Operations/GetAReceipt';
import ParkingAccount from '../../../assets/icons/40px/Operations/ParkingAccount';
import TroikaAccount from '../../../assets/icons/40px/Operations/TroikaAccount';
import SaveMoney from '../../../assets/icons/40px/Operations/SaveMoney';
import STS from '../../../assets/icons/40px/Operations/STS';
import DriverLicense from '../../../assets/icons/40px/Operations/DriverLicense';
import Sharp from '../../../assets/icons/40px/Operations/Sharp';
import PercentRatio from '../../../assets/icons/40px/Operations/PercentRatio';
import TireService from '../../../assets/icons/40px/Operations/TireService';
import VisualImpairment from '../../../assets/icons/40px/Operations/VisualImpairment';
import HearingImpairment from '../../../assets/icons/40px/Operations/HearingImpairment';
import ViolationOfMotorSystem from '../../../assets/icons/40px/Operations/ViolationOfMotorSystem';
import SpeechDisorder from '../../../assets/icons/40px/Operations/SpeechDisorder';
import AnotherViolation from '../../../assets/icons/40px/Operations/AnotherViolation';
import PerceptionDisorder from '../../../assets/icons/40px/Operations/PerceptionDisorder';
import TransferInvestments from '../../../assets/icons/40px/Operations/TransferInvestments';
import VolumeOfMargin from '../../../assets/icons/40px/Operations/VolumeOfMargin';

import FlagBig from '../../../assets/icons/40px/Other/FlagBig';
import InformationAlertBig from '../../../assets/icons/40px/Other/InformationAlertBig';
import Cashback from '../../../assets/icons/40px/Other/Cashback';
import ReplenishmentOtherInvestments from '../../../assets/icons/40px/Other/ReplenishmentOtherInvestments';
import GhostLiveBalances from '../../../assets/icons/40px/Other/GhostLiveBalances';

export default {
  title: 'icons,illustrations/не проверено/Icons',
  decorators: [withDesign],
};

export const Demo: Story = () => {
  const iconStyle = {
    color: '#8A96A8',
    marginRight: 25
  };
  const iconStyleStatus = {
    color: '#A7B0BE',
    marginRight: 25
  };
  const elemStyle = {
    fontFamily: 'VTB Group UI',
    fontSize: 14,
    lineHeight: '20px',
    marginBottom: 28,
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
          <div style={elemStyle}><div style={iconStyle}><OnCard /></div>On Card</div>
          <div style={elemStyle}><div style={iconStyle}><NewCalendar /></div>Calendar</div>
          <div style={elemStyle}><div style={iconStyle}><Lock /></div>Lock</div>
          <div style={elemStyle}><div style={iconStyle}><InternetShop /></div>Internet Shop</div>
          <div style={elemStyle}><div style={iconStyle}><NewEdit /></div>Edit</div>
          <div style={elemStyle}><div style={iconStyle}><OnPhone /></div>On phone</div>
          <div style={elemStyle}><div style={iconStyle}><Microphone /></div>Microphone</div>
          <div style={elemStyle}><div style={iconStyle}><ChildrenBankCard /></div>Children bank card</div>
          <div style={elemStyle}><div style={iconStyle}><QR /></div>QR</div>
          <div style={elemStyle}><div style={iconStyle}><Doc /></div>Doc</div>
          <div style={elemStyle}><div style={iconStyle}><TuneUp /></div>Tune up</div>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column'
        }}>
          <div style={elemStyle}><div style={iconStyle}><Change /></div>Change</div>
          <div style={elemStyle}><div style={iconStyle}><MenuHorizontal /></div>Menu horizontal</div>
          <div style={elemStyle}><div style={iconStyle}><MenuVertical /></div>Menu vertical</div>
          <div style={elemStyle}><div style={iconStyle}><Refresh /></div>Refresh</div>
          <div style={elemStyle}><div style={iconStyle}><Link /></div>Link</div>
          <div style={elemStyle}><div style={iconStyle}><Cog /></div>Cog</div>
          <div style={elemStyle}><div style={iconStyle}><Printer /></div>Printer</div>
          <div style={elemStyle}><div style={iconStyle}><ShowAll /></div>Show all</div>
          <div style={elemStyle}><div style={iconStyle}><Template /></div>Template</div>
          <div style={elemStyle}><div style={iconStyle}><Receipt/></div>Receipt</div>
          <div style={elemStyle}><div style={iconStyle}><AutoPayment /></div>Auto payment</div>
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
          <div style={elemStyle}><div style={iconStyle}><InformationAlert /></div>Information Alert</div>
          <div style={elemStyle}><div style={iconStyle}><QuestionAlert /></div>Question alert</div>
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
          <div style={elemStyle}><div style={iconStyle}><EyeOpen /></div>Eye open</div>
          <div style={elemStyle}><div style={iconStyle}><EyeClose /></div>Eye close</div>
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
          <div style={elemStyle}><div style={iconStyle}><BankCard /></div>Bank card</div>
          <div style={elemStyle}><div style={iconStyle}><Archive /></div>Archive</div>
          <div style={elemStyle}><div style={iconStyle}><Courier /></div>Courier</div>
          <div style={elemStyle}><div style={iconStyle}><Diagram /></div>Diagram</div>
          <div style={elemStyle}><div style={iconStyle}><Safe /></div>Safe</div>
          <div style={elemStyle}><div style={iconStyle}><DigitalCard /></div>Digital card</div>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column'
        }}>
          <div style={elemStyle}><div style={iconStyle}><SpecialSearch /></div>Special search</div>
          <div style={elemStyle}><div style={iconStyle}><LightBulb /></div>Light bulb</div>
          <div style={elemStyle}><div style={iconStyle}><Coin /></div>Coin</div>
          <div style={elemStyle}><div style={iconStyle}><CardRecommend /></div>Card recommend</div>
          <div style={elemStyle}><div style={iconStyle}><Bank /></div>Bank</div>
          <div style={elemStyle}><div style={iconStyle}><Gosuslygi /></div>Gosuslygi</div>
          <div style={elemStyle}><div style={iconStyle}><InvestmentProducts /></div>Investment products</div>
        </div>
      </div>
      <StoryDocsH2>Themes</StoryDocsH2>
      <div style={{ display: 'flex' }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          marginRight: 250
        }}>
          <div style={elemStyle}><div style={iconStyle}><DarkModeStroke /></div>Dark mode stroke</div>
          <div style={elemStyle}><div style={iconStyle}><LightModeStroke /></div>Light mode stroke</div>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column'
        }}>
          <div style={elemStyle}><div style={iconStyle}><DarkModeFill /></div>Dark mode fill</div>
          <div style={elemStyle}><div style={iconStyle}><LightModeStrokeFill /></div>Light mode Fill</div>
        </div>
      </div>
      <StoryDocsH2>Arrows</StoryDocsH2>
      <div style={{ display: 'flex' }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          marginRight: 250
        }}>
          <div style={elemStyle}><div style={iconStyle}><ChevronLeft /></div>Chevron left</div>
          <div style={elemStyle}><div style={iconStyle}><ChevronRight /></div>Chevron right</div>
          <div style={elemStyle}><div style={iconStyle}><ChevronUp /></div>Chevron up</div>
          <div style={elemStyle}><div style={iconStyle}><ChevronDown /></div>Chevron down</div>
          <div style={elemStyle}><div style={iconStyle}><ArrowLeft /></div>Arrow left</div>
          <div style={elemStyle}><div style={iconStyle}><ArrowRight /></div>Arrow Right</div>
          <div style={elemStyle}><div style={iconStyle}><ArrowUp /></div>Arrow Up</div>
          <div style={elemStyle}><div style={iconStyle}><ArrowDown /></div>Arrow Down</div>
          <div style={elemStyle}><div style={iconStyle}><Up/></div>Up</div>
          <div style={elemStyle}><div style={iconStyle}><Down /></div>Down</div>
          <div style={elemStyle}><div style={iconStyle}><Download /></div>Download</div>
          <div style={elemStyle}><div style={iconStyle}><Upload /></div>Upload</div>
          <div style={elemStyle}><div style={iconStyle}><InfoStatus /></div>Info status</div>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column'
        }}>
          <div style={elemStyle}><div style={iconStyle}><Exchange /></div>Exchange</div>
          <div style={elemStyle}><div style={iconStyle}><Sort /></div>Sort</div>
          <div style={elemStyle}><div style={iconStyle}><Transfer /></div>Transfer</div>
          <div style={elemStyle}><div style={iconStyle}><SubdirectoryRight /></div>Subdirectory right</div>
          <div style={elemStyle}><div style={iconStyle}><Attach /></div>Attach</div>
          <div style={elemStyle}><div style={iconStyle}><Add /></div>Add</div>
          <div style={elemStyle}><div style={iconStyle}><Reduce /></div>Reduce</div>
          <div style={elemStyle}><div style={iconStyle}><Question /></div>Question</div>
          <div style={elemStyle}><div style={iconStyle}><Success /></div>Success</div>
          <div style={elemStyle}><div style={iconStyle}><Warning /></div>Warning</div>
          <div style={elemStyle}><div style={iconStyle}><Close /></div>Close</div>
          <div style={elemStyle}><div style={iconStyle}><Renew /></div>Renew</div>
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
          <div style={elemStyle}><div style={iconStyle}><StatusQuestion /></div>Question Status</div>
          <div style={elemStyle}><div style={iconStyle}><StatusReturn /></div>Return</div>
          <div style={elemStyle}><div style={iconStyle}><Unread /></div>Unread</div>
          <div style={elemStyle}><div style={iconStyle}><Loader /></div>Loader</div>
          <div style={elemStyle}><div style={iconStyle}><Blocked /></div>Blocked</div>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column'
        }}>
          <div style={elemStyle}><div style={iconStyleStatus}><Timer /></div>Timer</div>
          <div style={elemStyle}><div style={iconStyleStatus}><Pending /></div>Pending</div>
          <div style={elemStyle}><div style={iconStyleStatus}><Reserved /></div>Reserved</div>
          <div style={elemStyle}><div style={iconStyleStatus}><Flag /></div>Flag</div>
          <div style={elemStyle}><div style={iconStyleStatus}><Troyka /></div>Troyka</div>
          <div style={elemStyle}><div style={iconStyleStatus}><Pin /></div>Pin</div>
          <div style={elemStyle}><div style={iconStyleStatus}><InfoFill /></div>Info fill</div>
          <div style={elemStyle}><div style={iconStyleStatus}><InfoOutline /></div>Info outline</div>
        </div>
      </div>
      <StoryDocsH2>Social</StoryDocsH2>
      <div style={{ display: 'flex' }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          marginRight: 250
        }}>
          <div style={elemStyle}><div style={iconStyle}><Android size='xs' /></div>Android</div>
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

export const Icons = () => {
  const iconStyle = {
    display: 'flex',
    alignItems: 'center',
    color: '#8A96A8',
    marginRight: 25
  };
  const elemStyle = {
    fontFamily: 'VTB Group UI',
    fontSize: 14,
    lineHeight: '20px',
    marginBottom: 28,
    display: 'flex',
    alignItems: 'center',
    justifyItems: 'center',
    color: '#4C5767'
  };

  return (
    <StoryDocs>
      <StoryDocsH1>Icons 40px</StoryDocsH1>
      <StoryDocsH2>Настройки</StoryDocsH2>
      <div style={{ display: 'flex' }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          marginRight: 250
        }}>
          <div style={elemStyle}><div style={iconStyle}><NotificationBig /></div>Notification Big</div>
          <div style={elemStyle}><div style={iconStyle}><TuneUpBig /></div>Tune Up Big</div>
          <div style={elemStyle}><div style={iconStyle}><Login /></div>Login</div>
          <div style={elemStyle}><div style={iconStyle}><Authorization /></div>Authorization</div>
          <div style={elemStyle}><div style={iconStyle}><LinkBig /></div>Link Big</div>
          <div style={elemStyle}><div style={iconStyle}><Card /></div>Card</div>
          <div style={elemStyle}><div style={iconStyle}><DigitalCardM /></div>Digital Card M</div>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column'
        }}>
          <div style={elemStyle}><div style={iconStyle}><ListOfCards /></div>List of cards</div>
          <div style={elemStyle}><div style={iconStyle}><OnCardBig /></div>On Card big</div>
          <div style={elemStyle}><div style={iconStyle}><AnotherCard /></div>Another card</div>
          <div style={elemStyle}><div style={iconStyle}><CreditCard /></div>Credit Card</div>
          <div style={elemStyle}><div style={iconStyle}><Limits /></div>Limits</div>
          <div style={elemStyle}><div style={iconStyle}><SpecialSearchBig /></div>Special Search Big</div>
        </div>
      </div>
      <StoryDocsH2>Профиль и связь с банком</StoryDocsH2>
      <div style={{ display: 'flex' }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          marginRight: 250
        }}>
          <div style={elemStyle}><div style={iconStyle}><PointBig /></div>Point big</div>
          <div style={elemStyle}><div style={iconStyle}><WebsiteCall /></div>Website call</div>
          <div style={elemStyle}><div style={iconStyle}><BackCall /></div>Back call</div>
          <div style={elemStyle}><div style={iconStyle}><DialogBig /></div>Dialog big</div>
          <div style={elemStyle}><div style={iconStyle}><PhoneBig /></div>Phone big</div>
          <div style={elemStyle}><div style={iconStyle}><TransferOfSalary /></div>Transfer of salary</div>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column'
        }}>
          <div style={elemStyle}><div style={iconStyle}><UserBig /></div>User big</div>
          <div style={elemStyle}><div style={iconStyle}><CogBig /></div>Cog big</div>
          <div style={elemStyle}><div style={iconStyle}><ExitBig /></div>Exit big</div>
          <div style={elemStyle}><div style={iconStyle}><Salary /></div>Salary</div>
          <div style={elemStyle}><div style={iconStyle}><EnvelopeBig /></div>Envelope big</div>
          <div style={elemStyle}><div style={iconStyle}><OperationCompleted /></div>Operation Completed</div>
        </div>
      </div>
      <StoryDocsH2>Кредиты</StoryDocsH2>
      <div style={{ display: 'flex' }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          marginRight: 250
        }}>
          <div style={elemStyle}><div style={iconStyle}><Credit /></div>Credit</div>
          <div style={elemStyle}><div style={iconStyle}><Credits /></div>Credits</div>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column'
        }}>
          <div style={elemStyle}><div style={iconStyle}><Mortgage /></div>Mortgage</div>
          <div style={elemStyle}><div style={iconStyle}><AutoCredit /></div>Auto credit</div>
        </div>
      </div>
      <StoryDocsH2>Инвестиции</StoryDocsH2>
      <div style={{ display: 'flex' }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          marginRight: 250
        }}>
          <div style={elemStyle}><div style={iconStyle}><Broker /></div>Broker 2</div>
          <div style={elemStyle}><div style={iconStyle}><Investment /></div>Investment</div>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column'
        }}>
          <div style={elemStyle}><div style={iconStyle}><IIS /></div>IIS 2</div>
          <div style={elemStyle}><div style={iconStyle}><MicroInvestments /></div>Micro investments</div>
        </div>
      </div>
      <StoryDocsH2>Рефинасирование</StoryDocsH2>
      <div style={{ display: 'flex' }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          marginRight: 250
        }}>
          <div style={elemStyle}><div style={iconStyle}><MortgageRefinancing /></div>Mortgage Refinancing</div>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column'
        }}>
          <div style={elemStyle}><div style={iconStyle}><CreditCardRefinancing /></div>Credit Card Refinancing</div>
        </div>
      </div>
      <StoryDocsH2>Документы</StoryDocsH2>
      <div style={{ display: 'flex' }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          marginRight: 250
        }}>
          <div style={elemStyle}><div style={iconStyle}><ReceiptBig /></div>Receipt Big</div>
          <div style={elemStyle}><div style={iconStyle}><DocBig /></div>Doc Big</div>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column'
        }}>
          <div style={elemStyle}><div style={iconStyle}><Passport /></div>Passport</div>
        </div>
      </div>
      <StoryDocsH2>Платежи и переводы</StoryDocsH2>
      <div style={{ display: 'flex' }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          marginRight: 250
        }}>
          <div style={elemStyle}><div style={iconStyle}><GosuslugiBig /></div>Gosuslugi Big</div>
          <div style={elemStyle}><div style={iconStyle}><World /></div>World</div>
          <div style={elemStyle}><div style={iconStyle}><FromCardToCard /></div>From Card To Card</div>
          <div style={elemStyle}><div style={iconStyle}><TransfersBetweenAccounts /></div>Between accounts</div>
          <div style={elemStyle}><div style={iconStyle}><ToOrganizations /></div>To Organizations</div>
          <div style={elemStyle}><div style={iconStyle}><OtherPeople /></div>Other People</div>
          <div style={elemStyle}><div style={iconStyle}><Charity /></div>Charity</div>
          <div style={elemStyle}><div style={iconStyle}><Airplane /></div>Airplane</div>
          <div style={elemStyle}><div style={iconStyle}><InternetNetworks /></div>Internet Networks</div>
          <div style={elemStyle}><div style={iconStyle}><OnlineGames /></div>Online Games</div>
          <div style={elemStyle}><div style={iconStyle}><MobileConnection /></div>Mobile Connection</div>
          <div style={elemStyle}><div style={iconStyle}><InternetShopBig /></div>Internet Shops</div>
          <div style={elemStyle}><div style={iconStyle}><ExtractAndReferences /></div>Extract And References</div>
          <div style={elemStyle}><div style={iconStyle}><Education /></div>Education</div>
          <div style={elemStyle}><div style={iconStyle}><OtherServices /></div>Other Services</div>
          <div style={elemStyle}><div style={iconStyle}><PensionFunds /></div>Pension Funds</div>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column'
        }}>
          <div style={elemStyle}><div style={iconStyle}><ElectronicMoney /></div>Electronic Money</div>
          <div style={elemStyle}><div style={iconStyle}><SWIFT /></div>SWIFT</div>
          <div style={elemStyle}><div style={iconStyle}><GovernmentServices /></div>Government Services</div>
          <div style={elemStyle}><div style={iconStyle}><InvestmentFunds /></div>Investment Funds</div>
          <div style={elemStyle}><div style={iconStyle}><RepeatBig /></div>Repeat Big</div>
          <div style={elemStyle}><div style={iconStyle}><TransfersWithinBankLegalEntities /></div>Transfers Within Bank Legal Entities</div>
          <div style={elemStyle}><div style={iconStyle}><TransfersPhoneNumber /></div>Transfers Phone Number</div>
          <div style={elemStyle}><div style={iconStyle}><TransfersAddressManagement /></div>Transfers Address Management Company PIF</div>
          <div style={elemStyle}><div style={iconStyle}><CashWithdrawal /></div>Cash Withdrawal</div>
          <div style={elemStyle}><div style={iconStyle}><Free /></div>Free</div>
          <div style={elemStyle}><div style={iconStyle}><RefundMoney /></div>Refund Money</div>
          <div style={elemStyle}><div style={iconStyle}><CurrencyExchange /></div>Currency Exchange</div>
          <div style={elemStyle}><div style={iconStyle}><Transport /></div>Transport</div>
          <div style={elemStyle}><div style={iconStyle}><Collecting /></div>Collecting</div>
          <div style={elemStyle}><div style={iconStyle}><CashBig /></div>Cash Big</div>
          <div style={elemStyle}><div style={iconStyle}><Elections /></div>Elections</div>
        </div>
      </div>
      <StoryDocsH2>Цифровой пакет услуг</StoryDocsH2>
      <div style={{ display: 'flex' }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          marginRight: 250
        }}>
          <div style={elemStyle}><div style={iconStyle}><Gift /></div>Gift</div>
          <div style={elemStyle}><div style={iconStyle}><Concierge /></div>Concierge</div>
          <div style={elemStyle}><div style={iconStyle}><Baggage /></div>Baggage</div>
          <div style={elemStyle}><div style={iconStyle}><InjuryFall /></div>Injury-Fall</div>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column'
        }}>
          <div style={elemStyle}><div style={iconStyle}><Drink /></div>Drink</div>
          <div style={elemStyle}><div style={iconStyle}><AccountProtection /></div>Account Protection</div>
          <div style={elemStyle}><div style={iconStyle}><Transponder /></div>Transponder</div>
          <div style={elemStyle}><div style={iconStyle}><Gender /></div>Gender</div>
        </div>
      </div>
      <StoryDocsH2>Штрафы и налоги</StoryDocsH2>
      <div style={{ display: 'flex' }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          marginRight: 250
        }}>
          <div style={elemStyle}><div style={iconStyle}><MovableProperty /></div>Movable Property</div>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column'
        }}>
          <div style={elemStyle}><div style={iconStyle}><LandTax /></div>Land Tax</div>
        </div>
      </div>
      <StoryDocsH2>Металлы</StoryDocsH2>
      <div style={{ display: 'flex' }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          marginRight: 250
        }}>
          <div style={elemStyle}><div style={iconStyle}><MetalAccount /></div>Metal Account</div>
        </div>
      </div>
      <StoryDocsH2>Страхование</StoryDocsH2>
      <div style={{ display: 'flex' }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          marginRight: 250
        }}>
          <div style={elemStyle}><div style={iconStyle}><HomeInsurance /></div>Home Insurance</div>
          <div style={elemStyle}><div style={iconStyle}><Hospital /></div>Hospital</div>
          <div style={elemStyle}><div style={iconStyle}><Disability /></div>Disability</div>
          <div style={elemStyle}><div style={iconStyle}><Death /></div>Death</div>
          <div style={elemStyle}><div style={iconStyle}><Injury /></div>Injury</div>
          <div style={elemStyle}><div style={iconStyle}><CivilLiability /></div>Civil Liability</div>
          <div style={elemStyle}><div style={iconStyle}><IJS /></div>IJS</div>
          <div style={elemStyle}><div style={iconStyle}><InsuranceAgainstFraud /></div>Insurance Against Fraud</div>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column'
        }}>
          <div style={elemStyle}><div style={iconStyle}><InteriorDecoration /></div>Interior Decoration</div>
          <div style={elemStyle}><div style={iconStyle}><MortgageInsurance /></div>Mortgage Insurance</div>
          <div style={elemStyle}><div style={iconStyle}><Lawyer /></div>Lawyer</div>
          <div style={elemStyle}><div style={iconStyle}><CarAccident /></div>Car Accident</div>
          <div style={elemStyle}><div style={iconStyle}><DMS /></div>DMS</div>
          <div style={elemStyle}><div style={iconStyle}><ChildProtection /></div>Child Protection</div>
          <div style={elemStyle}><div style={iconStyle}><ChildrenBankCardBig /></div>Children Bank Card Big</div>
        </div>
      </div>
      <StoryDocsH2>Тарифы</StoryDocsH2>
      <div style={{ display: 'flex' }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          marginRight: 250
        }}>
          <div style={elemStyle}><div style={iconStyle}><PricingPlansS /></div>Pricing Plans S</div>
          <div style={elemStyle}><div style={iconStyle}><PricingPlansM /></div>Pricing Plans M</div>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column'
        }}>
          <div style={elemStyle}><div style={iconStyle}><PricingPlansL /></div>Pricing Plans L</div>
        </div>
      </div>
      <StoryDocsH2>Сбережения</StoryDocsH2>
      <div style={{ display: 'flex' }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          marginRight: 250
        }}>
          <div style={elemStyle}><div style={iconStyle}><Refinancing /></div>Refinancing</div>
          <div style={elemStyle}><div style={iconStyle}><CreditCard /></div>CreditCard</div>
          <div style={elemStyle}><div style={iconStyle}><SavingsAccountMoneyBox /></div>Savings Account Money Box</div>
          <div style={elemStyle}><div style={iconStyle}><SavingsAccountBanknote /></div>Savings Account Banknote</div>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column'
        }}>
          <div style={elemStyle}><div style={iconStyle}><CreditCash /></div>Credit Cash</div>
          <div style={elemStyle}><div style={iconStyle}><Deposit /></div>Deposit</div>
          <div style={elemStyle}><div style={iconStyle}><Savings /></div>Savings</div>

        </div>
      </div>
      <StoryDocsH2>Мои средства</StoryDocsH2>
      <div style={{ display: 'flex' }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          marginRight: 250
        }}>
          <div style={elemStyle}><div style={iconStyle}><AvailableFunds /></div>Available Funds</div>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column'
        }}>
          <div style={elemStyle}><div style={iconStyle}><StarBig /></div>Star Big</div>

        </div>
      </div>
      <StoryDocsH2>Мобильная связь</StoryDocsH2>
      <div style={{ display: 'flex' }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          marginRight: 250
        }}>
          <div style={elemStyle}><div style={iconStyle}><VTBMobile /></div>VTB Mobile</div>
        </div>
      </div>
      <StoryDocsH2>Цели</StoryDocsH2>
      <div style={{ display: 'flex' }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          marginRight: 250
        }}>
          <div style={elemStyle}><div style={iconStyle}><OnVacation /></div>On Vacation</div>
          <div style={elemStyle}><div style={iconStyle}><Home /></div>Home</div>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column'
        }}>
          <div style={elemStyle}><div style={iconStyle}><OnYourself /></div>On Yourself</div>
        </div>
      </div>
      <StoryDocsH2>Бонусы</StoryDocsH2>
      <div style={{ display: 'flex' }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          marginRight: 250
        }}>
          <div style={elemStyle}><div style={iconStyle}><CollectBonus /></div>Collect Bonus</div>
          <div style={elemStyle}><div style={iconStyle}><Borrower /></div>Borrower</div>

        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column'
        }}>
          <div style={elemStyle}><div style={iconStyle}><Restaurant /></div>Restaurant</div>
        </div>
      </div>
      <StoryDocsH2>Операции</StoryDocsH2>
      <div style={{ display: 'flex' }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          marginRight: 250
        }}>
          <div style={elemStyle}><div style={iconStyle}><ProtestingOperations /></div>Protesting Operations</div>
          <div style={elemStyle}><div style={iconStyle}><OtherBankProducts /></div>Other Bank Products</div>
          <div style={elemStyle}><div style={iconStyle}><Maintenance /></div>Maintenance</div>
          <div style={elemStyle}><div style={iconStyle}><QualityOfService /></div>Quality Of Service</div>
          <div style={elemStyle}><div style={iconStyle}><ATMOperation /></div>ATM Operation</div>
          <div style={elemStyle}><div style={iconStyle}><Credit /></div>Credit</div>
          <div style={elemStyle}><div style={iconStyle}><InvestmentProductsBig /></div>Investment Products Big</div>
          <div style={elemStyle}><div style={iconStyle}><GetAReceipt /></div>Get A Receipt</div>
          <div style={elemStyle}><div style={iconStyle}><ParkingAccount /></div>Parking Account</div>
          <div style={elemStyle}><div style={iconStyle}><TroikaAccount /></div>Troika Account</div>
          <div style={elemStyle}><div style={iconStyle}><SaveMoney /></div>Save Money</div>
          <div style={elemStyle}><div style={iconStyle}><STS /></div>STS</div>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column'
        }}>
          <div style={elemStyle}><div style={iconStyle}><DriverLicense /></div>Driver License</div>
          <div style={elemStyle}><div style={iconStyle}><Sharp /></div>Number</div>
          <div style={elemStyle}><div style={iconStyle}><PercentRatio /></div>Percent Ratio</div>
          <div style={elemStyle}><div style={iconStyle}><TireService /></div>Tire Service</div>
          <div style={elemStyle}><div style={iconStyle}><VisualImpairment /></div>Visual Impairment</div>
          <div style={elemStyle}><div style={iconStyle}><HearingImpairment /></div>Hearing Impairment</div>
          <div style={elemStyle}><div style={iconStyle}><ViolationOfMotorSystem /></div>Violation Of The Motor System</div>
          <div style={elemStyle}><div style={iconStyle}><SpeechDisorder /></div>Speech Disorder</div>
          <div style={elemStyle}><div style={iconStyle}><AnotherViolation /></div>Another Violation</div>
          <div style={elemStyle}><div style={iconStyle}><PerceptionDisorder /></div>Perception Disorder</div>
          <div style={elemStyle}><div style={iconStyle}><TransferInvestments /></div>Transfer Investments</div>
          <div style={elemStyle}><div style={iconStyle}><VolumeOfMargin /></div>Volume Of The Margin</div>
        </div>
      </div>
      <StoryDocsH2>Остальные</StoryDocsH2>
      <div style={{ display: 'flex' }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          marginRight: 250
        }}>
          <div style={elemStyle}><div style={iconStyle}><FlagBig /></div>Flag big</div>
          <div style={elemStyle}><div style={iconStyle}><InformationAlertBig /></div>Information Alert Big</div>
          <div style={elemStyle}><div style={iconStyle}><Cashback /></div>Cashback</div>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column'
        }}>
          <div style={elemStyle}><div style={iconStyle}><ReplenishmentOtherInvestments /></div>Replenishment Other Investments</div>
          <div style={elemStyle}><div style={iconStyle}><GhostLiveBalances /></div>Ghost Live Balances</div>
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
