import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { ParagraphTag } from './Paragraph.theme';
import { COLORS } from '../../theme';

var Paragraph = function Paragraph(_ref) {
  var text = _ref.text,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["text", "children"]);

  return ___EmotionJSX(ParagraphTag, _extends({}, rest, {
    tagName: "p"
  }), children || text);
};

Paragraph.defaultProps = {
  color: 'PRIMARY_TEXT_COLOR',
  weight: 'normal'
};
export { Paragraph };