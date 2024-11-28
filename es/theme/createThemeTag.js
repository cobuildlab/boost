import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _styled from "@emotion/styled-base";
import _getOr from "lodash/fp/getOr";
import _omit from "lodash/fp/omit";
import _get from "lodash/fp/get";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { Tag } from '../common';
import { COLORS } from '../theme/colors';
import { SIZES } from '../theme/sizes';
import { Z_INDEX } from '../theme/zIndex';
import { FONTS } from '../theme/fonts';
var createComponentTheme = function createComponentTheme(name, theme) {
  return _defineProperty({}, name, theme);
};
var getRootStyles = function getRootStyles(themeName, props) {
  var themeRoot = _get(['theme', 'components', themeName, 'root'], props);
  var omittedProps = _omit(['theme'], props);
  return typeof themeRoot === 'function' ? themeRoot(omittedProps) : themeRoot || {};
};
var getModifiersStyles = function getModifiersStyles(themeName, props) {
  var themeModifiers = _getOr({}, ['theme', 'components', themeName, 'modifiers'], props);
  var omittedProps = _omit(['theme'], props);
  var themeStyles = typeof themeModifiers === 'function' ? themeModifiers(omittedProps) : themeModifiers;
  return Object.keys(themeStyles).reduce(function (result, modifierName) {
    var modifierValue = props[modifierName];
    var styles = {};
    if (typeof modifierValue !== 'boolean') {
      styles = themeStyles[modifierName][modifierValue] || {};
    } else if (modifierValue === true) {
      styles = themeStyles[modifierName];
    }
    return _objectSpread({}, result, {}, styles);
  }, {});
};
var createStyledTag = function createStyledTag(themeName) {
  var StyledTag = /*#__PURE__*/_styled(Tag, {
    target: "e89t13i0"
  })(function (props) {
    var _props$modifiers = props.modifiers,
      modifiers = _props$modifiers === void 0 ? {} : _props$modifiers,
      rest = _objectWithoutProperties(props, ["modifiers"]);
    var propsForTheming = _objectSpread({}, rest, {}, modifiers);
    return _objectSpread({}, getRootStyles(themeName, propsForTheming), {}, getModifiersStyles(themeName, propsForTheming));
  }, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90aGVtZS9jcmVhdGVUaGVtZVRhZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4RG9CIiwiZmlsZSI6Ii4uLy4uL3NyYy90aGVtZS9jcmVhdGVUaGVtZVRhZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG5cbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCBmcCBmcm9tICdsb2Rhc2gvZnAnO1xuaW1wb3J0IHsgVGFnIH0gZnJvbSAnLi4vY29tbW9uJztcbmltcG9ydCB7IENPTE9SUyB9IGZyb20gJy4uL3RoZW1lL2NvbG9ycyc7XG5pbXBvcnQgeyBTSVpFUyB9IGZyb20gJy4uL3RoZW1lL3NpemVzJztcbmltcG9ydCB7IFpfSU5ERVggfSBmcm9tICcuLi90aGVtZS96SW5kZXgnO1xuaW1wb3J0IHsgRk9OVFMgfSBmcm9tICcuLi90aGVtZS9mb250cyc7XG5cbnR5cGUgVGhlbWVDb25zdGF0bnMgPSB7XG4gIENPTE9SUzogdHlwZW9mIENPTE9SUyxcbiAgU0laRVM6IHR5cGVvZiBTSVpFUyxcbiAgWl9JTkRFWDogdHlwZW9mIFpfSU5ERVgsXG4gIEZPTlRTOiB0eXBlb2YgRk9OVFMsXG59XG5cbmNvbnN0IGNyZWF0ZUNvbXBvbmVudFRoZW1lID0gKFxuICBuYW1lOiBzdHJpbmcsXG4gIHRoZW1lOiAoKFRoZW1lQ29uc3RhdG5zKSA9PiBPYmplY3QpIHwgT2JqZWN0LFxuKToge1tzdHJpbmddOiBPYmplY3QgfSA9PiAoe1xuICBbbmFtZV06IHRoZW1lLFxufSk7XG5cbmNvbnN0IGdldFJvb3RTdHlsZXMgPSAodGhlbWVOYW1lOiBzdHJpbmcsIHByb3BzOiAqKSA9PiB7XG4gIGNvbnN0IHRoZW1lUm9vdCA9IGZwLmdldChbJ3RoZW1lJywgJ2NvbXBvbmVudHMnLCB0aGVtZU5hbWUsICdyb290J10sIHByb3BzKTtcbiAgY29uc3Qgb21pdHRlZFByb3BzID0gZnAub21pdChbJ3RoZW1lJ10sIHByb3BzKTtcblxuICByZXR1cm4gdHlwZW9mIHRoZW1lUm9vdCA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gdGhlbWVSb290KG9taXR0ZWRQcm9wcylcbiAgICA6IHRoZW1lUm9vdCB8fCB7fTtcbn07XG5cbmNvbnN0IGdldE1vZGlmaWVyc1N0eWxlcyA9ICh0aGVtZU5hbWU6IHN0cmluZywgcHJvcHM6IE9iamVjdCkgPT4ge1xuICBjb25zdCB0aGVtZU1vZGlmaWVycyA9IGZwLmdldE9yKHt9LCBbJ3RoZW1lJywgJ2NvbXBvbmVudHMnLCB0aGVtZU5hbWUsICdtb2RpZmllcnMnXSwgcHJvcHMpO1xuICBjb25zdCBvbWl0dGVkUHJvcHMgPSBmcC5vbWl0KFsndGhlbWUnXSwgcHJvcHMpO1xuXG4gIGNvbnN0IHRoZW1lU3R5bGVzID0gdHlwZW9mIHRoZW1lTW9kaWZpZXJzID09PSAnZnVuY3Rpb24nXG4gICAgPyB0aGVtZU1vZGlmaWVycyhvbWl0dGVkUHJvcHMpXG4gICAgOiB0aGVtZU1vZGlmaWVycztcblxuICByZXR1cm4gT2JqZWN0LmtleXModGhlbWVTdHlsZXMpXG4gICAgLnJlZHVjZShcbiAgICAgIChyZXN1bHQsIG1vZGlmaWVyTmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBtb2RpZmllclZhbHVlID0gcHJvcHNbbW9kaWZpZXJOYW1lXTtcblxuICAgICAgICBsZXQgc3R5bGVzID0ge307XG5cbiAgICAgICAgaWYgKHR5cGVvZiBtb2RpZmllclZhbHVlICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICBzdHlsZXMgPSB0aGVtZVN0eWxlc1ttb2RpZmllck5hbWVdW21vZGlmaWVyVmFsdWVdIHx8IHt9O1xuICAgICAgICB9IGVsc2UgaWYgKG1vZGlmaWVyVmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgICBzdHlsZXMgPSB0aGVtZVN0eWxlc1ttb2RpZmllck5hbWVdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgLi4ucmVzdWx0LCAuLi5zdHlsZXMgfTtcbiAgICAgIH0sXG4gICAgICB7fSxcbiAgICApO1xufTtcblxuY29uc3QgY3JlYXRlU3R5bGVkVGFnID0gKHRoZW1lTmFtZTogc3RyaW5nKSA9PiB7XG5cbiAgY29uc3QgU3R5bGVkVGFnID0gc3R5bGVkKFRhZykoXG4gICAgKHByb3BzOiBPYmplY3QpID0+IHtcbiAgICAgIGNvbnN0IHsgbW9kaWZpZXJzID0ge30sIC4uLnJlc3QgfSA9IHByb3BzO1xuICAgICAgY29uc3QgcHJvcHNGb3JUaGVtaW5nID0geyAuLi5yZXN0LCAuLi5tb2RpZmllcnMgfTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uZ2V0Um9vdFN0eWxlcyh0aGVtZU5hbWUsIHByb3BzRm9yVGhlbWluZyksXG4gICAgICAgIC4uLmdldE1vZGlmaWVyc1N0eWxlcyh0aGVtZU5hbWUsIHByb3BzRm9yVGhlbWluZyksXG4gICAgICB9O1xuICAgIH0sXG4gICk7XG5cbiAgU3R5bGVkVGFnLmRpc3BsYXlOYW1lID0gYEJvb3N0KCR7dGhlbWVOYW1lfSlgO1xuXG4gIHJldHVybiBTdHlsZWRUYWc7XG59O1xuXG5cbmNvbnN0IGNyZWF0ZVRoZW1lVGFnID0gKHRoZW1lTmFtZTogc3RyaW5nLCB0aGVtZT86IE9iamVjdCB8IChUaGVtZUNvbnN0YXRucykgPT4gT2JqZWN0ID0ge30pID0+IHsgLy9GdW5jdGlvbiB8IHsgcm9vdD86IE9iamVjdCwgbW9kaWZpZXJzPzogT2JqZWN0LCBkZWZhdWx0cz86IE9iamVjdCB9ID0ge30pID0+IHtcblxuICByZXR1cm4gW1xuICAgIGNyZWF0ZVN0eWxlZFRhZyh0aGVtZU5hbWUpLFxuICAgIGNyZWF0ZUNvbXBvbmVudFRoZW1lKHRoZW1lTmFtZSwgdGhlbWUpLFxuICBdO1xufTtcblxuXG5leHBvcnQgeyBjcmVhdGVTdHlsZWRUYWcsIGNyZWF0ZVRoZW1lVGFnIH07XG4iXX0= */");
  StyledTag.displayName = "Boost(".concat(themeName, ")");
  return StyledTag;
};
var createThemeTag = function createThemeTag(themeName) {
  var theme = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  //Function | { root?: Object, modifiers?: Object, defaults?: Object } = {}) => {

  return [createStyledTag(themeName), createComponentTheme(themeName, theme)];
};
export { createStyledTag, createThemeTag };