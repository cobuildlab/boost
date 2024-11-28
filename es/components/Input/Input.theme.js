import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { createThemeTag } from '../../theme/createThemeTag';
var name = 'input';
var _createThemeTag = createThemeTag(name, function (_ref) {
    var COLORS = _ref.COLORS,
      SIZES = _ref.SIZES,
      FONTS = _ref.FONTS;
    return {
      root: function root(props) {
        return _objectSpread({
          width: props.width ? "".concat(props.width, "rem") : props.stretch ? '100%' : SIZES.FIELD_WIDTH,
          outline: 'none',
          paddingTop: '1px',
          paddingLeft: props.hasLeftIcon ? '36px' : '15px',
          paddingRight: props.hasRightIcon || props.type === 'number' && !props.hideNumberArrows ? '48px' : '16px',
          backgroundColor: props.disabled || props.readOnly ? COLORS.DISABLED_COLOR : COLORS.WHITE,
          borderColor: COLORS.PRIMARY_BORDER_COLOR,
          '&:focus': {
            borderColor: props.disabled || props.readOnly ? COLORS.PRIMARY_BORDER_COLOR : COLORS.PRIMARY
          },
          '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
            '-webkit-appearance': 'none',
            margin: 0
          },
          '&[type=number]': {
            '-moz-appearance': 'textfield'
          },
          '&::-ms-clear': {
            display: 'none'
          }
        }, FONTS.BODY_1, {
          color: props.disabled ? COLORS.LIGHT_TEXT_COLOR : COLORS.PRIMARY_TEXT_COLOR,
          height: '36px',
          transition: 'all .15s ease-in-out',
          '&::placeholder': {
            color: COLORS.PLACEHOLDER_COLOR
          }
        });
      },
      modifiers: {
        align: {
          left: {
            textAlign: 'left '
          },
          right: {
            textAlign: 'right '
          },
          center: {
            textAlign: 'center '
          }
        },
        kind: {
          bordered: {
            borderStyle: 'solid',
            borderWidth: '1px',
            borderRadius: '5px'
          },
          underline: {
            borderWidth: 0,
            borderBottomStyle: 'solid',
            borderBottomWidth: '1px'
          }
        },
        hasError: {
          borderColor: "".concat(COLORS.DANGER)
        }
      }
    };
  }),
  _createThemeTag2 = _slicedToArray(_createThemeTag, 2),
  InputTag = _createThemeTag2[0],
  themeInput = _createThemeTag2[1];
var _createThemeTag3 = createThemeTag("".concat(name, "Wrapper"), {
    root: function root(props) {
      return {
        display: 'inline-flex',
        position: 'relative',
        width: props.stretch && !props.width ? '100%' : 'auto'
      };
    }
  }),
  _createThemeTag4 = _slicedToArray(_createThemeTag3, 2),
  InputWrapperTag = _createThemeTag4[0],
  themeWrapper = _createThemeTag4[1];
var _createThemeTag5 = createThemeTag("".concat(name, "Indicator"), function (_ref2) {
    var COLORS = _ref2.COLORS;
    return {
      root: function root(props) {
        return {
          display: props.hasRightIcon ? 'none' : 'block',
          position: 'absolute',
          right: '8px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '6px',
          height: '6px',
          backgroundColor: COLORS.DANGER,
          borderRadius: '50%'
        };
      }
    };
  }),
  _createThemeTag6 = _slicedToArray(_createThemeTag5, 2),
  InputIndicatorTag = _createThemeTag6[0],
  themeIndicator = _createThemeTag6[1];
var iconsStyles = {
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  width: '32px'
};
var _createThemeTag7 = createThemeTag("".concat(name, "LeftIcon"), {
    root: _objectSpread({}, iconsStyles, {
      left: '8px'
    })
  }),
  _createThemeTag8 = _slicedToArray(_createThemeTag7, 2),
  InputLeftIconTag = _createThemeTag8[0],
  themeLeftIcon = _createThemeTag8[1];
var _createThemeTag9 = createThemeTag("".concat(name, "RightIcon"), {
    root: _objectSpread({}, iconsStyles, {
      right: '8px'
    })
  }),
  _createThemeTag10 = _slicedToArray(_createThemeTag9, 2),
  InputRightIconTag = _createThemeTag10[0],
  themeRightIcon = _createThemeTag10[1];
var _createThemeTag11 = createThemeTag("".concat(name, "ClearButton"), function (_ref3) {
    var COLORS = _ref3.COLORS;
    return {
      root: {
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        right: '8px',
        color: COLORS.PRIMARY_BORDER_COLOR,
        cursor: 'pointer'
      }
    };
  }),
  _createThemeTag12 = _slicedToArray(_createThemeTag11, 2),
  InputClearButtonTag = _createThemeTag12[0],
  themeClearButton = _createThemeTag12[1];
var _createThemeTag13 = createThemeTag("".concat(name, "Arrows"), function () {
    return {
      root: {
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        height: '64%',
        right: '8px',
        top: '50%',
        transform: 'translateY(-50%)'
      }
    };
  }),
  _createThemeTag14 = _slicedToArray(_createThemeTag13, 2),
  InputArrowsTag = _createThemeTag14[0],
  themeInputArrows = _createThemeTag14[1];
var _createThemeTag15 = createThemeTag("".concat(name, "Arrow"), function () {
    return {
      root: _objectSpread({}, iconsStyles, {
        position: 'relative',
        height: '50%',
        cursor: 'pointer',
        userSelect: 'none'
      })
    };
  }),
  _createThemeTag16 = _slicedToArray(_createThemeTag15, 2),
  InputArrowTag = _createThemeTag16[0],
  themeInputArrow = _createThemeTag16[1];
var theme = _objectSpread({}, themeInput, {}, themeClearButton, {}, themeRightIcon, {}, themeLeftIcon, {}, themeIndicator, {}, themeWrapper, {}, themeInputArrows, {}, themeInputArrow);
export { InputWrapperTag, InputTag, InputIndicatorTag, InputRightIconTag, InputLeftIconTag, InputClearButtonTag, InputArrowsTag, InputArrowTag, theme };