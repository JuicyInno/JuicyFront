import './styles/index.scss';

// ------------------------ Компоненты ---------------------------------------------------------------------------
import Avatar from './components/atoms/Avatar';
import AvatarStatus from './components/molecules/AvatarStatus';
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
import Pagination from './components/atoms/Pagination';
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
import Notifications, { sendNotification, } from './components/molecules/Notifications';
import Card from './components/molecules/Card';
import EntityCard from './components/molecules/EntityCard';
import Toast from './components/atoms/Toast';
import History from './components/molecules/History';
import Status from './components/atoms/Status';
import StatusWithText from './components/atoms/StatusWithText';
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
import Schedule, {
  ScheduleLegend,
  ScheduleLegendItem,
} from './components/molecules/Schedule';

// --------------------------Переменные---------------------------------------------------------------------------------
import variables from './styles/variables.json';
import { download } from './utils/download';

export {
  CommentTile,
  Signification,
  GhostScreen,
  HistoryCardFilter,
  Avatar,
  AvatarStatus,
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
  Pagination,
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
  EntityCard,
  Toast,
  History,
  Status,
  StatusWithText,
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
  PopupMaker,
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
import ChevronRight from './assets/icons/ChevronRight';
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
import Dialog from './assets/icons/Dialog';
import Microphone from './assets/icons/Microphone';
import StatusSuccess from './assets/icons/StatusSuccess';

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
  ChevronRight,
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
  Microphone,
  Exit,
  External,
  Cart,
  Bag,
  Bank,
  Left,
  Exchange,
  Add,
  Edit,
  Dialog,
  // Возможно, эта иконка будет заменена
  StatusSuccess
};

// --------------------------Новые иконки-------------------------------------------------------------------------------
// --------------------------Иконки 24px--------------------------------------------------------------------------------
// --------------------------Иконки tools-------------------------------------------------------------------------------
import AutoPayment from './assets/icons/24px/Tools/AutoPayment';
import Cancel from './assets/icons/24px/Tools/Cancel';
import Cash from './assets/icons/24px/Tools/Cash';
import Change from './assets/icons/24px/Tools/Change';
import ChildrenBankCard from './assets/icons/24px/Tools/ChildrenBankCard';
import Cog from './assets/icons/24px/Tools/Cog';
import InternetShop from './assets/icons/24px/Tools/InternetShop';
import Location from './assets/icons/24px/Tools/Location';
import Lock from './assets/icons/24px/Tools/Lock';
import MenuHorizontal from './assets/icons/24px/Tools/MenuHorizontal';
import MenuVertical from './assets/icons/24px/Tools/MenuVertical';
import NewCalendar from './assets/icons/24px/Tools/Calendar'; // refactor name to Calendar
import NewDoc from './assets/icons/24px/Tools/Doc'; // refactor name to Doc
import NewEdit from './assets/icons/24px/Tools/Edit'; // refactor name to Edit
import NewMicrophone from './assets/icons/24px/Tools/Microphone'; // refactor name to Microphone
import NewRefresh from './assets/icons/24px/Tools/Refresh';
import NewTuneUp from './assets/icons/24px/Tools/TuneUp'; // refactor name to TuneUp
import Link from './assets/icons/24px/Tools/Link';
import OnCard from './assets/icons/24px/Tools/OnCard';
import OnPhone from './assets/icons/24px/Tools/OnPhone';
import Point from './assets/icons/24px/Tools/Point';
import Printer from './assets/icons/24px/Tools/Printer';
import QR from './assets/icons/24px/Tools/QR';
import Receipt from './assets/icons/24px/Tools/Receipt';
import Repeat from './assets/icons/24px/Tools/Repeat';
import ShowAll from './assets/icons/24px/Tools/ShowAll';
import Template from './assets/icons/24px/Tools/Template';
import Trash from './assets/icons/24px/Tools/Trash';


export {
  AutoPayment,
  Cancel,
  Cash,
  Change,
  ChildrenBankCard,
  Cog,
  InternetShop,
  Location,
  Lock,
  MenuHorizontal,
  MenuVertical,
  NewCalendar,
  NewDoc,
  NewEdit,
  NewMicrophone,
  NewRefresh,
  NewTuneUp,
  Link,
  OnCard,
  OnPhone,
  Point,
  Printer,
  QR,
  Receipt,
  Repeat,
  ShowAll,
  Template,
  Trash
};

