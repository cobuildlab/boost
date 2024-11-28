import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _mapValues from "lodash/fp/mapValues";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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