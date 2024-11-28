import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { createThemeTag } from '../../theme/createThemeTag';
import { theme as secondaryNavigationItemTheme } from './SecondaryNavigationItem';
var name = 'secondaryNavigation';
var _createThemeTag = createThemeTag(name, function (_ref) {
    var COLORS = _ref.COLORS;
    return {
      root: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: 'auto',
        backgroundColor: COLORS.GRAY_10
      }
    };
  }),
  _createThemeTag2 = _slicedToArray(_createThemeTag, 2),
  SecondaryNavigationTag = _createThemeTag2[0],
  secondaryNavigationTheme = _createThemeTag2[1];
var theme = _objectSpread({}, secondaryNavigationTheme, {}, secondaryNavigationItemTheme);
export { theme, SecondaryNavigationTag };