import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { LinkTag } from './Link.theme';
function Link(_ref) {
  var text = _ref.text,
    children = _ref.children,
    tagName = _ref.tagName,
    rest = _objectWithoutProperties(_ref, ["text", "children", "tagName"]);
  return ___EmotionJSX(LinkTag, _extends({}, rest, {
    tagName: tagName
  }), text || children);
}
Link.defaultProps = {
  color: 'BLUE_30',
  underline: false,
  tagName: 'a'
};
export { Link };