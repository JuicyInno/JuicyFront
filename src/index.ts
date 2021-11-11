import './styles/index.scss';

// ------------------------ Компоненты ---------------------------------------------------------------------------
import Avatar from './components/atoms/Avatar';
import Badge from './components/atoms/Badge';
import Button from './components/atoms/Button';
import ButtonPages from './components/atoms/ButtonPages';
import CalendarPage from './components/atoms/CalendarPage';
import Checkbox from './components/atoms/Checkbox';
import Chip from './components/atoms/Chip';
import ControlGroup from './components/atoms/ControlGroup';
import Datepicker from './components/atoms/Datepicker';
import FormGroup from './components/atoms/FormGroup';
import Hint from './components/atoms/Hint';
import CommentTile from './components/molecules/CommentTile';
import Input from './components/atoms/Input';
import InputFile from './components/atoms/InputFile';
import InputNumber from './components/atoms/InputNumber';
import Menu from './components/atoms/Menu';
import Modal from './components/atoms/Modal';
import Preloader from './components/atoms/Preloader';
import Radio from './components/atoms/Radio';
import RatePicker from './components/atoms/RatePicker';
import StatusPicker from './components/atoms/StatusPicker';
import Search from './components/atoms/Search';
import Segment from './components/atoms/Segment';
import Select from './components/atoms/Select';
import Switch from './components/atoms/Switch';
import Tabs from './components/atoms/Tabs';
import Tag from './components/atoms/Tag';
import Textarea from './components/atoms/Textarea';
import Tooltip from './components/atoms/Tooltip';
import OrgTree from './components/molecules/OrgTree';
import FatalError from './components/molecules/FatalError';
import CompletePopup from './components/popups/CompletePopup';
import Page from './components/pages/Page';
import PageWithSections from './components/pages/PageWithSections';
import FindUsers from './components/popups/FindUsers';
import Structure from './components/molecules/Structure';
import CertReader from './components/molecules/CertReader';
import PDFViewer from './components/molecules/PDFViewer';
import Employee from './components/molecules/Employee';
import Tile from './components/atoms/Tile';
import Column from './components/atoms/Column';
import Row from './components/atoms/Row';
import UserPhoto from './components/atoms/UserPhoto';
import Notification from './components/molecules/Notification';
import Notifications, { sendNotification } from './components/molecules/Notifications';
import Card from './components/molecules/Card';
import Toast from './components/atoms/Toast';
import History from './components/molecules/History';
import Status from './components/atoms/Status';
import ButtonGroup from './components/atoms/ButtonGroup';
import ActionMenu from './components/organisms/ActionMenu';
import PageWithList from './components/pages/PageWithList';
import UsersStack from './components/molecules/UsersStack';
import ContentExpander from './components/molecules/ContentExpander';
import BackdropLoader from './components/atoms/BackdropLoader';
import { PopupMaker, openPopup } from './components/organisms/PopupMaker';
import Signification from './components/organisms/Signification';
import { InputHook } from './components/atoms/Input/InputHook';
import Timepicker from './components/atoms/Timepicker';
import Confirm from './components/popups/Confirm';
import InputPhone from './components/atoms/InputPhone';
import HistoryCardFilter from './components/molecules/HistoryCardFilter';
import GhostScreen from './components/atoms/GhostScreen';
import Schedule, { ScheduleLegend, ScheduleLegendItem } from './components/molecules/Schedule';

// --------------------------Переменные---------------------------------------------------------------------------------
import variables from './styles/variables.json';
import { download } from './utils/download';


