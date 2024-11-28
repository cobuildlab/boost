import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { createThemeTag } from '../../theme/createThemeTag';
var _createThemeTag = createThemeTag('dialogBody', {
    root: {
      display: 'flex',
      flexDirection: 'column',
      flexShrink: 1,
      flexGrow: 1,
      maxHeight: '100%'
    }
  }),
  _createThemeTag2 = _slicedToArray(_createThemeTag, 2),
  DialogBodyTag = _createThemeTag2[0],
  themeBody = _createThemeTag2[1];
var _createThemeTag3 = createThemeTag('dialogHeaderClose', {
    root: {
      cursor: 'pointer',
      userSelect: 'none',
      position: 'absolute',
      right: '20px',
      display: 'flex',
      '&:hover': {
        color: '#8698a7'
      }
    }
  }),
  _createThemeTag4 = _slicedToArray(_createThemeTag3, 2),
  HeaderCloseTag = _createThemeTag4[0],
  themeHeaderClose = _createThemeTag4[1];
var _createThemeTag5 = createThemeTag('dialog', {
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      maxHeight: 'calc(100vh - 80px)'
    },
    modifiers: {
      stretch: {
        height: '100%'
      },
      size: {
        xs: {
          width: '300px'
        },
        sm: {
          width: '400px'
        },
        md: {
          width: '500px'
        },
        lg: {
          width: '600px'
        },
        xl: {
          width: '800px'
        },
        xxl: {
          width: '1000px'
        }
      }
    }
  }),
  _createThemeTag6 = _slicedToArray(_createThemeTag5, 2),
  DialogTag = _createThemeTag6[0],
  themeDialog = _createThemeTag6[1];
var _createThemeTag7 = createThemeTag('dialogInner', {
    root: {
      '&, & > form': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start'
      },
      height: '100%',
      overflow: 'auto'
    },
    modifiers: {}
  }),
  _createThemeTag8 = _slicedToArray(_createThemeTag7, 2),
  DialogInnerTag = _createThemeTag8[0],
  themeDialogInner = _createThemeTag8[1];
var theme = _objectSpread({}, themeDialog, {}, themeDialogInner, {}, themeBody, {}, themeHeaderClose);
export { theme, DialogTag, HeaderCloseTag, DialogBodyTag, DialogInnerTag };