import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { DialogBodyTag } from './Dialog.theme';
import { Card } from '../Card';
var DialogBody = function DialogBody(_ref) {
  var children = _ref.children,
    rest = _objectWithoutProperties(_ref, ["children"]);
  return ___EmotionJSX(DialogBodyTag, _extends({
    tagName: Card.Body
  }, rest), children);
};
DialogBody.defaultProps = {
  scrollable: true
};
export { DialogBody };