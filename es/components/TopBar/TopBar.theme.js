import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
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