export {
  CommentTile,
  Signification,
  GhostScreen,
  HistoryCardFilter,
  Avatar,
  Badge,
  Button,
  Checkbox,
  Chip,
  ControlGroup,
  Datepicker,
  FormGroup,
  Hint,
  Input,
  InputPhone,
  InputFile,
  InputNumber,
  Menu,
  Modal,
  Preloader,
  Radio,
  RatePicker,
  StatusPicker,
  Search,
  Segment,
  Select,
  Switch,
  Tabs,
  Tag,
  Textarea,
  Tooltip,
  OrgTree,
  CompletePopup,
  FatalError,
  Page,
  PageWithSections,
  InputHook,
  Timepicker,
  FindUsers,
  Structure,
  PDFViewer,
  CertReader,
  ButtonPages,
  Notification,
  Notifications,
  sendNotification,
  Employee,
  Confirm,
  Tile,
  Row,
  Column,
  UserPhoto,
  Card,
  Toast,
  History,
  Status,
  ButtonGroup,
  CalendarPage,
  Schedule,
  ScheduleLegend,
  ScheduleLegendItem,
  PageWithList,
  ActionMenu,
  UsersStack,
  ContentExpander,
  BackdropLoader,
  PopupMaker
};

// --------------------------Иконки-------------------------------------------------------------------------------------

import Close from './assets/icons/Close';
import Download from './assets/icons/Download';
import Refresh from './assets/icons/Refresh';
import SearchIcon from './assets/icons/Search';
import Success from './assets/icons/Success';
import Reduce from './assets/icons/Reduce';
import ChevronDown from './assets/icons/ChevronDown';
import ChevronLeft from './assets/icons/ChevronLeft';
import Info from './assets/icons/Info';
import Calendar from './assets/icons/Calendar';
import Up from './assets/icons/Up';
import Eye from './assets/icons/Eye';
import EyeClose from './assets/icons/EyeClose';
import TuneUp from './assets/icons/TuneUp';
import People from './assets/icons/People';
import Gaming from './assets/icons/Gaming';
import Help from './assets/icons/Help';
import KebabMenu from './assets/icons/KebabMenu';
import Copy from './assets/icons/Copy';
import CircleAlt from './assets/icons/CircleAlt';
import CircleConfirm from './assets/icons/CircleConfirm';
import CircleReject from './assets/icons/CircleReject';
import CircleRefresh from './assets/icons/CircleRefresh';
import CircleReturn from './assets/icons/CircleReturn';
import CircleTrash from './assets/icons/CircleTrash';
import Circle from './assets/icons/Circle';
import Time from './assets/icons/Time';
import EmptyUser from './assets/icons/EmptyUser';
import Cross from './assets/icons/Cross';
import Redo from './assets/icons/Redo';
import Exit from './assets/icons/Exit';
import External from './assets/icons/External';
import Cart from './assets/icons/Cart';
import Bag from './assets/icons/Bag';
import Bank from './assets/icons/Bank';
import Left from './assets/icons/Left';
import Exchange from './assets/icons/Exchange';
import Add from './assets/icons/Add';
import Edit from './assets/icons/Edit';

export {
  Refresh,
  Close,
  Download,
  SearchIcon,
  Success,
  Reduce,
  ChevronDown,
  Info,
  Calendar,
  ChevronLeft,
  Up,
  Eye,
  EyeClose,
  TuneUp,
  People,
  Gaming,
  Help,
  KebabMenu,
  Copy,
  CircleAlt,
  CircleConfirm,
  CircleReject,
  CircleRefresh,
  CircleReturn,
  CircleTrash,
  Circle,
  Time,
  EmptyUser,
  Cross,
  Redo,
  Exit,
  External,
  Cart,
  Bag,
  Bank,
  Left,
  Exchange,
  Add,
  Edit
};

