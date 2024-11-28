import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import { createThemeTag } from '../../theme/createThemeTag';
var name = 'topBar';

var _createThemeTag = createThemeTag(name, function (_ref) {
  var COLORS = _ref.COLORS;
  return {
    root: function root(props) {
      return {
        width: '100%',
        minHeight: '52px',
        padding: '8px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: COLORS[props.color],
        position: 'relative'
      };
    }
  };
}),
    _createThemeTag2 = _slicedToArray(_createThemeTag, 2),
    TopBarTag = _createThemeTag2[0],
    themeTopBar = _createThemeTag2[1];

var _createThemeTag3 = createThemeTag("".concat(name, "Close"), function () {
  return {
    root: {
      position: 'absolute',
      right: 24,
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
      marginRight: '0 !important'
    }
  };
}),
    _createThemeTag4 = _slicedToArray(_createThemeTag3, 2),
    TopBarCloseTag = _createThemeTag4[0],
    themeTopBarClose = _createThemeTag4[1];

var theme = _objectSpread({}, themeTopBar, {}, themeTopBarClose);

export { theme, TopBarTag, TopBarCloseTag };