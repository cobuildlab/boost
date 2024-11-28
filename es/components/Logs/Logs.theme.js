import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
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