// --------------------------Новые иконки-------------------------------------------------------------------------------
// --------------------------Иконки tools-------------------------------------------------------------------------------
import AutoPayment from './assets/icons/Tools/AutoPayment';
import Cancel from './assets/icons/Tools/Cancel';
import Cash from './assets/icons/Tools/Cash';
import Change from './assets/icons/Tools/Change';
import ChildrenBankCard from './assets/icons/Tools/ChildrenBankCard';
import Cog from './assets/icons/Tools/Cog';
import Location from './assets/icons/Tools/Location';
import Lock from './assets/icons/Tools/Lock';
import MenuHorizontal from './assets/icons/Tools/MenuHorizontal';
import MenuVertical from './assets/icons/Tools/MenuVertical';
import Microphone from './assets/icons/Tools/Microphone';
import NewCalendar from './assets/icons/Tools/Calendar'; // refactor name to Calendar
import NewEdit from './assets/icons/Tools/Edit'; // refactor name to Edit
import NewRefresh from './assets/icons/Tools/Refresh';
import NewTuneUp from './assets/icons/Tools/TuneUp'; // refactor name to TuneUp
import Link from './assets/icons/Tools/Link';
import OnCard from './assets/icons/Tools/OnCard';
import OnCount from './assets/icons/Tools/OnCount';
import OnPhone from './assets/icons/Tools/OnPhone';
import Point from './assets/icons/Tools/Point';
import Printer from './assets/icons/Tools/Printer';
import QR from './assets/icons/Tools/QR';
import Receipt from './assets/icons/Tools/Receipt';
import Repeat from './assets/icons/Tools/Repeat';
import Shop from './assets/icons/Tools/Shop';
import ShowAll from './assets/icons/Tools/ShowAll';
import Template from './assets/icons/Tools/Template';
import Trash from './assets/icons/Tools/Trash';


export {
  AutoPayment,
  Cancel,
  Cash,
  Change,
  ChildrenBankCard,
  Cog,
  Location,
  Lock,
  MenuHorizontal,
  MenuVertical,
  Microphone,
  NewCalendar,
  NewEdit,
  NewRefresh,
  NewTuneUp,
  Link,
  OnCard,
  OnCount,
  OnPhone,
  Point,
  Printer,
  QR,
  Receipt,
  Repeat,
  Shop,
  ShowAll,
  Template,
  Trash
};

// --------------------------Иконки alerts------------------------------------------------------------------------------
import Dialog from './assets/icons/Alerts/Dialog';
import Holidays from './assets/icons/Alerts/Holidays';
import InfoAlert from './assets/icons/Alerts/InfoAlert';
import NotificationIcon from './assets/icons/Alerts/Notification';
import QuestionAlert from './assets/icons/Alerts/QuestionAlert';

export {
  Dialog,
  Holidays,
  InfoAlert,
  NotificationIcon,
  QuestionAlert
};

// --------------------------Иконки messaging---------------------------------------------------------------------------
import Alternative from './assets/icons/Messaging/Alternative';
import Envelope from './assets/icons/Messaging/Envelope';
import Phone from './assets/icons/Messaging/Phone';
import Smartphone from './assets/icons/Messaging/Smartphone';

export {
  Alternative,
  Envelope,
  Phone,
  Smartphone
};

// --------------------------Иконки account-----------------------------------------------------------------------------
import NewCopy from './assets/icons/Account/Copy';
import NewExit from './assets/icons/Account/Exit'; // refactor name to Exit
import EyeOpen from './assets/icons/Account/EyeOpen';
import NewEyeClose from './assets/icons/Account/EyeClose'; // refactor name to EyeClose
import NewSearch from './assets/icons/Account/Search'; // refactor name to Search
import Send from './assets/icons/Account/Send';
import User from './assets/icons/Account/User';

export {
  NewCopy,
  NewExit,
  NewEyeClose,
  EyeOpen,
  NewSearch,
  Send,
  User
};

// --------------------------Иконки specific----------------------------------------------------------------------------
import Archive from './assets/icons/Specific/Archive';
import BankCard from './assets/icons/Specific/BankCard';
import CardRecommend from './assets/icons/Specific/CardRecommend';
import Coin from './assets/icons/Specific/Coin';
import Courier from './assets/icons/Specific/Сourier';
import Diagram from './assets/icons/Specific/Diagram';
import DigitalCard from './assets/icons/Specific/DigitalCard';
import Gosuslygi from './assets/icons/Specific/Gosuslygi';
import InvestmentProducts from './assets/icons/Specific/InvestmentProducts';
import LightBulb from './assets/icons/Specific/LightBulb';
import NewBank from './assets/icons/Specific/Bank'; // refactor name to Bank
import Safe from './assets/icons/Specific/Safe';
import SpecialSearch from './assets/icons/Specific/SpecialSearch';
import Star from './assets/icons/Specific/Star';

