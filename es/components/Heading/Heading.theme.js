import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { createThemeTag } from '../../theme/createThemeTag';
var name = 'heading';
var _createThemeTag = createThemeTag(name, function (_ref) {
    var FONTS = _ref.FONTS;
    return {
      root: {
        margin: 0
      },
      modifiers: {
        type: {
          h1: _objectSpread({}, FONTS.H1),
          h2: _objectSpread({}, FONTS.H2),
          h3: _objectSpread({}, FONTS.H3),
          h4: _objectSpread({}, FONTS.H4),
          h5: _objectSpread({}, FONTS.H5)
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
  HeadingTag = _createThemeTag2[0],
  theme = _createThemeTag2[1];
export { HeadingTag, theme };