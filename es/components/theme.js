import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import { theme as avatarTheme } from './Avatar';
import { theme as avatarsTheme } from './Avatars';
import { theme as breadcrumbsTheme } from './Breadcrumbs';
import { theme as buttonGroupTheme } from './ButtonGroup';
import { theme as buttonTheme } from './Button';
import { theme as cardTheme } from './Card';
import { theme as checkboxTheme } from './Checkbox';
import { theme as codeTheme } from './Code';
import { theme as dateInputTheme } from './DateInput';
import { theme as dialogTheme } from './Dialog';
import { theme as dropdownTheme } from './Dropdown';
import { theme as flexLayoutTheme } from './FlexLayout';
import { theme as formTheme } from './Form';
import { theme as gridTheme } from './Grid';
import { theme as headingTheme } from './Heading';
import { theme as iconTheme } from './Icon';
import { theme as indicatorTheme } from './Indicator';
import { theme as inputTheme } from './Input';
import { theme as labelTheme } from './Label';
import { theme as linkTheme } from './Link';
import { theme as loaderTheme } from './Loader';
import { theme as logsTheme } from './Logs';
import { theme as menuTheme } from './Menu';
import { theme as modalTheme } from './Modal';
import { theme as navigationTheme } from './Navigation';
import { theme as noDataTheme } from './NoData';
import { theme as paginationTheme } from './Pagination';
import { theme as paperTheme } from './Paper';
import { theme as paragraphTheme } from './Paragraph';
import { theme as progressTheme } from './Progress';
import { theme as radioTheme } from './Radio';
import { theme as scrollableTheme } from './Scrollable';
import { theme as secondaryNavigationTheme } from './SecondaryNavigation';
import { theme as selectTheme } from './Select';
import { theme as switchTheme } from './Switch';
import { theme as tableTheme } from './Table';
import { theme as tagTheme } from './Tag';
import { theme as textAreaTheme } from './TextArea';
import { theme as textTheme } from './Text';
import { theme as tooltipTheme } from './Tooltip';
import { theme as topBarTheme } from './TopBar';
import { theme as treeSelectTheme } from './TreeSelect';
import { theme as dividerTheme } from './Divider';
import { theme as tabTheme } from './Tab';
export var theme = _objectSpread({}, avatarTheme, {}, avatarsTheme, {}, breadcrumbsTheme, {}, buttonGroupTheme, {}, buttonTheme, {}, cardTheme, {}, checkboxTheme, {}, codeTheme, {}, dateInputTheme, {}, dialogTheme, {}, dropdownTheme, {}, flexLayoutTheme, {}, formTheme, {}, gridTheme, {}, headingTheme, {}, iconTheme, {}, indicatorTheme, {}, inputTheme, {}, labelTheme, {}, linkTheme, {}, loaderTheme, {}, logsTheme, {}, menuTheme, {}, modalTheme, {}, navigationTheme, {}, noDataTheme, {}, paginationTheme, {}, paperTheme, {}, paragraphTheme, {}, progressTheme, {}, radioTheme, {}, scrollableTheme, {}, secondaryNavigationTheme, {}, selectTheme, {}, switchTheme, {}, tableTheme, {}, tagTheme, {}, textAreaTheme, {}, textTheme, {}, tooltipTheme, {}, topBarTheme, {}, treeSelectTheme, {}, dividerTheme, {}, tabTheme);