export {
  Archive,
  BankCard,
  CardRecommend,
  Coin,
  Courier,
  Diagram,
  DigitalCard,
  Gosuslygi,
  InvestmentProducts,
  LightBulb,
  NewBank,
  Safe,
  SpecialSearch,
  Star
};

// --------------------------Иконки arrows------------------------------------------------------------------------------
import Attach from './assets/icons/Arrows/Attach';
import ChevronUp from './assets/icons/Arrows/ChevronUp';
import Down from './assets/icons/Arrows/Down';
import DownMini from './assets/icons/Arrows/DownMini';
import InfoStatus from './assets/icons/Arrows/InfoStatus';
import NewAdd from './assets/icons/Arrows/Add';
import NewChevronDown from './assets/icons/Arrows/ChevronDown';
import NewChevronLeft from './assets/icons/Arrows/ChevronLeft';
import NewChevronRight from './assets/icons/Arrows/ChevronRight';
import NewDownload from './assets/icons/Arrows/Download';
import NewExchange from './assets/icons/Arrows/Exchange';
import NewLeft from './assets/icons/Arrows/Left';
import NewClose from './assets/icons/Arrows/Close';
import NewReduce from './assets/icons/Arrows/Reduce';
import NewSuccess from './assets/icons/Arrows/Success';
import NewUp from './assets/icons/Arrows/Up';
import Renew from './assets/icons/Arrows/Renew';
import Right from './assets/icons/Arrows/Right';
import Sort from './assets/icons/Arrows/Sort';
import SubdirectoryRight from './assets/icons/Arrows/SubdirectoryRight';
import Transfer from './assets/icons/Arrows/Transfer';
import Upload from './assets/icons/Arrows/Upload';
import UpMini from './assets/icons/Arrows/UpMini';
import Warning from './assets/icons/Arrows/Warning';

export {
  Attach,
  ChevronUp,
  Down,
  DownMini,
  InfoStatus,
  NewAdd,
  NewChevronDown, // refactor name to ChevronDown
  NewChevronLeft, // refactor name to ChevronLeft
  NewChevronRight, // refactor name to ChevronRight
  NewDownload, // refactor name to Download
  NewExchange, // refactor name to Exchange
  NewClose, // refactor name to NewClose
  NewLeft, // refactor name to Left
  NewReduce, // refactor name to Reduce
  NewSuccess, // refactor name to Success
  NewUp, // refactor name to Up
  Renew,
  Right,
  Sort,
  SubdirectoryRight,
  Transfer,
  Upload,
  UpMini,
  Warning
};

// --------------------------Иконки Themes------------------------------------------------------------------------------
import DarkModeFill from './assets/icons/Themes/DarkModeFill';
import DarkModeStroke from './assets/icons/Themes/DarkModeStroke';
import LightModeStroke from './assets/icons/Themes/LightModeStroke';
import LightModeStrokeFill from './assets/icons/Themes/LightModeStrokeFill';

export {
  DarkModeFill,
  DarkModeStroke,
  LightModeStroke,
  LightModeStrokeFill
};

// --------------------------Иконки status------------------------------------------------------------------------------
import Blocked from './assets/icons/Status/Blocked';
import Flag from './assets/icons/Status/Flag';
import InfoFill from './assets/icons/Status/InfoFill';
import InfoOutline from './assets/icons/Status/InfoOutline';
import Loader from './assets/icons/Status/Loader';
import Pending from './assets/icons/Status/Pending';
import Pin from './assets/icons/Status/Pin';
import Release from './assets/icons/Status/Release';
import Reserved from './assets/icons/Status/Reserved';
import StatusError from './assets/icons/Status/Error';
import StatusInformation from './assets/icons/Status/Information';
import StatusReturn from './assets/icons/Status/Return';
import StatusWarning from './assets/icons/Status/Warning';
import Timer from './assets/icons/Status/Timer';
import Troyka from './assets/icons/Status/Troyka';
import Unread from './assets/icons/Status/Unread';

