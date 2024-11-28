import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { createThemeTag } from '../../theme/createThemeTag';
var name = 'menu';
var _createThemeTag = createThemeTag(name, {
    root: {
      display: 'flex',
      flexDirection: 'column',
      boxSizing: 'border-box',
      overflow: 'hidden',
      paddingTop: '8px',
      paddingBottom: '8px'
    }
  }),
  _createThemeTag2 = _slicedToArray(_createThemeTag, 2),
  MenuTag = _createThemeTag2[0],
  themeMenu = _createThemeTag2[1];
var _createThemeTag3 = createThemeTag("".concat(name, "Item"), function (_ref) {
    var COLORS = _ref.COLORS,
      FONTS = _ref.FONTS;
    return {
      root: _objectSpread({
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        whiteSpace: 'nowrap'
      }, FONTS.BODY_3, {
        height: '32px',
        paddingRight: '16px',
        paddingLeft: '16px',
        '&:hover': {
          backgroundColor: COLORS.PRIMARY_HOVER_GRAY_COLOR,
          color: COLORS.BLACK
        }
      }),
      modifiers: {
        disabled: {
          pointerEvents: 'none',
          cursor: 'default',
          color: COLORS.DISABLED_TEXT_COLOR
        }
      }
    };
  }),
  _createThemeTag4 = _slicedToArray(_createThemeTag3, 2),
  MenuItemTag = _createThemeTag4[0],
  themeMenuItem = _createThemeTag4[1];
var theme = _objectSpread({}, themeMenu, {}, themeMenuItem);
export { theme, MenuTag, MenuItemTag };