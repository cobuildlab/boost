import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
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