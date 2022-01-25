import './styles/index.scss';

// ------------------------ Компоненты ---------------------------------------------------------------------------
import Accordion from './components/atoms/Accordion';
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
import Menu, { MenuContext } from './components/atoms/Menu';
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
import HistorySidebar from './components/molecules/HistorySidebar';
import Status from './components/atoms/Status';
import StatusWithText from './components/atoms/StatusWithText';
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
import Dropdown from './components/atoms/Dropdown';
import Schedule, {
  ScheduleLegend,
  ScheduleLegendItem,
} from './components/molecules/Schedule';
import ButtonGroup from './components/molecules/ButtonGroup';
import { FindEntities } from './components/popups/FindEntities';
import { FindEntitiesPosition } from './components/popups/FindEntitiesPosition';
import { FindEntitiesUser, createGetUsers } from './components/popups/FindEntitiesUser';
import AvatarStack from './components/molecules/AvatarStack';

// --------------------------Переменные---------------------------------------------------------------------------------
import variables from './styles/variables.json';
import { download } from './utils/download';

export {
  CommentTile,
  Signification,
  GhostScreen,
  HistoryCardFilter,
  Accordion,
  Avatar,
  AvatarStatus,
  AvatarStack,
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
  MenuContext,
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
  HistorySidebar,
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
  Dropdown,
  FindEntities,
  FindEntitiesPosition,
  FindEntitiesUser,
  createGetUsers
};


export { variables, download };

// --------------------------Функции------------------------------------------------------------------------------------

import useClickOutside from './hooks/useClickOutside';
import { useLocation } from './hooks/useLocation';
import { useUndo } from './hooks/useUndo';
import useTableOfContents from './hooks/useTableOfContents';
import useUpdateEffect from './hooks/useUpdateEffect';
import {
  numberWithSpaces, addLeadingZeros, LocalToUTC, UTCToLocal, formatDate, oDataTransform, today
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
  UTCToLocal,
  formatDate,
  oDataTransform,
  today
};
