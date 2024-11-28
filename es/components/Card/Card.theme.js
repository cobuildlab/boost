import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import { createThemeTag } from '../../theme/createThemeTag';
var offsetSizes = {
  none: '0',
  xs: '4px',
  sm: '12px',
  md: '24px',
  lg: '32px',
  xl: '40px'
};
var offsetModifier = {
  padding: {
    none: {
      padding: offsetSizes.none
    },
    xs: {
      padding: offsetSizes.xs
    },
    sm: {
      padding: offsetSizes.sm
    },
    md: {
      padding: offsetSizes.md
    },
    lg: {
      padding: offsetSizes.lg
    },
    xl: {
      padding: offsetSizes.xl
    }
  }
};

var _createThemeTag = createThemeTag('cardBody', {
  root: function root(props) {
    return {
      overflow: props.scrollable && 'auto'
    };
  },
  modifiers: {
    stretch: {
      display: 'flex',
      flex: 1,
      width: '100%'
    },
    padding: {
      none: {
        padding: '0'
      },
      xs: {
        padding: '4px'
      },
      sm: {
        padding: '12px'
      },
      md: {
        padding: '24px'
      },
      lg: {
        padding: '32px'
      },
      xl: {
        padding: '40px'
      }
    }
  }
}),
    _createThemeTag2 = _slicedToArray(_createThemeTag, 2),
    CardBodyTag = _createThemeTag2[0],
    cardBodyTheme = _createThemeTag2[1];

var _createThemeTag3 = createThemeTag('cardFooter', function (_ref) {
  var COLORS = _ref.COLORS;
  return {
    root: {
      flexShrink: 0,
      borderTop: "1px solid ".concat(COLORS.SECONDARY_BORDER_COLOR)
    },
    modifiers: _objectSpread({}, offsetModifier)
  };
}),
    _createThemeTag4 = _slicedToArray(_createThemeTag3, 2),
    CardFooterTag = _createThemeTag4[0],
    cardFooterTheme = _createThemeTag4[1];

var _createThemeTag5 = createThemeTag('cardSection', function (_ref2) {
  var COLORS = _ref2.COLORS;
  return {
    root: {
      '&:not(:last-child)': {
        borderBottom: "1px solid ".concat(COLORS.SECONDARY_BORDER_COLOR)
      }
    },
    modifiers: _objectSpread({
      hoverable: {
        cursor: 'pointer',
        '&:hover': {
          boxShadow: '0 2px 10px 0 rgba(208, 215, 221, 0.6)'
        }
      },
      stretch: {
        display: 'flex',
        flex: 1,
        width: '100%'
      }
    }, offsetModifier)
  };
}),
    _createThemeTag6 = _slicedToArray(_createThemeTag5, 2),
    CardSectionTag = _createThemeTag6[0],
    cardSectionTheme = _createThemeTag6[1];

var _createThemeTag7 = createThemeTag('cardHeader', function (_ref3) {
  var COLORS = _ref3.COLORS;
  return {
    root: {
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      flexShrink: 0,
      height: '64px',
      borderBottom: "1px solid ".concat(COLORS.SECONDARY_BORDER_COLOR)
    },
    modifiers: {
      padding: {
        none: {
          padding: '0'
        },
        xs: {
          padding: '0 4px'
        },
        sm: {
          padding: '0 12px'
        },
        md: {
          padding: '0 24px'
        },
        lg: {
          padding: '0 32px'
        },
        xl: {
          padding: '0 40px'
        }
      }
    }
  };
}),
    _createThemeTag8 = _slicedToArray(_createThemeTag7, 2),
    CardHeaderTag = _createThemeTag8[0],
    cardHeaderTheme = _createThemeTag8[1];

var theme = _objectSpread({}, cardBodyTheme, {}, cardSectionTheme, {}, cardFooterTheme, {}, cardHeaderTheme);

export { theme, CardBodyTag, CardSectionTag, CardFooterTag, CardHeaderTag };