import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { jsx as ___EmotionJSX } from "@emotion/core";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import React from 'react';
import { createThemeTag } from '../../theme/createThemeTag';
var name = 'formSectionTitle';
var _createThemeTag = createThemeTag(name, function (_ref) {
    var FONTS = _ref.FONTS;
    return {
      root: _objectSpread({}, FONTS.H5, {
        letterSpacing: '0.5px'
      }),
      modifiers: {},
      defaults: {}
    };
  }),
  _createThemeTag2 = _slicedToArray(_createThemeTag, 2),
  FormSectionTitleTag = _createThemeTag2[0],
  theme = _createThemeTag2[1];
var FormSectionTitle = function FormSectionTitle(_ref2) {
  var children = _ref2.children,
    text = _ref2.text,
    rest = _objectWithoutProperties(_ref2, ["children", "text"]);
  return ___EmotionJSX(FormSectionTitleTag, _extends({}, rest, {
    tagName: "h5"
  }), children || text);
};
export { FormSectionTitle, theme };