import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import { createThemeTag } from '../../theme/createThemeTag';
var name = 'divider';

var _createThemeTag = createThemeTag(name, function () {
  return {
    root: function root(props) {
      return {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'stretch',
        marginTop: props.noOffset ? '0' : '24px',
        marginBottom: props.noOffset ? '0' : '24px',
        height: '18px'
      };
    }
  };
}),
    _createThemeTag2 = _slicedToArray(_createThemeTag, 2),
    DividerOuter = _createThemeTag2[0],
    themeOuter = _createThemeTag2[1];

var _createThemeTag3 = createThemeTag("".concat(name, "Inner"), function (_ref) {
  var COLORS = _ref.COLORS;
  return {
    root: {
      height: '1px',
      backgroundColor: COLORS.PRIMARY_BORDER_COLOR,
      width: '100%'
    }
  };
}),
    _createThemeTag4 = _slicedToArray(_createThemeTag3, 2),
    DividerInner = _createThemeTag4[0],
    themeInner = _createThemeTag4[1];

var _createThemeTag5 = createThemeTag("".concat(name, "Title"), function (_ref2) {
  var FONTS = _ref2.FONTS;
  return {
    root: _objectSpread({
      fontFamily: 'inherit'
    }, FONTS.OVERLINE_2, {
      whiteSpace: 'nowrap',
      flexGrow: 2,
      marginRight: '8px',
      marginLeft: '8px'
    })
  };
}),
    _createThemeTag6 = _slicedToArray(_createThemeTag5, 2),
    DividerTitle = _createThemeTag6[0],
    themeTitle = _createThemeTag6[1];

var theme = _objectSpread({}, themeOuter, {}, themeInner, {}, themeTitle);

export { DividerOuter, DividerInner, DividerTitle, theme };