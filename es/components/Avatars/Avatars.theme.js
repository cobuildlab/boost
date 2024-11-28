import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import { createThemeTag } from '../../theme/createThemeTag';
var name = 'avatars';

var _createThemeTag = createThemeTag(name, function () {
  return {
    root: function root() {
      return {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      };
    }
  };
}),
    _createThemeTag2 = _slicedToArray(_createThemeTag, 2),
    AvatarsTag = _createThemeTag2[0],
    themeAvatars = _createThemeTag2[1];

var _createThemeTag3 = createThemeTag("".concat(name, "Counter"), function (_ref) {
  var COLORS = _ref.COLORS;
  return {
    root: function root() {
      return {
        borderRadius: '100%',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        backgroundColor: COLORS.BLUE_30,
        color: COLORS.WHITE,
        fontWeight: 600,
        fontSize: '100%',
        marginLeft: -10,
        cursor: 'pointer',
        zIndex: 2
      };
    },
    modifiers: {
      size: {
        xs: {
          width: '16px',
          height: '16px'
        },
        sm: {
          width: '32px',
          height: '32px'
        },
        md: {
          width: '48px',
          height: '48px'
        },
        lg: {
          width: '80px',
          height: '80px'
        },
        xl: {
          width: '100px',
          height: '100px'
        },
        stretch: {
          width: '100%',
          height: '100%'
        }
      }
    }
  };
}),
    _createThemeTag4 = _slicedToArray(_createThemeTag3, 2),
    AvatarsCounterTag = _createThemeTag4[0],
    themeCounterAvatars = _createThemeTag4[1];

var _createThemeTag5 = createThemeTag("".concat(name, "Handle"), function (_ref2) {
  var COLORS = _ref2.COLORS;
  return {
    root: function root() {
      return {
        borderRadius: '100%',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        border: "1px dashed ".concat(COLORS.SECONDARY_BORDER_COLOR),
        color: COLORS.PRIMARY_TEXT_COLOR,
        marginLeft: -10,
        cursor: 'pointer',
        zIndex: 1,
        '&:hover': {
          border: "1px dashed ".concat(COLORS.GRAY_40)
        }
      };
    },
    modifiers: {
      size: {
        xs: {
          width: '16px',
          height: '16px'
        },
        sm: {
          width: '32px',
          height: '32px'
        },
        md: {
          width: '48px',
          height: '48px'
        },
        lg: {
          width: '80px',
          height: '80px'
        },
        xl: {
          width: '100px',
          height: '100px'
        },
        stretch: {
          width: '100%',
          height: '100%'
        }
      }
    }
  };
}),
    _createThemeTag6 = _slicedToArray(_createThemeTag5, 2),
    AvatarsHandleTag = _createThemeTag6[0],
    themeHandleAvatars = _createThemeTag6[1];

var theme = _objectSpread({}, themeAvatars, {}, themeHandleAvatars, {}, themeCounterAvatars);

export { theme, AvatarsTag, AvatarsHandleTag, AvatarsCounterTag };