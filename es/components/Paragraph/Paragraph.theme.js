import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _mapValues from "lodash/fp/mapValues";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { createThemeTag } from '../../theme/createThemeTag';
var name = 'paragraph';
var _createThemeTag = createThemeTag(name, function (_ref) {
    var COLORS = _ref.COLORS,
      FONTS = _ref.FONTS;
    return {
      root: function root(props) {
        return _objectSpread({}, FONTS.BODY_1, {
          margin: 0,
          '& > *': {
            verticalAlign: props.verticalAlign
          }
        });
      },
      modifiers: {
        color: _mapValues(function (color) {
          return {
            color: color
          };
        }, COLORS),
        weight: {
          light: {
            fontWeight: 300
          },
          normal: {
            fontWeight: 400
          },
          medium: {
            fontWeight: 500
          },
          semibold: {
            fontWeight: 600
          },
          bold: {
            fontWeight: 700
          }
        },
        align: {
          left: {
            textAlign: 'left'
          },
          right: {
            textAlign: 'right'
          },
          center: {
            textAlign: 'center'
          }
        }
      }
    };
  }),
  _createThemeTag2 = _slicedToArray(_createThemeTag, 2),
  ParagraphTag = _createThemeTag2[0],
  theme = _createThemeTag2[1];
export { ParagraphTag, theme };