import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { ScrollableWrapper, ScrollableContent } from './Scrollable.theme';
function Scrollable(_ref) {
  var children = _ref.children,
    rest = _objectWithoutProperties(_ref, ["children"]);
  return ___EmotionJSX(ScrollableWrapper, _extends({}, rest, {
    tagName: "div"
  }), ___EmotionJSX(ScrollableContent, {
    modifiers: rest,
    tagName: "div"
  }, children));
}
export { Scrollable };