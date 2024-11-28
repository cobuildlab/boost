import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
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