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

import Push from '../../../assets/icons/Settings/Push';
import ProductSettings from '../../../assets/icons/Settings/ProductSettings';
import Login from '../../../assets/icons/Settings/Login';
import Authorization from '../../../assets/icons/Settings/Authorization';
import Connect from '../../../assets/icons/Settings/Connect';
import Card from '../../../assets/icons/Settings/Card';
import DigitalCardM from '../../../assets/icons/Settings/DigitalCard';
import ListOfCards from '../../../assets/icons/Settings/ListOfCards';
import DebitCard from '../../../assets/icons/Settings/DebitCard';
import AnotherCard from '../../../assets/icons/Settings/AnotherCard';
import CreditCard from '../../../assets/icons/Settings/CreditCard';
import Limits from '../../../assets/icons/Settings/Limits';
import InvestmentProducts from '../../../assets/icons/Specific/InvestmentProducts';

import WebsiteCall from '../../../assets/icons/ProfileAndBankContact/WebsiteCall';
import BackCall from '../../../assets/icons/ProfileAndBankContact/BackCall';
import TransferOfSalary from '../../../assets/icons/ProfileAndBankContact/TransferOfSalary';
import Salary from '../../../assets/icons/ProfileAndBankContact/Salary';
import OperationCompleted from '../../../assets/icons/ProfileAndBankContact/OperationCompleted';

import Credit from '../../../assets/icons/Credit/Credit';
import Credits from '../../../assets/icons/Credit/Credits';
import Mortgage from '../../../assets/icons/Credit/Mortgage';
import Autocredit from '../../../assets/icons/Credit/Autocredit';

import Brocker from '../../../assets/icons/Investments/Brocker';
import Investment from '../../../assets/icons/Investments/Investment';
import IIS from '../../../assets/icons/Investments/IIS';
import Microinvestments from '../../../assets/icons/Investments/Microinvestments';

import MortgageRefinancing from '../../../assets/icons/Refinancing/MortgageRefinancing';
import CreditCardRefinancing from '../../../assets/icons/Refinancing/CreditCardRefinancing';
import DedicatedLineOfCredit from '../../../assets/icons/Refinancing/DedicatedLineOfCredit';

import Doc from '../../../assets/icons/Documents/Doc';
import Passport from '../../../assets/icons/Documents/Passport';
import ReceiptBig from '../../../assets/icons/Documents/ReceiptBig';

import GosuslugiBig from '../../../assets/icons/Payments/GosuslugiBig';
import World from '../../../assets/icons/Payments/World';
import FromCardToCard from '../../../assets/icons/Payments/FromCardToCard';
import TransfersBetweenAccounts from '../../../assets/icons/Payments/TransfersBetweenAccounts';
import ToOrganizations from '../../../assets/icons/Payments/ToOrganizations';
import OtherPeople from '../../../assets/icons/Payments/OtherPeople';
import Charity from '../../../assets/icons/Payments/Charity';
import Airplane from '../../../assets/icons/Payments/Airplane';
import InternetNetworks from '../../../assets/icons/Payments/InternetNetworks';
import OnlineGames from '../../../assets/icons/Payments/OnlineGames';
import MobileConnection from '../../../assets/icons/Payments/MobileConnection';
import ShopBig from '../../../assets/icons/Payments/ShopBig';
import ExtractAndReferences from '../../../assets/icons/Payments/ExtractAndReferences';
import Education from '../../../assets/icons/Payments/Education';
import LoanRepayment from '../../../assets/icons/Payments/LoanRepayment';
import OtherServices from '../../../assets/icons/Payments/OtherServices';
import CommunalApartment from '../../../assets/icons/Payments/CommunalApartment';
import PensionFunds from '../../../assets/icons/Payments/PensionFunds';
import ElectronicMoney from '../../../assets/icons/Payments/ElectronicMoney';
import SWIFT from '../../../assets/icons/Payments/SWIFT';
import GovernmentServices from '../../../assets/icons/Payments/GovernmentServices';
import InvestmentFunds from '../../../assets/icons/Payments/InvestmentFunds';
import RepeatBig from '../../../assets/icons/Payments/RepeatBig';
import TransfersWithinBankLegalEntities from '../../../assets/icons/Payments/TransfersWithinBankLegalEntities';
import TransfersPhoneNumber from '../../../assets/icons/Payments/TransfersPhoneNumber';
import TransfersAddressManagement from '../../../assets/icons/Payments/TransfersAddressManagement';
import CashWithdrawal from '../../../assets/icons/Payments/CashWithdrawal';
import Free from '../../../assets/icons/Payments/Free';
import RefundMoney from '../../../assets/icons/Payments/RefundMoney';
import CurrencyExchange from '../../../assets/icons/Payments/CurrencyExchange';
import Transport from '../../../assets/icons/Payments/Transport';
import Collecting from '../../../assets/icons/Payments/Collecting';
import GetCash from '../../../assets/icons/Payments/GetCash';
import Elections from '../../../assets/icons/Payments/Elections';

