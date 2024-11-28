import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { DividerOuter, DividerInner, DividerTitle } from './Divider.theme';

var Divider = function Divider(_ref) {
  var children = _ref.children,
      _ref$noOffset = _ref.noOffset,
      noOffset = _ref$noOffset === void 0 ? false : _ref$noOffset,
      rest = _objectWithoutProperties(_ref, ["children", "noOffset"]);

  return ___EmotionJSX(DividerOuter, _extends({
    noOffset: noOffset
  }, rest), !!children ? [___EmotionJSX(DividerInner, {
    key: "0"
  }), ___EmotionJSX(DividerTitle, {
    key: "1"
  }, children), ___EmotionJSX(DividerInner, {
    key: "2"
  })] : ___EmotionJSX(DividerInner, null));
};

export { Divider };