import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _mapValues from "lodash/fp/mapValues";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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