import Gift from '../../../assets/icons/DigitalService/Gift';
import Concierge from '../../../assets/icons/DigitalService/Concierge';
import Baggage from '../../../assets/icons/DigitalService/Baggage';
import InjuryFall from '../../../assets/icons/DigitalService/InjuryFall';
import Drink from '../../../assets/icons/DigitalService/Drink';
import AccountProtection from '../../../assets/icons/DigitalService/AccountProtection';
import Transponder from '../../../assets/icons/DigitalService/Transponder';
import Gender from '../../../assets/icons/DigitalService/Gender';

import MovableProperty from '../../../assets/icons/FinesAndTaxes/MovableProperty';
import LandTax from '../../../assets/icons/FinesAndTaxes/LandTax';

import MetalAccount from '../../../assets/icons/Metal/MetalAccount';

import HomeInsurance from '../../../assets/icons/Insurance/HomeInsurance';
import Hospital from '../../../assets/icons/Insurance/Hospital';
import Disability from '../../../assets/icons/Insurance/Disability';
import Death from '../../../assets/icons/Insurance/Death';
import Injury from '../../../assets/icons/Insurance/Injury';
import CivilLiability from '../../../assets/icons/Insurance/CivilLiability';
import IJS from '../../../assets/icons/Insurance/IJS';
import InsuranceAgainstFraud from '../../../assets/icons/Insurance/InsuranceAgainstFraud';
import ChildrenBankCardBig from '../../../assets/icons/Insurance/ChildrenBankCardBig';
import InteriorDecoration from '../../../assets/icons/Insurance/InteriorDecoration';
import CreditCardInsurance from '../../../assets/icons/Insurance/CreditCardInsurance';
import MortgageInsurance from '../../../assets/icons/Insurance/MortgageInsurance';
import Lawyer from '../../../assets/icons/Insurance/Lawyer';
import CarAccident from '../../../assets/icons/Insurance/CarAccident';
import DMS from '../../../assets/icons/Insurance/DMS';
import ChildProtection from '../../../assets/icons/Insurance/ChildProtection';

import PricingPlansS from '../../../assets/icons/Plans/PricingPlansS';
import PricingPlansM from '../../../assets/icons/Plans/PricingPlansM';
import PricingPlansL from '../../../assets/icons/Plans/PricingPlansL';

import Refinancing from '../../../assets/icons/Savings/Refinancing';
import SavingsAccountMoneyBox from '../../../assets/icons/Savings/SavingsAccountMoneyBox';
import SavingsAccountBanknote from '../../../assets/icons/Savings/SavingsAccountBanknote';
import CreditCash from '../../../assets/icons/Savings/CreditCash';
import Deposit from '../../../assets/icons/Savings/Deposit';
import Savings from '../../../assets/icons/Savings/Savings';

import AvailableFunds from '../../../assets/icons/MyFunds/AvailableFunds';
import StarBig from '../../../assets/icons/MyFunds/StarBig';

import VTBMobile from '../../../assets/icons/Mobile/VTBMobile';

import OnVacation from '../../../assets/icons/Goal/OnVacation';
import OnYourself from '../../../assets/icons/Goal/OnYourself';

import CollectBonus from '../../../assets/icons/Bonus/CollectBonus';
import Borrower from '../../../assets/icons/Bonus/Borrower';
import Restaurant from '../../../assets/icons/Bonus/Restaurant';

