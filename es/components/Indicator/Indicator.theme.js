import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import { createThemeTag } from '../../theme/createThemeTag';
var name = 'indicator';

var _createThemeTag = createThemeTag("".concat(name, "Container"), function () {
  return {
    root: {
      display: 'flex',
      alignItems: 'center'
    }
  };
}),
    _createThemeTag2 = _slicedToArray(_createThemeTag, 2),
    IndicatorContainerTag = _createThemeTag2[0],
    themeContainer = _createThemeTag2[1];

var _createThemeTag3 = createThemeTag(name, function (_ref) {
  var COLORS = _ref.COLORS;
  return {
    root: {
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      marginRight: '8px'
    },
    modifiers: {
      status: {
        enabled: {
          backgroundColor: COLORS.GREEN_40
        },
        disabled: {
          backgroundColor: COLORS.GRAY_30
        }
      }
    }
  };
}),
    _createThemeTag4 = _slicedToArray(_createThemeTag3, 2),
    IndicatorTag = _createThemeTag4[0],
    themeIndicator = _createThemeTag4[1];

var theme = _objectSpread({}, themeContainer, {}, themeIndicator);

export { IndicatorContainerTag, IndicatorTag, theme };