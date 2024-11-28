import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { MenuItemTag } from './Menu.theme';
var MenuItem = function MenuItem(_ref) {
  var children = _ref.children,
    rest = _objectWithoutProperties(_ref, ["children"]);
  return ___EmotionJSX(MenuItemTag, _extends({
    tagName: "div"
  }, rest), children);
};
MenuItem.displayName = 'Menu.Item';
export { MenuItem };