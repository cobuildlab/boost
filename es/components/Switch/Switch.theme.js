import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { createThemeTag } from '../../theme/createThemeTag';
var name = 'switch';
var _createThemeTag = createThemeTag(name, {
    root: {
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
      height: '36px'
    },
    modifiers: {
      inverted: {
        flexDirection: 'row-reverse'
      }
    }
  }),
  _createThemeTag2 = _slicedToArray(_createThemeTag, 2),
  SwitchTag = _createThemeTag2[0],
  themeSwitch = _createThemeTag2[1];
var _createThemeTag3 = createThemeTag("".concat(name, "Input"), {
    root: {
      display: 'none'
    }
  }),
  _createThemeTag4 = _slicedToArray(_createThemeTag3, 2),
  SwitchInputTag = _createThemeTag4[0],
  themeInput = _createThemeTag4[1];
var _createThemeTag5 = createThemeTag("".concat(name, "Appearance"), function (_ref) {
    var COLORS = _ref.COLORS;
    return {
      root: function root(props) {
        return {
          display: 'flex',
          backgroundColor: COLORS[props.value ? 'PRIMARY' : 'GRAY_30'],
          position: 'relative',
          height: '24px',
          width: '48px',
          flexShrink: 0,
          borderRadius: '24px',
          '&:before': {
            content: '\'\'',
            position: 'absolute',
            width: '20px',
            height: '20px',
            borderRadius: '20px',
            backgroundColor: COLORS.WHITE,
            left: "".concat(props.value ? 26 : 2, "px"),
            top: '2px',
            zIndex: 1,
            transition: '.4s'
          }
        };
      }
    };
  }),
  _createThemeTag6 = _slicedToArray(_createThemeTag5, 2),
  SwitchApperanceTag = _createThemeTag6[0],
  themeApperance = _createThemeTag6[1];
var _createThemeTag7 = createThemeTag("".concat(name, "Label"), function (_ref2) {
    var COLORS = _ref2.COLORS;
    return {
      root: {
        color: COLORS.SECONDARY_TEXT_COLOR,
        marginLeft: '8px',
        userSelect: 'none'
      },
      modifiers: {
        inverted: {
          marginRight: '8px',
          marginLeft: 0
        }
      }
    };
  }),
  _createThemeTag8 = _slicedToArray(_createThemeTag7, 2),
  SwitchLabelTag = _createThemeTag8[0],
  themeLabel = _createThemeTag8[1];
var theme = _objectSpread({}, themeInput, {}, themeSwitch, {}, themeApperance, {}, themeLabel);
export { theme, SwitchTag, SwitchInputTag, SwitchApperanceTag, SwitchLabelTag };