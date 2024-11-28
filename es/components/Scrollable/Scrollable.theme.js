import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
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