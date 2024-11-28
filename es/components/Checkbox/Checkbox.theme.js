import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { createThemeTag } from '../../theme/createThemeTag';
var name = 'checkbox';
var _createThemeTag = createThemeTag("".concat(name, "Square"), function (_ref) {
    var COLORS = _ref.COLORS,
      SIZES = _ref.SIZES;
    return {
      root: {
        position: 'relative',
        width: '24px',
        height: '24px',
        transition: 'all .15s ease-in-out',
        flexShrink: 0,
        background: COLORS.WHITE,
        border: "1px solid ".concat(COLORS.PRIMARY_BORDER_COLOR),
        borderRadius: SIZES.MAIN_BORDER_RADIUS,
        '&:hover': {
          boxShadow: '0 1px 3px 0 rgba(50,50,93,0.14), 0 4px 6px 0 rgba(112,157,199,0.08)'
        },
        'input:focus + &': {
          boxShadow: 'inset 0 1px 3px 0 rgba(50,50,93,0.14), inset 0 4px 6px 0 rgba(112,157,199,0.08)'
        },
        'input:active + &': {
          boxShadow: 'inset 0 1px 3px 0 rgba(50,50,93,0.14), inset 0 4px 6px 0 rgba(112,157,199,0.08)'
        }
      },
      modifiers: {
        hasError: {
          borderColor: COLORS.DANGER
        },
        disabled: {
          backgroundColor: COLORS.GRAY_20,
          cursor: 'auto'
        }
      }
    };
  }),
  _createThemeTag2 = _slicedToArray(_createThemeTag, 2),
  CheckboxSquareTag = _createThemeTag2[0],
  themeSquare = _createThemeTag2[1];
var _createThemeTag3 = createThemeTag("".concat(name, "Icon"), function (_ref2) {
    var COLORS = _ref2.COLORS;
    return {
      root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        transition: 'all .15s ease-in-out',
        color: COLORS.PRIMARY,
        opacity: 0
      },
      modifiers: {
        isShown: {
          opacity: 1
        }
      }
    };
  }),
  _createThemeTag4 = _slicedToArray(_createThemeTag3, 2),
  CheckboxIconTag = _createThemeTag4[0],
  themeIcon = _createThemeTag4[1];
var _createThemeTag5 = createThemeTag("".concat(name, "Text"), function (_ref3) {
    var FONTS = _ref3.FONTS;
    return {
      root: _objectSpread({
        paddingLeft: '12px',
        cursor: 'pointer'
      }, FONTS.BODY_2),
      modifiers: {
        nowrap: {
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }
      }
    };
  }),
  _createThemeTag6 = _slicedToArray(_createThemeTag5, 2),
  CheckboxTextTag = _createThemeTag6[0],
  themeText = _createThemeTag6[1];
var _createThemeTag7 = createThemeTag("".concat(name, "Wrapper"), {
    root: {
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer'
    }
  }),
  _createThemeTag8 = _slicedToArray(_createThemeTag7, 2),
  CheckboxWrapperTag = _createThemeTag8[0],
  themeWrapper = _createThemeTag8[1];
var _createThemeTag9 = createThemeTag("".concat(name, "Tag"), {
    root: {
      opacity: 0,
      position: 'absolute'
    }
  }),
  _createThemeTag10 = _slicedToArray(_createThemeTag9, 2),
  CheckboxTag = _createThemeTag10[0],
  themeCheckbox = _createThemeTag10[1];
var theme = _objectSpread({}, themeWrapper, {}, themeCheckbox, {}, themeSquare, {}, themeIcon, {}, themeText);
export { theme, CheckboxSquareTag, CheckboxTag, CheckboxWrapperTag, CheckboxTextTag, CheckboxIconTag };