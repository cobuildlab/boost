import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import { createThemeTag } from '../../theme/createThemeTag';
var name = 'logs';

var _createThemeTag = createThemeTag(name, {
  root: {
    overflowX: 'auto',
    backgroundColor: '#1C252E'
  },
  modifiers: {
    stretch: {
      height: '100%',
      width: '100%'
    }
  }
}),
    _createThemeTag2 = _slicedToArray(_createThemeTag, 2),
    LogsContainerTag = _createThemeTag2[0],
    themeLogsContainer = _createThemeTag2[1];

var _createThemeTag3 = createThemeTag("".concat(name, "Wrapper"), function (_ref) {
  var COLORS = _ref.COLORS;
  return {
    root: {
      fontFamily: 'Courier',
      color: COLORS.WHITE,
      fontSize: '1.4rem',
      lineHeight: 2,
      backgroundColor: '#1C252E',
      padding: '0 24px',
      cursor: 'default',
      '&:first-of-type': {
        paddingTop: '24px'
      },
      '&:last-child': {
        paddingBottom: '24px'
      },
      '&:hover': {
        backgroundColor: '#202D3B'
      }
    }
  };
}),
    _createThemeTag4 = _slicedToArray(_createThemeTag3, 2),
    LogMessageTag = _createThemeTag4[0],
    themeLogMessage = _createThemeTag4[1];

var theme = _objectSpread({}, themeLogsContainer, {}, themeLogMessage);

export { LogsContainerTag, LogMessageTag, theme };