export {
  Blocked,
  Flag,
  InfoFill,
  InfoOutline,
  Loader,
  Pending,
  Pin,
  Release,
  Reserved,
  StatusError,
  StatusInformation,
  StatusReturn,
  StatusWarning,
  Timer,
  Troyka,
  Unread
};

// --------------------------Иконки social------------------------------------------------------------------------------
import Android from './assets/icons/Social/Android';
import Apple from './assets/icons/Social/Apple';
import Classmates from './assets/icons/Social/Classmates';
import Facebook from './assets/icons/Social/Facebook';
import GooglePlay from './assets/icons/Social/GooglePlay';
import Huawei from './assets/icons/Social/Huawei';
import Telegram from './assets/icons/Social/Telegram';
import Twitter from './assets/icons/Social/Twitter';
import VK from './assets/icons/Social/VK';
import Windows from './assets/icons/Social/Windows';
import YouTube from './assets/icons/Social/Youtube';

export {
  Android,
  Apple,
  Classmates,
  Facebook,
  GooglePlay,
  Huawei,
  Telegram,
  Twitter,
  VK,
  Windows,
  YouTube
};

// --------------------------Иконки settings----------------------------------------------------------------------------
import AnotherCard from './assets/icons/Settings/AnotherCard';
import Authorization from './assets/icons/Settings/Authorization';
import Connect from './assets/icons/Settings/Connect';
import CreditCard from './assets/icons/Settings/CreditCard';
import DebitCard from './assets/icons/Settings/DebitCard';
import DigitalCardM from './assets/icons/Settings/DigitalCard';
import Limits from './assets/icons/Settings/Limits';
import ListOfCards from './assets/icons/Settings/ListOfCards';
import Login from './assets/icons/Settings/Login';
import NewCard from './assets/icons/Settings/Card';
import ProductSettings from './assets/icons/Settings/ProductSettings';
import Push from './assets/icons/Settings/Push';

export {
  AnotherCard,
  Authorization,
  Connect,
  CreditCard,
  DebitCard,
  DigitalCardM,
  Limits,
  ListOfCards,
  Login,
  NewCard, // refactor name to Card
  ProductSettings,
  Push
};

// --------------------------Иконки Profile And Bank Contact------------------------------------------------------------
import BackCall from './assets/icons/ProfileAndBankContact/BackCall';
import OperationCompleted from './assets/icons/ProfileAndBankContact/OperationCompleted';
import Salary from './assets/icons/ProfileAndBankContact/Salary';
import TransferOfSalary from './assets/icons/ProfileAndBankContact/TransferOfSalary';
import WebsiteCall from './assets/icons/ProfileAndBankContact/WebsiteCall';

export {
  BackCall,
  OperationCompleted,
  Salary,
  TransferOfSalary,
  WebsiteCall
};

// --------------------------Иконки Credit------------------------------------------------------------------------------
import Autocredit from './assets/icons/Credit/Autocredit';
import Credit from './assets/icons/Credit/Credit';
import Credits from './assets/icons/Credit/Credits';
import Mortgage from './assets/icons/Credit/Mortgage';

export {
  Autocredit,
  Credit,
  Credits,
  Mortgage
};

// --------------------------Иконки investments-------------------------------------------------------------------------
import Brocker from './assets/icons/Investments/Brocker';
import IIS from './assets/icons/Investments/IIS';
import Investment from './assets/icons/Investments/Investment';
import Microinvestments from './assets/icons/Investments/Microinvestments';

export {
  Brocker,
  IIS,
  Investment,
  Microinvestments
};

// --------------------------Иконки refinancing-------------------------------------------------------------------------
import CreditCardRefinancing from './assets/icons/Refinancing/CreditCardRefinancing';
import DedicatedLineOfCredit from './assets/icons/Refinancing/DedicatedLineOfCredit';
import MortgageRefinancing from './assets/icons/Refinancing/MortgageRefinancing';

