import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
import _mapValues from "lodash/fp/mapValues";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  0% {\n    width: 0;\n    height: 0;\n    opacity: 1;\n  }\n  45% {\n    opacity: 0.6;\n  }\n  100% {\n    width: 100%;\n    height: 100%;\n    opacity: 0;\n  }\n"]);
  _templateObject = function _templateObject() {
    return data;
  };
  return data;
}
import { keyframes } from '@emotion/react';
import { createThemeTag } from '../../theme/createThemeTag';
var name = 'loader';
var pulse = keyframes(_templateObject());
var _createThemeTag = createThemeTag(name, {
    root: {
      display: 'inline-flex',
      position: 'relative'
    },
    modifiers: {
      size: {
        sm: {
          width: '32px',
          height: '32px'
        },
        md: {
          width: '64px',
          height: '64px'
        },
        lg: {
          width: '80px',
          height: '80px'
        }
      }
    }
  }),
  _createThemeTag2 = _slicedToArray(_createThemeTag, 2),
  LoaderTag = _createThemeTag2[0],
  themeLoader = _createThemeTag2[1];
var _createThemeTag3 = createThemeTag("".concat(name, "Circle"), function (_ref) {
    var COLORS = _ref.COLORS;
    return {
      root: function root(_ref2) {
        var delay = _ref2.delay;
        return {
          borderRadius: '100%',
          border: '4px solid #000',
          position: 'absolute',
          transform: 'translate(-50%, -50%)',
          left: '50%',
          top: '50%',
          opacity: '0',
          animation: "".concat(pulse, " 1.8s cubic-bezier(0.165, 0.84, 0.44, 1) ").concat(delay),
          animationIterationCount: 'infinite'
        };
      },
      modifiers: {
        size: {
          sm: {
            borderWidth: '1.6px'
          },
          md: {
            borderWidth: '3.2px'
          },
          lg: {
            borderWidth: '4px'
          }
        },
        color: _mapValues(function (color) {
          return {
            borderColor: color
          };
        }, COLORS)
      }
    };
  }),
  _createThemeTag4 = _slicedToArray(_createThemeTag3, 2),
  LoaderCircleTag = _createThemeTag4[0],
  themeLoaderCircle = _createThemeTag4[1];
var _createThemeTag5 = createThemeTag("".concat(name, "Wrapper"), {
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      width: '100%',
      height: '100%'
    }
  }),
  _createThemeTag6 = _slicedToArray(_createThemeTag5, 2),
  LoaderWrapperTag = _createThemeTag6[0],
  themeWrappers = _createThemeTag6[1];
var theme = _objectSpread({}, themeLoader, {}, themeLoaderCircle, {}, themeWrappers);
export { LoaderTag, LoaderWrapperTag, LoaderCircleTag, theme };