// --------------------------Иконки alerts------------------------------------------------------------------------------
import Holidays from './assets/icons/24px/Alerts/Holidays';
import InformationAlert from './assets/icons/24px/Alerts/InformationAlert';
import NewDialog from './assets/icons/24px/Alerts/Dialog'; // refactor to Dialog
import NotificationIcon from './assets/icons/24px/Alerts/Notification';
import QuestionAlert from './assets/icons/24px/Alerts/QuestionAlert';

export {
  Holidays,
  InformationAlert,
  NewDialog,
  NotificationIcon,
  QuestionAlert
};

// --------------------------Иконки messaging---------------------------------------------------------------------------
import Alternative from './assets/icons/24px/Messaging/Alternative';
import Envelope from './assets/icons/24px/Messaging/Envelope';
import Phone from './assets/icons/24px/Messaging/Phone';
import Smartphone from './assets/icons/24px/Messaging/Smartphone';

export {
  Alternative,
  Envelope,
  Phone,
  Smartphone
};

// --------------------------Иконки account-----------------------------------------------------------------------------
import NewCopy from './assets/icons/24px/Account/Copy';
import NewExit from './assets/icons/24px/Account/Exit'; // refactor name to Exit
import EyeOpen from './assets/icons/24px/Account/EyeOpen';
import NewEyeClose from './assets/icons/24px/Account/EyeClose'; // refactor name to EyeClose
import NewSearch from './assets/icons/24px/Account/Search'; // refactor name to Search
import Send from './assets/icons/24px/Account/Send';
import User from './assets/icons/24px/Account/User';

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
import Archive from './assets/icons/24px/Specific/Archive';
import BankCard from './assets/icons/24px/Specific/BankCard';
import CardRecommend from './assets/icons/24px/Specific/CardRecommend';
import Coin from './assets/icons/24px/Specific/Coin';
import Courier from './assets/icons/24px/Specific/Сourier';
import Diagram from './assets/icons/24px/Specific/Diagram';
import DigitalCard from './assets/icons/24px/Specific/DigitalCard';
import Gosuslygi from './assets/icons/24px/Specific/Gosuslygi';
import InvestmentProducts from './assets/icons/24px/Specific/InvestmentProducts';
import LightBulb from './assets/icons/24px/Specific/LightBulb';
import NewBank from './assets/icons/24px/Specific/Bank'; // refactor name to Bank
import Safe from './assets/icons/24px/Specific/Safe';
import SpecialSearch from './assets/icons/24px/Specific/SpecialSearch';
import Star from './assets/icons/24px/Specific/Star';

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
import Attach from './assets/icons/24px/Arrows/Attach';
import ArrowDown from './assets/icons/24px/Arrows/ArrowDown';
import ArrowLeft from './assets/icons/24px/Arrows/ArrowLeft';
import ArrowRight from './assets/icons/24px/Arrows/ArrowRight';
import ArrowUp from './assets/icons/24px/Arrows/ArrowUp';
import ChevronUp from './assets/icons/24px/Arrows/ChevronUp';
import Down from './assets/icons/24px/Arrows/Down';
import InfoStatus from './assets/icons/24px/Arrows/InfoStatus';
import NewAdd from './assets/icons/24px/Arrows/Add';
import NewChevronDown from './assets/icons/24px/Arrows/ChevronDown';
import NewChevronLeft from './assets/icons/24px/Arrows/ChevronLeft';
import NewChevronRight from './assets/icons/24px/Arrows/ChevronRight';
import NewDownload from './assets/icons/24px/Arrows/Download';
import NewExchange from './assets/icons/24px/Arrows/Exchange';
import NewClose from './assets/icons/24px/Arrows/Close';
import NewReduce from './assets/icons/24px/Arrows/Reduce';
import NewSuccess from './assets/icons/24px/Arrows/Success';
import NewUp from './assets/icons/24px/Arrows/Up';
import Renew from './assets/icons/24px/Arrows/Renew';
import Sort from './assets/icons/24px/Arrows/Sort';
import SubdirectoryRight from './assets/icons/24px/Arrows/SubdirectoryRight';
import Transfer from './assets/icons/24px/Arrows/Transfer';
import Upload from './assets/icons/24px/Arrows/Upload';
import Warning from './assets/icons/24px/Arrows/Warning';

