import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { LabelTag } from './Label.theme';

function Label(_ref) {
  var text = _ref.text,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["text", "children"]);

  return ___EmotionJSX(LabelTag, _extends({}, rest, {
    tagName: "label"
  }), children || text);
}

Label.defaultProps = {
  kind: 'primary'
};
export { Label };