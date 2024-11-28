import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { Link } from '../Link';
var BreadcrumbsItem = function BreadcrumbsItem(_ref) {
  var tagName = _ref.tagName,
    to = _ref.to,
    label = _ref.label,
    Component = _ref.component,
    rest = _objectWithoutProperties(_ref, ["tagName", "to", "label", "component"]);
  return React.createElement(tagName, {
    to: to
  }, Component ? ___EmotionJSX(Component, _extends({}, rest, {
    to: to,
    label: label
  })) : label);
};
BreadcrumbsItem.defaultProps = {
  tagName: Link
};
export { BreadcrumbsItem };