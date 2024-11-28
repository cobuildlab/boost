import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { PaperTag } from './Paper.theme';
function Paper(_ref) {
  var children = _ref.children,
    rest = _objectWithoutProperties(_ref, ["children"]);
  return ___EmotionJSX(PaperTag, _extends({
    tagName: "div"
  }, rest), children);
}
Paper.defaultProps = {
  padding: 'none',
  borderRadius: 'all'
};
export { Paper };