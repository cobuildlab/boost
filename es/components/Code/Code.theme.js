import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import { createThemeTag } from '../../theme/createThemeTag';
var name = 'code';

var _createThemeTag = createThemeTag("".concat(name, "Wrapper"), function (_ref) {
  var COLORS = _ref.COLORS,
      SIZES = _ref.SIZES;
  return {
    root: function root(props) {
      return {
        border: "1px solid ".concat(COLORS.PRIMARY_BORDER_COLOR),
        borderRadius: SIZES.MAIN_BORDER_RADIUS,
        height: props.height ? "".concat(props.height, "px") : '100%',
        overflow: 'hidden'
      };
    }
  };
}),
    _createThemeTag2 = _slicedToArray(_createThemeTag, 2),
    CodeWrapperTag = _createThemeTag2[0],
    themeWrapper = _createThemeTag2[1];

var _createThemeTag3 = createThemeTag("".concat(name, "Counter"), function (_ref2) {
  var FONTS = _ref2.FONTS;
  return {
    root: _objectSpread({}, FONTS.BODY_1, {
      fontFamily: 'Courier',
      opacity: '0.5',
      textAlign: 'center',
      lineHeight: 2
    })
  };
}),
    _createThemeTag4 = _slicedToArray(_createThemeTag3, 2),
    CodeLineCounterTag = _createThemeTag4[0],
    themeCounter = _createThemeTag4[1];

var _createThemeTag5 = createThemeTag("".concat(name, "Body"), function (_ref3) {
  var COLORS = _ref3.COLORS;
  return {
    root: {
      color: COLORS.PRIMARY_TEXT_COLOR,
      fontFamily: 'Courier',
      overflow: 'auto',
      height: '100%',
      padding: '20px',
      lineHeight: 2
    }
  };
}),
    _createThemeTag6 = _slicedToArray(_createThemeTag5, 2),
    CodeBodyTag = _createThemeTag6[0],
    themeBody = _createThemeTag6[1];

var _createThemeTag7 = createThemeTag("".concat(name, "Numeric"), function (_ref4) {
  var COLORS = _ref4.COLORS,
      SIZES = _ref4.SIZES;
  return {
    root: function root(props) {
      return {
        height: props.height ? 'auto' : '100%',
        backgroundColor: COLORS.GRAY_10,
        borderRight: "1px solid ".concat(COLORS.PRIMARY_BORDER_COLOR),
        padding: '20px 0 40px',
        borderTopLeftRadius: SIZES.MAIN_BORDER_RADIUS,
        borderBottomLeftRadius: SIZES.MAIN_BORDER_RADIUS
      };
    }
  };
}),
    _createThemeTag8 = _slicedToArray(_createThemeTag7, 2),
    CodeNumericTag = _createThemeTag8[0],
    themeNumeric = _createThemeTag8[1];

var _createThemeTag9 = createThemeTag("".concat(name, "Plate"), {
  root: {
    display: 'flex',
    width: '100%',
    overflow: 'hidden',
    alignItems: 'stretch',
    position: 'relative'
  }
}),
    _createThemeTag10 = _slicedToArray(_createThemeTag9, 2),
    CodePlateTag = _createThemeTag10[0],
    themePlate = _createThemeTag10[1];

var _createThemeTag11 = createThemeTag("".concat(name, "NumberWrapper"), {
  root: function root(props) {
    return {
      height: props.height ? "".concat(props.height, "px") : 'auto',
      display: 'block',
      width: '32px',
      flexShrink: 0,
      position: 'relative'
    };
  }
}),
    _createThemeTag12 = _slicedToArray(_createThemeTag11, 2),
    CodeNumberWrapperTag = _createThemeTag12[0],
    themeNumberWrapper = _createThemeTag12[1];

var _createThemeTag13 = createThemeTag("".concat(name, "NumberPlate"), {
  root: {
    height: '100%',
    display: 'block',
    position: 'absolute',
    overflow: 'hidden',
    width: '32px'
  }
}),
    _createThemeTag14 = _slicedToArray(_createThemeTag13, 2),
    CodeNumberPlateTag = _createThemeTag14[0],
    themeNumberPlate = _createThemeTag14[1];

var _createThemeTag15 = createThemeTag("".concat(name, "BodyWrapper"), {
  root: function root(props) {
    return {
      overflow: 'hidden',
      height: props.height ? "".concat(props.height, "px") : '100%',
      width: '100%'
    };
  }
}),
    _createThemeTag16 = _slicedToArray(_createThemeTag15, 2),
    CodeBodyWrapperTag = _createThemeTag16[0],
    themeBodyWrapper = _createThemeTag16[1];

var _createThemeTag17 = createThemeTag("".concat(name, "CopyButtonWrapper"), {
  root: {
    position: 'absolute',
    top: '10px',
    right: '32px'
  }
}),
    _createThemeTag18 = _slicedToArray(_createThemeTag17, 2),
    CodeCopyButtonWrapper = _createThemeTag18[0],
    themeCopyButtonWrapper = _createThemeTag18[1];

var theme = _objectSpread({}, themeBodyWrapper, {}, themeNumberWrapper, {}, themeNumberPlate, {}, themePlate, {}, themeWrapper, {}, themeCounter, {}, themeBody, {}, themeNumeric, {}, themeCopyButtonWrapper);

export { theme, CodeBodyTag, CodeWrapperTag, CodeNumericTag, CodePlateTag, CodeLineCounterTag, CodeBodyWrapperTag, CodeNumberWrapperTag, CodeNumberPlateTag, CodeCopyButtonWrapper };