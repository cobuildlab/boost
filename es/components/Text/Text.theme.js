import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _mapValues from "lodash/fp/mapValues";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { createThemeTag } from '../../theme/createThemeTag';
var name = 'text';
var _createThemeTag = createThemeTag(name, function (_ref) {
    var COLORS = _ref.COLORS,
      FONTS = _ref.FONTS;
    return {
      root: function root(props) {
        return {
          margin: 0,
          cursor: props.cursor
        };
      },
      modifiers: {
        kind: {
          body: _objectSpread({}, FONTS.BODY_1),
          'overline-1': _objectSpread({}, FONTS.OVERLINE_1),
          'overline-2': _objectSpread({}, FONTS.OVERLINE_2),
          'small-1': _objectSpread({}, FONTS.SMALL_1),
          'small-2': _objectSpread({}, FONTS.SMALL_2),
          subtitle: _objectSpread({}, FONTS.SUBTITLE),
          h1: _objectSpread({}, FONTS.H1),
          h2: _objectSpread({}, FONTS.H2),
          h3: _objectSpread({}, FONTS.H3),
          h4: _objectSpread({}, FONTS.H4),
          h5: _objectSpread({}, FONTS.H5)
        },
        color: _mapValues(function (color) {
          return {
            color: color
          };
        }, COLORS),
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
        },
        disabled: {
          color: COLORS.PRIMARY_TEXT_COLOR
        },
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
        ellipsis: {
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          overflow: 'hidden'
        }
      }
    };
  }),
  _createThemeTag2 = _slicedToArray(_createThemeTag, 2),
  TextTag = _createThemeTag2[0],
  theme = _createThemeTag2[1];
export { theme, TextTag };