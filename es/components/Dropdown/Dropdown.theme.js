import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { createThemeTag } from '../../theme/createThemeTag';
import { theme as dropdownHeadTheme } from './DropdownHead.theme';
import { theme as dropdownBodyTheme } from './DropdownBody.theme';
var name = 'dropdown';
var _createThemeTag = createThemeTag(name, {
    modifiers: {
      stretch: {
        height: '100%',
        width: '100%'
      }
    },
    defaults: {}
  }),
  _createThemeTag2 = _slicedToArray(_createThemeTag, 2),
  DropdownTag = _createThemeTag2[0],
  dropdownTheme = _createThemeTag2[1];
var theme = _objectSpread({}, dropdownTheme, {}, dropdownHeadTheme, {}, dropdownBodyTheme);
export { theme, DropdownTag };