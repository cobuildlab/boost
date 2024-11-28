import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
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