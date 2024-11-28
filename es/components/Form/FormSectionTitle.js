import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { jsx as ___EmotionJSX } from "@emotion/core";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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