export {
  Attach,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ChevronUp,
  Down,
  InfoStatus,
  NewAdd,
  NewChevronDown, // refactor name to ChevronDown
  NewChevronLeft, // refactor name to ChevronLeft
  NewChevronRight, // refactor name to ChevronRight
  NewDownload, // refactor name to Download
  NewExchange, // refactor name to Exchange
  NewClose, // refactor name to NewClose
  NewReduce, // refactor name to Reduce
  NewSuccess, // refactor name to Success
  NewUp, // refactor name to Up
  Renew,
  Sort,
  SubdirectoryRight,
  Transfer,
  Upload,
  Warning
};

// --------------------------Иконки Themes------------------------------------------------------------------------------
import DarkModeFill from './assets/icons/24px/Themes/DarkModeFill';
import DarkModeStroke from './assets/icons/24px/Themes/DarkModeStroke';
import LightModeStroke from './assets/icons/24px/Themes/LightModeStroke';
import LightModeStrokeFill from './assets/icons/24px/Themes/LightModeStrokeFill';

export {
  DarkModeFill,
  DarkModeStroke,
  LightModeStroke,
  LightModeStrokeFill
};

// --------------------------Иконки status------------------------------------------------------------------------------
import Blocked from './assets/icons/24px/Status/Blocked';
import Flag from './assets/icons/24px/Status/Flag';
import InfoFill from './assets/icons/24px/Status/InfoFill';
import InfoOutline from './assets/icons/24px/Status/InfoOutline';
import Loader from './assets/icons/24px/Status/Loader';
import Pending from './assets/icons/24px/Status/Pending';
import Pin from './assets/icons/24px/Status/Pin';
import Release from './assets/icons/24px/Status/Release';
import ReleaseSecondary from './assets/icons/24px/Status/ReleaseSecondary';
import Reserved from './assets/icons/24px/Status/Reserved';
import StatusError from './assets/icons/24px/Status/Error';
import StatusInformation from './assets/icons/24px/Status/Information';
import StatusReturn from './assets/icons/24px/Status/Return';
import StatusWarning from './assets/icons/24px/Status/Warning';
import Timer from './assets/icons/24px/Status/Timer';
import Troyka from './assets/icons/24px/Status/Troyka';
import Unread from './assets/icons/24px/Status/Unread';

