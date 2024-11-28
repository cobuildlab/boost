import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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