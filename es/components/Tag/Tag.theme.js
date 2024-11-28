import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _mapValues from "lodash/fp/mapValues";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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