export {
  CreditCardRefinancing,
  DedicatedLineOfCredit,
  MortgageRefinancing
};

// --------------------------Иконки documents---------------------------------------------------------------------------
import Doc from './assets/icons/Documents/Doc';
import Passport from './assets/icons/Documents/Passport';
import ReceiptBig from './assets/icons/Documents/ReceiptBig';

export {
  Doc,
  Passport,
  ReceiptBig
};

// --------------------------Иконки payments----------------------------------------------------------------------------
import Airplane from './assets/icons/Payments/Airplane';
import CashWithdrawal from './assets/icons/Payments/CashWithdrawal';
import Charity from './assets/icons/Payments/Charity';
import Collecting from './assets/icons/Payments/Collecting';
import CommunalApartment from './assets/icons/Payments/CommunalApartment';
import CurrencyExchange from './assets/icons/Payments/CurrencyExchange';
import Education from './assets/icons/Payments/Education';
import Elections from './assets/icons/Payments/Elections';
import ElectronicMoney from './assets/icons/Payments/ElectronicMoney';
import ExtractAndReferences from './assets/icons/Payments/ExtractAndReferences';
import Free from './assets/icons/Payments/Free';
import FromCardToCard from './assets/icons/Payments/FromCardToCard';
import GetCash from './assets/icons/Payments/GetCash';
import GosuslugiBig from './assets/icons/Payments/GosuslugiBig';
import GovernmentServices from './assets/icons/Payments/GovernmentServices';
import InternetNetworks from './assets/icons/Payments/InternetNetworks';
import InvestmentFunds from './assets/icons/Payments/InvestmentFunds';
import LoanRepayment from './assets/icons/Payments/LoanRepayment';
import MobileConnection from './assets/icons/Payments/MobileConnection';
import OnlineGames from './assets/icons/Payments/OnlineGames';
import OtherPeople from './assets/icons/Payments/OtherPeople';
import OtherServices from './assets/icons/Payments/OtherServices';
import PensionFunds from './assets/icons/Payments/PensionFunds';
import RefundMoney from './assets/icons/Payments/RefundMoney';
import RepeatBig from './assets/icons/Payments/RepeatBig';
import ShopBig from './assets/icons/Payments/ShopBig';
import SWIFT from './assets/icons/Payments/SWIFT';
import ToOrganizations from './assets/icons/Payments/ToOrganizations';
import TransfersAddressManagement from './assets/icons/Payments/TransfersAddressManagement';
import TransfersBetweenYourAccountsCards from './assets/icons/Payments/TransfersBetweenAccounts';
import TransfersPhoneNumber from './assets/icons/Payments/TransfersPhoneNumber';
import TransfersWithinBankLegalEntities from './assets/icons/Payments/TransfersWithinBankLegalEntities';
import Transport from './assets/icons/Payments/Transport';
import World from './assets/icons/Payments/World';

export {
  Airplane,
  CashWithdrawal,
  Charity,
  Collecting,
  CommunalApartment,
  CurrencyExchange,
  Education, Elections,
  ElectronicMoney,
  ExtractAndReferences,
  Free,
  FromCardToCard,
  GetCash,
  GosuslugiBig,
  GovernmentServices,
  InternetNetworks,
  InvestmentFunds,
  LoanRepayment,
  MobileConnection,
  OnlineGames,
  OtherPeople,
  OtherServices,
  PensionFunds,
  RefundMoney,
  RepeatBig,
  ShopBig,
  SWIFT,
  ToOrganizations,
  TransfersAddressManagement,
  TransfersBetweenYourAccountsCards,
  TransfersPhoneNumber,
  TransfersWithinBankLegalEntities,
  Transport,
  World
};

