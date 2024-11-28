import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
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