import ProtestingOperations from '../../../assets/icons/Operations/ProtestingOperations';
import OtherBankProducts from '../../../assets/icons/Operations/OtherBankProducts';
import Maintenance from '../../../assets/icons/Operations/Maintenance';
import QualityOfService from '../../../assets/icons/Operations/QualityOfService';
import ATMOperation from '../../../assets/icons/Operations/ATMOperation';
import InvestmentProductsBig from '../../../assets/icons/Operations/InvestmentProductsBig';
import GetAReceipt from '../../../assets/icons/Operations/GetAReceipt';
import ParkingAccount from '../../../assets/icons/Operations/ParkingAccount';
import TroikaAccount from '../../../assets/icons/Operations/TroikaAccount';
import SaveMoney from '../../../assets/icons/Operations/SaveMoney';
import STS from '../../../assets/icons/Operations/STS';
import DriverLicense from '../../../assets/icons/Operations/DriverLicense';
import Number from '../../../assets/icons/Operations/Number';
import PercentRatio from '../../../assets/icons/Operations/PercentRatio';
import TireService from '../../../assets/icons/Operations/TireService';
import VisualImpairment from '../../../assets/icons/Operations/VisualImpairment';
import HearingImpairment from '../../../assets/icons/Operations/HearingImpairment';
import ViolationOfMotorSystem from '../../../assets/icons/Operations/ViolationOfMotorSystem';
import SpeechDisorder from '../../../assets/icons/Operations/SpeechDisorder';
import AnotherViolation from '../../../assets/icons/Operations/AnotherViolation';
import PerceptionDisorder from '../../../assets/icons/Operations/PerceptionDisorder';
import TransferInvestments from '../../../assets/icons/Operations/TransferInvestments';

