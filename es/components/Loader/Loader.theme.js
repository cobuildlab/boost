import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
import _mapValues from "lodash/fp/mapValues";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  0% {\n    width: 0;\n    height: 0;\n    opacity: 1;\n  }\n  45% {\n    opacity: 0.6;\n  }\n  100% {\n    width: 100%;\n    height: 100%;\n    opacity: 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import { keyframes } from '@emotion/core';
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