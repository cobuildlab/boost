import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { CardFooterTag } from './Card.theme';

var CardFooter = function CardFooter(_ref) {
  var children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["children"]);

  return ___EmotionJSX(CardFooterTag, _extends({}, rest, {
    tagName: "div"
  }), children);
};

CardFooter.defaultProps = {
  padding: 'md'
};
export { CardFooter };