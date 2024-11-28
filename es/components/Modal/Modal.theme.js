import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { createThemeTag } from '../../theme/createThemeTag';
var name = 'modal';
var _createThemeTag = createThemeTag("".concat(name, "Overlay"), function (_ref) {
    var Z_INDEX = _ref.Z_INDEX;
    return {
      root: {
        alignItems: 'center',
        bottom: 0,
        display: 'flex',
        justifyContent: 'center',
        left: 0,
        position: 'fixed',
        right: 0,
        top: 0,
        background: 'rgba(60, 87, 118, 0.6)',
        zIndex: Z_INDEX.MODAL
      }
    };
  }),
  _createThemeTag2 = _slicedToArray(_createThemeTag, 2),
  OverlayTag = _createThemeTag2[0],
  themeOverlay = _createThemeTag2[1];
var _createThemeTag3 = createThemeTag(name, {
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    },
    modifiers: {
      stretch: {
        height: '100%'
      }
    }
  }),
  _createThemeTag4 = _slicedToArray(_createThemeTag3, 2),
  ModalTag = _createThemeTag4[0],
  themeModal = _createThemeTag4[1];
var theme = _objectSpread({}, themeOverlay, {}, themeModal);
export { ModalTag, OverlayTag, theme };