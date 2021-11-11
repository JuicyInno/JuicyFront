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
import Notifications, { sendNotification, } from './components/molecules/Notifications';
import Card from './components/molecules/Card';
import EntityCard from './components/molecules/EntityCard';
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
  EntityCard,
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
