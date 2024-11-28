import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
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