import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import { createThemeTag } from '../../theme/createThemeTag';
var name = 'tab';

var _createThemeTag = createThemeTag(name, function (_ref) {
  var FONTS = _ref.FONTS;
  return {
    root: _objectSpread({
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '32px',
      padding: '6px 12px',
      borderRadius: '5px 5px 0 0',
      backgroundColor: '#FFFFFF',
      cursor: 'pointer'
    }, FONTS.SUBTITLE, {
      '&:not(.active)': {
        opacity: 0.7,
        borderRadius: '5px 5px 0 0'
      }
    })
  };
}),
    _createThemeTag2 = _slicedToArray(_createThemeTag, 2),
    TabOuter = _createThemeTag2[0],
    themeTabOuter = _createThemeTag2[1];

var theme = _objectSpread({}, themeTabOuter);

export { TabOuter, theme };