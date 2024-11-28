import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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