import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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