// --------------------------Иконки digital service---------------------------------------------------------------------
import AccountProtection from './assets/icons/DigitalService/AccountProtection';
import Baggage from './assets/icons/DigitalService/Baggage';
import Concierge from './assets/icons/DigitalService/Concierge';
import Drink from './assets/icons/DigitalService/Drink';
import Gender from './assets/icons/DigitalService/Gender';
import Gift from './assets/icons/DigitalService/Gift';
import InjuryFall from './assets/icons/DigitalService/InjuryFall';
import Transponder from './assets/icons/DigitalService/Transponder';

export {
  AccountProtection,
  Baggage,
  Concierge,
  Drink,
  Gender,
  Gift,
  InjuryFall,
  Transponder,
};

// --------------------------Иконки fines and taxes---------------------------------------------------------------------
import LandTax from './assets/icons/FinesAndTaxes/LandTax';
import MovableProperty from './assets/icons/FinesAndTaxes/MovableProperty';

export {
  LandTax,
  MovableProperty
};

// --------------------------Иконки metal-------------------------------------------------------------------------------
import MetalAccount from './assets/icons/Metal/MetalAccount';

export { MetalAccount };

// --------------------------Иконки insurance---------------------------------------------------------------------------
import CarAccident from './assets/icons/Insurance/CarAccident';
import ChildProtection from './assets/icons/Insurance/ChildProtection';
import ChildrenBankCardBig from './assets/icons/Insurance/ChildrenBankCardBig';
import CivilLiability from './assets/icons/Insurance/CivilLiability';
import CreditCardInsurance from './assets/icons/Insurance/CreditCardInsurance';
import Death from './assets/icons/Insurance/Death';
import Disability from './assets/icons/Insurance/Disability';
import DMS from './assets/icons/Insurance/DMS';
import ExtractAndReference from './assets/icons/Insurance/ExtractAndReferences';
import Hospital from './assets/icons/Insurance/Hospital';
import IJS from './assets/icons/Insurance/IJS';
import Injury from './assets/icons/Insurance/Injury';
import InsuranceAgainstFraud from './assets/icons/Insurance/InsuranceAgainstFraud';
import InteriorDecoration from './assets/icons/Insurance/InteriorDecoration';
import MortgageInsurance from './assets/icons/Insurance/MortgageInsurance';

export {
  CarAccident,
  ChildProtection,
  ChildrenBankCardBig,
  CivilLiability,
  CreditCardInsurance,
  Death,
  Disability,
  DMS,
  ExtractAndReference,
  Hospital,
  IJS,
  Injury,
  InsuranceAgainstFraud,
  InteriorDecoration,
  MortgageInsurance,
};

// --------------------------Иконки plans-------------------------------------------------------------------------------
import PricingPlansL from './assets/icons/Plans/PricingPlansL';
import PricingPlansM from './assets/icons/Plans/PricingPlansM';
import PricingPlansS from './assets/icons/Plans/PricingPlansS';

export {
  PricingPlansL,
  PricingPlansM,
  PricingPlansS
};

// --------------------------Иконки savings-----------------------------------------------------------------------------
import CreditCash from './assets/icons/Savings/CreditCash';
import Deposit from './assets/icons/Savings/Deposit';
import Refinancing from './assets/icons/Savings/Refinancing';
import Savings from './assets/icons/Savings/Savings';
import SavingsAccountBanknote from './assets/icons/Savings/SavingsAccountBanknote';
import SavingsAccountMoneyBox from './assets/icons/Savings/SavingsAccountMoneyBox';

export {
  CreditCash,
  Deposit,
  Refinancing,
  Savings,
  SavingsAccountBanknote,
  SavingsAccountMoneyBox,
};

// --------------------------Иконки my funds----------------------------------------------------------------------------
import AvailableFunds from './assets/icons/MyFunds/AvailableFunds';
import StarBig from './assets/icons/MyFunds/StarBig';

export {
  AvailableFunds,
  StarBig,
};

// --------------------------Иконки mobile------------------------------------------------------------------------------
import VTBMobile from './assets/icons/Mobile/VTBMobile';

export { VTBMobile };

// --------------------------Иконки goal--------------------------------------------------------------------------------
import OnVacation from './assets/icons/Goal/OnVacation';
import OnYourself from './assets/icons/Goal/OnYourself';

