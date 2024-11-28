import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import merge from 'deepmerge';
import { defaultRawTheme } from './defaultTheme';

var execFunction = function execFunction() {
  var func = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var arg = arguments.length > 1 ? arguments[1] : undefined;
  return typeof func === 'function' ? func(arg) : func;
};

var mergeComponentRoots = function mergeComponentRoots() {
  var originalRoot = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var extendedRoot = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (typeof originalRoot !== 'function' && typeof extendedRoot !== 'function') {
    return merge(originalRoot, extendedRoot);
  } else {
    return function (props) {
      var originalRootStyle = execFunction(originalRoot, props);
      return typeof extendedRoot === 'function' ? extendedRoot(props, originalRootStyle) : merge(originalRootStyle, extendedRoot);
    };
  }
};

var mergeComponentThemes = function mergeComponentThemes() {
  var originalTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var extendedTheme = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var root = mergeComponentRoots(originalTheme.root, extendedTheme.root);
  var mergedTheme = merge(originalTheme, extendedTheme);
  return _objectSpread({}, mergedTheme, {
    root: root
  });
};

var parseThemes = function parseThemes(originalRawTheme) {
  var extendedTheme = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var components = originalRawTheme.components;
  var themeConstants = {
    COLORS: _objectSpread({}, originalRawTheme.COLORS, {}, extendedTheme.COLORS || {}),
    SIZES: _objectSpread({}, originalRawTheme.SIZES, {}, extendedTheme.SIZES || {}),
    Z_INDEX: _objectSpread({}, originalRawTheme.Z_INDEX, {}, extendedTheme.Z_INDEX || {}),
    FONTS: _objectSpread({}, originalRawTheme.FONTS, {}, extendedTheme.FONTS || {})
  };
  return _objectSpread({}, themeConstants, {
    components: Object.keys(components).reduce(function (result, componentName) {
      var extendThemeComponets = extendedTheme.components || {};
      var defaultComponentTheme = execFunction(components[componentName], themeConstants);
      var customComponentTheme = execFunction(extendThemeComponets[componentName], themeConstants);
      return _objectSpread({}, result, _defineProperty({}, componentName, mergeComponentThemes(defaultComponentTheme, customComponentTheme)));
    }, {})
  });
};

var createTheme = function createTheme() {
  var extendTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return parseThemes(defaultRawTheme, extendTheme);
};

export { createTheme, parseThemes };