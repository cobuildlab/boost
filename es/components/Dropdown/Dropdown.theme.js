import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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