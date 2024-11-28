import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { TagOuter, TagInner } from './Tag.theme';

var Tag = function Tag(_ref) {
  var children = _ref.children,
      _ref$condensed = _ref.condensed,
      condensed = _ref$condensed === void 0 ? false : _ref$condensed,
      rest = _objectWithoutProperties(_ref, ["children", "condensed"]);

  return ___EmotionJSX(TagOuter, _extends({
    condensed: condensed
  }, rest, {
    tagName: "span"
  }), ___EmotionJSX(TagInner, {
    tagName: "span"
  }, children));
};

Tag.defaultProps = {
  color: 'PRIMARY'
};
export { Tag };