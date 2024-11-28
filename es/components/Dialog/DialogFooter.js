import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { Card } from '../Card';
import { Row } from '../FlexLayout';

function DialogFooter(_ref) {
  var children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["children"]);

  return ___EmotionJSX(Card.Footer, _extends({
    offset: "lg"
  }, rest), ___EmotionJSX(Row, {
    justifyContent: "end"
  }, children));
}

export { DialogFooter };