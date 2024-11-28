import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import { createThemeTag } from '../../theme/createThemeTag';
var name = 'progress';

var _createThemeTag = createThemeTag(name, {
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
  }
}),
    _createThemeTag2 = _slicedToArray(_createThemeTag, 2),
    ProgressTag = _createThemeTag2[0],
    themeProgress = _createThemeTag2[1];

var _createThemeTag3 = createThemeTag("".concat(name, "Body"), {
  root: {
    width: '100%',
    display: 'flex',
    alignItems: 'center'
  }
}),
    _createThemeTag4 = _slicedToArray(_createThemeTag3, 2),
    ProgressBodyTag = _createThemeTag4[0],
    themeBody = _createThemeTag4[1];

var HEIGHT_BY_SIZE = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16
};
var HEIGHT_SEPARATOR_BY_SIZE = {
  xs: 8,
  sm: 12,
  md: 18,
  lg: 20
};
var BORDER_RADIUS_BY_SIZE = {
  xs: 4,
  sm: 4,
  md: 8,
  lg: 12
};

var _createThemeTag5 = createThemeTag("".concat(name, "Inner"), function (_ref) {
  var COLORS = _ref.COLORS;
  return {
    root: function root(_ref2) {
      var size = _ref2.size,
          backgroundColor = _ref2.backgroundColor;
      return {
        position: 'relative',
        zIndex: 1,
        flex: '1',
        height: HEIGHT_BY_SIZE[size],
        background: COLORS[backgroundColor],
        borderRadius: BORDER_RADIUS_BY_SIZE[size]
      };
    }
  };
}),
    _createThemeTag6 = _slicedToArray(_createThemeTag5, 2),
    ProgressInnerTag = _createThemeTag6[0],
    themeInner = _createThemeTag6[1];

var _createThemeTag7 = createThemeTag("".concat(name, "Value"), function (_ref3) {
  var COLORS = _ref3.COLORS;
  return {
    root: function root(_ref4) {
      var size = _ref4.size,
          color = _ref4.color,
          showSeparator = _ref4.showSeparator;
      return {
        height: '100%',
        backgroundColor: COLORS[color],
        borderRadius: BORDER_RADIUS_BY_SIZE[size],
        borderTopRightRadius: showSeparator ? 0 : BORDER_RADIUS_BY_SIZE[size],
        borderBottomRightRadius: showSeparator ? 0 : BORDER_RADIUS_BY_SIZE[size]
      };
    }
  };
}),
    _createThemeTag8 = _slicedToArray(_createThemeTag7, 2),
    ProgressValueTag = _createThemeTag8[0],
    themeValue = _createThemeTag8[1];

var _createThemeTag9 = createThemeTag("".concat(name, "Separator"), function (_ref5) {
  var COLORS = _ref5.COLORS;
  return {
    root: function root(_ref6) {
      var size = _ref6.size;
      return {
        position: 'absolute',
        width: '2px',
        borderRadius: '1px',
        backgroundColor: COLORS.GRAY_30,
        height: HEIGHT_SEPARATOR_BY_SIZE[size],
        top: '50%',
        transform: 'translate(-50%, -50%)'
      };
    }
  };
}),
    _createThemeTag10 = _slicedToArray(_createThemeTag9, 2),
    ProgressSeparatorTag = _createThemeTag10[0],
    themeSeparator = _createThemeTag10[1];

var _createThemeTag11 = createThemeTag("".concat(name, "Text"), function (_ref7) {
  var FONTS = _ref7.FONTS;
  return {
    root: _objectSpread({
      marginLeft: '20px',
      minWidth: '40px'
    }, FONTS.BODY_3)
  };
}),
    _createThemeTag12 = _slicedToArray(_createThemeTag11, 2),
    ProgressTextTag = _createThemeTag12[0],
    themeText = _createThemeTag12[1];

var _createThemeTag13 = createThemeTag("".concat(name, "Label"), function (_ref8) {
  var FONTS = _ref8.FONTS;
  return {
    root: _objectSpread({}, FONTS.BODY_3)
  };
}),
    _createThemeTag14 = _slicedToArray(_createThemeTag13, 2),
    ProgressLabelTag = _createThemeTag14[0],
    themeLabel = _createThemeTag14[1];

var _createThemeTag15 = createThemeTag("".concat(name, "Description"), function (_ref9) {
  var FONTS = _ref9.FONTS;
  return {
    root: _objectSpread({}, FONTS.BODY_3)
  };
}),
    _createThemeTag16 = _slicedToArray(_createThemeTag15, 2),
    ProgressDescriptionTag = _createThemeTag16[0],
    themeDescription = _createThemeTag16[1];

var theme = _objectSpread({}, themeProgress, {}, themeBody, {}, themeInner, {}, themeValue, {}, themeSeparator, {}, themeText, {}, themeLabel, {}, themeDescription);

export { theme, ProgressTag, ProgressBodyTag, ProgressInnerTag, ProgressValueTag, ProgressSeparatorTag, ProgressTextTag, ProgressLabelTag, ProgressDescriptionTag };