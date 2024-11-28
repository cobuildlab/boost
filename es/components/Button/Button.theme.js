import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  from { transform: rotate(0deg)   }\n  to   { transform: rotate(360deg) }\n"]);
  _templateObject = function _templateObject() {
    return data;
  };
  return data;
}
import { keyframes } from '@emotion/react';
import { createThemeTag } from '../../theme/createThemeTag';
var BUTTON_HEIGHT_BY_SIZE = {
  sm: '36px',
  md: '40px',
  lg: '52px'
};
var name = 'button';
var spinner = keyframes(_templateObject());
var getLoading = function getLoading(props, COLORS) {
  var color = COLORS.WHITE;
  if (props.color === 'warning') {
    color = COLORS.GRAY_60;
  }
  if (props.color === 'neutral') {
    color = COLORS.PRIMARY_BORDER_COLOR;
  }
  if (props.variant === 'ghost' || props.variant === 'outlined') {
    color = COLORS.PRIMARY_BORDER_COLOR;
  }
  return props.loading ? {
    '&:after': {
      content: '""',
      position: 'absolute',
      left: '50%',
      right: '50%',
      top: '50%',
      bottom: '50%',
      width: '20px',
      height: '20px',
      marginLeft: '-10px',
      marginTop: '-10px',
      border: "4px solid ".concat(color),
      borderTopColor: 'transparent',
      borderRadius: '50%',
      animation: "".concat(spinner, " .7s infinite linear")
    }
  } : {};
};
var getSquaredStyle = function getSquaredStyle(props) {
  if (props.squared && props.size) {
    return {
      width: BUTTON_HEIGHT_BY_SIZE[props.size],
      minWidth: BUTTON_HEIGHT_BY_SIZE[props.size],
      height: BUTTON_HEIGHT_BY_SIZE[props.size]
    };
  }
  return {};
};
var boxShadowHover = '0 2px 4px 0 rgba(50,50,93,0.2)';
var boxShadowFocus = 'inset 0 1px 3px 0 rgba(50,50,93,0.14), inset 0 4px 6px 0 rgba(51,80,107,0.08)';
var getLinkStyles = function getLinkStyles(props) {
  if (props.variant === 'link') {
    return {
      backgroundColor: 'transparent',
      border: 'none',
      padding: '0 !important',
      height: 'auto !important'
    };
  }
  return {};
};
var getSizeStyles = function getSizeStyles(props) {
  if (props.variant === 'link') {
    switch (props.size) {
      case 'sm':
        return {
          fontSize: '1.2rem',
          lineHeight: '1.4rem',
          fontWeight: '400'
        };
      case 'lg':
      case 'md':
      default:
        return {};
    }
  }
  switch (props.size) {
    case 'sm':
      return {
        height: BUTTON_HEIGHT_BY_SIZE.sm,
        padding: '0 20px'
      };
    case 'lg':
      return {
        height: BUTTON_HEIGHT_BY_SIZE.lg,
        padding: '0 48px'
      };
    case 'md':
    default:
      return {
        height: BUTTON_HEIGHT_BY_SIZE.md,
        padding: '0 32px'
      };
  }
};
var getKindStyles = function getKindStyles(props, COLORS) {
  switch (props.variant) {
    case 'ghost':
      {
        return {
          color: COLORS.WHITE,
          backgroundColor: 'transparent',
          '&:hover': {
            boxShadow: boxShadowHover
          },
          '&:active': {
            boxShadow: boxShadowFocus
          }
        };
      }
    case 'link':
      if (props.disabled) {
        return {
          color: COLORS.DISABLED_TEXT_COLOR,
          cursor: 'not-allowed',
          svg: {
            color: COLORS.GRAY_30
          }
        };
      }
      if (props.color === 'primary') {
        return {
          color: COLORS.PRIMARY,
          '&:hover': {
            color: COLORS.PRIMARY_LIGHT
          },
          '&:active': {
            color: COLORS.PRIMARY_LIGHTER
          }
        };
      } else if (props.color === 'danger') {
        return {
          color: COLORS.DANGER_DARK,
          '&:hover': {
            color: COLORS.DANGER
          },
          '&:active': {
            color: COLORS.DANGER_LIGHT
          }
        };
      } else if (props.color === 'success') {
        return {
          color: COLORS.SUCCESS_DARK
        };
      } else if (props.color === 'neutral') {
        return {
          color: COLORS.GRAY_60,
          '&:hover': {
            color: COLORS.GRAY_50
          },
          '&:active': {
            color: COLORS.GRAY_40
          }
        };
      }
      break;
    case 'outlined':
      if (props.disabled) {
        return {
          backgroundColor: COLORS.GRAY_20,
          borderColor: COLORS.GRAY_30,
          color: COLORS.DISABLED_TEXT_COLOR,
          cursor: 'not-allowed',
          svg: {
            color: COLORS.GRAY_30
          },
          '&:hover': {
            boxShadow: 'none'
          }
        };
      }
      if (props.color === 'primary') {
        return {
          backgroundColor: COLORS.WHITE,
          borderColor: COLORS.PRIMARY,
          '&:hover': {
            borderColor: COLORS.PRIMARY_LIGHT,
            boxShadow: boxShadowHover
          },
          '&:active': {
            borderColor: COLORS.PRIMARY_LIGHTER,
            boxShadow: boxShadowFocus
          }
        };
      } else if (props.color === 'danger') {
        return {
          backgroundColor: COLORS.WHITE,
          borderColor: COLORS.DANGER_DARK,
          '&:hover': {
            borderColor: COLORS.DANGER,
            boxShadow: boxShadowHover
          },
          '&:active': {
            borderColor: COLORS.DANGER_LIGHT,
            boxShadow: boxShadowFocus
          }
        };
      } else if (props.color === 'warning') {
        return {
          backgroundColor: COLORS.WHITE,
          borderColor: COLORS.WARNING,
          '&:hover': {
            borderColor: COLORS.WARNING_LIGHT,
            boxShadow: boxShadowHover
          },
          '&:active': {
            borderColor: COLORS.WARNING_LIGHTER,
            boxShadow: boxShadowFocus
          }
        };
      } else if (props.color === 'success') {
        return {
          backgroundColor: COLORS.WHITE,
          borderColor: COLORS.SUCCESS,
          '&:hover': {
            borderColor: COLORS.SUCCESS_LIGHT,
            boxShadow: boxShadowHover
          },
          '&:active': {
            borderColor: COLORS.GREEN_10,
            boxShadow: boxShadowFocus
          }
        };
      } else if (props.color === 'neutral') {
        return {
          backgroundColor: COLORS.WHITE,
          borderColor: COLORS.PRIMARY_BORDER_COLOR,
          '&:hover': {
            boxShadow: boxShadowHover
          },
          '&:active': {
            boxShadow: boxShadowFocus
          }
        };
      }
      break;
    case 'raised':
    default:
      {
        if (props.disabled) {
          return {
            backgroundColor: COLORS.GRAY_20,
            borderColor: COLORS.GRAY_30,
            color: COLORS.DISABLED_TEXT_COLOR,
            cursor: 'not-allowed',
            svg: {
              color: COLORS.GRAY_30
            },
            '&:hover': {
              boxShadow: 'none'
            }
          };
        }
        if (props.color === 'primary') {
          return {
            backgroundColor: COLORS.PRIMARY,
            borderColor: COLORS.PRIMARY,
            color: COLORS.WHITE,
            '&:hover': {
              backgroundColor: COLORS.PRIMARY_LIGHT,
              borderColor: COLORS.PRIMARY_LIGHT,
              boxShadow: boxShadowHover
            },
            '&:active': {
              backgroundColor: COLORS.PRIMARY_LIGHTER,
              borderColor: COLORS.PRIMARY_LIGHTER,
              boxShadow: boxShadowFocus
            }
          };
        } else if (props.color === 'danger') {
          return {
            backgroundColor: COLORS.DANGER_DARK,
            borderColor: COLORS.DANGER_DARK,
            color: COLORS.WHITE,
            '&:hover': {
              backgroundColor: COLORS.DANGER,
              borderColor: COLORS.DANGER,
              boxShadow: boxShadowHover
            },
            '&:active': {
              backgroundColor: COLORS.DANGER_LIGHT,
              borderColor: COLORS.DANGER_LIGHT,
              boxShadow: boxShadowFocus
            }
          };
        } else if (props.color === 'warning') {
          return {
            backgroundColor: COLORS.WARNING,
            borderColor: COLORS.WARNING,
            '&:hover': {
              backgroundColor: COLORS.WARNING_LIGHT,
              borderColor: COLORS.WARNING_LIGHT,
              boxShadow: boxShadowHover
            },
            '&:active': {
              backgroundColor: COLORS.WARNING_LIGHTER,
              borderColor: COLORS.WARNING_LIGHTER,
              boxShadow: boxShadowFocus
            }
          };
        } else if (props.color === 'success') {
          return {
            backgroundColor: COLORS.SUCCESS_DARK,
            borderColor: COLORS.SUCCESS_DARK,
            color: COLORS.WHITE,
            '&:hover': {
              backgroundColor: COLORS.SUCCESS,
              borderColor: COLORS.SUCCESS,
              boxShadow: boxShadowHover
            },
            '&:active': {
              backgroundColor: COLORS.SUCCESS_LIGHT,
              borderColor: COLORS.SUCCESS_LIGHT,
              boxShadow: boxShadowFocus,
              color: COLORS.WHITE
            }
          };
        } else if (props.color === 'neutral') {
          return {
            backgroundColor: COLORS.WHITE,
            borderColor: COLORS.PRIMARY_BORDER_COLOR,
            '&:hover': {
              boxShadow: boxShadowHover
            },
            '&:active': {
              boxShadow: boxShadowFocus
            }
          };
        }
      }
  }
};
var _createThemeTag = createThemeTag(name, function (_ref) {
    var COLORS = _ref.COLORS,
      SIZES = _ref.SIZES,
      FONTS = _ref.FONTS;
    return {
      root: function root(props) {
        return _objectSpread({
          appearance: 'none',
          outline: 'none',
          textAlign: 'center',
          textDecoration: 'none',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          userSelect: 'none',
          whiteSpace: 'nowrap'
        }, FONTS.BUTTON, {
          transition: 'all .15s ease-in-out',
          cursor: 'pointer',
          borderRadius: SIZES.MAIN_BORDER_RADIUS,
          borderStyle: 'solid',
          borderWidth: '1px'
        }, getSquaredStyle(props), {}, getLoading(props, COLORS), {}, getLinkStyles(props), {}, getKindStyles(props, COLORS), {}, getSizeStyles(props), {
          '& > *:not(:last-child)': {
            marginRight: '8px'
          }
        }, props.withIconAutosize ? {
          '& i': {
            width: '20px',
            height: '20px',
            '&:not(:last-child)': {
              marginRight: '8px'
            }
          }
        } : {}, {}, props.withIconAutosize && props.variant === 'link' && props.size === 'sm' ? {
          '& i': {
            width: '16px',
            height: '16px',
            marginRight: '8px'
          }
        } : {});
      },
      modifiers: {
        stretch: {
          width: '100%'
        },
        squared: {
          padding: '0'
        },
        rounded: {
          borderRadius: '32px',
          padding: '0 20px'
        },
        loading: {
          color: 'transparent',
          position: 'relative',
          pointerEvents: 'none',
          '& > *': {
            visibility: 'hidden'
          }
        }
      }
    };
  }),
  _createThemeTag2 = _slicedToArray(_createThemeTag, 2),
  ButtonTag = _createThemeTag2[0],
  theme = _createThemeTag2[1];
export { ButtonTag, theme };