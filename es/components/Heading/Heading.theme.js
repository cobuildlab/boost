import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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