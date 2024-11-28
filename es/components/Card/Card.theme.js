import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
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