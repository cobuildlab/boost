import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { HeadingTag } from './Heading.theme';

function Heading(_ref) {
  var text = _ref.text,
      children = _ref.children,
      type = _ref.type,
      rest = _objectWithoutProperties(_ref, ["text", "children", "type"]);

  return ___EmotionJSX(HeadingTag, _extends({}, rest, {
    tagName: type,
    type: type
  }), children || text);
}

Heading.defaultProps = {
  kind: 'primary',
  weight: 'normal',
  ellipsis: false
};
export { Heading };