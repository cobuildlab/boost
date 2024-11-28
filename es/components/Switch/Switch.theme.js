import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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