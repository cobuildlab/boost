import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { SecondaryNavigationTag } from './SecondaryNavigation.theme';
import { SecondaryNavigationItem } from './SecondaryNavigationItem';

var SecondaryNavigation = function SecondaryNavigation(_ref) {
  var children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["children"]);

  return ___EmotionJSX(SecondaryNavigationTag, _extends({}, rest, {
    tagName: "nav"
  }), children);
};

SecondaryNavigation.displayName = 'SecondaryNavigation';
SecondaryNavigation.Item = SecondaryNavigationItem;
export { SecondaryNavigation };