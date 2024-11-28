import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _mapValues from "lodash/fp/mapValues";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import { createThemeTag } from '../../theme/createThemeTag';
var name = 'link';

var _createThemeTag = createThemeTag(name, function (_ref) {
  var COLORS = _ref.COLORS,
      FONTS = _ref.FONTS;
  return {
    root: function root(props) {
      return _objectSpread({
        cursor: 'pointer'
      }, FONTS.LINK, {
        fontSize: 'inherit',
        textDecoration: 'none',
        '&:hover': {
          textDecoration: 'underline'
        }
      }, props.color === 'BLUE_30' || props.color === 'BLUE' || props.color === 'PRIMARY' ? {
        '&:active': {
          color: COLORS.BLUE_10
        }
      } : {});
    },
    modifiers: {
      color: _mapValues(function (color) {
        return {
          color: color
        };
      }, COLORS),
      underline: {
        textDecoration: 'underline'
      }
    }
  };
}),
    _createThemeTag2 = _slicedToArray(_createThemeTag, 2),
    LinkTag = _createThemeTag2[0],
    theme = _createThemeTag2[1];

export { LinkTag, theme };