export {
  OnVacation,
  OnYourself
};

// --------------------------Иконки bonus-------------------------------------------------------------------------------
import Borrower from './assets/icons/Bonus/Borrower';
import CollectBonus from './assets/icons/Bonus/CollectBonus';
import Restaurant from './assets/icons/Bonus/Restaurant';

export {
  Borrower,
  CollectBonus,
  Restaurant,
};

// --------------------------Иконки operations--------------------------------------------------------------------------
import AnotherViolation from './assets/icons/Operations/AnotherViolation';
import ATMOperation from './assets/icons/Operations/ATMOperation';
import DriverLicense from './assets/icons/Operations/DriverLicense';
import GetAReceipt from './assets/icons/Operations/GetAReceipt';
import HearingImpairment from './assets/icons/Operations/HearingImpairment';
import InvestmentProductsBig from './assets/icons/Operations/InvestmentProductsBig';
import Maintenance from './assets/icons/Operations/Maintenance';
import Number from './assets/icons/Operations/Number';
import OtherBankProducts from './assets/icons/Operations/OtherBankProducts';
import ParkingAccount from './assets/icons/Operations/ParkingAccount';
import PercentRatio from './assets/icons/Operations/PercentRatio';
import PerceptionDisorder from './assets/icons/Operations/PerceptionDisorder';
import ProtestingOperations from './assets/icons/Operations/ProtestingOperations';
import QualityOfService from './assets/icons/Operations/QualityOfService';
import SaveMoney from './assets/icons/Operations/SaveMoney';
import SpeechDisorder from './assets/icons/Operations/SpeechDisorder';
import STS from './assets/icons/Operations/STS';
import TireService from './assets/icons/Operations/TireService';
import TransferInvestments from './assets/icons/Operations/TransferInvestments';
import TroikaAccount from './assets/icons/Operations/TroikaAccount';
import ViolationOfMotorSystem from './assets/icons/Operations/ViolationOfMotorSystem';
import VisualImpairment from './assets/icons/Operations/VisualImpairment';
import VolumeOfMargin from './assets/icons/Operations/VolumeOfMargin';

export {
  AnotherViolation,
  ATMOperation,
  DriverLicense,
  GetAReceipt,
  HearingImpairment,
  InvestmentProductsBig,
  Maintenance,
  Number,
  OtherBankProducts,
  ParkingAccount,
  PercentRatio,
  PerceptionDisorder,
  ProtestingOperations,
  QualityOfService,
  SaveMoney,
  SpeechDisorder,
  STS,
  TireService,
  TransferInvestments,
  TroikaAccount,
  ViolationOfMotorSystem,
  VisualImpairment,
  VolumeOfMargin,
};

// --------------------------Иконки other-------------------------------------------------------------------------------
import Cashback from './assets/icons/Other/Cashback';
import GhostLiveBalances from './assets/icons/Other/GhostLiveBalances';
import Goal from './assets/icons/Other/Goal';
import InformationAlertBig from './assets/icons/Other/InformationAlertBig';
import ReplenishmentOtherInvestments from './assets/icons/Other/ReplenishmentOtherInvestments';

export {
  Cashback,
  GhostLiveBalances,
  Goal,
  InformationAlertBig,
  ReplenishmentOtherInvestments
};

export { variables, download };

// --------------------------Функции------------------------------------------------------------------------------------

import useClickOutside from './hooks/useClickOutside';
import { useLocation } from './hooks/useLocation';
import { useUndo } from './hooks/useUndo';
import useTableOfContents from './hooks/useTableOfContents';
import useUpdateEffect from './hooks/useUpdateEffect';
import {
  numberWithSpaces, addLeadingZeros, LocalToUTC, UTCToLocal
} from './utils/helpers';

export {
  useClickOutside,
  useLocation,
  useUndo,
  useTableOfContents,
  useUpdateEffect,
  numberWithSpaces,
  openPopup,
  addLeadingZeros,
  LocalToUTC,
  UTCToLocal
};
