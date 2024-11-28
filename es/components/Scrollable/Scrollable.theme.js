import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import { createThemeTag } from '../../theme/createThemeTag';
var name = 'scrollable';

var _createThemeTag = createThemeTag(name, {
  root: {
    width: '100%',
    height: '100%',
    overflowY: 'auto'
  }
}),
    _createThemeTag2 = _slicedToArray(_createThemeTag, 2),
    ScrollableWrapper = _createThemeTag2[0],
    themeWrapper = _createThemeTag2[1];

var _createThemeTag3 = createThemeTag("".concat(name, "Content"), {
  root: {
    height: '100%'
  }
}),
    _createThemeTag4 = _slicedToArray(_createThemeTag3, 2),
    ScrollableContent = _createThemeTag4[0],
    themeContent = _createThemeTag4[1];

var theme = _objectSpread({}, themeWrapper, {}, themeContent);

export { theme, ScrollableWrapper, ScrollableContent };