import Goal from '../../../assets/icons/Other/Goal';
import InformationAlertBig from '../../../assets/icons/Other/InformationAlertBig';
import Cashback from '../../../assets/icons/Other/Cashback';
import ReplenishmentOtherInvestments from '../../../assets/icons/Other/ReplenishmentOtherInvestments';
import GhostLiveBalances from '../../../assets/icons/Other/GhostLiveBalances';

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
          <div style={elemStyle}><div style={iconStyle}><User size='m' /></div>User</div>
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
          <div style={elemStyle}><div style={iconStyle}><InvestmentProducts /></div>Investment_products</div>
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
    marginBottom: 32,
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
          <div style={elemStyle}><div style={iconStyle}><Push /></div>Push</div>
          <div style={elemStyle}><div style={iconStyle}><ProductSettings /></div>Product_settings</div>
          <div style={elemStyle}><div style={iconStyle}><Login /></div>Login</div>
          <div style={elemStyle}><div style={iconStyle}><Authorization /></div>Authorization</div>
          <div style={elemStyle}><div style={iconStyle}><Connect /></div>Connect</div>
          <div style={elemStyle}><div style={iconStyle}><Card /></div>Card</div>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column'
        }}>
          <div style={elemStyle}><div style={iconStyle}><DigitalCardM /></div>Digital_Card_M</div>
          <div style={elemStyle}><div style={iconStyle}><ListOfCards /></div>List_of_cards</div>
          <div style={elemStyle}><div style={iconStyle}><DebitCard /></div>Debit_Card</div>
          <div style={elemStyle}><div style={iconStyle}><AnotherCard /></div>Another_card</div>
          <div style={elemStyle}><div style={iconStyle}><CreditCard /></div>Credit_Card</div>
          <div style={elemStyle}><div style={iconStyle}><Limits /></div>Limits</div>
          <div style={elemStyle}><div style={iconStyle}><SpecialSearch size='s' /></div>Special search</div>
        </div>
      </div>
      <StoryDocsH2>Профиль и связь с банком</StoryDocsH2>
      <div style={{ display: 'flex' }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          marginRight: 250
        }}>
          <div style={elemStyle}><div style={iconStyle}><Point size='m' /></div>Point</div>
          <div style={elemStyle}><div style={iconStyle}><WebsiteCall /></div>Website_call</div>
          <div style={elemStyle}><div style={iconStyle}><BackCall /></div>Back_call</div>
          <div style={elemStyle}><div style={iconStyle}><Dialog size='m' /></div>Dialog</div>
          <div style={elemStyle}><div style={iconStyle}><Phone size='m' /></div>Phone</div>
          <div style={elemStyle}><div style={iconStyle}><TransferOfSalary /></div>Transfer_of_salary</div>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column'
        }}>
          <div style={elemStyle}><div style={iconStyle}><User size='m' /></div>User</div>
          <div style={elemStyle}><div style={iconStyle}><Cog size='m' /></div>Cog</div>
          <div style={elemStyle}><div style={iconStyle}><Exit size='m' /></div>Exit</div>
          <div style={elemStyle}><div style={iconStyle}><Salary /></div>Salary</div>
          <div style={elemStyle}><div style={iconStyle}><Envelope size='m' /></div>Envelope</div>
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
          <div style={elemStyle}><div style={iconStyle}><Autocredit /></div>Autocredit</div>
        </div>
      </div>
      <StoryDocsH2>Инвестиции</StoryDocsH2>
      <div style={{ display: 'flex' }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          marginRight: 250
        }}>
          <div style={elemStyle}><div style={iconStyle}><Brocker /></div>Brocker 2</div>
          <div style={elemStyle}><div style={iconStyle}><Investment /></div>Investment</div>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column'
        }}>
          <div style={elemStyle}><div style={iconStyle}><IIS /></div>IIS 2</div>
          <div style={elemStyle}><div style={iconStyle}><Microinvestments /></div>Microinvestments</div>
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
          <div style={elemStyle}><div style={iconStyle}><CreditCardRefinancing /></div>Credit Card Refinancing</div>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column'
        }}>
          <div style={elemStyle}><div style={iconStyle}><DedicatedLineOfCredit /></div>Dedicated Line Of Credit</div>
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
          <div style={elemStyle}><div style={iconStyle}><Doc /></div>Doc</div>
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
          <div style={elemStyle}><div style={iconStyle}><ShopBig /></div>Shop Big</div>
          <div style={elemStyle}><div style={iconStyle}><ExtractAndReferences /></div>Extract And References</div>
          <div style={elemStyle}><div style={iconStyle}><Education /></div>Education</div>
          <div style={elemStyle}><div style={iconStyle}><LoanRepayment /></div>Loan Repayment</div>
          <div style={elemStyle}><div style={iconStyle}><OtherServices /></div>Other Services</div>
          <div style={elemStyle}><div style={iconStyle}><CommunalApartment /></div>Communal Apartment</div>
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
          <div style={elemStyle}><div style={iconStyle}><GetCash /></div>Get Cash</div>
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
          <div style={elemStyle}><div style={iconStyle}><ChildrenBankCardBig /></div>Children Bank Card Big</div>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column'
        }}>
          <div style={elemStyle}><div style={iconStyle}><InteriorDecoration /></div>Interior Decoration</div>
          <div style={elemStyle}><div style={iconStyle}><CreditCardInsurance /></div>Credit Card Insurance</div>
          <div style={elemStyle}><div style={iconStyle}><MortgageInsurance /></div>Credit Card Insurance</div>
          <div style={elemStyle}><div style={iconStyle}><Lawyer /></div>Lawyer</div>
          <div style={elemStyle}><div style={iconStyle}><CarAccident /></div>Car Accident</div>
          <div style={elemStyle}><div style={iconStyle}><DMS /></div>DMS</div>
          <div style={elemStyle}><div style={iconStyle}><ExtractAndReferences /></div>Extract And References</div>
          <div style={elemStyle}><div style={iconStyle}><ChildProtection /></div>Child Protection</div>
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
          {/* <div style={elemStyle}><div style={iconStyle}><Home /></div>Home</div>*/}
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
          <div style={elemStyle}><div style={iconStyle}><Number /></div>Number</div>
          <div style={elemStyle}><div style={iconStyle}><PercentRatio /></div>Percent Ratio</div>
          <div style={elemStyle}><div style={iconStyle}><TireService /></div>Tire Service</div>
          <div style={elemStyle}><div style={iconStyle}><VisualImpairment /></div>Visual Impairment</div>
          <div style={elemStyle}><div style={iconStyle}><HearingImpairment /></div>Hearing Impairment</div>
          <div style={elemStyle}><div style={iconStyle}><ViolationOfMotorSystem /></div>Violation Of The Motor System</div>
          <div style={elemStyle}><div style={iconStyle}><SpeechDisorder /></div>Speech Disorder</div>
          <div style={elemStyle}><div style={iconStyle}><AnotherViolation /></div>Another Violation</div>
          <div style={elemStyle}><div style={iconStyle}><PerceptionDisorder /></div>Perception Disorder</div>
          <div style={elemStyle}><div style={iconStyle}><TransferInvestments /></div>Transfer Investments</div>
        </div>
      </div>
      <StoryDocsH2>Операции</StoryDocsH2>
      <div style={{ display: 'flex' }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          marginRight: 250
        }}>
          <div style={elemStyle}><div style={iconStyle}><Goal /></div>Goal</div>
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
