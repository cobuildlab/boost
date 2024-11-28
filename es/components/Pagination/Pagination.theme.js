import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import { createThemeTag } from '../../theme/createThemeTag';
var name = 'pagination';

var _createThemeTag = createThemeTag(name, function () {
  return {
    root: {
      display: 'flex',
      alignItems: 'center'
    },
    modifiers: {}
  };
}),
    _createThemeTag2 = _slicedToArray(_createThemeTag, 2),
    PaginationTag = _createThemeTag2[0],
    themePagination = _createThemeTag2[1];

var _createThemeTag3 = createThemeTag("".concat(name, "Item"), function (_ref) {
  var COLORS = _ref.COLORS,
      FONTS = _ref.FONTS;
  return {
    root: {
      height: 36,
      marginRight: 24,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      flexShrink: 0,
      color: COLORS.GRAY_40,
      cursor: 'pointer',
      userSelect: 'none',
      '&:hover': {
        color: COLORS.PRIMARY_TEXT_COLOR
      },
      '&:last-child': {
        marginRight: 0
      }
    },
    modifiers: {
      active: _objectSpread({}, FONTS.SUBTITLE, {
        color: COLORS.WHITE,
        pointerEvents: 'none',
        '&:before': {
          content: '\'\'',
          backgroundColor: COLORS.PRIMARY,
          borderRadius: 18,
          position: 'absolute',
          left: '- calc((28px - 100%) / 2)',
          top: 4,
          width: 28,
          height: 28,
          zIndex: -1
        }
      }),
      disabled: {
        pointerEvents: 'none'
      }
    }
  };
}),
    _createThemeTag4 = _slicedToArray(_createThemeTag3, 2),
    PaginationItemTag = _createThemeTag4[0],
    themePaginationItem = _createThemeTag4[1];

var _createThemeTag5 = createThemeTag("".concat(name, "Items"), function () {
  return {
    root: {
      display: 'flex',
      padding: '0 24px',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1
    },
    modifiers: {}
  };
}),
    _createThemeTag6 = _slicedToArray(_createThemeTag5, 2),
    PaginationItemsTag = _createThemeTag6[0],
    themePaginationItems = _createThemeTag6[1];

var theme = _objectSpread({}, themePagination, {}, themePaginationItem, {}, themePaginationItems);

export { theme, PaginationTag, PaginationItemsTag, PaginationItemTag };