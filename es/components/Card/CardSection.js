import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { CardSectionTag } from './Card.theme';
var CardSection = function CardSection(_ref) {
  var children = _ref.children,
    rest = _objectWithoutProperties(_ref, ["children"]);
  return ___EmotionJSX(CardSectionTag, _extends({}, rest, {
    tagName: "div"
  }), children);
};
CardSection.defaultProps = {
  padding: 'md'
};
export { CardSection };