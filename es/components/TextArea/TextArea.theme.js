import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import { createThemeTag } from '../../theme/createThemeTag';
var name = 'textArea';

var _createThemeTag = createThemeTag(name, function (_ref) {
  var COLORS = _ref.COLORS,
      SIZES = _ref.SIZES,
      FONTS = _ref.FONTS;
  return {
    root: function root(props) {
      return _objectSpread({
        outline: 'none',
        fontFamily: '\'Poppins\', sans-serif !important',
        border: "1px solid ".concat(COLORS.PRIMARY_BORDER_COLOR),
        borderRadius: SIZES.MAIN_BORDER_RADIUS,
        padding: '8px'
      }, FONTS.BODY_1, {
        backgroundColor: props.disabled || props.readOnly ? COLORS.DISABLED_COLOR : COLORS.WHITE,
        '&::placeholder': {
          color: COLORS.PLACEHOLDER_COLOR
        }
      });
    },
    modifiers: {
      stretch: {
        height: '100%',
        width: '100%'
      },
      hasError: {
        borderColor: "".concat(COLORS.DANGER)
      }
    }
  };
}),
    _createThemeTag2 = _slicedToArray(_createThemeTag, 2),
    TextAreaTag = _createThemeTag2[0],
    theme = _createThemeTag2[1];

export { theme, TextAreaTag };