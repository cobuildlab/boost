import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _mapValues from "lodash/fp/mapValues";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { createThemeTag } from '../../theme/createThemeTag';
import { hexToRGBA } from './Tag.utils';
var name = 'tag';
var _createThemeTag = createThemeTag(name, function (_ref) {
    var COLORS = _ref.COLORS,
      FONTS = _ref.FONTS;
    return {
      root: _objectSpread({
        margin: 0,
        height: '24px',
        padding: '0 12px',
        borderRadius: '24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        whiteSpace: 'nowrap',
        border: '1px solid'
      }, FONTS.OVERLINE_1),
      modifiers: {
        color: _mapValues(function (color) {
          return typeof color === 'string' ? {
            backgroundColor: hexToRGBA(color, 10),
            borderColor: hexToRGBA(color, 40),
            color: color
          } : null;
        }, COLORS),
        condensed: {
          borderRadius: '5px',
          height: '16px',
          fontSize: 10,
          lineHeight: 12,
          textTransform: 'uppercase'
        }
      }
    };
  }),
  _createThemeTag2 = _slicedToArray(_createThemeTag, 2),
  TagOuter = _createThemeTag2[0],
  themeOuter = _createThemeTag2[1];
var _createThemeTag3 = createThemeTag("".concat(name, "Inner"), function () {
    return {
      root: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }
    };
  }),
  _createThemeTag4 = _slicedToArray(_createThemeTag3, 2),
  TagInner = _createThemeTag4[0],
  themeInner = _createThemeTag4[1];
var theme = _objectSpread({}, themeOuter, {}, themeInner);
export { TagOuter, TagInner, theme };