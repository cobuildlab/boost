import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
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