export {
  Blocked,
  Flag,
  InfoFill,
  InfoOutline,
  Loader,
  Pending,
  Pin,
  Release,
  ReleaseSecondary,
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
import Android from './assets/icons/24px/Social/Android';
import Apple from './assets/icons/24px/Social/Apple';
import Classmates from './assets/icons/24px/Social/Classmates';
import Facebook from './assets/icons/24px/Social/Facebook';
import GooglePlay from './assets/icons/24px/Social/GooglePlay';
import Huawei from './assets/icons/24px/Social/Huawei';
import Telegram from './assets/icons/24px/Social/Telegram';
import Twitter from './assets/icons/24px/Social/Twitter';
import VK from './assets/icons/24px/Social/VK';
import Windows from './assets/icons/24px/Social/Windows';
import YouTube from './assets/icons/24px/Social/Youtube';

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

// --------------------------Иконки 40px--------------------------------------------------------------------------------
// --------------------------Иконки settings----------------------------------------------------------------------------
import AnotherCard from './assets/icons/40px/Settings/AnotherCard';
import Authorization from './assets/icons/40px/Settings/Authorization';
import CreditCard from './assets/icons/40px/Settings/CreditCard';
import DigitalCardM from './assets/icons/40px/Settings/DigitalCard';
import Limits from './assets/icons/40px/Settings/Limits';
import LinkBig from './assets/icons/40px/Settings/LinkBig';
import ListOfCards from './assets/icons/40px/Settings/ListOfCards';
import Login from './assets/icons/40px/Settings/Login';
import NewCard from './assets/icons/40px/Settings/Card';
import NotificationBig from './assets/icons/40px/Settings/NotificationBig';
import OnCardBig from './assets/icons/40px/Settings/OnCardBig';
import SpecialSearchBig from './assets/icons/40px/Settings/SpecialSearchBig';
import TuneUpBig from './assets/icons/40px/Settings/TuneUpBig';

export {
  AnotherCard,
  Authorization,
  CreditCard,
  DigitalCardM,
  Limits,
  LinkBig,
  ListOfCards,
  Login,
  NewCard, // refactor name to Card
  NotificationBig,
  OnCardBig,
  SpecialSearchBig,
  TuneUpBig
};

// --------------------------Иконки Profile And Bank Contact------------------------------------------------------------
import BackCall from './assets/icons/40px/ProfileAndBankContact/BackCall';
import CogBig from './assets/icons/40px/ProfileAndBankContact/CogBig';
import DialogBig from './assets/icons/40px/ProfileAndBankContact/DialogBig';
import EnvelopeBig from './assets/icons/40px/ProfileAndBankContact/EnvelopeBig';
import ExitBig from './assets/icons/40px/ProfileAndBankContact/ExitBig';
import OperationCompleted from './assets/icons/40px/ProfileAndBankContact/OperationCompleted';
import PhoneBig from './assets/icons/40px/ProfileAndBankContact/PhoneBig';
import PointBig from './assets/icons/40px/ProfileAndBankContact/PointBig';
import Salary from './assets/icons/40px/ProfileAndBankContact/Salary';
import TransferOfSalary from './assets/icons/40px/ProfileAndBankContact/TransferOfSalary';
import UserBig from './assets/icons/40px/ProfileAndBankContact/UserBig';
import WebsiteCall from './assets/icons/40px/ProfileAndBankContact/WebsiteCall';

export {
  BackCall,
  CogBig,
  DialogBig,
  EnvelopeBig,
  ExitBig,
  OperationCompleted,
  PhoneBig,
  PointBig,
  Salary,
  TransferOfSalary,
  UserBig,
  WebsiteCall
};

// --------------------------Иконки Credit------------------------------------------------------------------------------
import AutoCredit from './assets/icons/40px/Credit/AutoCredit';
import Credit from './assets/icons/40px/Credit/Credit';
import Credits from './assets/icons/40px/Credit/Credits';
import Mortgage from './assets/icons/40px/Credit/Mortgage';

export {
  AutoCredit,
  Credit,
  Credits,
  Mortgage
};

// --------------------------Иконки investments-------------------------------------------------------------------------
import Broker from './assets/icons/40px/Investments/Broker';
import IIS from './assets/icons/40px/Investments/IIS';
import Investment from './assets/icons/40px/Investments/Investment';
import MicroInvestments from './assets/icons/40px/Investments/MicroInvestments';

export {
  Broker,
  IIS,
  Investment,
  MicroInvestments
};

// --------------------------Иконки refinancing-------------------------------------------------------------------------
import CreditCardRefinancing from './assets/icons/40px/Refinancing/CreditCardRefinancing';
import MortgageRefinancing from './assets/icons/40px/Refinancing/MortgageRefinancing';

export {
  CreditCardRefinancing,
  MortgageRefinancing
};

// --------------------------Иконки documents---------------------------------------------------------------------------
import Doc from './assets/icons/40px/Documents/Doc';
import Passport from './assets/icons/40px/Documents/Passport';
import ReceiptBig from './assets/icons/40px/Documents/ReceiptBig';

export {
  Doc,
  Passport,
  ReceiptBig
};

// --------------------------Иконки payments----------------------------------------------------------------------------
import Airplane from './assets/icons/40px/Payments/Airplane';
import CashBig from './assets/icons/40px/Payments/CashBig';
import CashWithdrawal from './assets/icons/40px/Payments/CashWithdrawal';
import Charity from './assets/icons/40px/Payments/Charity';
import Collecting from './assets/icons/40px/Payments/Collecting';
import CurrencyExchange from './assets/icons/40px/Payments/CurrencyExchange';
import Education from './assets/icons/40px/Payments/Education';
import Elections from './assets/icons/40px/Payments/Elections';
import ElectronicMoney from './assets/icons/40px/Payments/ElectronicMoney';
import ExtractAndReferences from './assets/icons/40px/Payments/ExtractAndReferences';
import Free from './assets/icons/40px/Payments/Free';
import FromCardToCard from './assets/icons/40px/Payments/FromCardToCard';
import GosuslugiBig from './assets/icons/40px/Payments/GosuslugiBig';
import GovernmentServices from './assets/icons/40px/Payments/GovernmentServices';
import InternetNetworks from './assets/icons/40px/Payments/InternetNetworks';
import InternetShopBig from './assets/icons/40px/Payments/InternetShopBig';
import InvestmentFunds from './assets/icons/40px/Payments/InvestmentFunds';
import MobileConnection from './assets/icons/40px/Payments/MobileConnection';
import OnlineGames from './assets/icons/40px/Payments/OnlineGames';
import OtherPeople from './assets/icons/40px/Payments/OtherPeople';
import OtherServices from './assets/icons/40px/Payments/OtherServices';
import PensionFunds from './assets/icons/40px/Payments/PensionFunds';
import RefundMoney from './assets/icons/40px/Payments/RefundMoney';
import RepeatBig from './assets/icons/40px/Payments/RepeatBig';
import SWIFT from './assets/icons/40px/Payments/SWIFT';
import ToOrganizations from './assets/icons/40px/Payments/ToOrganizations';
import TransfersAddressManagement from './assets/icons/40px/Payments/TransfersAddressManagement';
import TransfersBetweenYourAccountsCards from './assets/icons/40px/Payments/TransfersBetweenAccounts';
import TransfersPhoneNumber from './assets/icons/40px/Payments/TransfersPhoneNumber';
import TransfersWithinBankLegalEntities from './assets/icons/40px/Payments/TransfersWithinBankLegalEntities';
import Transport from './assets/icons/40px/Payments/Transport';
import World from './assets/icons/40px/Payments/World';

export {
  Airplane,
  CashBig,
  CashWithdrawal,
  Charity,
  Collecting,
  CurrencyExchange,
  Education, Elections,
  ElectronicMoney,
  ExtractAndReferences,
  Free,
  FromCardToCard,
  GosuslugiBig,
  GovernmentServices,
  InternetNetworks,
  InternetShopBig,
  InvestmentFunds,
  MobileConnection,
  OnlineGames,
  OtherPeople,
  OtherServices,
  PensionFunds,
  RefundMoney,
  RepeatBig,
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
import AccountProtection from './assets/icons/40px/DigitalService/AccountProtection';
import Baggage from './assets/icons/40px/DigitalService/Baggage';
import Concierge from './assets/icons/40px/DigitalService/Concierge';
import Drink from './assets/icons/40px/DigitalService/Drink';
import Gender from './assets/icons/40px/DigitalService/Gender';
import Gift from './assets/icons/40px/DigitalService/Gift';
import InjuryFall from './assets/icons/40px/DigitalService/InjuryFall';
import Transponder from './assets/icons/40px/DigitalService/Transponder';

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
import LandTax from './assets/icons/40px/FinesAndTaxes/LandTax';
import MovableProperty from './assets/icons/40px/FinesAndTaxes/MovableProperty';

export {
  LandTax,
  MovableProperty
};

// --------------------------Иконки metal-------------------------------------------------------------------------------
import MetalAccount from './assets/icons/40px/Metal/MetalAccount';

export { MetalAccount };

// --------------------------Иконки insurance---------------------------------------------------------------------------
import CarAccident from './assets/icons/40px/Insurance/CarAccident';
import ChildProtection from './assets/icons/40px/Insurance/ChildProtection';
import ChildrenBankCardBig from './assets/icons/40px/Insurance/ChildrenBankCardBig';
import CivilLiability from './assets/icons/40px/Insurance/CivilLiability';
import Death from './assets/icons/40px/Insurance/Death';
import Disability from './assets/icons/40px/Insurance/Disability';
import DMS from './assets/icons/40px/Insurance/DMS';
import ExtractAndReference from './assets/icons/40px/Insurance/ExtractAndReferences';
import Hospital from './assets/icons/40px/Insurance/Hospital';
import IJS from './assets/icons/40px/Insurance/IJS';
import Injury from './assets/icons/40px/Insurance/Injury';
import InsuranceAgainstFraud from './assets/icons/40px/Insurance/InsuranceAgainstFraud';
import InteriorDecoration from './assets/icons/40px/Insurance/InteriorDecoration';
import MortgageInsurance from './assets/icons/40px/Insurance/MortgageInsurance';

export {
  CarAccident,
  ChildProtection,
  ChildrenBankCardBig,
  CivilLiability,
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
import PricingPlansL from './assets/icons/40px/Plans/PricingPlansL';
import PricingPlansM from './assets/icons/40px/Plans/PricingPlansM';
import PricingPlansS from './assets/icons/40px/Plans/PricingPlansS';

export {
  PricingPlansL,
  PricingPlansM,
  PricingPlansS
};

// --------------------------Иконки savings-----------------------------------------------------------------------------
import CreditCash from './assets/icons/40px/Savings/CreditCash';
import Deposit from './assets/icons/40px/Savings/Deposit';
import Refinancing from './assets/icons/40px/Savings/Refinancing';
import Savings from './assets/icons/40px/Savings/Savings';
import SavingsAccountBanknote from './assets/icons/40px/Savings/SavingsAccountBanknote';
import SavingsAccountMoneyBox from './assets/icons/40px/Savings/SavingsAccountMoneyBox';

export {
  CreditCash,
  Deposit,
  Refinancing,
  Savings,
  SavingsAccountBanknote,
  SavingsAccountMoneyBox,
};

// --------------------------Иконки my funds----------------------------------------------------------------------------
import AvailableFunds from './assets/icons/40px/MyFunds/AvailableFunds';
import StarBig from './assets/icons/40px/MyFunds/StarBig';

export {
  AvailableFunds,
  StarBig,
};

// --------------------------Иконки mobile------------------------------------------------------------------------------
import VTBMobile from './assets/icons/40px/Mobile/VTBMobile';

export { VTBMobile };

// --------------------------Иконки goal--------------------------------------------------------------------------------
import Home from './assets/icons/40px/Goal/Home';
import OnVacation from './assets/icons/40px/Goal/OnVacation';
import OnYourself from './assets/icons/40px/Goal/OnYourself';

export {
  Home,
  OnVacation,
  OnYourself
};

// --------------------------Иконки bonus-------------------------------------------------------------------------------
import Borrower from './assets/icons/40px/Bonus/Borrower';
import CollectBonus from './assets/icons/40px/Bonus/CollectBonus';
import Restaurant from './assets/icons/40px/Bonus/Restaurant';

export {
  Borrower,
  CollectBonus,
  Restaurant,
};

// --------------------------Иконки operations--------------------------------------------------------------------------
import AnotherViolation from './assets/icons/40px/Operations/AnotherViolation';
import ATMOperation from './assets/icons/40px/Operations/ATMOperation';
import DriverLicense from './assets/icons/40px/Operations/DriverLicense';
import GetAReceipt from './assets/icons/40px/Operations/GetAReceipt';
import HearingImpairment from './assets/icons/40px/Operations/HearingImpairment';
import InvestmentProductsBig from './assets/icons/40px/Operations/InvestmentProductsBig';
import Maintenance from './assets/icons/40px/Operations/Maintenance';
import OtherBankProducts from './assets/icons/40px/Operations/OtherBankProducts';
import ParkingAccount from './assets/icons/40px/Operations/ParkingAccount';
import PercentRatio from './assets/icons/40px/Operations/PercentRatio';
import PerceptionDisorder from './assets/icons/40px/Operations/PerceptionDisorder';
import ProtestingOperations from './assets/icons/40px/Operations/ProtestingOperations';
import QualityOfService from './assets/icons/40px/Operations/QualityOfService';
import SaveMoney from './assets/icons/40px/Operations/SaveMoney';
import Sharp from './assets/icons/40px/Operations/Sharp';
import SpeechDisorder from './assets/icons/40px/Operations/SpeechDisorder';
import STS from './assets/icons/40px/Operations/STS';
import TireService from './assets/icons/40px/Operations/TireService';
import TransferInvestments from './assets/icons/40px/Operations/TransferInvestments';
import TroikaAccount from './assets/icons/40px/Operations/TroikaAccount';
import ViolationOfMotorSystem from './assets/icons/40px/Operations/ViolationOfMotorSystem';
import VisualImpairment from './assets/icons/40px/Operations/VisualImpairment';
import VolumeOfMargin from './assets/icons/40px/Operations/VolumeOfMargin';

export {
  AnotherViolation,
  ATMOperation,
  DriverLicense,
  GetAReceipt,
  HearingImpairment,
  InvestmentProductsBig,
  Maintenance,
  OtherBankProducts,
  ParkingAccount,
  PercentRatio,
  PerceptionDisorder,
  ProtestingOperations,
  QualityOfService,
  SaveMoney,
  Sharp,
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
import Cashback from './assets/icons/40px/Other/Cashback';
import FlagBig from './assets/icons/40px/Other/FlagBig';
import GhostLiveBalances from './assets/icons/40px/Other/GhostLiveBalances';
import InformationAlertBig from './assets/icons/40px/Other/InformationAlertBig';
import ReplenishmentOtherInvestments from './assets/icons/40px/Other/ReplenishmentOtherInvestments';

export {
  Cashback,
  FlagBig,
  GhostLiveBalances,
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
