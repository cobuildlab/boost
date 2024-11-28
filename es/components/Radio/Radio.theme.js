import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import { createThemeTag } from '../../theme/createThemeTag';
var name = 'radio';

var _createThemeTag = createThemeTag("".concat(name, "Circle"), function (_ref) {
  var COLORS = _ref.COLORS;
  return {
    root: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      width: '16px',
      height: '16px',
      borderRadius: '50%',
      transition: 'opacity .3s ease',
      background: COLORS.WHITE,
      border: "1px solid ".concat(COLORS.PRIMARY_BORDER_COLOR),
      '&:hover': {
        boxShadow: '0 1px 2px 0 rgba(50,50,93,0.14), 0 3px 4px 0 rgba(112,157,199,0.08)'
      },
      'input:focus + &': {
        boxShadow: 'inset 0 1px 2px 0 rgba(50,50,93,0.14), inset 0 3px 4px 0 rgba(112,157,199,0.08)'
      },
      'input:active + &': {
        boxShadow: 'inset 0 1px 2px 0 rgba(50,50,93,0.14), inset 0 3px 4px 0 rgba(112,157,199,0.08)'
      }
    },
    modifiers: {
      hasError: {
        borderColor: COLORS.DANGER
      },
      disabled: {
        backgroundColor: COLORS.GRAY_10
      }
    }
  };
}),
    _createThemeTag2 = _slicedToArray(_createThemeTag, 2),
    RadioCircleTag = _createThemeTag2[0],
    themeCircle = _createThemeTag2[1];

var _createThemeTag3 = createThemeTag("".concat(name, "CircleInner"), function (_ref2) {
  var COLORS = _ref2.COLORS;
  return {
    root: function root(props) {
      return {
        display: 'block',
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginLeft: '-4px',
        marginTop: '-4px',
        width: '8px',
        height: '8px',
        borderRadius: '50%',
        opacity: props.checked ? 1 : 0
      };
    },
    modifiers: {
      color: {
        primary: {
          backgroundColor: COLORS.PRIMARY
        },
        secondary: {
          backgroundColor: COLORS.SECONDARY
        }
      },
      disabled: {
        backgroundColor: COLORS.GRAY_50
      }
    }
  };
}),
    _createThemeTag4 = _slicedToArray(_createThemeTag3, 2),
    RadioCircleInnerTag = _createThemeTag4[0],
    themeCircleInner = _createThemeTag4[1];

var _createThemeTag5 = createThemeTag("".concat(name, "Text"), function (_ref3) {
  var FONTS = _ref3.FONTS;
  return {
    root: _objectSpread({}, FONTS.BODY_2, {
      cursor: 'pointer',
      paddingLeft: '8px',
      flex: 1
    })
  };
}),
    _createThemeTag6 = _slicedToArray(_createThemeTag5, 2),
    RadioTextTag = _createThemeTag6[0],
    themeText = _createThemeTag6[1];

var _createThemeTag7 = createThemeTag("".concat(name, "Wrapper"), {
  root: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer'
  }
}),
    _createThemeTag8 = _slicedToArray(_createThemeTag7, 2),
    RadioWrapperTag = _createThemeTag8[0],
    themeRadioWrapper = _createThemeTag8[1];

var _createThemeTag9 = createThemeTag("".concat(name, "Button"), {
  root: {
    flex: 1,
    '&:first-of-type > *': {
      borderRightStyle: 'unset',
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0
    },
    '&:last-child > *': {
      borderLeftStyle: 'unset',
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0
    },
    '&:not(:first-of-type):not(:last-child) > *': {
      borderRadius: 0
    }
  }
}),
    _createThemeTag10 = _slicedToArray(_createThemeTag9, 2),
    RadioButtonTag = _createThemeTag10[0],
    themeRadioButton = _createThemeTag10[1];

var _createThemeTag11 = createThemeTag(name, {
  root: {
    opacity: 0,
    position: 'absolute'
  }
}),
    _createThemeTag12 = _slicedToArray(_createThemeTag11, 2),
    RadioTag = _createThemeTag12[0],
    themeRadio = _createThemeTag12[1];

var theme = _objectSpread({}, themeCircle, {}, themeCircleInner, {}, themeText, {}, themeRadioWrapper, {}, themeRadioButton, {}, themeRadio);

export { theme, RadioCircleTag, RadioTag, RadioWrapperTag, RadioCircleInnerTag, RadioButtonTag, RadioTextTag };