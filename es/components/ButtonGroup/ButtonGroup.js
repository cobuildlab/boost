import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { ButtonGroupTag } from './ButtonGroup.theme';
var ButtonGroup = function ButtonGroup(_ref) {
  var children = _ref.children,
    rest = _objectWithoutProperties(_ref, ["children"]);
  return ___EmotionJSX(ButtonGroupTag, _extends({}, rest, {
    tagName: "div"
  }), children);
};
export { ButtonGroup };