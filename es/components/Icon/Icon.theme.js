import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _mapValues from "lodash/fp/mapValues";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { createThemeTag } from '../../theme/createThemeTag';
var name = 'icon';
var _createThemeTag = createThemeTag("".concat(name, "Wrapper"), function (_ref) {
    var COLORS = _ref.COLORS;
    return {
      root: function root(props) {
        return {
          display: 'inline-flex',
          lineHeight: 1,
          cursor: props.cursor
        };
      },
      modifiers: {
        color: _objectSpread({}, _mapValues(function (color) {
          return {
            color: color
          };
        }, COLORS)),
        size: {
          stretch: {
            height: '100%',
            width: '100%'
          }
        }
      }
    };
  }),
  _createThemeTag2 = _slicedToArray(_createThemeTag, 2),
  IconWrapperTag = _createThemeTag2[0],
  themeWrapper = _createThemeTag2[1];
var _createThemeTag3 = createThemeTag("".concat(name, "Svg"), {
    root: {
      '& > svg': {
        height: '100%',
        width: '100%'
      }
    },
    modifiers: function modifiers(props) {
      return {
        size: {
          xs: {
            width: '12px',
            height: '12px'
          },
          sm: {
            width: '18px',
            height: '18px'
          },
          md: {
            width: '24px',
            height: '24px'
          },
          lg: {
            width: '36px',
            height: '36px'
          },
          xl: {
            width: '48px',
            height: '48px'
          },
          stretch: {
            height: '100%',
            width: '100%'
          },
          custom: {
            height: props.customSize,
            width: props.customSize
          }
        }
      };
    }
  }),
  _createThemeTag4 = _slicedToArray(_createThemeTag3, 2),
  IconSvgTag = _createThemeTag4[0],
  themeSvg = _createThemeTag4[1];
var _createThemeTag5 = createThemeTag("".concat(name, "Font"), {
    modifiers: {
      size: {
        xs: {
          fontSize: '12px'
        },
        sm: {
          fontSize: '18px'
        },
        md: {
          fontSize: '24px'
        },
        lg: {
          fontSize: '36px'
        },
        xl: {
          fontSize: '48px'
        }
      }
    }
  }),
  _createThemeTag6 = _slicedToArray(_createThemeTag5, 2),
  IconFontTag = _createThemeTag6[0],
  themeFonts = _createThemeTag6[1];
var theme = _objectSpread({}, themeWrapper, {}, themeFonts, {}, themeSvg);
export { theme, IconWrapperTag, IconSvgTag, IconFontTag };