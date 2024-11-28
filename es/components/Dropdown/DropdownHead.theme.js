import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import { createThemeTag } from '../../theme/createThemeTag';
var name = 'dropdownHead';

var _createThemeTag = createThemeTag(name, {
  root: {
    cursor: 'pointer',
    display: 'flex',
    flexWrap: 'nowrap',
    height: 'auto',
    width: 'auto',
    zIndex: 2
  },
  modifiers: {
    stretch: {
      height: '100%',
      width: '100%'
    }
  }
}),
    _createThemeTag2 = _slicedToArray(_createThemeTag, 2),
    DropdownHeadTag = _createThemeTag2[0],
    themeHead = _createThemeTag2[1];

var _createThemeTag3 = createThemeTag("".concat(name, "Target"), {
  root: {
    display: 'flex',
    width: '100%',
    height: ' 100%'
  }
}),
    _createThemeTag4 = _slicedToArray(_createThemeTag3, 2),
    DropdownPopperTarget = _createThemeTag4[0],
    themePopperTarget = _createThemeTag4[1];

var theme = _objectSpread({}, themeHead, {}, themePopperTarget);

export { theme, DropdownHeadTag, DropdownPopperTarget };