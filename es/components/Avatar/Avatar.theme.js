import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import { createThemeTag } from '../../theme/createThemeTag';
var name = 'avatar';
var COLORS = ['#ffd012', '#a6e50f', '#00bb6e', '#9975d0', '#4da1ff', '#1968cb', '#ff6d4a', '#EB518E', '#eb4235'];

var getBackgroundColorByName = function getBackgroundColorByName(firstName) {
  var index = firstName ? Math.abs((firstName.charCodeAt(0) - 64) % COLORS.length) : 0;
  return COLORS[index];
};

var _createThemeTag = createThemeTag(name, function (_ref) {
  var COLORS = _ref.COLORS;
  return {
    root: function root(props) {
      return {
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        backgroundColor: props.transparent ? 'transparent' : getBackgroundColorByName(props.firstName),
        color: COLORS.WHITE,
        fontWeight: 600
      };
    },
    modifiers: {
      pickVariant: {
        bottom: _defineProperty({}, "&:hover ".concat(AvatarHandleTag), {
          bottom: '0'
        }),
        fullWidth: _defineProperty({}, "&:hover > ".concat(AvatarHandleFullWidthTag), _defineProperty({
          background: 'rgba(50, 60, 71, 0.7);'
        }, "".concat(AvatarHandleIconContainerTag), {
          opacity: 1
        }))
      },
      variant: {
        circle: {
          borderRadius: '100%'
        },
        square: {
          borderRadius: '0%'
        },
        rounded: {
          borderRadius: '17%'
        }
      },
      size: {
        xs: {
          width: '16px',
          height: '16px',
          fontSize: '1rem'
        },
        sm: {
          width: '32px',
          height: '32px',
          fontSize: '16px'
        },
        md: {
          width: '48px',
          height: '48px',
          fontSize: '20px'
        },
        lg: {
          width: '80px',
          height: '80px',
          fontSize: '24px'
        },
        xl: {
          width: '100px',
          height: '100px',
          fontSize: '32px'
        },
        xxl: {
          width: '120px',
          height: '120px',
          fontSize: '48px'
        },
        stretch: {
          width: '100%',
          height: '100%'
        }
      }
    }
  };
}),
    _createThemeTag2 = _slicedToArray(_createThemeTag, 2),
    AvatarTag = _createThemeTag2[0],
    themeAvatar = _createThemeTag2[1];

var _createThemeTag3 = createThemeTag("".concat(name, "Handle"), function (_ref2) {
  var COLORS = _ref2.COLORS;
  return {
    root: {
      position: 'absolute',
      bottom: '-30%',
      left: '0',
      right: '0',
      height: '30%',
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      background: 'rgba(0, 0, 0, .75)',
      fontSize: '8px',
      transition: 'all .15s ease-in-out',
      userSelect: 'none',
      color: COLORS.SECONDARY_TEXT_COLOR
    }
  };
}),
    _createThemeTag4 = _slicedToArray(_createThemeTag3, 2),
    AvatarHandleTag = _createThemeTag4[0],
    themeHandle = _createThemeTag4[1];

var _createThemeTag5 = createThemeTag("".concat(name, "HandleFullWidth"), function (_ref3) {
  var COLORS = _ref3.COLORS;
  return {
    root: {
      position: 'absolute',
      top: '0',
      left: '0',
      right: '0',
      height: '100%',
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      background: 'rgba(50, 60, 71, 0)',
      fontSize: '8px',
      transition: 'all .15s ease-in-out',
      userSelect: 'none',
      color: COLORS.WHITE
    },
    modifiers: {
      variant: {
        circle: {
          borderRadius: '100%'
        },
        square: {
          borderRadius: '0%'
        },
        rounded: {
          borderRadius: '17%'
        }
      }
    }
  };
}),
    _createThemeTag6 = _slicedToArray(_createThemeTag5, 2),
    AvatarHandleFullWidthTag = _createThemeTag6[0],
    themeHandleFullWidth = _createThemeTag6[1];

var _createThemeTag7 = createThemeTag("".concat(name, "HandleIconContainer"), function (_ref4) {
  var COLORS = _ref4.COLORS;
  return {
    root: {
      color: COLORS.WHITE,
      display: 'flex',
      flexFlow: 'column',
      alignItems: 'center',
      '> div:nth-child(2)': {
        paddingTop: '2px',
        position: 'relative',
        top: '1px'
      },
      opacity: 0
    },
    modifiers: {
      size: {
        xs: {
          '> div:nth-child(2)': {
            display: 'none'
          }
        },
        sm: {
          '> div:nth-child(2)': {
            display: 'none'
          }
        },
        md: {
          fontSize: '6px'
        },
        lg: {
          fontSize: '12px'
        },
        xl: {
          fontSize: '14px'
        },
        xxl: {
          fontSize: '14px'
        },
        stretch: {
          fontSize: '2rem'
        }
      }
    }
  };
}),
    _createThemeTag8 = _slicedToArray(_createThemeTag7, 2),
    AvatarHandleIconContainerTag = _createThemeTag8[0],
    themeHandleIconContainer = _createThemeTag8[1];

var _createThemeTag9 = createThemeTag("".concat(name, "Img"), {
  root: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  }
}),
    _createThemeTag10 = _slicedToArray(_createThemeTag9, 2),
    AvatarImgTag = _createThemeTag10[0],
    themeAvatarImg = _createThemeTag10[1];

var theme = _objectSpread({}, themeHandle, {}, themeAvatar, {}, themeAvatarImg, {}, themeHandleFullWidth, {}, themeHandleIconContainer);

export { theme, AvatarImgTag, AvatarTag, AvatarHandleTag, AvatarHandleFullWidthTag, themeHandleFullWidth, AvatarHandleIconContainerTag };